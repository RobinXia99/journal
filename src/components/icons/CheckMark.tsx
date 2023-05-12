import Svg, { Path } from 'react-native-svg'
import { theme } from '../../theme'
import { IconInterface } from './types'

export const CheckMark = ({ height, width, color = theme.color.gray, props, style }: IconInterface) => (
  <Svg width={width} height={height} fill={'none'} viewBox="0 0 24 24" {...props} style={style}>
    <Path d="m7.991 17.412-5.215-5.286L1 13.914 7.991 21 23 5.787 21.236 4 7.992 17.412Z" fill={color} />
  </Svg>
)
