import React, { useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';
import logo from '../assets/images/logo.png';

export default function HomeScreen({ navigation }) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animation en boucle
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ])
    ).start();
  }, [opacity]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[styles.image, { opacity }]}
      />

      <Text style={styles.title}>Accueil</Text>

      <Button
        title="Aller aux Détails"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={{ height: 12 }} />
      <Button
        title="Voir le Compteur"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6c6a7ff'
  },
  title: {
    fontSize: 22, fontWeight: '600', color: '#8B5E34', fontFamily: 'Times New Roman'
  },
  image: {
    width: 120, height: 120, marginBottom: 20
  }
});
