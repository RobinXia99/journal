import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import { theme } from '../theme'
import { Caret } from './icons/Caret'

export const HeaderButtonBack: FC = () => {
  const { goBack } = useNavigation()

  return (
    <Pressable onPress={goBack} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
      <Caret width={24} height={24} color={theme.color.grey} />
    </Pressable>
  )
}
