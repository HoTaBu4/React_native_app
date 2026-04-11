import { Link } from 'expo-router'
import { StyleSheet,useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import ThemedText from '../components/ThemedText'
import ThemeView from '../components/ThemeView'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemeView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>
          Home Page
        </ThemedText>
      </Link>
    </ThemeView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})
