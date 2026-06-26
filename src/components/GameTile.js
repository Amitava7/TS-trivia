import { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, font, radius, shadow } from '../theme';

// A tappable game tile for the home grid. Each tile carries its game's
// signature gradient and a press-springs animation.
export default function GameTile({ game, index, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;
  const animate = (to) =>
    Animated.spring(scale, { toValue: to, useNativeDriver: true, speed: 50, bounciness: 9 }).start();

  return (
    <Pressable
      style={styles.wrap}
      onPress={() => onPress(game)}
      onPressIn={() => animate(0.95)}
      onPressOut={() => animate(1)}
    >
      <Animated.View style={[styles.shadow, shadow.glow(game.colors[0]), { transform: [{ scale }] }]}>
        <LinearGradient
          colors={game.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.tile}
        >
          {/* number badge — one tile per game, numbered like a tracklist */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{String(index + 1).padStart(2, '0')}</Text>
          </View>

          <Text style={styles.emoji}>{game.emoji}</Text>
          <View style={styles.body}>
            <Text style={styles.title} numberOfLines={2}>
              {game.title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              {game.subtitle}
            </Text>
          </View>
          <Text style={styles.play}>Play ›</Text>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '50%', padding: 8 },
  shadow: { borderRadius: radius.lg },
  tile: {
    borderRadius: radius.lg,
    padding: 16,
    minHeight: 168,
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(0,0,0,0.22)',
  },
  badgeText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 11,
    fontWeight: font.heavy,
    letterSpacing: 1,
  },
  emoji: { fontSize: 34 },
  body: { marginTop: 10 },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: font.black,
    letterSpacing: 0.2,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12.5,
    fontWeight: font.medium,
    marginTop: 4,
  },
  play: {
    color: colors.white,
    fontSize: 13,
    fontWeight: font.heavy,
    marginTop: 12,
    letterSpacing: 0.3,
  },
});
