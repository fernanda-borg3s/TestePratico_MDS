

export default function PopUps({ mensagemBody, mensagemTitle, classColor, icon, onClose }) {
  return (
    <>
      <div className={`br-message ${classColor}`}>
        <div className="icon">
          <i className={`fas fa-${icon}-circle fa-lg`} aria-hidden="true"></i>
        </div>
        <div className="content" role="alert">
          <span className="message-title">{mensagemTitle}</span>
          <span className="message-body"> {mensagemBody}</span>
        </div>
        <div className="close align-items-start justify-content-end">
          <button
            className="br-button circle small"
            type="button"
            aria-label="Fechar a messagem alerta"
            onClick={onClose}>
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
}
