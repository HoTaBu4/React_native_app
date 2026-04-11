import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemeView from '../components/ThemeView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemedLogo style={styles.img} />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>

      <Link href="/about" style={styles.link}>
        <ThemedText>
        About Page
        </ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText>
          Contact Page
        </ThemedText>
      </Link>
    </ThemeView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginVertical: 20
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
