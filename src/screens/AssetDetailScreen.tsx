import { RouteProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { color } from 'react-native-reanimated';
import { RootStackParamList } from '../navigation/stacks/RootStack';
import styled from 'styled-components/native';
import {
  HeaderBar,
  Icon,
  iconName,
  Text,
  RoundButton,
  AssetValueCard,
} from '../components';

import { colors, spacing, textSize, windowWidth } from '../constants';

type AssetDetailScreenRouteProp = RouteProp<RootStackParamList, 'AssetDetail'>;

type Props = {
  route: AssetDetailScreenRouteProp;
};

const AssetDetailScreen: React.FC<Props> = (props) => {
  // Get route params
  const asset = props.route.params.asset;

  // const buttonWidth: number = (windowWidth - 2 * spacing.s) / 3 - 2 * spacing.m;
  const buttonWidth: number = 50;

  return (
    <Container>
      <HeaderBar title={asset.name} type="close" />
      <ContentContainer>
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
            ></AssetValueCard>
            <Spacer />
            <AssetValueCard
              name="USD"
              value={asset.valueUsd.toString()}
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
              onPress={() => console.log('Send button pressed')}
            />
            <RoundButton
              width={buttonWidth}
              title="Receive"
              icon={iconName.arrowRight}
              color={colors.LIGHT_BLUE}
              onPress={() => console.log('Send button pressed')}
            />
            <RoundButton
              width={buttonWidth}
              title="Deposit"
              icon={iconName.bug}
              color={colors.LIGHT_BLUE}
              onPress={() => console.log('Send button pressed')}
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
      </ContentContainer>
    </Container>
  );
};

const ModalContainer = styled.View`
  height: 100px;
  background-color: red;
`;

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.ScrollView`
  padding: ${spacing.m}px ${spacing.s}px 0px;
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
