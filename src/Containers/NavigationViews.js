import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Home from "./Home";

// Views
const Navigation = createStackNavigator({
    Home: Home,
});

// We are only using a single view for this demo component, however it has been initialized and prepared for additional views in the future if required.

export default createAppContainer(Navigation);
