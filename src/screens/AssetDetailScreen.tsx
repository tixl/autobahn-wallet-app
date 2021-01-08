import { RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { RootStackParamList } from '../navigation/stacks/RootStack';
import styled from 'styled-components/native';
import { iconName, Text, RoundButton, AssetValueCard } from '../components';

import { colors, spacing, textSize } from '../constants';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { useDispatch } from 'react-redux';
import { ModalType, uiActions } from '../redux/reducer/ui';
import { useBottomModal } from '../hooks/useBottomModal';

type AssetDetailScreenRouteProp = RouteProp<RootStackParamList, 'AssetDetail'>;

type Props = {
  route: AssetDetailScreenRouteProp;
};

const AssetDetailScreen: React.FC<Props> = (props) => {
  const { showModal } = useBottomModal();

  // Get route params
  const asset = props.route.params.asset;

  // const buttonWidth: number = (windowWidth - 2 * spacing.s) / 3 - 2 * spacing.m;
  const buttonWidth: number = 50;

  return (
    <ScreenWrapper
      headerBarConfig={{ title: asset.name, type: 'close' }}
      disableTopPadding
    >
      <ScrollContainer>
        {/* Overview Section */}
        <Section>
          <Text textAlign="left" fontWeight="semiBold" fontSize={textSize.xl}>
            Overview
          </Text>
          <Spacer />
          <OverviewContainer>
            <AssetValueCard
              name={asset.prefix}
              value={asset.value.toString()}
              logoName={asset.logo}
            ></AssetValueCard>
            <Spacer />
            <AssetValueCard
              name="USD"
              value={asset.valueUsd.toString()}
              logoName="dollar"
            ></AssetValueCard>
          </OverviewContainer>
        </Section>
        {/* Action Button Section */}
        <Section>
          <Text textAlign="left" fontWeight="semiBold" fontSize={textSize.xl}>
            Transfers
          </Text>
          <Spacer />
          <ButtonContainer>
            <RoundButton
              width={buttonWidth}
              title="Send"
              icon={iconName.arrowLeft}
              color={colors.LIGHT_BLUE}
              onPress={() => showModal('send')}
            />
            <RoundButton
              width={buttonWidth}
              title="Receive"
              icon={iconName.arrowRight}
              color={colors.LIGHT_BLUE}
              onPress={() => showModal('receive')}
            />
            <RoundButton
              width={buttonWidth}
              title="Deposit"
              icon={iconName.bug}
              color={colors.LIGHT_BLUE}
              onPress={() => showModal('deposit')}
            />
          </ButtonContainer>
        </Section>
        {/* Transaction History Section */}
        <Section>
          <Text textAlign="left" fontWeight="semiBold" fontSize={textSize.xl}>
            Transaction History
          </Text>
          <Text
            textAlign="left"
            fontWeight="light"
            fontSize={textSize.s}
            fontColor={colors.LIGHT_BLACK}
          >
            Last updated: a few seconds ago
          </Text>
        </Section>
      </ScrollContainer>
    </ScreenWrapper>
  );
};

const ScrollContainer = styled.ScrollView`
  padding-top: ${spacing.viewTopPadding}px;
`;

const Section = styled.View`
  margin-bottom: ${spacing.xl}px;
`;

const OverviewContainer = styled.View`
  flex-direction: row;
`;

const Spacer = styled.View`
  width: ${spacing.s}px;
  height: ${spacing.s}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Button = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  background-color: ${colors.DARK_BLUE};
`;

export default AssetDetailScreen;
