import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Home = ({ height, width, color = '#222', props, style }: IconInterface) => (
  <Svg width={width} height={height} fill={'none'} viewBox="0 0 24 24" {...props} style={style}>
    <Path
      d="M12 7.21529L15.5 10.9212V17.3529H14.1V12.4118H9.9V17.3529H8.5V10.9212L12 7.21529ZM12 5L5 12.4118H7.1V19H11.3V14.0588H12.7V19H16.9V12.4118H19L12 5Z"
      fill={color}
    />
  </Svg>
)
