import styled from 'styled-components/native'

export const SplashScreen = ({ children }: { children: JSX.Element }) => {
  return <Container>{children}</Container>
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  font-size: 28px;
`
