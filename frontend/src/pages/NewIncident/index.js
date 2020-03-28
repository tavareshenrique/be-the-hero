import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Form } from '@unform/web';
import { useAlert } from 'react-alert';

import Input from '~/components/Input';

import Logo from '~/assets/logo.svg';
import api from '~/services/api';

import { Container, Content } from './styles';

export default function NewIncident() {
  const formRef = useRef(null);
  const history = useHistory();
  const alert = useAlert();
  const ongId = localStorage.getItem('ongId');

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescription] = useState(false);
  const [valueError, setValueError] = useState(false);

  async function handleSubmit({ title, description, value }) {
    if (title === '') {
      setTitleError(true);
      return;
    }
    setTitleError(false);

    if (description === '') {
      setDescription(true);
      return;
    }
    setDescription(false);

    if (value === '') {
      setValueError(true);
      return;
    }
    setValueError(false);

    try {
      await api.post(
        'incidents',
        {
          title,
          description,
          value,
        },
        {
          headers: {
            Authorization: ongId,
          },
        }
      );
      history.push('/profile');
      alert.success(`Incidente: ${title} \n \n Inserido com sucesso!`);
    } catch (error) {
      alert.error('Error ao cadastrar caso');
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={Logo} alt="main-logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para ajudar a encontrar um heroi para
            resolver isso!
          </p>
          <Link className="back-link" to="/profile">
            <FaArrowLeft height={16} color="#E02041" />
            Voltar
          </Link>
        </section>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Titulo do Caso"
            name="title"
            error={titleError}
          />
          <Input
            multiline
            type="text"
            placeholder="Descrição"
            name="description"
            error={descriptionError}
          />
          <Input
            type="text"
            placeholder="Valor em reais"
            name="value"
            error={valueError}
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
