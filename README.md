# Swiftie Trivia 💜✨

A colorful **React Native (Expo)** collection of Taylor Swift trivia minigames —
built around her lucky number, **13**. A tiled home screen launches into a shared
quiz engine, with a glittery pop aesthetic and per-era color themes.

> Originally scaffolded from the [Daban](https://github.com/Amitava7/Daban)
> template (Expo SDK 54 / React Native 0.81 / React 19).

## The games

| # | Game | What you do |
|---|------|-------------|
| 01 | **Song → Album** | Match a song to the album it lives on |
| 02 | **Album → Year** | Place each album on the timeline |
| 03 | **Songs for the Screen** | Match a soundtrack song to its movie |
| 04 | **Lead Single** | Name the song that launched each era |

Every round is up to **13 questions**. All trivia is sourced from Wikipedia's
album & singles discographies, Billboard, and The Wrap (movie soundtrack songs),
and covers the full studio catalog through *The Life of a Showgirl* (2025).

## Design

- Dark jewel-toned canvas with an animated **glitter** layer (twinkling sparkles)
- Bright per-game gradients (loosely inspired by each era's palette)
- A sparkly **13** badge on the home screen, 13-question rounds, and 13 default
  sparkles — the lucky number runs through the whole app
- Spring-animated tiles, options, and buttons; haptic feedback on every answer
- Animated score ring and era-rated results screen

### Project structure

```
App.js                     # lightweight home ⇆ game navigation
src/
  theme.js                 # design tokens (colors, gradients, spacing, "13")
  games.js                 # game catalog + question builders
  haptics.js               # safe expo-haptics wrapper
  data/taylorSwift.js      # albums, songs, soundtrack songs (sourced data)
  components/               # Glitter, GradientBackground, GameTile, buttons…
  screens/                 # HomeScreen, QuizScreen (+ results)
```

## Getting started

```bash
npm install --legacy-peer-deps
npm start          # Metro dev server — scan the QR with Expo Go
npm run android    # build & run on Android
npm run ios        # build & run on iOS
```

## Building an APK

Pushing to `main` or any `claude/**` branch triggers the
[`Build APK`](.github/workflows/build-apk.yml) GitHub Actions workflow, which runs
`expo prebuild`, generates a signing keystore, and builds a standalone release APK
(uploaded as an artifact and published to a GitHub Release).

### APK size

The build is tuned for the **Samsung Galaxy S24 Ultra** (and other `arm64-v8a`
devices) only — it passes `reactNativeArchitectures=arm64-v8a`, enables R8 code +
resource shrinking, and compresses native libraries, keeping the APK small (~8 MB).
To support other devices, add their ABIs back to `-PreactNativeArchitectures` in
the workflow.
