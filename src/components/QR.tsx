import React from 'react';
import QRCode, { QRCodeProps } from 'react-native-qrcode-svg';

type Props = {
  value: string;
};

export const QRCoDD: React.FC<Props> = ({ value }) => {
  return <QRCode value={value} />;
};
