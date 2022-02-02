
import React from 'react';
import Login from './Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ChatsProvider } from '../contexts/ChatProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import ErrorBoundary from '../contexts/ErrorBoundary';


function App(){
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ErrorBoundary>
      <SocketProvider id={id}>
        <ContactsProvider>
          <ChatsProvider id={id}>
          <Dashboard id={id} />
          </ChatsProvider>
        </ContactsProvider>
      </SocketProvider>
    </ErrorBoundary>
  )

  return(
    
      id ? dashboard : <Login onIdSubmit={setId} />
      
  )
}

export default App;
