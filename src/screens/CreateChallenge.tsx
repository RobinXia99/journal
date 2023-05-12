import { FC, useEffect, useState } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { CardType, ChallengeCard } from '../components/ChallengeCard'
import { theme } from '../theme'
import { Title, Undertitle } from '../components/Text'
import styled from 'styled-components/native'
import { HeaderButtonSave } from '../components/HeaderButtonSave'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '../hooks/hooks'
import { createChallenge } from '../state/challenge'

export const CreateChallengeScreen: FC = () => {
  const { setOptions } = useNavigation()
  const [input, setInput] = useState('')

  const dispatch = useAppDispatch()

  useEffect(() => {
    setOptions({
      title: 'Utmaningar',
      headerRight: () => <HeaderButtonSave onPress={() => dispatch(createChallenge(input))} />,
    })
  }, [setOptions, dispatch, input])
  return (
    <ScreenBase>
      <Title>Skapa utmaning</Title>
      <Undertitle>Skapa en utmaning som du upprepar varje dag</Undertitle>
      <Padding />
      <ChallengeCard
        background={theme.color.darkerGreen}
        streak={0}
        checked={false}
        cardType={CardType.edit}
        textInput={input}
        onChangeText={setInput}
      />
    </ScreenBase>
  )
}

const Padding = styled.View`
  padding: ${theme.spacing.medium}px;
`
