# PwC Coding Challenge by Adrian Twarog
The following is a React Native application which has been developed with simplicity in mind. Its purpose is to display departure locations and times between a range of dates, and travel types. It works on both Android and iOS with the purpose of demonstrating development in React Native.

<img src="pwc.gif" />

## Assumptions
- No additional plugins or modules to be used unless required
- No back end required to perform the functionality (besides API provided)
- Not to overbuild the solution. The simplest solution is required.
- Follow up to date coding practices and standards

## Developer
- Adrian Twarog

## Compatibility
- Latest versions of all modules and components as of 2019-09

## Client Information
- [PwC](https://www.pwc.com.au/) 

## Front End Dependencies
- [React Native](https://facebook.github.io/react-native/) - Latest 60 build.
- [Jest](https://jestjs.io/) - Used for running tests
- [Mobx](https://mobx.js.org/getting-started.html) - Store Library (on part with Redux)
- [React Navigation](https://reactnavigation.org/) - Routing and Navigation
- [React Native Maps](https://github.com/react-native-community/react-native-maps) - Maps & Markers component
- [Styled Components](https://www.styled-components.com/) - Styling library
- [Axios](https://github.com/axios/axios) - API library
 
# Getting Started
1. Run `npm install`
2. Run `react-native run-ios` or `react-native run-android`
3. Run the tests `npm test`
4. (for iOS, `cd ios && pod install` may be required)

# Additional Notes and Documentation
- [PwC Coding Challenge](New-PwC-React-Native_iOS_Android-Coding-Challenge.pdf) - Instructions on the challenge

## Maps Feature
The current google maps component is using a personal key for iOS SDK Maps and Android SDK Maps for this purpose. More information on its uses can be found [here](https://github.com/react-native-community/react-native-maps).

## API Features
The current API is used through the application store running on Mobx with the Axios library. It has handlers for checking what type of environment it is running in, and updating the URL accordingly.

## Filtering
The filtering for the application occurs live, with observable handlers which call actions to update the API and departure points whenever any changes are made. This will reflect on both the map and departure list being updated.

## Navigation
In this use case, navigation was not required, however the navigation library was setup in order to prepare and show how it should exist.

## Reusable Components
The styled components library was used with a separation between re-usable components and containers. In more advanced applications, a theme and provide can be passed which also allow for light and dark mode functionality.

## Container Structure
This example shows the bare bones required for containers. This use case placed them under a flat single file, however in more advanced applications, they would be placed in separate files, folders baed on their functionality, view, and requirements.

# Support
This system was created by Adrian Twarog. For further support, please contact him directly through the required channels.

## References
- [Undraw](https://undraw.co/) - Used for open source images
