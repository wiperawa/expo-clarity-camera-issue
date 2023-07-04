import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initialize } from 'react-native-clarity';
import ErrorBoundary from 'react-native-error-boundary'

import { CameraScreen } from './screens/camera';
import { DashboardScreen } from './screens/dashboard';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { PermissionsProvider } from './providers/permissions';

const errorHandler = (error) => {
  console.log(error);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={DashboardScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
}
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  initialize("YOUR_CLARITY_PROJECT_ID_HERE");

  return (
    <ErrorBoundary onError={errorHandler}>
      <NativeBaseProvider>
      <PermissionsProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PermissionsProvider>
      </NativeBaseProvider>
    </ErrorBoundary>
  );
}
