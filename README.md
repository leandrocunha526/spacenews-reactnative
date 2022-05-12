# Space News mobile app

## Instructions

### Expo

It is recommended to use yarn to install the dependencies, the use of another manager can cause problems according to the problems already reported and for execution it is recommended to have the expo-cli installed globally.

Install dependencies: `yarn`  

Execute: `yarn start` (this uses expo-cli)

or

### React Native CLI

To use react-native CLI, Gadle, Metro and Bundle

`npx react-native start`

and

`npx react-native run-android`

Requires Android Studio and AVD.

## Features

- The home screen displays the most recent articles in a list by cards, displaying title and publishedAt. [done]
- The initial screen has a select that allows the user to configure the size of the list, in order to list 10 (default), 25, 50 or 100 articles at a time. [done]
- The splash screen must contain an input for searching the title text, using endpoint https://api.spaceflightnewsapi.net/v3/articles?title_contains=TEXTO, including "text with spaces and other special characters". [done]
- Filter for searching articles by publication date between two dates (start and end). [to do]
- When clicking on an element in the list, the application has navigation to a page that displays all the details of the article, as well as its image. [done]

### Instead of pagination, it is usually common to create filters or a select that can increase the number of items on a mobile device screen.

### Documentation  

- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Navigation](https://reactnavigation.org/)
