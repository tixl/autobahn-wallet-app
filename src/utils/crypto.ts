import randomBytes from 'randombytes';
import b64 from 'base64-js';
import { Crypto } from '@tixl/tixl-types';

export function validKeyLength(key: string | String): boolean {
  return typeof key === 'string' && key.length % 4 === 0;
}

/**
 * Creates the crypto environment for the browser.
 */
export default function createCrypto(): Crypto {
  return {
    randomBytes,
    base64: {
      toBytes(payload: string | String) {
        return b64.toByteArray(payload as string);
      },
      toString(payload: any) {
        return b64.fromByteArray(payload);
      },
    },
  };
}

const crypto = createCrypto();

export { crypto };
