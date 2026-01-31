//ler o .env, se não tiver usa a url configurada (facilita deploy em produção)
const BASE_URL = import.meta.env.API_URL || "http://127.0.0.1:8000/api/";

const apiFetch = async (endpoint = '', options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  console.log(`Tentando conectar em: ${url}`, options);

  const init = { method: options.method || 'GET', ...options };

  // Se body for objeto simples (não FormData), serializa para JSON e define header
  if (init.body && !(init.body instanceof FormData)) {
    init.headers = {
      'Content-Type': 'application/json',
      ...(init.headers || {})
    };
    init.body = JSON.stringify(init.body);
  }

  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export default apiFetch;
