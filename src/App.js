// import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import Navbar from './components/Navbar';
// import { Home } from './components/Home';
// import About from './components/About';
// import NoteState from './context/notes/NoteState';
// import Alert from './components/Alert';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import { useState } from 'react';
// import WelcomeMessage from './components/WelcomeMessage';

// function App() {
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   }

//   return (
//     <>
//       <NoteState>
//         <Router>
//           <Navbar showAlert={showAlert} />
//           <Alert alert={alert} />
//           <div className='container'>
//             {/* Render the WelcomeMessage component only once */}
//             {window.location.pathname === '/' && <WelcomeMessage />}
//             <Routes>
//               <Route path='/home' element={<Home showAlert={showAlert} />} />
//               <Route path='/about' element={<About />} />
//               <Route path='/login' element={<Login showAlert={showAlert} />} />
//               <Route path='/signup' element={<SignUp showAlert={showAlert} />} />
//             </Routes>
//           </div>
//         </Router>
//       </NoteState>
//     </>
//   );
// }

// export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState, useEffect } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true); // Add a state variable for showing the welcome message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // Use useEffect to hide the welcome message after it's displayed once
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 8000); // Hide after 8 seconds (adjust as needed)
  }, []);

  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div className='container'>
            {/* Render the WelcomeMessage component only once */}
            {showWelcome && <h3 className='d-flex justify-content-center my-5'>Welcome to My iNotebook</h3>}

            <Routes>
              <Route path='/home' element={<Home showAlert={showAlert} />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login showAlert={showAlert} />} />
              <Route path='/signup' element={<SignUp showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
