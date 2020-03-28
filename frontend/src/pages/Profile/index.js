import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useAlert } from 'react-alert';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, Header } from './styles';

export default function Profile() {
  const history = useHistory();
  const alert = useAlert();
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get('/profile', {
        headers: { Authorization: ongId },
      })
      .then((response) => {
        setData(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setData(data.filter((incident) => incident.id !== id));
    } catch (err) {
      alert.error('Error ao deletar caso');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1> Casos cadastrados</h1>

      <ul>
        {data.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
