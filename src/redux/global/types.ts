import { ThunkAction, ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import { RootState } from '../store';
// import {
//   BtcDepositRejectionReason,
//   BtcWithdrawalRejectionReason,
// } from '../modules/btc/types';

// @todo - replace generic `Action` type with custom `GeneralAction` type
export type ThunkResult<R> = ThunkAction<R, RootState, null, Action>;
export type ThunkDispatch = ReduxThunkDispatch<RootState, null, Action>;

export type RejectionReason =
  // | BtcDepositRejectionReason
  // | BtcWithdrawalRejectionReason
  | 'RejectedByLedger'
  | 'SystemError'
  | 'InvalidBlockCountForAsset'
  | 'MissingRefAsset';

export type Rejection = { sig: string; reason: RejectionReason };
