import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import MenuLateralEsquerdo from '../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo';

export default function PaginaRegistro() {
const [menuAberto, setMenuAberto] = useState(false);
const [formData, setFormData] = useState({ email: '', nascimento: '', senha: '' });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', formData.email);
    data.append('senha', formData.senha);
    data.append('dt_nascimento', formData.dt_nascimento);

    try {
      const response = await fetch('http://localhost:8000/api/registrar', {
        method: 'POST',
        body: data
      });
      const result = await response.json();

      // POP-UP de Retorno (Sucesso ou Erro)
      alert(result.message); 

    } catch (error) {
      alert("Erro ao tentar registrar.");
    }
  };
    return(
        <>
    <div className="template-base">
        <Cabecalho onToggleMenu={() => setMenuAberto(!menuAberto)} titulopage={"Página de Registro"}/>
            <MenuLateralEsquerdo  isOpen={menuAberto}  onClose={() => setMenuAberto(false)} />
        <main class="d-flex mb-5" id="main">
            <div class="container-lg d-flex align-item-center justify-content-center">
                <div class="row">
                    <div class="br-menu" id="main-navigation">
                        <div class="main-content pl-sm-4 mt-4" id="main-content" >
                            <h2 className="mb-3">Novo Registro</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="br-input mb-3">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="email" required onChange={handleChange} />
                                </div>
                                <div className="br-input mb-3">
                                    <label htmlFor="nascimento">Data de Nascimento</label>
                                    <input id="nascimento" type="date" required onChange={handleChange} />
                                </div>
                                <div className="br-input mb-3">
                                    <label htmlFor="senha">Senha</label>
                                    <input id="senha" type="password" required onChange={handleChange} />
                                </div>
                                <button className="br-button primary" type="submit"> Registrar</button>
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
