import styled from 'styled-components/native'
import { Title } from './Text'
import { theme } from '../theme'
import { FC } from 'react'

interface EmptyStateProps {
  text: string
}

export const EmptyState: FC<EmptyStateProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Text = styled(Title)`
  font-size: ${theme.fontSize.default}px;
`
