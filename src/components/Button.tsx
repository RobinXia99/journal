import { FC } from 'react'
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../theme'

interface Button extends TouchableOpacityProps {
  text: string
  loading?: boolean
  disabled?: boolean
  color: string
  background: string
}

export const Button: FC<Button> = ({ text, loading, disabled, color, background, ...rest }) => {
  return (
    <ButtonBase disabled={disabled} color={color} background={background} {...rest}>
      {loading ? (
        <ActivityIndicator color={color} style={{ padding: 2 }} />
      ) : (
        <>
          <StyledText color={color}>{text}</StyledText>
        </>
      )}
    </ButtonBase>
  )
}

const StyledText = styled.Text<{ color: string }>`
  font-size: ${theme.fontSize.default}px;
  color: ${(props) => props.color};
  padding: 0 ${theme.spacing.small}px;
  font-family: ${theme.fontFamily.regular};
`

const ButtonBase = styled(TouchableOpacity)<{ color: string; background: string }>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 50px;
  width: 100%;
  padding: ${theme.spacing.medium}px;
  align-items: center;
  margin: ${theme.spacing.xsmall}px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
