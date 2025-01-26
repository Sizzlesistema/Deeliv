import React, { useState } from 'react';
import './Profile.css'; 

const Profile = () => {
  // Estados para armazenar os dados do perfil
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  // Funções para lidar com mudanças nos campos de input
  const handleNomeChange = (e) => setNome(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTelefoneChange = (e) => setTelefone(e.target.value);
  const handleEnderecoChange = (e) => setEndereco(e.target.value);

  // Função para salvar os dados (ou apenas mostrar para o momento)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dados atualizados com sucesso!');
    // Aqui você pode adicionar a lógica para salvar os dados em um backend ou localStorage, se necessário.
  };

  return (
    <div className="profile-container">
      <h2>Perfil de Usuário</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-info">
          <label htmlFor="nome">
            <strong>Nome:</strong>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
              placeholder="Digite seu nome"
            />
          </label>

          <label htmlFor="email">
            <strong>Email:</strong>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu email"
            />
          </label>

          <label htmlFor="telefone">
            <strong>Telefone:</strong>
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={handleTelefoneChange}
              placeholder="Digite seu telefone"
            />
          </label>

          <label htmlFor="endereco">
            <strong>Endereço:</strong>
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={handleEnderecoChange}
              placeholder="Digite seu endereço"
            />
          </label>
        </div>
        <button type="submit" className="submit-button">Atualizar</button>
      </form>
    </div>
  );
};

export default Profile;
