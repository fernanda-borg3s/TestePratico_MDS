import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import MenuLateralEsquerdo from "../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo";
import Service from "../../Services/service";

export default function PaginaPainel() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const result = await Service.getAllUsers();
        // POP-UP de Retorno (Sucesso ou Erro)
        setUsuarios(result);
      } catch (error) {
        console.error("Erro ao tentar registrar.",error);
      }
    };
  // Proteção de Rota
    if (!user) {
      alert("Acesso negado. Faça login primeiro.");
      navigate("/acesso");
    } else {
      getAllUsers();
    }
  }, [user, navigate]);

  //   if (!user) return null; // Não renderiza nada se não estiver logado
  return (
    <>
      <div className="template-base">
        <Cabecalho
          onToggleMenu={() => setMenuAberto(!menuAberto)}
          titulopage={"Página de Painel"}
        />
        <MenuLateralEsquerdo
          isOpen={menuAberto}
          onClose={() => setMenuAberto(false)}
        />
        <main class="d-flex flex-fill mb-5" id="main">
          <div class="container-lg d-flex">
            <div class="col">
              <div class="br-menu" id="main-navigation">
                <h2 className="mb-4">Painel</h2>
                {/* <p>Bem-vindo, {user.email}</p> */}

                <div class="br-table" title="Tabela irregular 1">
                  <div class="table-header">
                    <div class="top-bar">
                      <div class="table-title">Usuário Registrados</div>
                    </div>
                  </div>
                  <table>
                    {/* <colgroup span="3"></colgroup> */}
                    <thead>
                      <tr>
                        <th class="border-bottom" scope="col">
                          Email
                        </th>
                        <th class="border-bottom border-left" scope="col">
                          Data de Nascimento
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map((u, index) => (
                        <tr key={index}>
                          <td>{u.email}</td>
                          <td>{u.dt_nascimento}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
