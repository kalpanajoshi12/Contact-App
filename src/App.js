import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter, Route, Routes,Link,Navigate} from 'react-router-dom'
import AddContactForm from './AddContactForm';
//import LoginForm from './LoginForm';



function App() {
  return (
    <div>
      
      <div className='parent' style={{display:"flex",height:"50px",width:"100%",backgroundColor:"black",alignItems:"center",justifyContent:"flex-end",}}>
        <Login/>
        <SignUp/>
      </div>
      <BrowserRouter>
      <Link to={"/home"}>Home Page</Link>
      <Link to={"login"}></Link>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Header/>}></Route>
        <Route path='/add' element={<AddContactForm/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//   {/* <Route path='/login' element={<LoginForm/>}></Route> */}