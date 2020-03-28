import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { useAlert } from 'react-alert';

import Input from '~/components/Input';

import api from '~/services/api';

import logoImg from '~/assets/logo.svg';

import { Container, Content, Section, InputGroup } from './styles';

export default function Register() {
  const formRef = useRef(null);
  const history = useHistory();
  const alert = useAlert();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [whatsappError, setWhatsppError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [ufError, setUfError] = useState(false);

  async function handleRegister({ name, email, whatsapp, city, uf }) {
    if (name === '') {
      setNameError(true);
      return;
    }
    setNameError(false);

    if (email === '') {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    if (whatsapp === '') {
      setWhatsppError(true);
      return;
    }
    setWhatsppError(false);

    if (city === '') {
      setCityError(true);
      return;
    }
    setCityError(false);

    if (uf === '') {
      setUfError(true);
      return;
    }
    setUfError(true);

    const response = await api.post('/ongs', {
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    alert.success(`Seu ID de acesso: ${response.data.id}`);
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            os casos da sua ONG
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Já possuo cadastro
          </Link>
        </Section>

        <Form ref={formRef} onSubmit={handleRegister}>
          <Input placeholder="Nome da ONG" name="name" error={nameError} />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            error={emailError}
          />
          <Input placeholder="WhatsApp" name="whatsapp" error={whatsappError} />
          <InputGroup>
            <Input placeholder="Cidade" name="city" error={cityError} />
            <Input
              placeholder="UF"
              name="uf"
              error={ufError}
              style={{ width: 80 }}
            />
          </InputGroup>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
