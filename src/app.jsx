import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { UserInfo } from './userInfo/userInfo';
import { Leaderboard } from './leaderboard/leaderboard';
import { About } from './about/about';

export default function App() {
    return (
      <BrowserRouter>
        <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              BowlerBlitz
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='leaderboard'>
                  Leaderboard
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='userInfo'>
                  Account Stats
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>
  
        <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
            <Route path='/userInfo' element={<UserInfo />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Carley Andelin</span>
            <a className='text-reset' href='https://github.com/carleyandelin/startup2024'>
              Github
            </a>
          </div>
        </footer>
      </div>
      </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
