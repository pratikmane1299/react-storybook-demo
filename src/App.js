import { useState } from 'react';
import './App.css';
import { Title } from './components/Title';
import { Button } from './components/Button';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([{
    id: 111,
    title: "This is post title",
    body: "This is post body.",
    isFavourite: false,
  },{
    id: 121,
    title: "Favourite post example",
    body: "This is a favourite post.",
    isFavourite: true,
  },{
    id: 131,
    title: "Another post example",
    body:
      "This is a looooooooooooooooooooooooooooooooooooooooong post.",
    isFavourite: false,
  }]);

  const handleMarkFavourite = (id) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return { ...post, isFavourite: !post.isFavourite}
      } else {
        return post;
      }
    });

    setPosts(updatedPosts);
  }

  return (
    <div style={{ margin: "1rem" }}>
      <Title>This is a title.</Title>

      <Button label="Default" />
      <Button label="secondary" color="secondary" />
      <Button label="Small" size="small" />
      <Button label="Large" size="large" />

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Title>Post Example</Title>
        {posts.map(post => (
          <Post key={post.id} post={post} onMarkFavourite={handleMarkFavourite} />
        ))}
      </div>
    </div>
  );
}

export default App;
