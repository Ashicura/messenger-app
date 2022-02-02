import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useChats } from '../contexts/ChatProvider';


export default function Chats() {
  const { chats, selectedChatIndex } = useChats();
  

  return (
    <ListGroup variant='flush'>
      
       {chats.map((chat, index) => (
        <ListGroup.Item 
          key={index}
          action
          onClick={() => selectedChatIndex(index)}
          active={chat.selected}
          >
            {chats.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
    ))}
</ListGroup>
  )
}
