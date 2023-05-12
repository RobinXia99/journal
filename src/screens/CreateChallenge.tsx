import { FC, useEffect } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { CardType, ChallengeCard } from '../components/ChallengeCard'
import { theme } from '../theme'
import { Title, Undertitle } from '../components/Text'
import styled from 'styled-components/native'
import { HeaderButtonSave } from '../components/HeaderButtonSave'
import { useNavigation } from '@react-navigation/native'

export const CreateChallengeScreen: FC = () => {
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({ title: 'Utmaningar', headerRight: () => <HeaderButtonSave /> })
  }, [setOptions])
  return (
    <ScreenBase>
      <Title>Skapa utmaning</Title>
      <Undertitle>Skapa en utmaning som du upprepar varje dag</Undertitle>
      <Padding />
      <ChallengeCard background={theme.color.darkerGreen} streak={0} checked={false} cardType={CardType.edit} />
    </ScreenBase>
  )
}

const Padding = styled.View`
  padding: ${theme.spacing.medium}px;
`
