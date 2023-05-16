import { FC, useState } from 'react'
import styled from 'styled-components/native'
import { InputField } from '../components/Input'
import { theme } from '../theme'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { validEmailExp } from '../utils/regularExpressions'
import { authSignIn } from '../utils/firebaseUtils'
import { useAppSelector } from '../hooks/hooks'
import { selectUser } from '../state/user'

export const SignInScreen: FC = () => {
  const { navigate } = useNavigation()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const validEmail = validEmailExp.test(email)
  const validPassword = password.length >= 6
  const validInput = validEmail && validPassword

  const user = useAppSelector(selectUser)

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      await authSignIn(email, password)
      console.log(user)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Logga in</Title>
      </TitleContainer>
      <InputField placeholder="E-post" input={email} onChangeText={setEmail} label="E-post" />
      <InputField placeholder="Lösenord" input={password} onChangeText={setPassword} secureTextEntry label="Lösenord" />
      <Button
        text="Logga in"
        background={!validInput ? theme.color.transparent : theme.color.green}
        color={!validInput ? theme.color.darkGray : theme.color.white}
        loading={loading}
        disabled={!validInput}
        onPress={() => signIn(email, password)}
      />
      <Divider />
      <Label>
        Har du inget konto? <UnderlinedLabel onPress={() => navigate('SignUp')}>Skapa konto</UnderlinedLabel>
      </Label>
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

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.darkGray};
  margin: ${theme.spacing.medium}px;
`

const Label = styled.Text`
  font-size: ${theme.fontSize.default}px;
  color: ${theme.color.darkGray};
  text-align: center;
  margin-bottom: ${theme.spacing.xxlarge}px;
`

const UnderlinedLabel = styled.Text`
  text-decoration: underline;
`
