import React from 'react';
import styled from 'styled-components/native';
import { colors, spacing, textSize } from '../../../constants';
import { Text } from '../../text/Text';

type Props = {};

export const ModalContentSend: React.FC<Props> = (props) => {
  return (
    <Container>
      <HeaderContent>
        <Title
          fontColor={colors.WHITE}
          fontSize={textSize.l}
          fontWeight="regular"
          textAlign="left"
        >
          Send BTC
        </Title>
        <SubTitle
          fontColor={colors.WHITE}
          fontSize={textSize.xs}
          textAlign="left"
          fontWeight="light"
        >
          Send your BTC tokens to a recipient within or outside of Tixl’s
          Autobahn Network.
        </SubTitle>
      </HeaderContent>
      <MainContent></MainContent>
    </Container>
  );
};

const Container = styled.View``;

const HeaderContent = styled.View`
  padding: ${spacing.s}px;
  background-color: ${colors.LIGHT_BLUE};
`;

const Title = styled(Text)`
  margin-bottom: ${spacing.xxs}px;
`;

const SubTitle = styled(Text)``;

const MainContent = styled.View`
  height: 400px;
  background-color: white;
`;
