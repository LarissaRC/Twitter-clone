import React from 'react';

import Tweet from '../Tweet';

import { Container, Tabs, Tab, Tweets } from './style';

const Feed: React.FC = () => {
  return(
      <Container>
          <Tabs>
            <Tab active>Tweets</Tab>
            <Tab>Tweets e respostas</Tab>
            <Tab>Mídias</Tab>
            <Tab>Curtidas</Tab>
          </Tabs>

          <Tweets>
            <Tweet image="https://pbs.twimg.com/profile_images/891332160996745216/TIKnwSca_400x400.jpg" name="Nora Potwora" nickname="@NoraPotwora" date="23 h" text="Burrito with his friends" tweetImage="https://pbs.twimg.com/media/FJZ5qNbWQAIW3Os?format=jpg&name=large" comments={18} retweets={1000} likes={7400} />
            <Tweet image="https://pbs.twimg.com/profile_images/1371243593847992328/ZMBWLzBF_400x400.jpg" name="Pythox𓆙" nickname="@Thaisuppe" date="29 de dez de 2021" text="Bad Coffee Day" tweetImage="https://pbs.twimg.com/media/FHxkCQjWUAEH_Z3?format=jpg&name=small" comments={7} retweets={645} likes={4675} />
            <Tweet image="https://pbs.twimg.com/profile_images/793385397732638720/tNcUSlI__400x400.jpg" name="Alex Norris" nickname="@dorrismccomics" date="13 de dez de 2021" text="meeting your art heroes" tweetImage="https://pbs.twimg.com/media/FGfidXlWQAEe4aw?format=jpg&name=large" comments={49} retweets={3400} likes={2390} />
            <Tweet image="https://pbs.twimg.com/profile_images/1372461082749530112/8D_SZN-g_400x400.jpg" name="HourlyYeen" nickname="@HourlyYeen" date="22 h" text="" tweetImage="https://pbs.twimg.com/media/FJaAn87VQAIPQhk?format=jpg&name=900x900" comments={1} retweets={30} likes={211} />
            <Tweet image="https://pbs.twimg.com/profile_images/1374732338870038530/XWwmZF5l_400x400.jpg" name="Dr. Wildlife" nickname="@DrWildlife" date="18 de jan" text="Glass frogs are a group of amphibians found in Central and South America. While the general coloration of these little ones appears lime green, the abdominal skin is often completely transparent and translucent Cara de sapo" tweetImage="https://pbs.twimg.com/media/FJZOEVSXoAoX0sq?format=jpg&name=900x900" comments={1} retweets={7} likes={85} />
            <Tweet image="https://pbs.twimg.com/profile_images/1483786099109552128/rvXYXvtY_400x400.jpg" name="🔥Stef🔥" nickname="@trilobug3d" date="17 de jan" text="some assembly required" tweetImage="https://pbs.twimg.com/media/FJJ_iOTXEA0k3nw?format=jpg&name=medium" comments={2} retweets={26} likes={310} />
          </Tweets>
      </Container>
  );
}

export default Feed;