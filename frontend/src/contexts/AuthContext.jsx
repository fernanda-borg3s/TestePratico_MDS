// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Usuário logado
  // Simula um banco de dados local com um usuário teste
  const [usersDB, setUsersDB] = useState([
    { email: 'admin@gov.br', nascimento: '1990-01-01', senha: '123' }
  ]);

  const login = (email, senha) => {
    const foundUser = usersDB.find(u => u.email === email && u.senha === senha);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const register = (newUser) => {
    // Verifica se já existe
    if (usersDB.find(u => u.email === newUser.email)) {
      return false;
    }
    setUsersDB([...usersDB, newUser]);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, usersDB }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);