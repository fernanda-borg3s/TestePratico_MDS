import Logo from '../../assets/Img/LogoGov.png';
import './MenuLateralEsquerdo.css'

export default function MenuLateralEsquerdo({ isOpen, onClose }) {


  return(
    <>
      <div 
        className={`menu-scrim ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
        data-dismiss="menu" 
        tabIndex="0"
        style={{ display: isOpen ? 'block' : 'none' }} // Garante que suma quando fechado
      ></div>
<div className="row">
 <div className={`br-menu push ${isOpen ? 'active' : ''}`} 
        id="main-navigation"
      >
    <div className="menu-container">
      <div className="menu-panel">
        <div className="menu-header">
          <div className="menu-title"><img src={Logo} alt="Imagem ilustrativa"/><span>Identificação do site ou Sistema</span></div>
          <div className="menu-close">
            <button className="br-button circle" type="button" aria-label="Fechar o menu" onClick={onClose} data-dismiss="menu"><i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <nav className="menu-body" role="tree">
          <a className="menu-item divider" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-bell" aria-hidden="true"></i></span><span className="content">Item de Camada 1</span></a><a className="menu-item divider" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-bell" aria-hidden="true"></i></span><span className="content">Item de Camada 1</span></a>
        </nav>
        <div className="menu-footer">
          <div className="menu-logos"><img src={Logo} alt="Imagem ilustrativa"/></div>
          <div className="social-network">
            <div className="social-network-title">Redes Sociais</div>
            <div className="d-flex"><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Whatsapp"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></div>
          </div>
          <div className="menu-info">
            <div className="text-center text-down-01">Todo o conteúdo deste site está publicado sob a licença <strong>Creative Commons Atribuição-SemDerivações 3.0</strong></div>
          </div>
        </div>
      </div>
      <div className="menu-scrim" data-dismiss="menu" tabIndex="0"></div>
    </div>
  </div>
</div>
</>
    )
}
