import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
// import { Button } from 'react-native';
// import Page from './deck/PageList';

// Knapper og animationer
// https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator

// Den her skal bruges til at flytte rundt mellem sider
// https://reactnavigation.org/
// // Den her gør det samme på web
// https://reactrouter.com/en/main

// Kort API
// https://scryfall.com/docs/api/cards

/*
Card[name, amount, locations[]]
Lists[name, cardList]
*/

export default function App() {
  const [currentPage, setCurrentPage] = useState(true);
  if(currentPage) {
    return (
      <Page
        text = "This is a front page"
      >
        <PaperButton
        gotten = { currentPage }
        set = { setCurrentPage }
        />

        {/* <ReactButton
        gotten = { currentPage }
        set = { setCurrentPage }
        /> */}
      </Page>
    );
  }
  else {
    return (
      <Page
        text = "This is not a front page"
      >
        <PaperButton
        gotten = { currentPage }
        set = { setCurrentPage }
        />

        {/* <ReactButton
        gotten = { currentPage }
        set = { setCurrentPage }
        /> */}

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

export function PaperButton({ gotten, set }) {
  return (
    <Button
    mode = "text"
    onPress = {() => set(!gotten)}
    buttonColor = "#841584"
    textColor = "#FFFFFF"
    accessibilityLabel = "Learn more about this purple button"
    >
      Testing this button
    </Button>
  );
}

export function ReactButton({ gotten, set }) {
  return (
    <Button
      onPress={() => set(!gotten)}
      title="Learn More later"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
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
