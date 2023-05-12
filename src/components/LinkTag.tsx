import { FC } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { Caret } from './icons/Caret'

interface LinkTag {
  title: string
  onPress: () => void
}

export const LinkTag: FC<LinkTag> = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <IconHolder>
        <Caret height={24} width={24} color={theme.color.gray} style={{ transform: [{ rotate: '180deg' }] }} />
      </IconHolder>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${theme.color.white};
  border-radius: 10px;
  shadow-opacity: 0.05;
  shadow-offset: 0px 2px;
  margin-bottom: ${theme.spacing.large}px;
`
const Title = styled.Text`
  color: ${theme.color.darkGray};
  font-family: ${theme.fontFamily.regular};
  font-size: ${theme.fontSize.default}px;
  padding: ${theme.spacing.medium}px ${theme.spacing.small}px;
`

const IconHolder = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 ${theme.spacing.tiny}px;
`
