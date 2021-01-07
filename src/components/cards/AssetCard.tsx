import React from 'react';
import styled from 'styled-components/native';
import { textSize, spacing, shapes } from '../../constants';
import { Text } from '../text/Text';
import { TouchableWrapper } from '../wrapper/TouchableWrapper';
import { Logo, LogoName } from '../Logo';

type Props = {
  name: string;
  logoName: LogoName;
  amount: string;
  prefix: string;
  amountUsd: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const AssetCard: React.FC<Props> = (props) => {
  return (
    <TouchableWrapper onPress={props.onPress}>
      <Container>
        <AssetInformationContainer>
          <AssetIconContainer>
            {/* <Icon
              name={iconName.bug}
              size={shapes.iconSize}
              color={colors.DARK_GRAY}
            ></Icon> */}
            <Logo name={props.logoName} />
          </AssetIconContainer>
          <AssetName fontSize={textSize.m}>{props.name}</AssetName>
        </AssetInformationContainer>
        <AssetAmountContainer>
          <AssetAmountValue fontWeight="semiBold" fontSize={textSize.s}>
            {props.prefix} {props.amount}
          </AssetAmountValue>
          <AssetAmountValueDollar fontWeight="light" fontSize={textSize.xs}>
            USD ${props.amountUsd}
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
