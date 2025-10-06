import './App.css'
import ConversationColumn from './components/conversationColomn';
import MessageColumn from './components/messageColumn';

function App() {
  return (
    <div data-theme="light" className="w-screen h-screen flex justify-center">
      <ConversationColumn />
      <MessageColumn />
    </div>
  );
}

export default App
