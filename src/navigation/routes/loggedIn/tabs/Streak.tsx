import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { defaultNavOptions } from '../../../navigationUtils'
import { StreakStackParams } from '../../../types'
import { StreakScreen } from '../../../../screens/Streak'

export const StreakStack = () => {
  const Stack = createNativeStackNavigator<StreakStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Streak" component={StreakScreen} options={{ title: '', headerShown: false }} />
    </Stack.Navigator>
  )
}
