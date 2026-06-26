import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { gradients } from '../theme';

// App-wide gradient canvas. Pass `colors` to override (used for results).
export default function GradientBackground({ colors = gradients.app, children, style }) {
  return (
    <View style={[styles.fill, style]}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
});
