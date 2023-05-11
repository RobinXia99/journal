import { FC } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { LinkTag } from '../components/LinkTag'
import { AddImage } from '../components/AddImage'

export const HomeScreen: FC = () => {
  return (
    <ScreenBase>
      <Title>Dokumentera dagen</Title>
      <Divider />
      <LinkTag title="Vad ser jag fram emot idag?" onPress={() => console.log('Clicked')} />
      <LinkTag title="Vad är jag stolt/tacksam över idag?" onPress={() => console.log('Clicked2')} />
      <AddImage placeholder="Bildbeskrivning..." />
      <CompletionContainer>
        <Title>0/3</Title>
      </CompletionContainer>
    </ScreenBase>
  )
}

const Title = styled.Text`
  font-size: ${theme.fontSize.xlarge}px;
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.black};
`

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.darkGray};
  margin: ${theme.spacing.large}px 0;
`

const CompletionContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.large}px;
`
