import React from 'react';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TouchableOpacity, Linking } from 'react-native';
import * as MailCompose from 'expo-mail-composer';

import Incident from '../../components/Incident';
import IncidentProperty from '../../components/IncidentProperty';
import IncidentValue from '../../components/IncidentValue';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Contact,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailCompose.composeAsync({
      subject: `Herói do Caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`,
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E03041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>
          {`${incident.name} de ${incident.city}/${incident.uf}`}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue margin={false}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <Contact>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <FontAwesome5 name="whatsapp" size={25} color="#FFF" />
            <ActionText>WhatsApp</ActionText>
          </Action>

          <Action onPress={sendMail}>
            <FontAwesome5 name="envelope" size={25} color="#FFF" />
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </Contact>
    </Container>
  );
}
