import styled from 'styled-components/native'
import { theme } from '../theme'
import { Star } from './icons/Star'
import { CheckBox } from './CheckBox'
import { FC, useState } from 'react'
import { TextInput } from 'react-native'
import { Delete } from './icons/Delete'

interface ChallengeCardProps {
  streak: number
  text?: string
  checked: boolean
  background: string
  cardType: CardType
}

export enum CardType {
  edit = 'EDIT',
  check = 'CHECK',
  delete = 'DELETE',
}

export const ChallengeCard: FC<ChallengeCardProps> = ({ streak, text, checked, background, cardType }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const [deleteEnabled, setDeleteEnabled] = useState<boolean>(false)

  return (
    <Container background={background} onLongPress={() => setDeleteEnabled((prev) => !prev)}>
      <Column>
        <StreakRow>
          <Star width={24} height={24} />
          <StreakLabel> Streak: {streak}</StreakLabel>
        </StreakRow>
        {cardType === CardType.edit && <TextField placeholder="Beskrivning..."></TextField>}
        <ChallengeLabel>{text}</ChallengeLabel>
      </Column>
      <RightColumn>
        {cardType === CardType.check && <CheckBox isSelected={isChecked} setSelected={setIsChecked} />}
        {cardType === CardType.delete && deleteEnabled && (
          <IconContainer>
            <Delete width={30} height={30} color={'red'} />
          </IconContainer>
        )}
      </RightColumn>
    </Container>
  )
}

const Container = styled.TouchableOpacity<{ background: string }>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.background};
  border-radius: 10px;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
  margin: ${theme.spacing.small}px 0;
`

const Column = styled.View`
  justify-content: center;
  padding: ${theme.spacing.large}px;
  width: 80%;
`

const StreakRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${theme.spacing.small}px;
`

const StreakLabel = styled.Text`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.regular};
`

const ChallengeLabel = styled.Text`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.large}px;
  font-family: ${theme.fontFamily.regular};
`

const TextField = styled(TextInput)`
  width: 100%;
  font-size: ${theme.fontSize.large}px;
  background-color: ${theme.color.white};
  padding: ${theme.spacing.small}px;
  border-radius: 5px;
`

const RightColumn = styled.View`
  align-items: center;
  justify-content: center;
  width: 20%;
`

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: ${theme.spacing.tiny}px;
  background-color: ${theme.color.white};
`
