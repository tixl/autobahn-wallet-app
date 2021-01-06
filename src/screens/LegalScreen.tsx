import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { Button } from '../components';
import { spacing } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children?: string;
};

const LegalScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [accepted, setAccepted] = useState<boolean>(false);

  return (
    <ScreenWrapper
      headerBarConfig={{ type: 'back', title: 'Security & Terms' }}
    >
      <Content style={{ paddingBottom: insets.bottom }}>
        <TextContainer></TextContainer>
        <ButtonContainer>
          <Button
            type="primary"
            label="Back"
            onPress={() => navigation.goBack()}
          />
          <ButtonSpacer />
          <Button
            type="primary"
            disabled
            label="Next"
            onPress={() => console.log('Login clicked')}
          />
        </ButtonContainer>
      </Content>
    </ScreenWrapper>
  );
};

const Content = styled.View`
  flex: 1;
`;

const TextContainer = styled.ScrollView`
  flex: 1;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonSpacer = styled.View`
  width: ${spacing.s}px;
`;

export default LegalScreen;
