import { Dispatch, FC, SetStateAction, useRef, useState } from 'react'
import { KeyboardType, TextInput } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../theme'

interface InputField {
  label?: string
  input?: string
  placeholder: string
  onChangeText?: Dispatch<SetStateAction<string>>
  keyboardType?: KeyboardType
  secureTextEntry?: boolean
  children?: JSX.Element
  disabled?: boolean
  maxLength?: number
  error?: string
  width?: number
  autoFocus?: boolean
  darkMode?: boolean
}

export const InputField: FC<InputField> = ({
  label,
  input,
  placeholder,
  onChangeText,
  keyboardType = 'default',
  children,
  disabled,
  secureTextEntry,
  maxLength,
  error,
  width,
  autoFocus,
  darkMode,
}: InputField) => {
  const [focused, setFocused] = useState<boolean>(false)
  const inputRef = useRef<TextInput>(null)

  return (
    <Container width={width}>
      {label && <Label>{label}</Label>}
      <InputContainer focused={focused} error={!!error} input={input} disabled={disabled} darkMode={darkMode}>
        <Input
          autoFocus={autoFocus}
          ref={inputRef}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={theme.color.gray}
          value={input}
          onChangeText={onChangeText}
          selectionColor={theme.color.purple}
          multiline={false}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          maxLength={maxLength}
        />
        {children}
      </InputContainer>
      {error && <Error>{error}</Error>}
    </Container>
  )
}

const Container = styled.View<{ width?: number }>`
  width: ${(props) => props.width || 100}%;
`

const InputContainer = styled.View<{
  focused: boolean
  error: boolean
  input?: string
  disabled?: boolean
  darkMode?: boolean
}>`
  padding: ${theme.spacing.medium}px ${theme.spacing.small}px;
  flex-grow: 1;
  background-color: ${(props) =>
    props.disabled ? theme.color.lightGray : props.darkMode ? theme.color.transparent : theme.color.white};
  margin: ${theme.spacing.xsmall}px 0 ${(props) => (props.error ? theme.spacing.xsmall : theme.spacing.medium)}px;
  border-radius: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  border: 0.5px solid ${theme.color.darkGray};
`

const Input = styled(TextInput)`
  text-decoration: none;
  flex-grow: 1;
  color: ${theme.color.darkGray};
  font-size: ${theme.fontSize.default}px;
  width: 90%;
`
const Label = styled.Text`
  color: ${theme.color.darkGray};
  font-size: ${theme.fontSize.small}px;
`

const Error = styled.Text`
  color: ${theme.color.lightPurple};
`
