import React from 'react';
import {Card, Tag} from 'antd';

const {Meta} = Card;

const style = {
    'academic': "blue",
    'romantic': "magenta",
    'friendship': "gold",
    'emo': "purple",
    'life': "green",
    'family': "volcano"
};

const Ques = (item) => {
    const {title, question, tag} = item.item;
    return (
        <Card
            hoverable
            style={{
                width: 240,
                height: 300,
                margin: 10,
            }}>
            <Meta title={title}/>
            <div className='Ques_Text'>
                {question}
            </div>
            {tag.map((tag) => (
                <Tag key={tag} color={style[tag]}>
                    {tag}
                </Tag>
            ))}
        </Card>
    )
};

export default Ques;