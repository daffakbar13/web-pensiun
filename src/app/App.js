import './App.css';
import Login from './base/Login';
import SignUp from './base/SignUp';
import LoginAdmin from './base/LoginAdmin';
// import Error from './Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="*" element={<Error />} /> */}
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin" element={<LoginAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
