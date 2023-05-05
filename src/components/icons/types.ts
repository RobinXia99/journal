import { ViewProps, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface IconInterface extends ViewProps {
  width: number
  height: number
  color?: string
  style?: ViewStyle
  props?: SvgProps
}
