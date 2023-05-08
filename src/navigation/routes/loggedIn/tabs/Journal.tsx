import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { defaultNavOptions } from '../../../navigationUtils'
import { JournalStackParams } from '../../../types'
import { JournalScreen } from '../../../../screens/Journal'

export const JournalStack = () => {
  const Stack = createNativeStackNavigator<JournalStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Journal" component={JournalScreen} options={{ title: '', headerShown: false }} />
    </Stack.Navigator>
  )
}
