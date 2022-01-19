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

const Tweet: React.FC = () => {
  return(
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>Perfil abc</strong>
                      <span>@perfil01</span>
                      <Dot />
                      <time>19 de jan</time>
                  </Header>

                  <Description>Título da postagem</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          12
                      </Status>
                      <Status>
                          <RetweetIcon />
                          20
                      </Status>
                      <Status>
                          <LikeIcon />
                          34
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;