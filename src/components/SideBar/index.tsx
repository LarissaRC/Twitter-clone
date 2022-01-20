import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './style';

const SideBar: React.FC = () => {
  return(
      <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no twitter" />
            <SearchIcon />
        </SearchWrapper>

        <StickyBox>
            <Body>
                <List
                title="Talvez você curta"
                elements={[
                    <FollowSuggestion
                        image="https://pbs.twimg.com/profile_images/1477267951569018888/lhH62ByS_400x400.jpg"
                        name="Finch"
                        nickname="@Finchwing"
                    />,
                    <FollowSuggestion
                        image="https://pbs.twimg.com/profile_images/1092479583981424641/92MhBzxE_400x400.jpg"
                        name="Perfectly Cut Screams"
                        nickname="@AAAAAGGHHHH"
                    />,
                    <FollowSuggestion
                        image="https://pbs.twimg.com/profile_images/1421341249018138627/GbSoCYqY_400x400.jpg"
                        name="Schaffrillas"
                        nickname="@Schaffrillas"
                    />
                ]} />
                <List
                title="Notícias"
                elements={[
                    <News description='Assuntos do momento em política' title='Alckmin' />,
                    <News description='Covid-19 . há 1 hora' title='Pandemia está "longe de acabar"' />,
                    <News description='Assubtos do momento em Futebol' title='cebolinha' />
                ]} />
                <List
                title="Pessoas relevantes"
                elements={[
                    <FollowSuggestion
                        image="https://pbs.twimg.com/profile_images/1324186833601859584/ptkDuinc_400x400.jpg"
                        name="WCAnimated"
                        nickname="@WCAnimated"
                    />,
                    <FollowSuggestion
                        image="https://pbs.twimg.com/profile_images/1267986629412741120/Z26Rlg0e_400x400.jpg"
                        name="Maicon Küster"
                        nickname="@maiconkusterk"
                    />,
                    <FollowSuggestion
                        image="https://pbs.twimg.com/profile_images/580146785957474304/kUHhXZkQ_400x400.png"
                        name="False Knees"
                        nickname="@FalseKnees"
                    />
                ]} />
                <List
                title="Assuntos do momento"
                elements={[
                    <News description='Assuntos do momento no Brasil' title='Arceus' />,
                    <News description='Assunto do momento em Televisão' title='Poesia Acústica' />,
                    <News description='Entretenimento' title='Babu' />
                ]} />
            </Body>
        </StickyBox>
      </Container>
  );
}

export default SideBar;