import React, { useState } from 'react';
import { Tab, Nav, Button, Modal} from 'react-bootstrap';
import './Sidebar.css';
import Chat from './Chat';
import Contacts from './Contacts';
import NewChatModal from './NewChatModal';
import NewContactModal from './NewContactModal';


const CHAT_KEY ='chat';
const CONTACTS_KEY ='contacts';

export default function Sidebar({id}) {
    const [activeKey, setActiveKey] = useState(CHAT_KEY)
    let [modalOpen, setModalOpen] = useState(false)
    const chatsOpen = activeKey === CHAT_KEY

    function closeModal() {
        setModalOpen = false
    }

  return (
    <div className='sidebar'>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant='tabs' className='tabs'>
                <Nav.Item>
                    <Nav.Link eventKey={CHAT_KEY}>Chats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='tabContent'>
                <Tab.Pane eventKey={CHAT_KEY}>
                    <Chat />
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts />
                </Tab.Pane>
            </Tab.Content>
            <div className='p-2 border-top-right small'>
                Your ID: <span>{id}</span>
            </div>
            <Button onClick={() => setModalOpen(true)}>
                New {chatsOpen ? 'Chat' : 'Contact'}
            </Button>
        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
            {chatsOpen ?
                <NewChatModal closeModal={closeModal} /> :
                <NewContactModal closeModal={closeModal} />
            }
        </Modal>
    </div>
  )
}
