import { useDispatch, useSelector } from 'react-redux';
import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';
import { handleReceiveTask } from '@tixl/tixl-sdk-js/redux/tasks/transactions/receive';
import { handleSendTask } from '@tixl/tixl-sdk-js/redux/tasks/transactions/send';
import { handleDepositTask } from '@tixl/tixl-sdk-js/redux/tasks/transactions/deposit';
import { handleWithdrawTask } from '@tixl/tixl-sdk-js/redux/tasks/transactions/withdraw';

import { useInterval } from './useInterval';
import { RootState } from '../redux/store';
import {
  TaskData,
  SendTaskData,
  WithdrawTaskData,
  ReceiveTaskData,
  DepositTaskData,
} from '@tixl/tixl-sdk-js/redux/tasks/actionTypes';

function pick(list: TaskData[]) {
  return list.find((task) => {
    if (task.skipCounter > 2) {
      // for every skip, delay task picking by seconds
      const delay = Math.pow(task.skipCounter, 2) * 1000;

      if (new Date().getTime() < task.createdAt + delay) return false;
    }

    // be default just take any task
    return true;
  });
}

export function useTaskRunner() {
  console.info('task runner');

  const keySet = useSelector(getKeys);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const toSend = useSelector((state: RootState) => state.tasks.send);
  const toReceive = useSelector((state: RootState) => state.tasks.receive);
  const toDeposit = useSelector((state: RootState) => state.tasks.deposit);
  const toWithdraw = useSelector((state: RootState) => state.tasks.withdraw);
  const inProgress = useSelector((state: RootState) => state.tasks.inProgress);

  useInterval(() => {
    if (!keySet) return;

    // super basic logic to decide what to do next
    // if nothing in progress take first send task
    if (inProgress.length === 0 && toSend.length > 0) {
      const sendTask = pick(toSend);
      if (sendTask) return handleSendTask(dispatch, sendTask as SendTaskData);
    }

    // then withdraws
    if (inProgress.length === 0 && toWithdraw.length > 0) {
      const withdrawTask = pick(toWithdraw);
      if (withdrawTask)
        return handleWithdrawTask(dispatch, withdrawTask as WithdrawTaskData);
    }

    // then receive tasks
    if (inProgress.length === 0 && toReceive.length > 0) {
      const receiveTask = pick(toReceive);
      if (receiveTask)
        return handleReceiveTask(
          dispatch,
          state,
          receiveTask as ReceiveTaskData
        );
    }

    // then deposits
    if (inProgress.length === 0 && toDeposit.length > 0) {
      const depositTask = pick(toDeposit);
      if (depositTask)
        return handleDepositTask(dispatch, depositTask as DepositTaskData);
    }
  }, 1000);
}
