import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { defaultNavOptions } from '../../../navigationUtils'
import { ChallengesStackParams } from '../../../types'
import { ChallengeScreen } from '../../../../screens/Challenge'
import { HeaderButtonBack } from '../../../../components/HeaderButtonBack'
import { CreateChallengeScreen } from '../../../../screens/CreateChallenge'
import { HeaderButtonSave } from '../../../../components/HeaderButtonText'

export const ChallengeStack = () => {
  const Stack = createNativeStackNavigator<ChallengesStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Challenges" component={ChallengeScreen} options={{ title: '', headerShown: true }} />
      <Stack.Group screenOptions={{ ...defaultNavOptions, headerLeft: () => <HeaderButtonBack /> }}>
        <Stack.Screen
          name="CreateChallenge"
          component={CreateChallengeScreen}
          options={{ title: 'Skapa utmaning', headerShown: true }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
