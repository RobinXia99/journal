import { FC, useState } from 'react'
import styled from 'styled-components/native'
import { InputField } from '../components/Input'
import { theme } from '../theme'
import { Button } from '../components/Button'
import { validEmailExp } from '../utils/regularExpressions'
import { authCreateAccount } from '../utils/firebaseUtils'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

export const SignUpScreen: FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const validEmail = validEmailExp.test(email)
  const validPassword = password.length >= 6
  const validInput = validEmail && validPassword

  const signUp = async (firstName: string, email: string, password: string) => {
    try {
      setLoading(true)
      await authCreateAccount(firstName, email, password)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Title>Skapa konto</Title>
      <InputField placeholder="Förnamn" input={firstName} onChangeText={setFirstName}></InputField>
      <InputField placeholder="E-post" input={email} onChangeText={setEmail}></InputField>
      <InputField placeholder="Lösenord" input={password} onChangeText={setPassword} secureTextEntry></InputField>

      <Button
        text="Skapa konto"
        background={!validInput ? theme.color.transparent : theme.color.green}
        color={!validInput ? theme.color.darkerGreen : theme.color.white}
        loading={loading}
        disabled={!validInput}
        onPress={() => signUp(firstName, email, password)}
      />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.large}px;
`
const Title = styled.Text`
  color: ${theme.color.darkGreen};
  font-size: 48px;
  padding: ${theme.spacing.large}px;
`
