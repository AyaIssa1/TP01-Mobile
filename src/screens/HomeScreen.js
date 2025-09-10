import React, { useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated ,TouchableOpacity } from 'react-native';
import logo from '../assets/images/logo.png';

export default function HomeScreen({ navigation }) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ])
    ).start();
  }, [opacity]);

  return (
   <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Animated.Image
          source={logo}
          style={[styles.image, { opacity }]}
        />

      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6c6a7ff'
  },
 // title: {
   // fontSize: 22, fontWeight: '600', color: '#8B5E34', fontFamily: 'Times New Roman'
  //},
     //<Text style={styles.title}>Accueil</Text>
        //<View style={{ height: 12 }} />
        //<Button
                  //title="Voir le Compteur"
                  //onPress={() => navigation.navigate('Counter')}
                ///>
  image: {
    width: 120, height: 120, marginBottom: 20
  }
});
