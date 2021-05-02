import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes'
import { PostsProvider } from './src/hooks/posts';
import { UserProvider } from './src/hooks/users';

export default function App() {
  return (
    <PostsProvider>
      <UserProvider>
        <StatusBar style="light" backgroundColor="#620d44" translucent />
        <Routes />
      </UserProvider>
    </PostsProvider>
  );
}
