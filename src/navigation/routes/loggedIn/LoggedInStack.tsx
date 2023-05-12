import { Stack } from '../../navigationUtils'
import { BottomTabNavigator } from './BottomTabNavigator'

export const LoggedInRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
