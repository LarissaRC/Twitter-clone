import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './style';

const ProfilePage: React.FC = () => {
  return(
    <Container>
        <Banner>
            <img src="https://pbs.twimg.com/profile_banners/1158852667843723264/1626612883/1500x500" alt="User banner" />
            <Avatar>
                <img src="https://pbs.twimg.com/profile_images/1415378538732130306/yrSdG-_x_400x400.jpg" alt="User avatar" />
            </Avatar>
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>LarissaRC</h1>
            <h2>@lrc0309</h2>

            <p>
                19 ▫️ Front-end developer sandy/junior ▫️ 🦝
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