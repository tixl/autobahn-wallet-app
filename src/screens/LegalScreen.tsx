import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { Button } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
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
        <TextContainer>
          <CustomText>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </CustomText>
        </TextContainer>
        <ButtonContainer>
          <Button
            type="primary"
            label="Back"
            onPress={() => navigation.goBack()}
          />
          <ButtonSpacer />
          <Button
            type="primary"
            disabled={!accepted}
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
  margin-bottom: ${spacing.s}px;
`;

const CustomText = styled.Text`
  font-family: ${fonts.light};
  color: ${colors.GRAY};
  font-size: ${textSize.s}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonSpacer = styled.View`
  width: ${spacing.s}px;
`;

export default LegalScreen;
