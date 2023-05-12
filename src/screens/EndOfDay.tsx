import { FC, useEffect, useState } from 'react'

import { theme } from '../theme'
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RouteProps } from '../navigation/types'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtonSave } from '../components/HeaderButtonSave'

export const EndOfDayScreen: FC<RouteProps<'EndOfDay'>> = ({ route }) => {
  const { setOptions } = useNavigation()

  const [input, setInput] = useState<string>('')
  const { id } = route.params

  useEffect(() => {
    setOptions({
      title: 'Vad är jag stolt/tacksam över idag?',
      headerRight: () => <HeaderButtonSave onPress={() => console.log('save')} />,
    })
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
