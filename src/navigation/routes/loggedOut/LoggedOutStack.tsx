import { defaultNavOptions, Stack } from '../../navigationUtils'
import { HeaderButtonBack } from '../../../components/HeaderButtonBack'
import { LoggedOutStartScreen } from '../../../screens/LoggedOutStart'
import { SignInScreen } from '../../../screens/SignIn'
import { SignUpScreen } from '../../../screens/SignUp'

export const LoggedOutRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions, title: '' }}>
      <Stack.Screen name="LoggedOutStart" component={LoggedOutStartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Logga in' }} />

      <Stack.Group screenOptions={{ headerLeft: () => <HeaderButtonBack /> }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Skapa konto' }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
