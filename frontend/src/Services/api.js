//ler o .env, se não tiver usa a url configurada (facilita deploy em produção)
const BASE_URL = import.meta.env.API_URL || "http://127.0.0.1:8000/api/";

const apiFetch = async (endpoint = "", options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const init = { method: options.method || "GET", ...options }; //necessario para carregar POST

  // Se body for objeto simples (não o FormData), serializa para JSON e define header
  if (init.body && !(init.body instanceof FormData)) {
    init.headers = {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    };
    init.body = JSON.stringify(init.body);
  }

  const response = await fetch(url, init);
  if (!response.ok) {
    // retornar objeto com erro ao invés de lançar exceção [tratamento dos erros]
    return {
      ok: false,
      status: response.status,
      error: `HTTP error! status: ${response.status}`,
    };
  }
  const data = await response.json();
  return { ok: true, status: response.status, data };
};

export default apiFetch;
