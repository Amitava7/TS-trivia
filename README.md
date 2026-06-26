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

### APK size

The build is tuned for the **Samsung Galaxy S24 Ultra** (and other `arm64-v8a`
devices) only. The Gradle build passes:

- `reactNativeArchitectures=arm64-v8a` — drops the `armeabi-v7a`, `x86`, and
  `x86_64` native libraries, which account for most of an unoptimized
  (~56 MB) build.
- `android.enableMinifyInReleaseBuilds=true` — R8 code shrinking.
- `android.enableShrinkResourcesInReleaseBuilds=true` — strips unused resources.
- `expo.useLegacyPackaging=true` — compresses native libraries inside the APK.

If you need to support 32-bit or x86 devices, add the relevant ABIs back to
`-PreactNativeArchitectures` in [`build-apk.yml`](.github/workflows/build-apk.yml).
