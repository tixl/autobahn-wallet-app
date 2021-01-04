import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AssetCard, HeaderBar, BottomModal } from '../components';
import { textSize, colors, spacing } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ExampleAsset, ExampleState } from '../redux/reducer/example';
import { RootStackParamList } from '../navigation/stacks/RootStack';
import { uiActions, UiState } from '../redux/reducer/ui';
import ReactNativeModal from 'react-native-modal';

type Props = {
  children?: string;
};

export const WalletScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  // Get example data from redux store
  const { assets, portfolioValue }: ExampleState = useSelector(
    (state: RootState) => state.example
  );

  // Get modal data from store
  const { showModal }: UiState = useSelector((state: RootState) => state.ui);
  const closeModal = () => dispatch(uiActions.closeModal());
  const openModal = () => dispatch(uiActions.openModal('send'));

  // const [showModal, setShowModal] = useState(false);
  // const closeModal = () => setShowModal(false);
  // const openModal = () => setShowModal(true);

  const onButtonPress = (asset: ExampleAsset) => {
    navigation.navigate('AssetDetail', { asset: asset });
  };

  return (
    <Container style={{ paddingTop: insets.top }}>
      <HeaderBar type="value" title="Assets" />
      <BottomModal isVisible={showModal} type="send" onClose={closeModal}>
        <ModalTestComponent></ModalTestComponent>
      </BottomModal>
      <ContentContainer>
        {assets.map((asset, index) => (
          <AssetCard
            key={index}
            name={asset.name}
            prefix={asset.prefix}
            onPress={() => onButtonPress(asset)}
            amount={asset.value.toString()}
            amountUsd={asset.valueUsd.toString()}
            // disabled={asset.prefix == 'TXL'}
          />
        ))}
      </ContentContainer>
      {/* <Button onPress={openModal}></Button> */}
    </Container>
  );
};

const ModalTestComponent = styled.View`
  height: 400px;
  background-color: red;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  background-color: green;
`;

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: ${spacing.m}px ${spacing.s}px 0px;
`;

export default WalletScreen;
