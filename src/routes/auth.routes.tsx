import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent",
        },
        contentStyle: {
          backgroundColor: "transparent",
        }
      }}
    >
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
}
