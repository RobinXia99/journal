import { defaultNavOptions, Stack } from '../../navigationUtils'
import { BottomTabNavigator } from './BottomTabNavigator'
import { HeaderButtonBack } from '../../../components/HeaderButtonBack'

export const LoggedInRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ ...defaultNavOptions, headerLeft: () => <HeaderButtonBack /> }}>
        <></>
      </Stack.Group>
    </Stack.Navigator>
  )
}
