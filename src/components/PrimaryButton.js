import { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, font, gradients, radius, shadow } from '../theme';

export default function PrimaryButton({
  label,
  onPress,
  gradient = gradients.cta,
  variant = 'solid', // 'solid' | 'ghost'
  style,
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const animate = (to) =>
    Animated.spring(scale, { toValue: to, useNativeDriver: true, speed: 40, bounciness: 8 }).start();

  if (variant === 'ghost') {
    return (
      <Pressable
        onPress={onPress}
        onPressIn={() => animate(0.96)}
        onPressOut={() => animate(1)}
      >
        <Animated.View style={[styles.ghost, { transform: [{ scale }] }, style]}>
          <Text style={[styles.label, styles.ghostLabel]}>{label}</Text>
        </Animated.View>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => animate(0.96)}
      onPressOut={() => animate(1)}
    >
      <Animated.View style={[shadow.glow(gradient[0]), { transform: [{ scale }], borderRadius: radius.pill }, style]}>
        <LinearGradient
          colors={gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.solid}
        >
          <Text style={styles.label}>{label}</Text>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  solid: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghost: {
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: radius.pill,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.cardBorder,
    backgroundColor: colors.glass,
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: font.heavy,
    letterSpacing: 0.4,
  },
  ghostLabel: { color: colors.textDim },
});
