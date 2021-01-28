import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Block } from '@tixl/tixl-types';
import { getUnspent } from '@tixl/tixl-sdk-js/requests/getUnspent';
import { addLoggedError } from '@tixl/tixl-sdk-js/redux/errors/actions';

import { RootState } from '../redux/store';

export type OnBlockFoundFunction = (block: Block) => void;

export const useScan = (onBlockFound: OnBlockFoundFunction) => {
  const dispatch = useDispatch();
  const keySet = useSelector((state: RootState) => state.keys);

  const doNextScan = useCallback(async () => {
    if (!keySet) return;

    try {
      const { blocks } = await getUnspent(keySet.sig.publicKey);

      if (blocks.length) {
        blocks.forEach(onBlockFound);
      }
    } catch (err) {
      dispatch(addLoggedError(err));
    }

    // TODO re-enable inteval scanning
    // await new Promise(resolve => setTimeout(resolve, 10000));
    // await doNextScan();
  }, [dispatch, keySet, onBlockFound]);

  const scan = useCallback(async () => {
    console.info('history scan');

    if (!keySet) {
      console.log('Abort scan. Reason: no keyset available.');
      return;
    }

    await doNextScan();
  }, [keySet, doNextScan]);

  return { scan };
};
