import * as React from 'react';
import styled from 'styled-components/native';
import { HeaderBar, Text } from '../components';
import { AssetValueCard } from '../components/cards/AssetValueCard';
import { colors, spacing, textSize } from '../constants';

type Props = {
  children?: string;
};

const AssetDetailScreen: React.FC<Props> = (props) => {
  return (
    <Container>
      <HeaderBar title="BTC" type="close" />
      <ContentContainer>
        {/* Overview Section */}
        <Section>
          <Text textAlign="left" fontWeight="semiBold" fontSize={textSize.xl}>
            Overview
          </Text>
          <Spacer />
          <OverviewContainer>
            <AssetValueCard name="BTC" value="1234"></AssetValueCard>
            <Spacer />
            <AssetValueCard name="USD" value="1234"></AssetValueCard>
          </OverviewContainer>
        </Section>
        {/* Action Button Section */}
        <Section>
          <Text textAlign="left" fontWeight="semiBold" fontSize={textSize.xl}>
            Actions
          </Text>
          <ButtonContainer>
            <Button></Button>
          </ButtonContainer>
        </Section>
        {/* Transaction History Section */}
        <Section>
          <Text textAlign="left" fontWeight="semiBold" fontSize={textSize.xl}>
            Transaction History
          </Text>
        </Section>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.ScrollView`
  padding: ${spacing.m}px ${spacing.s}px 0px;
`;

const Section = styled.View`
  margin-bottom: ${spacing.l}px;
`;

const OverviewContainer = styled.View`
  flex-direction: row;
`;

const Spacer = styled.View`
  width: ${spacing.s}px;
  height: ${spacing.xs}px;
`;

const ButtonContainer = styled.View``;

const Button = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: blue;
`;

export default AssetDetailScreen;
