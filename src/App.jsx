import './App.css'
import MessageBar from './components/messageBarOnline'

function App() {

  return (
    <>
      <MessageBar avatar='pic' name='La truc' is_online={false}/>
    </>
  )
}

export default App
