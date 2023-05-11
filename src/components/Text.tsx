import styled, { css } from 'styled-components/native'
import { theme } from '../theme'

export const Title = styled.Text<{ hasMargin?: boolean; color?: string }>`
  font-size: ${theme.fontSize.large}px;
  color: ${(props) => props.color || theme.color.purple};
  font-family: ${theme.fontFamily.bold};

  ${(props) =>
    props.hasMargin &&
    css`
      margin-bottom: ${theme.spacing.large}px;
    `}
`

export const TitleSmall = styled(Title)`
  font-size: ${theme.fontSize.default}px;
`

export const BodyText = styled.Text<{ color?: string; hasMargin?: boolean }>`
  font-size: ${theme.fontSize.default}px;
  color: ${(props) => props.color || theme.color.darkGrey};

  ${(props) =>
    props.hasMargin &&
    css`
      margin-bottom: ${theme.spacing.xlarge}px;
    `}
`

export const BodyTextBold = styled(BodyText)<{ color?: string }>`
  font-family: ${theme.fontFamily.bold};
  color: ${(props) => props.color || theme.color.darkGrey};
`

export const UnderlinedGrey = styled(BodyTextBold)`
  color: ${theme.color.grey};
  text-decoration: underline;
`

export const Label = styled.Text`
  color: ${theme.color.grey};
  font-size: ${theme.fontSize.small}px;
`

export const TextLink = styled(BodyText)`
  color: ${theme.color.purple};
`
