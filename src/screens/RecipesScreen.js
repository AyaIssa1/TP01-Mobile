import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Switch } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const burger = require('../assets/images/hamburger.jpg');
const falafel = require('../assets/images/falafel.jpg');
const shrimp = require('../assets/images/fried_shrimp.jpg');
const curry = require('../assets/images/chickpea_curry.jpg');
const fries = require('../assets/images/sweet-potato_fries.jpg');
const rolls = require('../assets/images/summer_roll.jpg');

const { width } = Dimensions.get('window');

const recipes = [
  { id: 1, type: 'omni', title: 'Burger', src: burger },
  { id: 2, type: 'veg', title: 'Falafel', src: falafel },
  { id: 3, type: 'omni', title: 'Fried Shrimp', src: shrimp },
  { id: 4, type: 'veg', title: 'Chickpea curry', src: curry },
  { id: 5, type: 'veg', title: 'Sweet Potato Fries', src: fries },
  { id: 6, type: 'omni', title: 'Summer Rolls', src: rolls },
];

export default function RecipesScreen() {
  const [vegOnly, setVegOnly] = useState(false);
  const displayedRecipes = vegOnly ? recipes.filter(r => r.type === 'veg') : recipes;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.filterrecipe}>
          <Text style={{ marginRight: 10 }}>Végé seulement</Text>
          <Switch
            value={vegOnly}
            onValueChange={setVegOnly}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {displayedRecipes.map(recipe => (
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
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#e6c6a7ff'
  },
  filterrecipe: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  scrollContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  recipebox: {
    alignItems: 'center',
    padding: width * 0.04,
    marginBottom: width * 0.03,
    borderRadius: 15,
    backgroundColor: '#9f9f74',
    width: '100%'
  },
  recipename: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 8
  },
  recipeimage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12
  }
});
