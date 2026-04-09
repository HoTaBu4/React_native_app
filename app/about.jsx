import { Link } from 'expo-router'
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import Logo from '../assets/img/logo_light.png'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={Logo} />
      <Text style={[styles.title, { backgroundColor: theme.background}]}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>
      <Link href="/" style={styles.link}>Home Page</Link>
    </View>
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
