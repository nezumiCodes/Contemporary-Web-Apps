import './styles/App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './config/theme.js';
// import Header from './components/Header';

import CheckIn from './views/CheckIn';
import Dash from './views/Dash';
import Login from './views/Login';
import Profile from './views/Profile';
import GlobalStyles from './config/globalStyles';

const checkins = [
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 15,
  },
  { date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 8 },
  { date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 2 },
  {
    date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 12,
  },
  {
    date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 19,
  },
  {
    date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 10,
  },
  {
    date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 15,
  },
  { date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 6 },
  {
    date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
];


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }

  // When loading any page set the state of the menu as closed
  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [location]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <BrowserRouter>
            <Routes>
            {/* {location.pathname !== '/login' &&  (
              <Header onClick={handleClick} open={menuOpen} />
            )} */}
              <Route exact path='/' element={<Dash checkins={checkins}/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/checkin' element={<CheckIn />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
