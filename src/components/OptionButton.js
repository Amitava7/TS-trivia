import { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, font, radius } from '../theme';

// One answer choice. `state` controls appearance once an answer is locked in:
//   'idle' | 'correct' | 'wrong' | 'muted'
export default function OptionButton({ label, letter, state = 'idle', disabled, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;
  const animate = (to) =>
    Animated.spring(scale, { toValue: to, useNativeDriver: true, speed: 50, bounciness: 6 }).start();

  const palette = {
    idle: { bg: colors.card, border: colors.cardBorder, text: colors.white, badge: 'rgba(255,255,255,0.16)' },
    correct: { bg: 'rgba(43,212,155,0.20)', border: colors.correct, text: colors.white, badge: colors.correct },
    wrong: { bg: 'rgba(255,84,112,0.18)', border: colors.wrong, text: colors.white, badge: colors.wrong },
    muted: { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)', text: colors.textFaint, badge: 'rgba(255,255,255,0.10)' },
  }[state];

  const mark = state === 'correct' ? '✓' : state === 'wrong' ? '✕' : letter;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => !disabled && animate(0.98)}
      onPressOut={() => animate(1)}
    >
      <Animated.View
        style={[
          styles.option,
          { backgroundColor: palette.bg, borderColor: palette.border, transform: [{ scale }] },
        ]}
      >
        <View style={[styles.badge, { backgroundColor: palette.badge }]}>
          <Text style={styles.badgeText}>{mark}</Text>
        </View>
        <Text style={[styles.label, { color: palette.text }]}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.md,
    borderWidth: 1.5,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  badge: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  badgeText: { color: colors.white, fontSize: 15, fontWeight: font.black },
  label: { flex: 1, fontSize: 16, fontWeight: font.bold, lineHeight: 21 },
});
