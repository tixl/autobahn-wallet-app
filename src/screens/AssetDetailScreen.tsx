import * as React from 'react';
import styled from 'styled-components/native';
import { HeaderBar, Text } from '../components';
import { colors, spacing, textSize } from '../constants';

type Props = {
  children?: string;
};

const AssetDetailScreen: React.FC<Props> = (props) => {
  return (
    <Container>
      <HeaderBar title="BTC" type="close" />
      <ContentContainer>
        {/* <CenterText>Currency Detail </CenterText> */}
        <Text textAlign="left" fontWeight="regular" fontSize={textSize.l}>
          Amount
        </Text>
        <Text textAlign="left" fontWeight="semiBold" fontSize={textSize.l}>
          Amount
        </Text>
        <ButtonContainer>
          <Button></Button>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View``;

const ContentContainer = styled.ScrollView`
  padding: ${spacing.m}px ${spacing.s}px 0px;
`;

const ButtonContainer = styled.View``;

const Button = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: blue;
`;

export default AssetDetailScreen;
