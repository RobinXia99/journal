import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { defaultNavOptions } from '../../../navigationUtils'
import { ProfileScreen } from '../../../../screens/Profile'
import { ProfileStackParams } from '../../../types'

export const ProfileStack = () => {
  const Stack = createNativeStackNavigator<ProfileStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: '', headerShown: false }} />
    </Stack.Navigator>
  )
}
