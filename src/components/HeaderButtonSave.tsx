import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import { theme } from '../theme'
import styled from 'styled-components/native'

interface ButtonSaveProps {
  onPress: () => void
}

export const HeaderButtonSave: FC<ButtonSaveProps> = ({ onPress }) => {
  const { goBack } = useNavigation()

  const Save = () => {
    onPress()
    goBack()
  }

  return (
    <Pressable onPress={Save} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
      <Label>Spara</Label>
    </Pressable>
  )
}

const Label = styled.Text`
  color: ${theme.color.white};
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.default}px;
`
