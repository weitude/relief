import React from 'react';
import { Card, Tag } from 'antd';
const { Meta } = Card;
const Ques = () => {

  return (
      <Card
        hoverable
        style={{
          width: 240,
          height: 300,
          margin: 10,
        }}>
        <Meta title="How to code QAQ" />
        <div className='Ques_Text'>
          <p>Some preview Messages.</p>
        </div>
        <Tag color="magenta">NoReply</Tag>
        <Tag color="gold">Joyful</Tag>
      </Card>
    )};

export default Ques;