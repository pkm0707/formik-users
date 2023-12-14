import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Authors from './components/Authors';
import Books from './components/Books';
import AddAuthor from './components/AddAuthor';
import AddBook from './components/AddBook';
import EditAuthor from './components/EditAuthor';
import EditBook from './components/EditBook';
function App() {
  const navigate = useNavigate()
  const[mode,setMode]=useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color='inherit' onClick={()=>navigate("/")}>Home</Button> 
                <Button color='inherit' onClick={()=>navigate("/books")}>Books</Button>
                <Button color='inherit' onClick={()=>navigate("/authors")}>Authors</Button>
                <Button color='inherit' onClick={()=>navigate("/addbook")}>Add Book</Button>
                <Button color='inherit' onClick={()=>navigate("/addauthor")} >Add Author</Button>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}></Typography>
                <Tooltip title="Iron Man">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Iron Man" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_e3-oaDIbCJj0qhTFmzt9bFmFJC6I5EXOJQ&usqp=CAU" />
                  </IconButton>
                </Tooltip>
                <Switch onClick={()=>setMode(mode === "light" ? "dark" : "light")}/>
                {mode === "light" ? <LightModeIcon/> : <DarkModeIcon/>}
              </Toolbar>
            </AppBar>
          </Box>
          <h1><i>Library Management Systems</i></h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/addauthor" element={<AddAuthor />} />
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/books/edit/:bookid" element={<EditBook />} />
            <Route path="/authors/edit/:authorid" element={<EditAuthor />} />
          </Routes>
        </div>
      </ThemeProvider>
  );
}
export default App;
