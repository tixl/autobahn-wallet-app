import { State } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ModalType, uiActions } from '../redux/reducer/ui';
import { RootState } from '../redux/store';

// Get modal visibility state and control modal toggeling
export const useUpdateLegal = () => {
  const currentLegal = useSelector(
    (state: RootState) => state.intro.legalTermVersion
  );

  const newestLegal = useSelector(
    (state: RootState) => state.intro.newestLegalTermVersion
  );

  const updateLegal: boolean = currentLegal ? newestLegal < currentLegal : true;

  const legalText: string = 'Example legal string';

  return { updateLegal, legalText };
};
