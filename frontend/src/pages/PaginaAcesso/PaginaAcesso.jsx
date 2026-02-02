import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import MenuLateralEsquerdo from "../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo";
import PopUps from "../../componentes/PopUps/PopUps";
import Service from "../../Services/service";
import Button from "../../componentes/Button/Button";
import { getPopupConfig } from "../../Services/popupConfigs";

export default function PaginaAcesso() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupConfig, setPopupConfig] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //função de login
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", formData.email);
    data.append("senha", formData.senha);
    try {
      //chama o service.acessar para fazer autenticação
      const result = await Service.acessar(data);
      if (result.ok) {
        login(result.data.user); // result.user vem do backend como email ou objeto
        navigate("/painel"); // redireciona para a página do painel
      } else if (result.status === 401) { 
        setPopupConfig(getPopupConfig(401));
        setShowPopup(true);
      }
    } catch {
      setPopupConfig(getPopupConfig(500));
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        setPopupConfig(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      <div className="template-base">
        <Cabecalho
          onToggleMenu={() => setMenuAberto(!menuAberto)}
          titulopage={"Página de Acesso"}
        />
        <MenuLateralEsquerdo
          isOpen={menuAberto}
          onClose={() => setMenuAberto(false)}
        />
        {/* mostrar pop-up ao tentar acessar painel sem estar logado */}
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

        <main className="d-flex m-auto" id="main">
          <div className="container-lg d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="br-menu menu-acesso" id="main-navigation">
                <div className="main-content  p-4" id="main-content">
                  <h2 className="">Acesso ao Sistema</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="br-input mb-3">
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
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
                        name="senha"
                        placeholder="Senha"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button titulo={"Acessar"} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
