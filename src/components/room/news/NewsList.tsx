import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
    children: ReactNode;
}

const ListView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
`;


const NewsList = ({children}: Props) => {
    return (
        <ListView>
            {children}
        </ListView>
    )
};

export default NewsList;