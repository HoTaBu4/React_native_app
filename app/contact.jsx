import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'
import ThemeView from '../components/ThemeView'

const Contact = () => {
  return (
    <ThemeView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Contact Page
      </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>
          Home Page
        </ThemedText>
      </Link>
    </ThemeView>
  )
}

export default Contact

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