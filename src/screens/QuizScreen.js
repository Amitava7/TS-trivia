import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GradientBackground from '../components/GradientBackground';
import Glitter from '../components/Glitter';
import OptionButton from '../components/OptionButton';
import PrimaryButton from '../components/PrimaryButton';
import { tapError, tapLight, tapSuccess } from '../haptics';
import { colors, font, gradients, LUCKY_NUMBER, radius, shadow, spacing } from '../theme';

const LETTERS = ['A', 'B', 'C', 'D'];

function ProgressBar({ progress }) {
  const w = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(w, { toValue: progress, duration: 350, useNativeDriver: false }).start();
  }, [w, progress]);
  const width = w.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });
  return (
    <View style={styles.track}>
      <Animated.View style={[styles.fill, { width }]} />
    </View>
  );
}

function ratingFor(pct) {
  if (pct === 1) return { title: 'MASTERMIND 👑', blurb: "A perfect 13/13 energy. You ARE the era.", colors: ['#FFD36E', '#FF2E88', '#9B5DE5'] };
  if (pct >= 0.8) return { title: 'SPARKLING ✨', blurb: 'Bejeweled and brilliant. Almost flawless.', colors: ['#FF6CAB', '#7366FF'] };
  if (pct >= 0.6) return { title: 'ENCHANTED 💜', blurb: 'Solid Swiftie instincts in there.', colors: ['#9B5DE5', '#5B8DEF'] };
  if (pct >= 0.4) return { title: 'OUT OF THE WOODS 🌲', blurb: 'You made it out — just barely.', colors: ['#3AC6B0', '#2D7DEC'] };
  return { title: 'SHAKE IT OFF 🫶', blurb: 'Every Swiftie starts somewhere. Run it back!', colors: ['#FF9E1B', '#FF2E88'] };
}

function Results({ score, total, game, onPlayAgain, onHome }) {
  const insets = useSafeAreaInsets();
  const pct = total ? score / total : 0;
  const rating = ratingFor(pct);
  const perfect = score === total;

  return (
    <GradientBackground colors={[rating.colors[0], colors.bg0, colors.bg2]}>
      <Glitter count={perfect ? 40 : 24} />
      <ScrollView
        contentContainerStyle={[
          styles.resultsWrap,
          { paddingTop: insets.top + spacing(6), paddingBottom: insets.bottom + spacing(4) },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.resultsKicker}>{game.title.toUpperCase()}</Text>

        <View style={[styles.scoreRing, shadow.glow(rating.colors[0])]}>
          <Text style={styles.scoreBig}>{score}</Text>
          <Text style={styles.scoreOf}>of {total}</Text>
        </View>

        <Text style={styles.ratingTitle}>{rating.title}</Text>
        <Text style={styles.ratingBlurb}>{rating.blurb}</Text>

        <View style={{ height: spacing(4) }} />
        <PrimaryButton label="Play again ↻" onPress={onPlayAgain} gradient={rating.colors} style={styles.cta} />
        <View style={{ height: spacing(1.5) }} />
        <PrimaryButton label="Back to games" onPress={onHome} variant="ghost" style={styles.cta} />
      </ScrollView>
    </GradientBackground>
  );
}

export default function QuizScreen({ game, onExit }) {
  const insets = useSafeAreaInsets();
  const [seed, setSeed] = useState(0);
  const questions = useMemo(() => game.build(), [game, seed]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[index];
  const locked = selected !== null;
  const isLast = index === questions.length - 1;

  const choose = (i) => {
    if (locked) return;
    setSelected(i);
    if (i === q.answer) {
      setScore((s) => s + 1);
      tapSuccess();
    } else {
      tapError();
    }
  };

  const next = () => {
    tapLight();
    if (isLast) {
      setFinished(true);
    } else {
      setIndex((n) => n + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setSeed((s) => s + 1);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <Results
        score={score}
        total={questions.length}
        game={game}
        onPlayAgain={restart}
        onHome={onExit}
      />
    );
  }

  const optionState = (i) => {
    if (!locked) return 'idle';
    if (i === q.answer) return 'correct';
    if (i === selected) return 'wrong';
    return 'muted';
  };

  return (
    <GradientBackground>
      <Glitter count={12} />
      <View style={{ flex: 1, paddingTop: insets.top + spacing(1) }}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <Pressable onPress={onExit} hitSlop={12} style={styles.back}>
            <Text style={styles.backText}>‹ Games</Text>
          </Pressable>
          <View style={styles.scorePill}>
            <Text style={styles.scorePillText}>★ {score}</Text>
          </View>
        </View>

        <View style={styles.progressRow}>
          <ProgressBar progress={(index + (locked ? 1 : 0)) / questions.length} />
          <Text style={styles.counter}>
            {index + 1}/{questions.length}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingHorizontal: spacing(2.5), paddingBottom: insets.bottom + spacing(3) }}
          showsVerticalScrollIndicator={false}
        >
          {/* Prompt card */}
          <View style={[styles.promptCard, shadow.card]}>
            <Text style={styles.kicker}>{game.emoji}  {q.promptKicker}</Text>
            <Text style={styles.prompt}>{q.prompt}</Text>
          </View>

          {/* Options */}
          <View>
            {q.options.map((opt, i) => (
              <OptionButton
                key={i}
                label={opt}
                letter={LETTERS[i]}
                state={optionState(i)}
                disabled={locked}
                onPress={() => choose(i)}
              />
            ))}
          </View>

          {/* Feedback */}
          {locked && (
            <View style={styles.feedback}>
              <Text style={[styles.verdict, { color: selected === q.answer ? colors.correct : colors.wrong }]}>
                {selected === q.answer ? 'Correct! ✨' : 'Not quite 💔'}
              </Text>
              <Text style={styles.note}>{q.note}</Text>
              <PrimaryButton
                label={isLast ? 'See results →' : 'Next question →'}
                onPress={next}
                gradient={game.colors}
                style={{ marginTop: spacing(2) }}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing(2.5),
    height: 44,
  },
  back: { paddingVertical: 6, paddingRight: 8 },
  backText: { color: colors.textDim, fontSize: 16, fontWeight: font.bold },
  scorePill: {
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: radius.pill,
  },
  scorePillText: { color: colors.gold, fontWeight: font.heavy, fontSize: 14 },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing(2.5),
    marginTop: spacing(1),
    marginBottom: spacing(2),
  },
  track: {
    flex: 1,
    height: 10,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
  fill: { height: '100%', borderRadius: radius.pill, backgroundColor: colors.hotPink },
  counter: { color: colors.textDim, marginLeft: 12, fontWeight: font.heavy, fontSize: 13, width: 44, textAlign: 'right' },

  promptCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.lg,
    padding: spacing(3),
    marginBottom: spacing(2.5),
  },
  kicker: { color: colors.gold, fontSize: 13, fontWeight: font.heavy, letterSpacing: 0.4, marginBottom: spacing(1.5) },
  prompt: { color: colors.white, fontSize: 26, fontWeight: font.black, lineHeight: 32 },

  feedback: { marginTop: spacing(1) },
  verdict: { fontSize: 18, fontWeight: font.black, marginBottom: 6 },
  note: { color: colors.textDim, fontSize: 14.5, lineHeight: 21, fontWeight: font.medium },

  // Results
  resultsWrap: { alignItems: 'center', paddingHorizontal: spacing(3) },
  resultsKicker: { color: colors.gold, fontWeight: font.heavy, letterSpacing: 2, fontSize: 13, marginBottom: spacing(3) },
  scoreRing: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.85)',
    backgroundColor: 'rgba(0,0,0,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreBig: { color: colors.white, fontSize: 72, fontWeight: font.black, lineHeight: 76 },
  scoreOf: { color: colors.textDim, fontSize: 16, fontWeight: font.bold, marginTop: -4 },
  ratingTitle: { color: colors.white, fontSize: 30, fontWeight: font.black, marginTop: spacing(3), textAlign: 'center' },
  ratingBlurb: { color: colors.textDim, fontSize: 15.5, fontWeight: font.medium, marginTop: spacing(1), textAlign: 'center', lineHeight: 22, maxWidth: 300 },
  cta: { alignSelf: 'stretch' },
});
