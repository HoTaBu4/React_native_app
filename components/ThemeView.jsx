import { useColorScheme, View} from 'react-native'
import { Colors } from '../constants/Colors'

const ThemeView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme()
  const theme  = Colors[colorScheme] || Colors.light

  return (
    <View
      {...props}
      style={[
        { backgroundColor: theme.background },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default ThemeView
