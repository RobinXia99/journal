import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../../../screens/Home'
import { defaultNavOptions } from '../../../navigationUtils'
import { HomeStackParams } from '../../../types'
import { HeaderButtonBack } from '../../../../components/HeaderButtonBack'
import { StartOfDayScreen } from '../../../../screens/StartOfDay'
import { EndOfDayScreen } from '../../../../screens/EndOfDay'

export const HomeStack = () => {
  const Stack = createNativeStackNavigator<HomeStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Hem', headerShown: true }} />
      <Stack.Group screenOptions={{ ...defaultNavOptions, headerLeft: () => <HeaderButtonBack /> }}>
        <Stack.Screen
          name="StartOfDay"
          component={StartOfDayScreen}
          options={{ title: 'Vad ser jag fram emot idag?', headerShown: true }}
        />
        <Stack.Screen
          name="EndOfDay"
          component={EndOfDayScreen}
          options={{ title: 'Vad är jag stolt/tacksam över idag?', headerShown: true }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
