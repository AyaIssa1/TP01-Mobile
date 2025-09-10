import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/images/logo.png';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.image} source={logo}/>
            </TouchableOpacity>
            <Text style={styles.title}>Accueil</Text>
            <Button title="Aller aux Détails" onPress={() =>
                navigation.navigate('Details')} />
            <View style={{ height: 12 }} />
            <Button title="Voir le Compteur" onPress={() =>
                navigation.navigate('Counter')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6c6a7ff'
    },
    title: { fontSize: 22, fontWeight: '600', color: '#8B5E34', fontFamily: 'Times New Roman'},
    image: { width: 120, height: 120, marginBottom: 20 }
}); 