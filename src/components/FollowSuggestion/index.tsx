import React from 'react';

import {
    Container,
    Avatar,
    Info,
    FollowButton
} from './style';

interface Props {
    image: string;
    name: string;
    nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({
    image, name, nickname
}) => {
  return(
    <Container>
        <div>
            <Avatar>
                <img src={image} alt="perfil avatar" />
            </Avatar>

            <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
            </Info>

        </div>
        
        <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;