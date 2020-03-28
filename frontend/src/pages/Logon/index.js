import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

import { toast } from 'react-toastify';

import api from '~/services/api';

import Heroes from '~assets/heroes.png';
import Logo from '~assets/logo.svg';

import { Container, Section } from './styles';

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
      setTimeout(
        toast.success(`Bem-Vindo, ${response.data.name}!`, {
          position: toast.POSITION.TOP_RIGHT,
        }),
        3000
      );
    } catch (error) {
      toast.error('Código de acesso inválido!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <Container>
      <Section>
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
      </Section>
      <img src={Heroes} alt="heroes" />
    </Container>
  );
}
