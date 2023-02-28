import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

// Knapper og animationer
// https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator

// Den her skal bruges til at flytte rundt mellem sider
// https://reactnavigation.org/
// // Den her gør det samme på web
// https://reactrouter.com/en/main

// Kort API
// https://scryfall.com/docs/api/cards

export default function App() {
  const [currentPage, setCurrentPage] = useState(true);
  if(currentPage) {
    return (
      <Page 
        text = "This is a front page"
      >
        <Button 
          mode = "text"
          onPress = {() => setCurrentPage(false)}
          buttonColor = "#841584"
          textColor = "#FFFFFF"
          accessibilityLabel = "Learn more about this purple button"
        >
          Testing new button
        </Button>
      </Page>
    );
  }
  else {
    return (
      <Page
        text = "This is not a front page"
      >
        <Button 
          mode = "text"
          onPress = {() => setCurrentPage(true)}
          buttonColor = "#841584"
          textColor = "#FFFFFF"
          accessibilityLabel = "Learn more about this purple button"
        >
          Testing another button
        </Button>
      </Page>
    );
  }
}

export function Page({ text, children }) {
  return (
    <View style = {styles.container}>
      <Text>
        {text}
      </Text>
      {children}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
