import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostsContextData = {
  posts: Post[];
  addPost({ userId, id, title, body }: Post): void;
  deletePost(postId: number): void;
}

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

export const PostsProvider: React.FC = ({children}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('posts');

      setPosts(response.data)
    }
    fetchData()
  }, [])

  function addPost({ userId, id, title, body }: Post) {
    const newPost = {
      userId,
      id,
      title,
      body
    }

    setPosts([...posts, newPost])
  }

  function deletePost(postId: number) {
    const filteredData = posts.filter(post => post.id !== postId);

    setPosts(filteredData);
  }

  return (
    <PostsContext.Provider value={{ 
      posts,
      addPost,
      deletePost
    }}>
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts(): PostsContextData {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }

  return context;
}
