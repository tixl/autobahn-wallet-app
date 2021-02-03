import eh from 'hash-emoji';
import { Signature } from '@tixl/tixl-types';

export function shortSignatureEmoji(signature: Signature) {
  return `${eh(signature, 3)} (${signature})`;
}
