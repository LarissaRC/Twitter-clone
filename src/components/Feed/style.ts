import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;

    outline: 0;
    cursor: pointer;

    border-bottom: 1px solid var(--outline);
`;

interface Props {
    active?: boolean;
}

export const Tab = styled.div<Props>`
    margin-top: 10px;
    padding: 11px 0 15px;

    font-weight: bold;
    font-size: 15px;
    text-align: center;

    outline: 0;
    cursor: pointer;

    color: ${(props) => (props.active ? "var(--white)" : "var(--gray)")};
    border-bottom: ${(props) => (props.active ? "2px solid var(--twitter)" : "none")};

    &:hover {
        background-color: var(--twitter-dark-hover);
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
`;