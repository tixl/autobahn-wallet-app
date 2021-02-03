import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AssetSymbol, Signature, SigPublicKey } from '@tixl/tixl-types';
import {
  getAllBlocks,
  getAllChains,
} from '@tixl/tixl-sdk-js/redux/chains/selectors';
import { updateBlockState } from '@tixl/tixl-sdk-js/redux/chains/actions';
import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';
import {
  onNewNetworkResult,
  createReceiveTask,
} from '@tixl/tixl-sdk-js/redux/tasks/actions';

import { useAccountChain } from './useAccountChain';
import { Rejection } from '../redux/global/types';
// import { shortSignatureEmoji } from '../helpers/hash';

const endpoint = 'https://gateway.int.tixl.dev';
const listeners: Record<string, Function | undefined> = {};

function useSocketConnection() {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    if (socket || !endpoint) return;

    console.log(socket);

    console.log('Establishing socket connection...');
    const socketIo = io(endpoint);
    setSocket(socketIo);

    const events = ['connect', 'accepted', 'rejected', 'sendBlock'];

    // Listeners can register and overwrite old functions any time.
    // When an event is received, the listener func is called.
    events.forEach((event) => {
      socketIo.on(event, (args: any) => {
        if (listeners[event]) {
          const cb = listeners[event];
          cb && cb(args);
        }
      });
    });
  }, [socket]);

  return socket;
}

export const useSocket = (paused = false) => {
  const dispatch = useDispatch();
  const keySet = useSelector(getKeys);
  const blocksList = useSelector(getAllBlocks);
  const accountChain = useAccountChain();

  // we need this for useEffect invalidation due to this bug: https://react-redux.js.org/api/hooks#stale-props-and-zombie-children
  const allChains = useSelector(getAllChains);

  useEffect(() => {
    if (paused) {
      console.info('pausing websocket listeners');
      return;
    }

    listeners.accepted = (sigs: string[]) => {
      sigs.forEach((sig) => {
        dispatch(updateBlockState(sig, 'accepted'));
        dispatch(onNewNetworkResult(sig, 'accepted'));
        console.info('global accepted: ' + 'Placeholder sig emoji');
      });
    };

    listeners.rejected = (rejected: Rejection[]) => {
      rejected.forEach((x) => {
        dispatch(updateBlockState(x.sig, 'rejected'));
        dispatch(onNewNetworkResult(x.sig, 'rejected'));
        console.info('Global rejected: ' + 'Placeholder sig emoji', x.reason);
      });
    };

    listeners.sendBlock = async (block: {
      hash: string;
      signature: Signature;
      assetSymbol: AssetSymbol;
      refAddress?: SigPublicKey;
    }) => {
      console.info('send block via websocket: ' + 'Placeholder sig emoji');

      if (keySet && accountChain) {
        if (block.refAddress === keySet.sig.publicKey) {
          dispatch(
            createReceiveTask(block.signature, block.hash, block.assetSymbol)
          );
        }
      }
    };

    return () => {
      listeners.accepted = undefined;
      listeners.sendBlock = undefined;
      listeners.rejected = undefined;
    };
  }, [paused, accountChain, allChains, blocksList, dispatch, keySet]);

  useSocketConnection();
};
