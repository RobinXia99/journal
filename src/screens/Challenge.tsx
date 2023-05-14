import { FC, useEffect } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { CardType, ChallengeCard } from '../components/ChallengeCard'
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtonAdd } from '../components/HeaderButtonAdd'
import { Title, Undertitle } from '../components/Text'
import styled from 'styled-components/native'
import { useAppSelector } from '../hooks/hooks'
import { selectChallenges } from '../state/challenge'

export const ChallengeScreen: FC = () => {
  const { setOptions } = useNavigation()
  const challenges = useAppSelector(selectChallenges)

  useEffect(() => {
    setOptions({ title: 'Utmaningar', headerRight: () => <HeaderButtonAdd /> })
  }, [setOptions])

  return (
    <ScreenBase>
      <Title>Utmaningar</Title>
      <Undertitle>Tryck och håll i korten för att ta bort</Undertitle>
      <Padding />
      {challenges.length > 0 &&
        challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.documentId}
            id={challenge.documentId}
            streak={challenge.streak}
            newCompletionDate={challenge.newCompletionDate}
            checked={true}
            text={challenge.text}
            cardType={CardType.delete}
          />
        ))}
    </ScreenBase>
  )
}

const Padding = styled.View`
  padding: ${theme.spacing.medium}px;
`
