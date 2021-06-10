import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavArea = styled.div`
    width: 25rem;
`;

const ContentArea = styled.div`
    flex-grow: 1;
`;

const Header = styled.div`

`;

const Body = styled.div`

`;

const CompanyListArea = styled.div`

`;

const NewsListArea = styled.div`

`;

const RoomDetail = () => {
    return (
        <Root>
            <NavArea>
                
            </NavArea>
            <ContentArea>
                <Header>

                </Header>
                <Body>
                    <CompanyListArea>

                    </CompanyListArea>
                    <NewsListArea>

                    </NewsListArea>
                </Body>
            </ContentArea>
            
        </Root>
    );
};

export default RoomDetail;