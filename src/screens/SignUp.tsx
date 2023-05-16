import { FC, useState } from 'react'
import styled from 'styled-components/native'
import { InputField } from '../components/Input'
import { theme } from '../theme'
import { Button } from '../components/Button'
import { validEmailExp } from '../utils/regularExpressions'
import { authCreateAccount } from '../utils/firebaseUtils'

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
      <TitleContainer>
        <Title>Skapa konto</Title>
      </TitleContainer>
      <InputField placeholder="Förnamn" input={firstName} onChangeText={setFirstName} label="Förnamn" />
      <InputField placeholder="E-post" input={email} onChangeText={setEmail} label="E-post" />
      <InputField placeholder="Lösenord" input={password} onChangeText={setPassword} secureTextEntry label="Lösenord" />

      <Button
        text="Skapa konto"
        background={!validInput ? theme.color.transparent : theme.color.green}
        color={!validInput ? theme.color.darkGray : theme.color.white}
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
  align-items: center;
  padding: ${theme.spacing.large}px;
`
const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${theme.spacing.xlarge}px 0;
  margin-top: 100px;
`

const Title = styled.Text`
  color: ${theme.color.darkGray};
  font-size: ${theme.fontSize.xlarge}px;
`
