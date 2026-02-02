import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import MenuLateralEsquerdo from "../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo";
import PopUps from "../../componentes/PopUps/PopUps";
import Service from "../../Services/service";
import { getPopupConfig } from "../../Services/popupConfigs";
import Breadcrumb from "../../componentes/Breadcrumb/Breadcrumb";
import Footer from "../../componentes/Footer/Footer";

export default function PaginaPainel() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, loading, newUser } = useAuth();

  const [menuAberto, setMenuAberto] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupConfig, setPopupConfig] = useState(null);

  //formatar data de nascimento para o padrão dd-mm-aaaa
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    // Verificar se há estado de sucesso no location (registro -> painel) [para mostrar o pop-up corretamente]
    if (location.state?.showSuccessPopup) {
      setPopupConfig(getPopupConfig(200));
      setShowPopup(true);
    }
  }, [location.state]);

  useEffect(() => {
    //bloqueia a execução se o AuthContext ainda estiver iniciando [evita da page carragar sem ter capturado o user]
    if (loading) return;

    let isMounted = true;
    const getAllUsers = async () => {
      try {
        const result = await Service.getAllUsers();
        // atualiza se o componente ainda estiver montado (para proteção)
        if (isMounted) {
          if (newUser) { //concatena o novo usuário ficticio registrado à lista exibida [não é necessário com bd real]
            setUsuarios([...result.data, newUser]);
          } else {
            setUsuarios(result.data);
          }
        }
      } catch (error) {
        if (isMounted) console.error("Erro ao carregar usuários", error);
      }
    };
    // Proteção de Rota
    if (user || newUser) {
      getAllUsers();
    } else {
      navigate("/acesso", { replace: true });
    }
    //Desativa a flag ao desmontar
    return () => {
      isMounted = false;
    };
  }, [user, loading, newUser, navigate]);

  return (
    <>
      <div className="template-base">
        <Cabecalho
          onToggleMenu={() => setMenuAberto(!menuAberto)}
          titulopage={"Página de Painel"}
          displayHide={"btn-none"}
        />
        <MenuLateralEsquerdo
          isOpen={menuAberto}
          onClose={() => setMenuAberto(false)}
        />
        {showPopup && popupConfig && (
          <PopUps
            classColor={popupConfig.classColor}
            icon={popupConfig.icon}
            mensagemTitle={popupConfig.mensagemTitle}
            mensagemBody={popupConfig.mensagemBody}
            onClose={() => {
              setShowPopup(false);
              setPopupConfig(null);
            }}
          />
        )}
        <main className="d-flex flex-fill mb-5" id="main">
          <div className="container-lg d-flex flex-column">
            <Breadcrumb />

            <div className="col">
              <div className="br-menu" id="main-navigation">
                <h2 className="mb-4">Painel</h2>
                {/* <p>Bem-vindo, {user.email}</p> */}
                <div className="br-table" title="Tabela irregular 1">
                  <div className="table-header">
                    <div className="top-bar">
                      <div className="table-title">Usuários Registrados</div>
                    </div>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th className="border-bottom" scope="col">Email</th>
                        <th className="border-bottom border-left" scope="col">Data de Nascimento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map((u, index) => (
                        <tr key={index}>
                          <td>{u.email}</td>
                          <td>{formatDate(u.dt_nascimento)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
