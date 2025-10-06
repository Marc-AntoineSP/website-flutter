import './App.css'
import InputMessageField from './components/inputMessageField'
import MessageBubble from './components/messageBubble';

function App() {
  return (
    <body data-theme='light'>
        <MessageBubble message={"Blabla"} is_user1={true}/>
        <MessageBubble message={"Blabla"} is_user1={false}/>
    </body>
  );
}

export default App
