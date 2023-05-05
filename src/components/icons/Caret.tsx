import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Caret = ({ height, width, color = '#222', props, style }: IconInterface) => (
  <Svg width={width} height={height} fill={'none'} viewBox="0 0 24 24" {...props} style={style}>
    <Path d="M17.77 3.77L16 2L6 12L16 22L17.77 20.23L9.54 12L17.77 3.77Z" fill={color} />
  </Svg>
)
