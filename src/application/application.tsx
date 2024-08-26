/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationApp } from "../navigation";
import { useCameraPermission } from 'react-native-vision-camera';

function App(): React.JSX.Element {
  const { requestPermission} = useCameraPermission()
  useEffect(()=>{
    requestPermission();
  }, [])
  return (
        <NavigationApp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
function requestPermission() {
  throw new Error('Function not implemented.');
}

