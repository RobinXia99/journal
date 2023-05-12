import { FC } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { LinkTag } from '../components/LinkTag'
import { AddImage } from '../components/AddImage'
import { useNavigation } from '@react-navigation/native'
import { CardType, ChallengeCard } from '../components/ChallengeCard'

export const HomeScreen: FC = () => {
  const { navigate } = useNavigation()

  return (
    <ScreenBase>
      <Title>Dokumentera dagen</Title>
      <Padding />
      <LinkTag title="Vad ser jag fram emot idag?" onPress={() => navigate('StartOfDay', { id: '2' })} />
      <LinkTag title="Vad är jag stolt/tacksam över idag?" onPress={() => navigate('EndOfDay', { id: '5' })} />
      <AddImage placeholder="Bildbeskrivning..." />

      <Padding />
      <Title>Utmaningar</Title>
      <Padding />
      <ChallengeCard
        streak={0}
        text="Lägga mig innan 11"
        checked={true}
        background={theme.color.darkerGreen}
        cardType={CardType.check}
      />
      <ChallengeCard
        streak={5}
        text="Gå upp ur sängen innan 8"
        checked={true}
        background={theme.color.darkGreen}
        cardType={CardType.check}
      />
      <ChallengeCard
        streak={10}
        text="Äta ett äpple varje dag"
        checked={true}
        background={theme.color.green}
        cardType={CardType.check}
      />
      <ChallengeCard
        streak={15}
        text="Gå 10000 steg varje dag"
        checked={true}
        background={theme.color.lightGreen}
        cardType={CardType.check}
      />
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
