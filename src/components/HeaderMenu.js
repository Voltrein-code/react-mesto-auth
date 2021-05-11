import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default function HeaderMenu(props) {

  return (
    <nav className='header__menu'>

      <Switch>

        <Route path='/sign-in'>
          <Link to='/sign-up' className='header__link'>Регистрация</Link>
        </Route>

        <Route path='/sign-up'>
          <Link to='/sign-in' className='header__link'>Войти</Link>
        </Route>

        <Route path='/'>
          <p className='header__email'>{props.userData.email}</p>
          <button className='header__sign-out' onClick={props.onSignOut}>Выйти</button>
        </Route>

      </Switch>

    </nav>
  )
}