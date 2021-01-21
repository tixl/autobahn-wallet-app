import React from 'react';
import styled from 'styled-components/native';
import { textSize, spacing, shapes } from '../../constants';
import { Text } from '../text/Text';
import { TouchableWrapper } from '../wrapper/TouchableWrapper';
import { Logo } from '../Logo';
import { AssetSymbol } from '@tixl/tixl-types';
import { useBalance } from '../../hooks/useBalance';
import assets from '../../helpers/assets';
import useDollarValue from '../../hooks/useDollarValue';

type Props = {
  asset: AssetSymbol;
  disabled?: boolean;
  onPress?: () => void;
};

export const AssetCard: React.FC<Props> = ({
  asset,
  disabled = false,
  onPress,
}) => {
  const balance = useBalance(asset);
  const balanceUsdDoller = useDollarValue(balance.toString(), asset);

  return (
    <TouchableWrapper onPress={onPress} disabled={disabled}>
      <Container>
        <AssetInformationContainer>
          <AssetIconContainer>
            <Logo name={asset} />
          </AssetIconContainer>
          <AssetName fontSize={textSize.m}>{assets[asset].name}</AssetName>
        </AssetInformationContainer>
        <AssetAmountContainer>
          <AssetAmountValue fontWeight="semiBold" fontSize={textSize.s}>
            {asset.toString()} {balance.toString()}
          </AssetAmountValue>
          <AssetAmountValueDollar fontWeight="light" fontSize={textSize.xs}>
            USD ${balanceUsdDoller}
          </AssetAmountValueDollar>
        </AssetAmountContainer>
      </Container>
    </TouchableWrapper>
  );
};

const Container = styled.View`
  height: 112px;
  border-radius: ${shapes.borderRadius}px;
  background-color: white;
  padding: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AssetInformationContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

const AssetIconContainer = styled.View`
  margin-right: 10px;
`;

const AssetName = styled(Text)``;

const AssetAmountContainer = styled.View`
  align-items: flex-end;
`;

const AssetAmountValue = styled(Text)``;

const AssetAmountValueDollar = styled(Text)``;
