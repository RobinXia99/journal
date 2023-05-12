import styled from 'styled-components/native'
import { theme } from '../theme'

export const Title = styled.Text`
  font-size: ${theme.fontSize.xlarge}px;
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.black};
`

export const Undertitle = styled.Text`
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.darkGray};
`
