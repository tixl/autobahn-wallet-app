import React, { useState } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts } from '../../constants';

import { Toggle } from '../inputs/Toggle';
import { Button, ButtonType } from '../buttons/Button';

export type BottomBarProps = {
  onNext?: () => any;
  onPrevious?: () => any;
  nextButtonText?: string;
  nextButtonType?: ButtonType;
  nextButtonDisabled?: boolean;
  previousButtonText?: string;
  previousButtonType?: ButtonType;
  previousButtonDisabled?: boolean;
  text?: string;
  showToggle?: boolean;
  toggleDisabled?: boolean;
};

export const BottomBar: React.FC<BottomBarProps> = ({
  nextButtonText = 'Label (Next)',
  nextButtonType = 'primary',
  nextButtonDisabled = false,
  previousButtonText = 'Label (Previous)',
  previousButtonType = 'primary',
  previousButtonDisabled = false,
  showToggle = false,
  toggleDisabled = false,
  text,
  onNext,
  onPrevious,
}) => {
  // Only set accepted false if toggle is enabled
  const [accepted, setAccepted] = useState<boolean>(!showToggle);

  return (
    <Container>
      {(showToggle || text) && (
        <ToggleContainer>
          {text && <ToggleText>{text}</ToggleText>}
          {showToggle && (
            <Toggle
              value={accepted}
              onValueChange={(newValue) => setAccepted(newValue)}
              disabled={toggleDisabled}
              style={{ opacity: !toggleDisabled ? 1 : 0.4 }}
            />
          )}
        </ToggleContainer>
      )}

      <ButtonContainer>
        {onPrevious && (
          <Button
            type={previousButtonType}
            disabled={previousButtonDisabled}
            label={previousButtonText}
            onPress={() => onPrevious && onPrevious()}
          />
        )}
        {onNext && onPrevious && <ButtonSpacer />}
        {onNext && (
          <Button
            type={nextButtonType}
            disabled={!accepted ? true : nextButtonDisabled}
            label={nextButtonText}
            onPress={() => onNext && onNext()}
          />
        )}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View``;

const ToggleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${spacing.s}px;
`;

const ToggleText = styled.Text`
  flex: 1;
  margin-right: ${spacing.xs}px;
  font-family: ${fonts.regular};
  color: ${colors.BLACK};
  font-size: ${textSize.m}px;
`;

const ButtonContainer = styled.View`
  margin-top: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonSpacer = styled.View`
  width: ${spacing.l}px;
`;
