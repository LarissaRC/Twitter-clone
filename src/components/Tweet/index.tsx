import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './style';

interface Props {
    image: string;
    name: string;
    nickname: string;
    date: string;
    text: string;
    tweetImage: string;
    comments: number;
    retweets: number;
    likes: number;
}

const Tweet: React.FC<Props> = ({
    image,
    name,
    nickname,
    date,
    text,
    tweetImage,
    comments,
    retweets,
    likes
}) => {
  return(
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar>
                  <img src={image} alt="User avatar of the retweet" />
              </Avatar>
              <Content>
                  <Header>
                      <strong>{name}</strong>
                      <span>{nickname}</span>
                      <Dot />
                      <time>{date}</time>
                  </Header>

                  <Description>{text}</Description>

                  <ImageContent>
                      <img src={tweetImage} alt="Tweet" />
                  </ImageContent>

                  <Icons>
                      <Status>
                          <CommentIcon />
                          {comments}
                      </Status>
                      <Status>
                          <RetweetIcon />
                          {retweets}
                      </Status>
                      <Status>
                          <LikeIcon />
                          {likes}
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;