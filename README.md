# TS Trivia

A simple **React Native (Expo)** "Hello World" app, scaffolded from the
[Daban](https://github.com/Amitava7/Daban) template.

## Stack

- [Expo](https://docs.expo.dev/versions/v54.0.0/) SDK 54
- React Native 0.81
- React 19

## Getting started

```bash
npm install --legacy-peer-deps
npm start          # start the Metro dev server
npm run android    # build & run on Android
npm run ios        # build & run on iOS
npm run web        # run in the browser
```

Then scan the QR code with [Expo Go](https://expo.dev/go), or run a native build.

## Building an APK

Pushing to `main` or any `claude/**` branch triggers the
[`Build APK`](.github/workflows/build-apk.yml) GitHub Actions workflow, which:

1. Installs dependencies and runs `expo prebuild` to generate the native
   Android project.
2. Generates a test signing keystore and wires up release signing.
3. Builds a standalone release APK with Gradle.
4. Uploads the APK as a build artifact and publishes it to a GitHub Release.

You can also trigger it manually from the **Actions** tab (`workflow_dispatch`).
