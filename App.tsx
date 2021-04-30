import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#620d44" translucent />
      <Routes />
    </>
  );
}
