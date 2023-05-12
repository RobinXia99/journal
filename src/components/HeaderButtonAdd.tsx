import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import { theme } from '../theme'
import styled from 'styled-components/native'

export const HeaderButtonAdd = () => {
  const { navigate } = useNavigation()

  return (
    <Pressable onPress={() => navigate('CreateChallenge')} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
      <Label>Lägg till +</Label>
    </Pressable>
  )
}

const Label = styled.Text`
  color: ${theme.color.white};
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.default}px;
`
