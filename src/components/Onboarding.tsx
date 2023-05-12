import { Dispatch, FC, ReactNode, SetStateAction, useRef, useState } from 'react'
import { ViewabilityConfig, ViewToken } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Close } from './icons/Close'
import { OnboardingSlide } from './OnboardingSlide'
import { theme } from '../theme'

export interface SlideProps {
  id: string
  color: string
  text: ReactNode
}

export interface RenderItem {
  item: SlideProps
  index: number
}

interface OnboardingProps {
  setFinishedOnboarding: Dispatch<SetStateAction<boolean>>
}

export const Onboarding: FC<OnboardingProps> = ({ setFinishedOnboarding }) => {
  const videos: SlideProps[] = [
    {
      id: '1',
      color: theme.color.darkerGreen,
      text: 'Mår du dåligt?',
    },
    {
      id: '2',
      color: theme.color.darkGreen,
      text: 'Känns allt meningslöst?',
    },
    {
      id: '3',
      color: theme.color.green,
      text: 'Du är inte ensam.',
    },
    {
      id: '4',
      color: theme.color.lightGreen,
      text: 'Du KAN bli bättre.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const onViewableItemsChanged = (info: { viewableItems: ViewToken[] }) => {
    if (!info) return
    if (!(info.viewableItems.length > 0)) return

    const newIndex = info.viewableItems[0].index

    setActiveIndex(newIndex || 0)
  }

  const viewabilityConfig: ViewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
  }

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

  return (
    <Container>
      <FlatList
        style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        data={videos}
        renderItem={({ item, index }) => <OnboardingSlide item={item} index={index} />}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate={'fast'}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
      <CloseContainer>
        <CloseLabelContainer onPress={() => setFinishedOnboarding(true)}>
          <Close height={28} width={28} />
        </CloseLabelContainer>
      </CloseContainer>
      <PaginationContainer>
        <PaginationDot active={activeIndex === 0} />
        <PaginationDot active={activeIndex === 1} style={{ marginLeft: theme.spacing.xsmall, marginRight: 4 }} />
        <PaginationDot active={activeIndex === 2} style={{ marginRight: theme.spacing.xsmall, marginLeft: 4 }} />
        <PaginationDot active={activeIndex === 3} />
      </PaginationContainer>
    </Container>
  )
}

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.darkGreen};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${theme.color.lighterGreen};
`

const CloseContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${theme.spacing.xxlarge}px ${theme.spacing.large}px;
`

const CloseLabelContainer = styled(TouchableOpacity)`
  flex-direction: row;
  padding: ${theme.spacing.tiny}px;
`

const PaginationContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xxlarge}px;
`
const PaginationDot = styled.View<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border: 0.5px solid ${theme.color.white};
  border-radius: 50px;
  background-color: ${(props) => (props.active ? theme.color.white : 'transparent')};
`
