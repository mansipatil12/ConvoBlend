import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  
  return (
    <ChatEngine
      height="100vh"
      projectID="de5c11b7-dac9-465f-afda-a6f5cc3d144e"
      userName="Mansi"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;