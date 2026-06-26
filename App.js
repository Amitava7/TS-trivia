import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';

export default function App() {
  // Lightweight navigation: either the home grid, or a single active game.
  const [activeGame, setActiveGame] = useState(null);

  return (
    <SafeAreaProvider>
      {activeGame ? (
        <QuizScreen game={activeGame} onExit={() => setActiveGame(null)} />
      ) : (
        <HomeScreen onSelectGame={setActiveGame} />
      )}
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
