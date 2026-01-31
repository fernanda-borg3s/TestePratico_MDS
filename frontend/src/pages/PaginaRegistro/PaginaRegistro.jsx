import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import MenuLateralEsquerdo from "../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo";
import Service from "../../Services/service";

export default function PaginaRegistro() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    dt_nascimento: "",
    senha: "",
  });
  const { register } = useAuth();
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
      console.log("Resultado do registro:", result);

      // POP-UP de Retorno (Sucesso ou Erro)
      alert(result.message);
    } catch (error) {
      console.error("Erro ao tentar registrar.", error);
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
        <main class="d-flex mb-5" id="main">
          <div class="container-lg d-flex align-item-center justify-content-center">
            <div class="row">
              <div class="br-menu menu-registro" id="main-navigation">
                <div class="main-content p-4" id="main-content">
                  <h2 className="">Novo Registro</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="br-input mb-3">
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
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
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <button className="br-button primary" type="submit">
                      {" "}
                      Registrar
                    </button>
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
