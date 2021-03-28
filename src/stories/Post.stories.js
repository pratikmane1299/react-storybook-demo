import React from 'react';

import Post from '../components/Post';

export default {
  title: 'Example/Post',
  component: Post
};

export const Default = () => {
  return (
    <div style={{ width: 444 }}>
      <Post
        post={{
          id: 1,
          title: "fdsfskljl",
          body: "sjflksjlkdsfjkk",
          isFavourite: false,
        }}
        onMarkFavourite={(id) => console.log(id)}
      />
    </div>
  );
}

Default.bind({});

export const Favourite = () => {
  return (
    <div style={{ width: 444 }}>
      <Post
        post={{
          id: 1,
          title: "rewiourowrowol",
          body: "dfdsjsoijfiosjfosjfds fdsfsf dsfds afdas",
          isFavourite: true,
        }}
        onMarkFavourite={(id) => console.log(id)}
      />
    </div>
  );
}

Favourite.bind({});
