// Thin wrapper around expo-haptics that no-ops if the native module is
// unavailable (e.g. web or a stripped build), so a missing dependency can
// never crash the game.
import * as Haptics from 'expo-haptics';

export const tapSuccess = () => {
  try {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch {}
};

export const tapError = () => {
  try {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  } catch {}
};

export const tapLight = () => {
  try {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  } catch {}
};
