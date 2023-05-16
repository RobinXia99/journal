import { FC, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import * as ImagePicker from 'expo-image-picker'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { selectUser } from '../state/user'
import { Journal, selectTodaysJournal, updateJournal } from '../state/journal'
import { ActivityIndicator } from 'react-native'

interface AddImageProps {
  placeholder: string
  maxLength?: number
  completed: boolean
  journal: Journal | null
}

export const AddImage: FC<AddImageProps> = ({ placeholder, maxLength = 80, completed, journal }) => {
  const dispatch = useAppDispatch()
  const todaysJournal = useAppSelector(selectTodaysJournal)
  const [image, setImage] = useState<string>(journal?.photo || '')
  const [uploading, setUploading] = useState<boolean>(false)
  const [input, setInput] = useState<string>(journal?.photoText || '')
  const user = useAppSelector(selectUser)

  useEffect(() => {
    setImage(todaysJournal?.photo || '')
    setInput(todaysJournal?.photoText || '')
  }, [todaysJournal])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const uploadImage = async (uri: string) => {
    setUploading(true)
    const response = await fetch(uri)
    const blob = await response.blob()

    const storage = getStorage()
    const storageRef = ref(storage, `/images/${user.uid}/${new Date().toISOString()}`)

    await uploadBytes(storageRef, blob).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        dispatch(
          updateJournal({
            documentId: todaysJournal?.documentId,
            morningJournal: todaysJournal?.morningJournal,
            nightJournal: todaysJournal?.nightJournal,
            photo: url || todaysJournal?.photo,
            photoText: input || todaysJournal?.photoText,
            created_at: todaysJournal?.created_at,
          })
        )
      })
    })
    setUploading(false)
  }

  return (
    <Container completed={completed}>
      <ImageFrame onPress={() => pickImage()}>
        <StyledImage
          source={{ uri: image || 'https://stalhetta.se/wp-content/uploads/placeholder.png' }}
          resizeMode="cover"
        />
      </ImageFrame>
      <TextInputContainer>
        <StyledTextInput
          placeholder={placeholder}
          placeholderTextColor={theme.color.gray}
          value={input}
          onChangeText={setInput}
          multiline={true}
          maxLength={maxLength}
          textAlignVertical="top"
        />
        <StyledButton onPress={() => uploadImage(image)} disabled={uploading} completed={completed}>
          {uploading ? (
            <ActivityIndicator color={theme.color.white} style={{ padding: theme.spacing.tiny }} />
          ) : (
            <ButtonText completed={completed}>Spara</ButtonText>
          )}
        </StyledButton>
      </TextInputContainer>
    </Container>
  )
}

const Container = styled.View<{ completed: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => (props.completed ? theme.color.green : theme.color.white)};
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
  font-size: ${theme.fontSize.default}px;
  border-radius: 5px;
  padding: 10px;
`

const StyledButton = styled.TouchableOpacity<{ completed: boolean }>`
  background-color: ${(props) => (props.completed ? theme.color.white : theme.color.green)};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100px;
`

const ButtonText = styled.Text<{ completed: boolean }>`
  color: ${(props) => (props.completed ? theme.color.green : theme.color.white)};
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.regular};
  padding: ${theme.spacing.tiny}px;
`
