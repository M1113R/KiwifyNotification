
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Generator from '../screens/Generator';
import { propsNavigationStack } from './Models';

const { Screen, Navigator } = createNativeStackNavigator<propsNavigationStack>();

export function AuthStack() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Screen
                name="Generator"
                component={Generator}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}