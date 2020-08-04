import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default class SignUp extends Component {
  render() {
    return (
      <>
        <img src={logo} alt="HeyDoctor" />

        <form>
          <input type="text" placeholder="Nome Completo" />
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha secreta" />

          <button type="submit">Criar Conta</button>
          <Link to="/">Já tenho login</Link>
        </form>
      </>
    );
  }
}
