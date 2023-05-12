import { FC, useState } from 'react'
import styled from 'styled-components/native'
import { InputField } from '../components/Input'
import { theme } from '../theme'
import { Button } from '../components/Button'
import { validEmailExp } from '../utils/regularExpressions'
import { authCreateAccount } from '../utils/firebaseUtils'

export const SignUpScreen: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const validEmail = validEmailExp.test(email)
  const validPassword = password.length >= 6
  const validInput = validEmail && validPassword

  const signUp = async (email: string, password: string) => {
    console.log(email, password)
    try {
      setLoading(true)
      await authCreateAccount(email, password)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Title>Skapa konto</Title>
      <InputField placeholder="E-post" input={email} onChangeText={setEmail}></InputField>
      <InputField placeholder="Lösenord" input={password} onChangeText={setPassword} secureTextEntry></InputField>

      <Button
        text="Skapa konto"
        background={theme.color.transparent}
        color={theme.color.darkerGreen}
        disabled={!validInput}
        loading={loading}
        onPress={() => signUp(email, password)}
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
