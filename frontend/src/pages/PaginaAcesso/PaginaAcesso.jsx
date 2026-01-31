import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import MenuLateralEsquerdo from '../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo';

export default function PaginaAcesso(){
const [menuAberto, setMenuAberto] = useState(false);
const [formData, setFormData] = useState({ email: '', senha: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', formData.email);
    data.append('senha', formData.senha);

    try {
      const response = await fetch('http://localhost:8000/api/acessar', {
        method: 'POST',
        body: data
      });
      const result = await response.json();

      if (response.ok) {
        login(result.user);
        navigate('/painel');
      } else {
        alert(result.message); // POP-UP de Erro
      }
    } catch (error) {
      alert("Erro ao conectar com a API.");
    }
  };
 return(
    <>
    <div className="template-base">
    <Cabecalho onToggleMenu={() => setMenuAberto(!menuAberto)} titulopage={"Página de Acesso"}/>
       <MenuLateralEsquerdo  isOpen={menuAberto} 
        onClose={() => setMenuAberto(false)} />
 
 <main class="d-flex mb-5" id="main">
        <div class="container-lg d-flex align-item-center justify-content-center">
          <div class="row">
            <div class="br-menu" id="main-navigation">
              <div class="main-content pl-sm-4 mt-4" id="main-content" >
      <h2 className="mb-3">Acesso ao Sistema</h2>
      <form onSubmit={handleSubmit}>
        <div className="br-input mb-3">
          <label htmlFor="email">E-mail</label>
          <input 
            id="email" 
            type="email" 
            placeholder="exemplo@gov.br" 
            
            onChange={handleChange}
            required
          />
        </div>
        <div className="br-input mb-3">
          <label htmlFor="senha">Senha</label>
          <input 
            id="senha" 
            type="password" 
            placeholder="Sua senha" 
          
            onChange={handleChange} 
            required
          />
        </div>
        <button className="br-button primary mr-3" type="submit">
          Acessar
        </button>
      </form>
    </div>
        
          </div>
          </div>
        </div>
      </main>


    </div>
    </>
 )
}