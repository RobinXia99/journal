import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Stats = ({ height, width, color = '#222', props }: IconInterface) => (
  <Svg width={width} height={height} fill={'none'} viewBox="0 0 24 24" {...props}>
    <Path d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z" fill={color} />
  </Svg>
)
