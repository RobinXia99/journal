import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { CheckMark } from './icons/CheckMark'
import { useAppDispatch } from '../hooks/hooks'
import { Challenge, updateChallenge } from '../state/challenge'

interface CheckBoxProps {
  isSelected: boolean
  setSelected: Dispatch<SetStateAction<boolean>>
  text: string
  streak: number
  documentId: string
  newCompletionDate: string
}

export const CheckBox: FC<CheckBoxProps> = ({
  isSelected,
  setSelected,
  text,
  streak,
  documentId,
  newCompletionDate,
}) => {
  const dispatch = useAppDispatch()

  const handleCheck = (text: string, streak: number, documentId: string, newCompletionDate: string) => {
    if (!isSelected) {
      setSelected(true)
      dispatch(updateChallenge({ text, streak, documentId, newCompletionDate }))
    }
  }

  return (
    <ContainerCheck
      isSelected={isSelected}
      onPress={() => handleCheck(text, streak, documentId, newCompletionDate)}
      activeOpacity={1}
    >
      <CheckMark width={18} height={18} color={theme.color.white} />
    </ContainerCheck>
  )
}

const ContainerCheck = styled.TouchableOpacity<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? theme.color.green : theme.color.white)};
  border-radius: 5px;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 0.2px solid ${theme.color.darkGreen};
`
