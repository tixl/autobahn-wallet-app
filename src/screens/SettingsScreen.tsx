import React, { useState } from 'react';
import styled from 'styled-components/native';
import { HeaderBar, Text, Toggle } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, textSize } from '../constants';
import { ScreenWrapper } from './wrapper/ScreenWrapper';

type Props = {};

const SettingsScreen: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets();

  const [advancedDeposits, setAdvancedDeposits] = useState(false);

  return (
    <ScreenWrapper headerBarConfig={{ type: 'value' }}>
      <ToggleRow>
        <Text fontSize={textSize.xl} numberOfLines={1}>
          Advanced Deposits
        </Text>
        <Toggle
          value={advancedDeposits}
          onValueChange={(newValue) => setAdvancedDeposits(newValue)}
        ></Toggle>
      </ToggleRow>
      <Text
        fontSize={textSize.s}
        textAlign="left"
        fontColor={colors.LIGHT_BLACK}
      >
        If you switch on the advanced deposit mode, the Wallet distinguishes
        between Receive transactions on the Autobahn Network (always displaying
        the Autobahn Network addresses) and Deposit transactions (offering
        another, fee-saving, but more advanced method of depositing into Tixl´s
        Autobahn Network). {'\n'}
        {'\n'}For using the advanced deposit mode, the sender needs to have a
        wallet that can sign arbitrary strings. The disadvantage of this method
        is that it is more complicated. The advantage is that it is cheaper with
        regards to network fees as only one transaction directly to the pool is
        required.
        {'\n'}
        {'\n'}In the normal mode, the coins are sent to your individual Proxy
        address and everything will be handled automatically. This requires two
        transactions, and is not decentralised yet, but relayed by the Tixl
        organisation.
      </Text>
    </ScreenWrapper>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: ${spacing.m}px ${spacing.s}px 0px;
`;

const ToggleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${spacing.s}px;
`;

export default SettingsScreen;
