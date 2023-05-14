import { FC } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { LinkTag } from '../components/LinkTag'
import { AddImage } from '../components/AddImage'
import { useNavigation } from '@react-navigation/native'
import { CardType, ChallengeCard } from '../components/ChallengeCard'
import { useAppSelector } from '../hooks/hooks'
import { selectChallenges } from '../state/challenge'
import { isSameDay } from 'date-fns'
import { selectTodaysJournal } from '../state/journal'

export const HomeScreen: FC = () => {
  const { navigate } = useNavigation()
  const todaysJournal = useAppSelector(selectTodaysJournal)

  const challenges = useAppSelector(selectChallenges)

  return (
    <ScreenBase>
      <Title>Dokumentera dagen</Title>
      <Padding />
      <LinkTag
        title="Vad ser jag fram emot idag?"
        completed={todaysJournal?.morningJournal !== ''}
        onPress={() => navigate('StartOfDay')}
      />
      <LinkTag
        title="Vad är jag stolt/tacksam över idag?"
        completed={todaysJournal?.nightJournal !== ''}
        onPress={() => navigate('EndOfDay')}
      />
      <AddImage placeholder="Bildbeskrivning..." />

      <Padding />
      <Title>Utmaningar</Title>
      <Padding />
      {challenges.length > 0 &&
        challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.documentId}
            id={challenge.documentId}
            newCompletionDate={challenge.newCompletionDate}
            streak={challenge.streak}
            checked={isSameDay(new Date(), new Date(challenge.newCompletionDate))}
            text={challenge.text}
            cardType={CardType.check}
          />
        ))}
    </ScreenBase>
  )
}

const Title = styled.Text`
  font-size: ${theme.fontSize.xlarge}px;
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.black};
`

const Padding = styled.View`
  padding: ${theme.spacing.medium}px;
`
