import { FC, useEffect } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { CardType, ChallengeCard } from '../components/ChallengeCard'
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtonAdd } from '../components/HeaderButtonAdd'
import { Title, Undertitle } from '../components/Text'
import styled from 'styled-components/native'

export const ChallengeScreen: FC = () => {
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({ title: 'Utmaningar', headerRight: () => <HeaderButtonAdd /> })
  }, [setOptions])

  return (
    <ScreenBase>
      <Title>Utmaningar</Title>
      <Undertitle>Tryck och håll i korten för att ta bort</Undertitle>
      <Padding />
      <ChallengeCard
        background={theme.color.green}
        streak={10}
        checked={false}
        text="Gå 10000 steg varje dag"
        cardType={CardType.delete}
      />
      <ChallengeCard
        background={theme.color.darkerGreen}
        streak={0}
        checked={false}
        text="Äta ett äpple varje dag"
        cardType={CardType.delete}
      />
    </ScreenBase>
  )
}

const Padding = styled.View`
  padding: ${theme.spacing.medium}px;
`
