import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './style';

const ProfilePage: React.FC = () => {
  return(
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Larissa Roque Carvalho</h1>
            <h2>@lrc0309</h2>

            <p>
                Front-end developer
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 03/09/2002
                </li>
            </ul>

            <Followage>
                <span>seguindo <strong>42</strong></span>
                <span><strong>24 </strong> seguidores</span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;