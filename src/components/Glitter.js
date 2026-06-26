import { useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

const GLYPHS = ['✦', '✧', '⋆', '✸', '·'];
const SPARKLE_COLORS = [colors.gold, colors.white, colors.hotPink, colors.violet];

function Sparkle({ left, top, size, glyph, color, delay, duration }) {
  const v = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(v, { toValue: 1, duration, useNativeDriver: true }),
        Animated.timing(v, { toValue: 0, duration, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [v, delay, duration]);

  const opacity = v.interpolate({ inputRange: [0, 1], outputRange: [0.15, 0.95] });
  const scale = v.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1.25] });
  const rotate = v.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '90deg'] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.sparkle,
        { left: `${left}%`, top: `${top}%`, opacity, transform: [{ scale }, { rotate }] },
      ]}
    >
      <Text style={{ fontSize: size, color, textShadowColor: color, textShadowRadius: 8 }}>
        {glyph}
      </Text>
    </Animated.View>
  );
}

// A full-bleed field of twinkling sparkles. `count` defaults to Taylor's
// lucky number so even the décor is on theme.
export default function Glitter({ count = 13, style }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        key: i,
        left: Math.random() * 96,
        top: Math.random() * 98,
        size: 10 + Math.random() * 16,
        glyph: GLYPHS[i % GLYPHS.length],
        color: SPARKLE_COLORS[i % SPARKLE_COLORS.length],
        delay: Math.random() * 2200,
        duration: 900 + Math.random() * 1400,
      })),
    [count]
  );

  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, style]}>
      {sparkles.map((s) => (
        <Sparkle key={s.key} {...s} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sparkle: { position: 'absolute' },
});
