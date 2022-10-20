
import { useEffect } from 'react';
import './App.css';
import { startListening } from './common/config/listener';
import { HoloShield } from './components/holo_shield/organoids/holo_shield';
import { Vijet } from './components/vijet/organoids/vijet';
import { useActions } from './hooks/useActions';

function App() {
  const { getAccesToken, fetchMessages,AddNewMessage } = useActions()
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
          getAccesToken()
      }
      else {
          fetchMessages()
          startListening(AddNewMessage,fetchMessages)
      }
      // eslint-disable-next-line
  }, [accessToken])

  
  return (
    <div className="App">
        <HoloShield/>
        <Vijet></Vijet>
        
    </div>
  );
}

export default App;
