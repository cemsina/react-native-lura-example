import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LuraPlayer } from "react-native-lura";

export default function App() {
  return (
    <View style={styles.container}>
      <LuraPlayer
        accessKey="wyJe6YlbNfdbkElfeKfo3NGas8Dbdn48"
        video="3973918"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWQiOiIzOTczOTE4IiwiaXNzIjoid3lKZTZZbGJOZmRia0VsZmVLZm8zTkdhczhEYmRuNDgifQ.0mpWd0_5hSbNs2Th_vwZXGBtn3dN1HmvxQciR0UFPU8"
        style={styles.player}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  player: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
  },
});
