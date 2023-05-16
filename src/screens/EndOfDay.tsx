import { FC, useEffect, useState } from 'react'

import { theme } from '../theme'
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RouteProps } from '../navigation/types'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtonText } from '../components/HeaderButtonText'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { updateJournal, selectTodaysJournal } from '../state/journal'

export const EndOfDayScreen: FC<RouteProps<'EndOfDay'>> = () => {
  const { setOptions } = useNavigation()
  const todaysJournal = useAppSelector(selectTodaysJournal)
  const dispatch = useAppDispatch()

  const [input, setInput] = useState<string>(todaysJournal?.nightJournal || '')

  useEffect(() => {
    const handleSave = () => {
      if (input.length > 0) {
        dispatch(
          updateJournal({
            documentId: todaysJournal?.documentId,
            morningJournal: todaysJournal?.morningJournal,
            nightJournal: input,
            photo: todaysJournal?.photo,
            photoText: todaysJournal?.photoText,
            created_at: todaysJournal?.created_at,
          })
        )
      }
    }
    setOptions({
      title: 'Vad är jag stolt/tacksam över idag?',
      headerRight: () => <HeaderButtonText onPress={() => handleSave()} text="Spara" />,
    })
  }, [setOptions, dispatch, input, todaysJournal])
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
