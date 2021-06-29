import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login_form from './components/Login_form/Login_form'

function App() {
  const [user, setUser] = useState({userName:"", password:""});


  return (
    <div >
      <Login_form usuario={user} setUsuario={setUser}/>
      
    </div>
  );
}

export default App;
