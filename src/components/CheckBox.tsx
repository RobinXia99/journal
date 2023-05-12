import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { CheckMark } from './icons/CheckMark'

interface CheckBoxProps {
  isSelected: boolean
  setSelected: Dispatch<SetStateAction<boolean>>
}

export const CheckBox: FC<CheckBoxProps> = ({ isSelected, setSelected }) => {
  return (
    <ContainerCheck isSelected={isSelected} onPress={() => setSelected(!isSelected)} activeOpacity={1}>
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
`
