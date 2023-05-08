import { FC } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import styled from 'styled-components/native'
import { theme } from '../theme'

interface ScreenBaseProps {
  backgroundColor?: string
  children: React.ReactNode
}

export const ScreenBase: FC<ScreenBaseProps> = ({ children, backgroundColor }) => {
  const headerHeight = useHeaderHeight()
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined

  return (
    <KeyboardAvoidingView behavior={behavior} enabled={true} style={{ flex: 1 }} keyboardVerticalOffset={headerHeight}>
      <StyledScrollView
        backgroundColor={backgroundColor}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: theme.spacing.xxlarge }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </StyledScrollView>
    </KeyboardAvoidingView>
  )
}

export const StyledScrollView = styled.ScrollView<{ backgroundColor?: string }>`
  padding: ${theme.spacing.xlarge}px ${theme.spacing.large}px 0;
  background: ${(props) => props.backgroundColor || theme.color.lightGrey};
`
