# Backend (Laravel)

API para sistema de login simples

### Checklist do Projeto
- [x] Criar rota /acessar, /registrar, /listagem-usuarios;
    - [x] Receber informações por form-data via POST (e-mail e senha);
    - [x] Fazer validação de usuário (quando existir e não existir);
- [x] Criar rota /registrar
    - [x] Receber informações por form-data via POST (e-mail, data de nascimento e senha);
    - [x] Validação de usuário maior de 18 anos;
    - [x] Validação de e-mail já registrado;
- [x] Criar rota /listagem-usuarios;
-   [x] Resgatar informações por GET (dos usuários registrados);