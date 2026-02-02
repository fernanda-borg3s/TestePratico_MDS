import apiFetch from "./api";

// objeto responsável por todas as chamadas relacionadas ao sistema
const Service = {
  // Busca todos os usuarios
  getAllUsers: async () => {
    return await apiFetch("listagem-usuarios");
  },
  //faz login
  acessar: async (formData) => {
    return apiFetch("acessar", { method: "POST", body: formData });
  },

  //registro do usuario
  registro: async (formData) => {
    return apiFetch("registrar", { method: "POST", body: formData });
  },
};

export default Service;
