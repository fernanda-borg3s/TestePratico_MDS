import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import MenuLateralEsquerdo from "../../componentes/MenuLateralEsquerdo/MenuLateralEsquerdo";
import PopUpsSucess from "../../componentes/PopUps/PopUpsSucess";
import Service from "../../Services/service";

export default function PaginaAcesso() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", formData.email);
    data.append("senha", formData.senha);
    //     console.log("FormData preparado:", {
    //   email: formData.email,
    //   senha: formData.senha
    // });

    try {
      //chama o service.acessar para fazer autenticação
      const result = await Service.acessar(data);
      // POP-UP de Retorno (Sucesso ou Erro)
      // alert(result.message);
      console.log("Resultado do login:", result);
      if (result.ok) {
        console.log(result.user);
        login(result.user); // result.user vem do backend como email ou objeto
        navigate("/painel");
      }
    } catch (error) {
      console.error("Erro ao fazer login.", error);
    }
  };
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
        <PopUpsSucess mensagem={"Usuário registrado!"} />

        <main class="d-flex " id="main">
          <div class="container-lg d-flex align-item-center justify-content-center">
            <div class="row">
              <div class="br-menu menu-acesso" id="main-navigation">
                <div class="main-content  p-4" id="main-content">
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
  );
}
