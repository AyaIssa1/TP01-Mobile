import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { GestureHandlerRootView, ScrollView, Switch } from 'react-native-gesture-handler';
const burger = require('../assets/images/hamburger.jpg');
const falafel = require('../assets/images/falafel.jpg');
const shrimp = require('../assets/images/fried_shrimp.jpg');
const curry = require('../assets/images/chickpea_curry.jpg');
const fries = require('../assets/images/sweet-potato_fries.jpg');
const rolls = require('../assets/images/summer_roll.jpg');

const { width, height } = Dimensions.get('window');

const recipes = [
    { id: 1, type: 'omni', title: 'Burger', src: burger },
    { id: 2, type: 'veg', title: 'Falafel', src: falafel },
    { id: 3, type: 'omni', title: 'Fried Shrimp', src: shrimp },
    { id: 4, type: 'veg', title: 'Chickpea curry', src: curry },
    { id: 5, type: 'veg', title: 'Sweet Potato Fries', src: fries },
    { id: 6, type: 'omni', title: 'Summer Rolls', src: rolls },
]

export default function RecipesScreen() {
    return (<GestureHandlerRootView>
        <View style={styles.container}>
            <View style={styles.filterrecipe}>
                <Text>Végé seulement</Text>
                <Switch></Switch>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={{ flexDirection: 'row' }}
                style={styles.scroll}
            >
                {recipes.map(recipe => (
                    <View key={recipe.id} style={styles.recipebox}>
                        <Image style={styles.recipeimage} source={recipe.src} />
                        <Text style={styles.recipename}>{recipe.title}</Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', padding: width * 0.05 },
    filterrecipe: { alignItems: 'right' , flexDirection: 'row'},
    recipebox: { alignItems: 'center', padding: width * 0.04, margin: width * 0.02, borderRadius: 15, backgroundColor: '#9f9f74' },
    recipename: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
    recipeimage: { width: width * 0.7, height: 200, resizeMode: 'cover', marginBottom: 4 }
});