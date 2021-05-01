import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../../../assets/logo.png';
import Post from '../../components/Post';
import { usePosts } from '../../hooks/pots';
import { Container, Logo, NumberOfPostsContainer, NumberOfPostsText, PostsContainer, ScreenBackground, SearchBar, SearchInput } from './styles';

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const { posts } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState<Posts[]>([]);
  const searchInput = useRef(null);

  useEffect(() => {
    setFilteredPosts(posts);
    searchInput.current.clear();
  }, [posts])

  function handleSearchBar(value) {
    const filteredData = posts.filter(post => post.body.toLocaleLowerCase().match(value.toLocaleLowerCase()));
    setFilteredPosts(filteredData);
  }

  return (
    <ScreenBackground>
      <Container>
        <Logo resizeMode="contain" source={logo} />
        <SearchBar>
          <SearchInput placeholder="Search in posts" onChangeText={handleSearchBar} ref={searchInput} />
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#00000050" />
          </TouchableOpacity>
        </SearchBar>
        <PostsContainer>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item => String(item.id))}
            data={filteredPosts}
            renderItem={({item}) => 
              <Post
                userId={item.userId}
                id={item.id}
                title={item.title}
                body={item.body}
              />
            }
          />
        </PostsContainer>
        <NumberOfPostsContainer>
          <NumberOfPostsText>Number of posts: { filteredPosts.length }</NumberOfPostsText>
        </NumberOfPostsContainer>
      </Container>
    </ScreenBackground>
  )
}

export default Home;