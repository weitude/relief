import { Divider, Tag } from 'antd';
import styled from "styled-components"

const Title = styled.h1`    
    font-size: 22px;
    font-family: 'Nunito','Roboto', sans-serif;
    color: #000000;
`

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-left: 10px;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const Post = (data) => {
    const {title, que, res, tag} = data;

    return( 
        <Div>
            <Header>
                <Title>{title}</Title>
                <div>
                {tag.map( (t, i) => (<Tag color="gold" id={i}>{t}</Tag>))}
                </div>
            </Header>
            <p> {que} </p>
            <Divider />
            <p> {res} </p>
        </Div>
    )

}


export default Post;