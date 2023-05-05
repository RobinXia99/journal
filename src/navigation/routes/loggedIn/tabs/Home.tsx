import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../../../screens/Home'
import { defaultNavOptions } from '../../../navigationUtils'
import { HomeStackParams } from '../../../types'

export const HomeStack = () => {
  const Stack = createNativeStackNavigator<HomeStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '', headerShown: false }} />
    </Stack.Navigator>
  )
}
