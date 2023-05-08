import { FC } from 'react'
import { Text } from 'react-native'
import { ScreenBase } from '../components/ScreenBase'
import { useAppSelector } from '../hooks/hooks'
import { selectUser } from '../state/user'
import { Button } from '../components/Button'
import { persistor } from '../state/store'
import auth from '@react-native-firebase/auth'

import { theme } from '../theme'

export const ProfileScreen: FC = () => {
  const user = useAppSelector(selectUser)
  return (
    <ScreenBase>
      <Text>{user.uid}</Text>
      <Button
        text="Logga ut"
        onPress={async () => {
          await auth().signOut()
          await persistor.purge()
        }}
        color={theme.color.darkerPurple}
        background={theme.color.transparent}
      />
    </ScreenBase>
  )
}
