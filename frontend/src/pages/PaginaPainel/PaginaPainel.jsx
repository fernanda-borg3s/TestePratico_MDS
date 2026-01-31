
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import MenuLateralEsquerdo from '../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo';

export default function PaginaPainel() {
    const [menuAberto, setMenuAberto] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

    // Proteção de Rota
//   useEffect(() => {
//     if (!user) {
//       alert("Acesso negado. Faça login primeiro.");
//       navigate('/acesso');
//     } else {
//       carregarUsuarios();
//     }
//   }, [user, navigate]);

//   const carregarUsuarios = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/listagem-usuarios');
//       const data = await response.json();
//       setUsuarios(data);
//     } catch (error) {
//       console.error("Erro ao carregar usuários");
//     }
//   };

//   if (!user) return null; // Não renderiza nada se não estiver logado
    return(
        <>
        <div className="template-base">
            <Cabecalho onToggleMenu={() => setMenuAberto(!menuAberto)} titulopage={"Página de Painel"}/>
               <MenuLateralEsquerdo  isOpen={menuAberto} 
                onClose={() => setMenuAberto(false)} />
        <main class="d-flex flex-fill mb-5" id="main">
            <div class="container-lg d-flex">
                <div class="col">
                    <div class="br-menu" id="main-navigation">
                        
                         <h2 className="mb-4">Painel Administrativo</h2>
                            {/* <p>Bem-vindo, {user.email}</p> */}
                            
                          <div class="br-table" title="Tabela irregular 1">
                            <div class="table-header">
                                <div class="top-bar">
                                <div class="table-title">Usuário Registrados</div>
                             
                                </div>
                            </div>
                            <table>
                                <colgroup span="3"></colgroup>
                                <thead>
                                <tr>
                                    <th class="border-bottom" scope="col">Email</th>
                                    <th class="border-bottom border-left" scope="col">Data de Nascimento</th>
                                    <th class="border-bottom border-left" colspan="3" scope="colgroup">Data de Registro</th>
                                </tr>
                                </thead>
                                <tbody>
                             <tbody>
                                  {/* {usuarios.map((u, index) => (
                                    <tr key={index}>
                                    <td>{u.email}</td>
                                    <td>{u.dt_nascimento}</td>
                                    </tr>
                                ))} */}
                                </tbody>
                                </tbody>
                            </table>
                            </div>
                        
                    </div>
                </div>
            </div>
        </main>
         </div>
        </>
    )
}
