import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { useSelector } from 'react-redux';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo"></Input>
        <Input
          name="email"
          type="email"
          placeholder="Seu endereço de e-mail"
        ></Input>

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        ></Input>
        <Input
          type="password"
          name="password"
          placeholder="Sua nova senha"
        ></Input>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a nova senha"
        ></Input>

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do HeyDoctor</button>
    </Container>
  );
}
