import styled from 'styled-components/native'
import { theme } from '../theme'
import { Star } from './icons/Star'
import { CheckBox } from './CheckBox'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native'
import { Delete } from './icons/Delete'
import { streakColor } from '../utils/calculationUtils'
import { useAppDispatch } from '../hooks/hooks'
import { deleteChallenge } from '../state/challenge'
import { documentId } from 'firebase/firestore'

interface ChallengeCardProps {
  id: string
  streak: number
  text: string
  checked: boolean
  newCompletionDate: string
  cardType: CardType
  textInput?: string
  onChangeText?: Dispatch<SetStateAction<string>>
}

export enum CardType {
  edit = 'EDIT',
  check = 'CHECK',
  delete = 'DELETE',
}

export const ChallengeCard: FC<ChallengeCardProps> = ({
  id,
  streak,
  text,
  checked,
  newCompletionDate,
  cardType,
  textInput,
  onChangeText,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const [deleteEnabled, setDeleteEnabled] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const handleDelete = async (documentId: string) => {
    setLoading(true)
    await dispatch(deleteChallenge(documentId))
    setLoading(false)
  }

  return (
    <Container background={streakColor(streak)} onLongPress={() => setDeleteEnabled((prev) => !prev)} checked={checked}>
      <Column>
        <StreakRow>
          <Star width={24} height={24} color={checked ? theme.color.white : theme.color.darkGreen} />
          <StreakLabel checked={checked}> Streak: {streak}</StreakLabel>
        </StreakRow>
        {cardType === CardType.edit && (
          <TextField placeholder="Beskrivning..." value={textInput} onChangeText={onChangeText}></TextField>
        )}
        <ChallengeLabel checked={checked}>{text}</ChallengeLabel>
      </Column>
      <RightColumn>
        {cardType === CardType.check && (
          <CheckBox
            isSelected={isChecked}
            setSelected={setIsChecked}
            text={text}
            streak={streak}
            documentId={id}
            newCompletionDate={newCompletionDate}
          />
        )}
        {cardType === CardType.delete && deleteEnabled && (
          <>
            {!loading ? (
              <IconContainer onPress={() => handleDelete(id)}>
                <Delete width={30} height={30} color={'red'} />
              </IconContainer>
            ) : (
              <ActivityIndicator color={theme.color.white} />
            )}
          </>
        )}
      </RightColumn>
    </Container>
  )
}

const Container = styled.TouchableOpacity<{ background: string; checked: boolean }>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => (props.checked ? props.background : theme.color.white)};
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

const StreakLabel = styled.Text<{ checked: boolean }>`
  color: ${(props) => (props.checked ? theme.color.white : theme.color.darkGreen)};
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.regular};
`

const ChallengeLabel = styled.Text<{ checked: boolean }>`
  color: ${(props) => (props.checked ? theme.color.white : theme.color.darkGray)};
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
