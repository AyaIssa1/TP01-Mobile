import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Qui nous sommes?</Text>

        <Text style={styles.lead}>
          Bienvenue sur <Text style={{ fontWeight: '700' }}>QuickBite</Text> — l'application
          pensée par trois étudiantes en <Text style={{ fontWeight: '700' }}>Techniques de
          l'informatique</Text> au <Text style={{ fontWeight: '700' }}>Cégep Marie-Victorin</Text>.
        </Text>

        <Text style={styles.paragraph}>
          Nous sommes passionnées par la programmation et par la bonne bouffe (surtout les burgers! 🍔).
          QuickBite a été créé pour rendre la découverte et la commande de hamburgers simple,
          rapide et agréable. Notre mission : offrir une expérience intuitive, visuelle et
          délicieuse.
        </Text>

        <Text style={styles.subheading}>Notre équipe</Text>

        <View style={styles.teamRow}>
          <View style={styles.member}>
            <View style={[styles.avatar, { backgroundColor: '#FFD7BA' }]}>
              <Text style={styles.avatarText}>L.P</Text>
            </View>
          </View>
          <View style={styles.member}>
            <View style={[styles.avatar, { backgroundColor: '#CDE7FF' }]}>
              <Text style={styles.avatarText}>A.I</Text>
            </View>
            <Text style={styles.name}></Text>
          </View>

          <View style={styles.member}>
            <View style={[styles.avatar, { backgroundColor: '#E6D6FF' }]}>
              <Text style={styles.avatarText}>Y.Y</Text>
            </View>
          </View>
        </View>

        <Text style={styles.paragraph}>
          QuickBite, c'est aussi :
        </Text>

        <View style={styles.bullets}>
          <Text style={styles.bullet}>• Interface simple et rapide</Text>
          <Text style={styles.bullet}>• Des photos appétissantes de burgers</Text>
          <Text style={styles.bullet}>• Des suggestions personnalisées</Text>
        </View>
        <Text style={styles.small}>© QuickBite — Projet étudiant • Cégep Marie-Victorin</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6c6a7ff',
    padding: 20,
  },
  card: {
    width: '90%',
    maxWidth: 720,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    alignItems: 'center',
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  lead: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 22,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  member: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  bullets: {
    marginBottom: 16,
  },
  bullet: {
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
  cta: {
    backgroundColor: '#FF7A59',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 12,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  small: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 16,
  },
});