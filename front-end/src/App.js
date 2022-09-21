
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import {ThemeProvider} from "@mui/material" 
import Home from './Pages/Home';
import theme from './Theme';
import AddPosts from "./Pages/AddPosts";
import SignIn from "./Pages/Signin";
import NoteState from "./context/noteState";
import Signup from './Pages/Signup';
import MyPosts from './Pages/MyPosts';
import AddFriends from './Pages/AddFriends';
import FriendsHome from './Pages/FriendsHome';
function App() {
  return (
   <>
     <ThemeProvider theme={theme}>
     <NoteState>
     <Router>
   <CssBaseline/>
   
   <NavBar/>
    <Routes>
    <Route exact path='/' element={ <Home/> } ></Route>
    <Route path='addposts' element={<AddPosts/>}></Route>
    <Route exact path='signin' element={<SignIn/>}>
        <Route exact path='signup' element={<Signup/>}/>
    </Route>
    <Route path='myPosts' element={<MyPosts/>}></Route>
     <Route path="addFriends" element={<FriendsHome/>}/>
   </Routes>
   </Router>
   </NoteState>
   </ThemeProvider>
  
   </>
  );
}


export default App;
