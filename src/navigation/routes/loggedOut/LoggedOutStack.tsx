import { defaultNavOptions, Stack } from '../../navigationUtils'
import { HomeScreen } from '../../../screens/Home'
import { HeaderButtonBack } from '../../../components/HeaderButtonBack'
import { LoggedOutStartScreen } from '../../../screens/LoggedOutStartScreen'

export const LoggedOutRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions, title: '' }}>
      <Stack.Screen name="LoggedOutStart" component={LoggedOutStartScreen} options={{ headerShown: false }} />

      <Stack.Group screenOptions={{ headerLeft: () => <HeaderButtonBack /> }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
