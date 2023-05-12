import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Star = ({ height, width, color = '#fff', style, props }: IconInterface) => (
  <Svg width={width} height={height} fill={'none'} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z"
      fill={color}
    />
  </Svg>
)
