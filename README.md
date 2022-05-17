# Space News mobile app

## Instructions

### Expo

To use expo CLI, Metro and Bundle

It is recommended to use yarn to install the dependencies, the use of another manager can cause problems according to the problems already reported and for execution it is recommended to have the expo-cli installed globally.

Install dependencies: `yarn`

Execute: `yarn start` (this uses expo-cli)

or

### React Native CLI

To use react-native CLI, Gadle, Metro and Bundle

`npx react-native start` or `yarn run react-native-start`

and

`npx react-native run-android` or `yarn run run-android`

Requires Android Studio and AVD.

## Features

- The home screen displays the most recent articles in a list by cards, displaying title and publishedAt. [done]
- The initial screen has a select that allows the user to configure the size of the list, in order to list 10 (default), 25, 50 or 100 articles at a time. [done]
- The splash screen must contain an input for searching the title text, using endpoint title_contains=TEXTO, including "text with spaces and other special characters". [done]
- Filter for searching articles by publication date between two dates (start and end). [done]
- When clicking on an element in the list, the application has navigation to a page that displays all the details of the article, as well as its image. [done]
- Previous and next article in details. The plan was to insert this feature using gestures and it will be introduced with buttons. Not the best solution due to non-sequential identification of articles (known problem). [done]

- Note: Instead of pagination, it is usually common to create filters or a select that can increase the number of items on a mobile device screen. Popular apps that could have this and don't have as examples: Instagram, OneFootball and Facebook. The use of gestures are also common. See [Material Design Guidelines](https://material.io/archive/guidelines), [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) and [Android Developer Guide](https://developer.android.com/guide).

### Documentation

- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Navigation](https://reactnavigation.org/)

## Note

**This is just a note**

During the tests in the development of this project in React Native, this problem occurred and the problem was solved.  
Issues about this have already been reported here on GitHub.

### How to reproduce:

- Create a project with expo.
- Just run expo start with one of the existing [Datepickers](https://material.io/components/date-pickers) packages.

- [React Native directory datepicker](https://reactnative.directory/?search=datepicker)
- [Adding custom native code](https://docs.expo.dev/workflow/customizing/) (solution)
- [Android Native Modules](https://reactnative.dev/docs/native-modules-android) (example documentation)

See ["expo start" command doesn't work](https://github.com/henninghall/react-native-date-picker/issues/458)
