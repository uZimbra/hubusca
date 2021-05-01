import React, { ReactElement } from 'react';
import { Text } from 'react-native';

interface Params extends ReactElement {
  route: {
    params: {
      userId: number;
    }
  }
}

const NewPost: React.FC<Params> = ({ route }: Params) => {
  return (
    <>
      <Text>New Post</Text>
      <Text>New Post</Text>
      <Text>New Post</Text>
    </>
  )
}

export default NewPost;