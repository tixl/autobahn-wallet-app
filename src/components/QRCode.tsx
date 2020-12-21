import PropTypes from 'prop-types';
import React from 'react';
import { QRCode as QRCodeSvg } from 'react-native-qrcode-svg';

const QRCode = ({ size, content, ...props }) => (
  <QRCodeSvg {...props} size={size} value={content} />
);

QRCode.propTypes = {
  size: PropTypes.number,
  value: PropTypes.string,
};

QRCode.defaultProps = {
  size: 150,
};

export default QRCode;
