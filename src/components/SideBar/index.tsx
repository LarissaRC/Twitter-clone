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
                        name="User1"
                        nickname="@user01"
                    />,
                    <FollowSuggestion
                        name="User2"
                        nickname="@user02"
                    />,
                    <FollowSuggestion
                        name="User3"
                        nickname="@user04"
                    />
                ]} />
                <List
                title="Notícias"
                elements={[
                    <News />,
                    <News />,
                    <News />
                ]} />
                <List
                title="Notícias"
                elements={[
                    <News />,
                    <News />,
                    <News />
                ]} />
                <List
                title="Notícias"
                elements={[
                    <News />,
                    <News />,
                    <News />
                ]} />
            </Body>
        </StickyBox>
      </Container>
  );
}

export default SideBar;