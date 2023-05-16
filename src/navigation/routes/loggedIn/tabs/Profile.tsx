import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { defaultNavOptions } from '../../../navigationUtils'
import { ProfileScreen } from '../../../../screens/Profile'
import { ProfileStackParams } from '../../../types'
import { HeaderButtonText } from '../../../../components/HeaderButtonText'
import auth from '@react-native-firebase/auth'
import { persistor } from '../../../../state/store'

export const ProfileStack = () => {
  const Stack = createNativeStackNavigator<ProfileStackParams>()

  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Din profil',
          headerShown: true,
          headerRight: () => (
            <HeaderButtonText
              onPress={async () => {
                await auth().signOut()
                await persistor.purge()
              }}
              text="Logga ut"
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}
