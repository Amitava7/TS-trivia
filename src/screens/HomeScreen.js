import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import GradientBackground from '../components/GradientBackground';
import Glitter from '../components/Glitter';
import GameTile from '../components/GameTile';
import { GAMES } from '../games';
import { colors, font, LUCKY_NUMBER, radius, shadow, spacing } from '../theme';

export default function HomeScreen({ onSelectGame }) {
  const insets = useSafeAreaInsets();

  return (
    <GradientBackground>
      <Glitter count={22} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + spacing(2),
          paddingBottom: insets.bottom + spacing(4),
          paddingHorizontal: spacing(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.kickerRow}>
            <Text style={styles.kicker}>✦ THE LUCKY {LUCKY_NUMBER} EDITION ✦</Text>
          </View>

          <View style={styles.titleRow}>
            <Text style={styles.title}>SWIFTIE</Text>
            <LinearGradient
              colors={[colors.gold, colors.hotPink]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.luckyBadge, shadow.glow(colors.hotPink)]}
            >
              <Text style={styles.luckyText}>{LUCKY_NUMBER}</Text>
            </LinearGradient>
          </View>
          <Text style={styles.title}>TRIVIA</Text>

          <Text style={styles.tagline}>
            How well do you really know Taylor? Pick a game and prove it. ✨
          </Text>
        </View>

        {/* Game grid */}
        <View style={styles.grid}>
          {GAMES.map((g, i) => (
            <GameTile key={g.id} game={g} index={i} onPress={onSelectGame} />
          ))}
        </View>

        <Text style={styles.footer}>
          Made for Swifties · {GAMES.length} games · lucky number {LUCKY_NUMBER} 💜
        </Text>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: spacing(1), marginBottom: spacing(2) },
  kickerRow: { marginBottom: spacing(1) },
  kicker: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: font.heavy,
    letterSpacing: 2.5,
  },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  title: {
    color: colors.white,
    fontSize: 46,
    lineHeight: 48,
    fontWeight: font.black,
    letterSpacing: 1,
    textShadowColor: 'rgba(255,46,136,0.55)',
    textShadowRadius: 16,
  },
  luckyBadge: {
    marginLeft: spacing(1.5),
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-8deg' }],
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  luckyText: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: font.black,
  },
  tagline: {
    color: colors.textDim,
    fontSize: 15,
    fontWeight: font.medium,
    marginTop: spacing(1.5),
    lineHeight: 21,
    maxWidth: 320,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing(1),
  },
  footer: {
    color: colors.textFaint,
    textAlign: 'center',
    marginTop: spacing(3),
    fontSize: 13,
    fontWeight: font.medium,
  },
});
