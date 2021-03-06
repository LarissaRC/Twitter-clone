import React from 'react';

import Button from '../Button'

import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon
} from './style';

const MenuBar: React.FC = () => {
  return(
      <Container>
          <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>
                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>
                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>
                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>
                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
          </Topside>

          <Botside>
              <Avatar>
                  <img src="https://pbs.twimg.com/profile_images/1415378538732130306/yrSdG-_x_400x400.jpg" alt="User Avatar" />
              </Avatar>

              <ProfileData>
                  <strong>LarissaRC</strong>
                  <span>@lrc0309</span>
              </ProfileData>

              <ExitIcon />
          </Botside>
      </Container>
  );
}

export default MenuBar;