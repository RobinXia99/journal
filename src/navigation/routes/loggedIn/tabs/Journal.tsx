import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { defaultNavOptions } from '../../../navigationUtils'
import { JournalStackParams } from '../../../types'
import { JournalScreen } from '../../../../screens/Journal'
import { HeaderButtonBack } from '../../../../components/HeaderButtonBack'
import { InspectJournalScreen } from '../../../../screens/InspectJournal'

export const JournalStack = () => {
  const Stack = createNativeStackNavigator<JournalStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Journal" component={JournalScreen} options={{ title: 'Dagbok', headerShown: true }} />
      <Stack.Group screenOptions={{ ...defaultNavOptions, headerLeft: () => <HeaderButtonBack /> }}>
        <Stack.Screen
          name="InspectJournal"
          component={InspectJournalScreen}
          options={{ title: 'Hej', headerShown: true }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
