import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import MenuLateralEsquerdo from "../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo";
import PopUps from "../../componentes/PopUps/PopUps";
import Button from "../../componentes/Button/Button";
import Service from "../../Services/service";
import { getPopupConfig } from "../../Services/popupConfigs";

export default function PaginaRegistro() {
  const { registrar } = useAuth();

  const [menuAberto, setMenuAberto] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    dt_nascimento: "",
    senha: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupConfig, setPopupConfig] = useState(null); //armazena valores da popupconfigs
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      senha: formData.senha,
      dt_nascimento: formData.dt_nascimento,
    };

    try {
      const result = await Service.registro(data);
      //cria usuario ficticio
      if (result.ok) {
        const newUser = {
          email: formData.email,
          dt_nascimento: formData.dt_nascimento,
        };
        registrar(newUser);//chama função no authContext para salvar no local o usuario ficticio
        navigate("/painel", { state: { showSuccessPopup: true } });
      } else {
        setPopupConfig(getPopupConfig(result.status));
        setShowPopup(true);
      }
    } catch {
      setPopupConfig(getPopupConfig(500));
      setShowPopup(true);
    }
  };
  return (
    <>
      <div className="template-base">
        <Cabecalho
          onToggleMenu={() => setMenuAberto(!menuAberto)}
          titulopage={"Página de Registro"}
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
        <main className="d-flex m-auto" id="main">
          <div className="container-lg d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="br-menu menu-registro" id="main-navigation">
                <div className="main-content p-4" id="main-content">
                  <h2 className="">Novo Registro</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="br-input mb-3">
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="br-input mb-3">
                      <label htmlFor="nascimento">Data de Nascimento</label>
                      <input
                        id="nascimento"
                        type="date"
                        name="dt_nascimento"
                        value={formData.dt_nascimento}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="br-input mb-3">
                      <label htmlFor="senha">Senha</label>
                      <input
                        id="senha"
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={formData.senha}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <Button titulo={"Registrar"} />
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
