# Vườn Trong Nhà - React Native App

Welcome to the **Vườn Trong Nhà** React Native app! This app is built using React Native version 0.72.3 and TypeScript, with a minimum Node.js version requirement of 16.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:** Start by cloning the repository to your local machine:
```bash
git clone https://github.com/dubravko-luka/plant-decor-app.git
```

2. **Navigate to Project Directory:** Change into the project directory:
```bash
cd plant-decor-app
```

3. **Install Dependencies:** Install the project dependencies using npm or yarn:
```bash
npm install
# or
yarn install
```

4. **Start the App:** Run the app on a connected device or emulator:
```bash
npm run android # For Android
npm run ios # For iOS
```

## Project Structure

The project has the following directory structure:

- `app/`: This directory contains the source code of your React Native app.
- `assets/`: Store static assets like images, fonts, and other files here.
- `components/`: Reusable React Native components used throughout the app.
- `views/`: Individual screens or pages of your app.

## TypeScript Usage

This project is written in TypeScript, which offers enhanced code quality and better development experience. TypeScript type definitions are used throughout the project to ensure type safety.

## Building and Deployment

To build and deploy the app, you can follow the documentation for React Native. For example, to build an APK for Android:

```bash
cd android && ./gradlew clean && ./gradlew assembleRelease
```

After the build is complete, the APK installation file can be found at the following path:

```bash
android/app/build/output/apk/release/app-release.apk
```

## Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

Feel free to explore, modify, and enhance the **Vườn Trong Nhà** app. Happy coding!
