import { FC, useEffect, useState } from 'react'

import { theme } from '../theme'
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RouteProps } from '../navigation/types'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtonSave } from '../components/HeaderButtonSave'

export const StartOfDayScreen: FC<RouteProps<'StartOfDay'>> = ({ route }) => {
  const { setOptions } = useNavigation()

  const [input, setInput] = useState<string>('')
  const { id } = route.params

  useEffect(() => {
    setOptions({ title: 'Vad ser jag fram emot idag?', headerRight: () => <HeaderButtonSave /> })
  }, [setOptions])
  return (
    <TextArea
      placeholder={'Börja skriv här...'}
      placeholderTextColor={theme.color.darkGray}
      value={input}
      onChangeText={setInput}
      multiline={true}
      maxLength={200}
      textAlignVertical="top"
    />
  )
}

const TextArea = styled(TextInput)`
  background-color: ${theme.color.white};
  flex: 1;
  padding: ${theme.spacing.medium}px;
`
