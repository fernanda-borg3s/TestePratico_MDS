import React from "react";
import Logo from "../../assets/Img/LogoGov.png";
import MenuLateralEsquerdo from "../MenuLateralEsquerdo/MenuLateralEsquerdo.jsx";

export default function Cabecalho({ onToggleMenu, titulopage }) {
  return (
    <>
      <header className="br-header mb-4" id="header" data-sticky="data-sticky">
        <div className="container-lg">
          <div className="header-top">
            <div className="header-logo">
              <img src={Logo} alt="logo" />
              <span className="br-divider vertical"></span>
            </div>
            <div className="header-actions">
              <div className="header-links dropdown">
                <button
                  className="br-button circle small"
                  type="button"
                  data-toggle="dropdown"
                  aria-label="Abrir Acesso Rápido">
                  <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
              </div>
              <span className="br-divider vertical mx-half mx-sm-1"></span>
              <div className="header-functions dropdown">
                <button
                  className="br-button circle small"
                  type="button"
                  data-toggle="dropdown"
                  aria-label="Abrir Funcionalidades do Sistema">
                  <i className="fas fa-th" aria-hidden="true"></i>
                </button>
                <div className="br-list">
                  <div className="header">
                    <div className="title">Funcionalidades do Sistema</div>
                  </div>
                  <div className="br-item">
                    <button
                      className="br-button circle small"
                      type="button"
                      aria-label="Funcionalidade 1">
                      <i className="fas fa-chart-bar" aria-hidden="true"></i>
                      <span className="text">Funcionalidade 1</span>
                    </button>
                  </div>
                  <div className="br-item">
                    <button
                      className="br-button circle small"
                      type="button"
                      aria-label="Funcionalidade 2">
                      <i className="fas fa-headset" aria-hidden="true"></i>
                      <span className="text">Funcionalidade 2</span>
                    </button>
                  </div>
                  <div className="br-item">
                    <button
                      className="br-button circle small"
                      type="button"
                      aria-label="Funcionalidade 3">
                      <i className="fas fa-comment" aria-hidden="true"></i>
                      <span className="text">Funcionalidade 3</span>
                    </button>
                  </div>
                  <div className="br-item">
                    <button
                      className="br-button circle small"
                      type="button"
                      aria-label="Funcionalidade 4">
                      <i className="fas fa-adjust" aria-hidden="true"></i>
                      <span className="text">Funcionalidade 4</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="header-search-trigger">
                <button
                  className="br-button circle"
                  type="button"
                  aria-label="Abrir Busca"
                  data-toggle="search"
                  data-target=".header-search">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <div className="header-login">
                <div className="header-sign-in">
                  <button
                    className="br-sign-in small"
                    type="button"
                    data-trigger="login">
                    <i className="fas fa-user" aria-hidden="true"></i>
                    <span className="d-sm-inline">Entrar</span>
                  </button>
                </div>
                <div className="header-avatar"></div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-menu">
              <div class="header-menu-trigger">
                <button
                  className="br-button small circle"
                  type="button"
                  aria-label="Menu"
                  data-toggle="menu"
                  data-target="#main-navigation"
                  id="navigation"
                  onClick={onToggleMenu}>
                  <i className="fas fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <div class="header-info">
                <div class="header-title">{titulopage}</div>
              </div>
            </div>
            <div className="header-search" id="main-searchbox">
              <div className="br-input has-icon">
                <label htmlFor="searchbox">Texto da pesquisa</label>
                <input
                  id="searchbox"
                  type="text"
                  placeholder="O que você procura?"
                />
                <button
                  className="br-button circle small"
                  type="button"
                  aria-label="Pesquisar">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <button
                className="br-button circle search-close ml-1"
                type="button"
                aria-label="Fechar Busca"
                data-dismiss="search">
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
