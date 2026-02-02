import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(true); // ontrole de inicialização

  // Simula a verificação de sessão ao carregar o app
  useEffect(() => {
    const savedUser = localStorage.getItem("@App:user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false); // Terminou de verificar
  }, []);

  const login = (userFromBackend) => {
    if (userFromBackend) {
      const userObj = { email: userFromBackend }; //cria um objeto com o email
      setUser(userObj);
      //deixa salvo para que no painel não seja redirecionado para login novamente
      localStorage.setItem("@App:user", JSON.stringify(userObj));
      return true;
    }
    return false;
  };

  const registrar = (newUser) => {
    if (newUser) {
      setNewUser(newUser); //  guarda o novo usuário registrado [pode ser removido na implementação de um bd real]
      localStorage.setItem("@App:user", JSON.stringify(newUser));
      return true;
    }
    return false;
  };
  //funçaão de encerrar sessão
  const logout = () => {
    //remove usuário ficticio do state e do localStorage
    localStorage.removeItem("@App:user");
    setUser(null);
    setNewUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, newUser, login, registrar, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
