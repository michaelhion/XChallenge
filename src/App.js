
import GlobalStyle from './styles/Global';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Logout from './components/logout';
import  {  Routes ,  Route ,  Link  }  from  "react-router-dom" ; 


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/logout" element={<Logout />}/>
        
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
    <GlobalStyle />
    </>
  );
}

export default App;
