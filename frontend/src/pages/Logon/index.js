import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '~/services/api';

import Heroes from '~assets/heroes.png';
import Logo from '~assets/logo.svg';

import './styles.css';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function hundlelogon(env) {
    env.preventDefault();
    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
      // Necessário para que haja tempo do toast iniciar a execução após redirecionar a página
      setTimeout(
        toast.success(`Bem Vindo ${response.data.name}`, {
          position: toast.POSITION.TOP_RIGHT,
        }),
        3000
      );
    } catch (error) {
      toast.error('Erro ao se logar!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="logon-container">
        <section className="form">
          <img src={Logo} alt="logo" />

          <form onSubmit={hundlelogon}>
            <h1>Faça seu logon</h1>
            <input
              type="text"
              placeholder="Sua ID"
              value={id}
              onChange={(env) => setId(env.target.value)}
            />
            <button className="button" type="submit">
              Entrar
            </button>
            <Link className="back-link" to="/register">
              <FaSignInAlt height={16} color="#E02041" />
              Não tenho Cadastro
            </Link>
          </form>
        </section>
        <img src={Heroes} alt="heroes" />
      </div>
    </>
  );
}
