// Configurações de popups de erro
export const ERROR_POPUP_CONFIGS = {
  200: {
    classColor: "success",
    icon: "check",
    mensagemTitle: "Sucesso!",
    mensagemBody: "Usuário Registrado.",
  },
  401: {
    classColor: "danger",
    icon: "times",
    mensagemTitle: "E-mail ou senha inválidos!",
    mensagemBody: "Verifique seu e-mail e senha e tente novamente.",
  },
  409: {
    classColor: "danger",
    icon: "times",
    mensagemTitle: "Este e-mail já está registrado!",
    mensagemBody: "Verifique seu e-mail e tente novamente.",
  },
  403: {
    classColor: "danger",
    icon: "times",
    mensagemTitle: "Usuário menor de 18 anos!",
    mensagemBody: "O usuário deve ser maior de idade.",
  },
  500: {
    classColor: "danger",
    icon: "times",
    mensagemTitle: "Ocorreu um erro inesperado!",
    mensagemBody: "Tente novamente mais tarde.",
  },

};

// configuração de popup por status
export const getPopupConfig = (status) => {
  return ERROR_POPUP_CONFIGS[status] || ERROR_POPUP_CONFIGS[500]; // 500 se não encontrado
};
