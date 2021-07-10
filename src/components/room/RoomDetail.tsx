import React from 'react';
import styled from 'styled-components';
import NewsCard from './news/NewsCard';
import NewsList from './news/NewsList';

const Root = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`;

//TODO - 일단 검정으로 해놨는데 나중에 수정 해야함
//테마 적용할 수 있게 
const NavArea = styled.div`
    background-color: #000000;
    width: 20rem;
`;

const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Header = styled.div`
    background-color: #880088;
    height: 35%;
`;

const Body = styled.div`
    background-color: #008800;
    display: flex;
    height: 65%;
`;

const CompanyListArea = styled.div`
    background-color: #ff00ff;
    width: 100%;
    flex-grow: 1;
`;

const NewsListArea = styled.div`
    background-color: #55ff55;
    width: 100%;
    flex-grow: 1;
    overflow: auto;
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
                        <NewsList>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                        </NewsList>
                    </NewsListArea>
                </Body>
            </ContentArea>
            
        </Root>
    );
};

export default RoomDetail;