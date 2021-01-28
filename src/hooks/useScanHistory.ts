import { useDispatch } from 'react-redux';
import { Block } from '@tixl/tixl-types';
import { createReceiveTask } from '@tixl/tixl-sdk-js/redux/tasks/actions';

import { useScan } from './useScan';

export const useScanHistory = (): (() => void) => {
  const dispatch = useDispatch();

  const onNewSendBlock = async (send: Block) => {
    dispatch(createReceiveTask(send.signature, undefined, send.symbol));
  };

  const { scan } = useScan(onNewSendBlock);

  return scan;
};
