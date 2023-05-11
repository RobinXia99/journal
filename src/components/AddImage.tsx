import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { Button } from 'react-native'

interface AddImageProps {
  input?: string
  placeholder: string
  onChangeText?: Dispatch<SetStateAction<string>>
  maxLength?: number
}

export const AddImage: FC<AddImageProps> = ({ input, placeholder, onChangeText, maxLength = 80 }) => {
  return (
    <Container>
      <ImageFrame>
        <StyledImage source={{ uri: 'https://stalhetta.se/wp-content/uploads/placeholder.png' }} resizeMode="cover" />
      </ImageFrame>
      <TextInputContainer>
        <StyledTextInput
          placeholder={placeholder}
          placeholderTextColor={theme.color.gray}
          value={input}
          onChangeText={onChangeText}
          multiline={true}
          maxLength={maxLength}
          textAlignVertical="top"
        />
        <StyledButton onPress={() => console.log('SAVE')}>
          <ButtonText>Spara</ButtonText>
        </StyledButton>
      </TextInputContainer>
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${theme.color.white};
  padding: ${theme.spacing.xsmall}px;
  border-radius: 10px;
  shadow-opacity: 0.05;
  shadow-offset: 0px 2px;
  margin-bottom: ${theme.spacing.medium}px;
`

const ImageFrame = styled.TouchableOpacity`
  height: 120px;
  width: 35%;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
`

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

const TextInputContainer = styled.View`
  width: 60%;
  height: 120px;
  justify-content: space-between;
`

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 70%;
  background-color: ${theme.color.lightGray};
  border-radius: 5px;
  padding: 10px;
`

const StyledButton = styled.TouchableOpacity`
  background-color: ${theme.color.green};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100px;
`

const ButtonText = styled.Text`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.small}px;
  font-family: ${theme.fontFamily.bold};
  padding: ${theme.spacing.xsmall}px;
`
