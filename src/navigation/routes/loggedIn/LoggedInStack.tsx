import { defaultNavOptions, Stack } from '../../navigationUtils'
import { BottomTabNavigator } from './BottomTabNavigator'
import { HeaderButtonBack } from '../../../components/HeaderButtonBack'
import { HomeScreen } from '../../../screens/Home'

export const LoggedInRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ ...defaultNavOptions, headerLeft: () => <HeaderButtonBack /> }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Hem' }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
