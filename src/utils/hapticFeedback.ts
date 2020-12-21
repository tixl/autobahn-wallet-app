import * as Haptic from 'expo-haptics';

const fireHapticFeedback = hapticType => {
  switch (hapticType) {
    case 'selection':
      Haptic.selectionAsync();
      break;
    case 'notificationSuccess':
      Haptic.notificationAsync(Haptic.NotificationFeedbackType.Success);
      break;
    case 'notificationWarning':
      Haptic.notificationAsync(Haptic.NotificationFeedbackType.Warning);
      break;
    case 'notificationError':
      Haptic.notificationAsync(Haptic.NotificationFeedbackType.Error);
      break;
    case 'impactLight':
      Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light);
      break;
    case 'impactMedium':
      Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Medium);
      break;
    case 'impactHeavy':
      Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Heavy);
      break;
    default:
      break;
  }
};

export default fireHapticFeedback;
