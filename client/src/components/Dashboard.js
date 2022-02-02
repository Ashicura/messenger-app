import React from 'react';
import Sidebar from './Sidebar';
import OpenChat from './OpenChat';
import { useChats } from './../contexts/ChatProvider';

export default function Dashboard({ id }) {
  const { selectedChat } = useChats();

  return(
    <div className='d-flex' style={{ height: '100vh'}}>
    <Sidebar id={id} />
    {selectedChat && <OpenChat />}
    </div>
  )
}
