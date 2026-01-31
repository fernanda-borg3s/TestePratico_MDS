import './PopUps.css'

export default function PopUpsSucess({ mensagem }) {
  return (
    <>
      <div className="container-pop">
        <div class="br-message success">
          <div class="icon">
            <i class="fas fa-check-circle fa-lg" aria-hidden="true"></i>
          </div>
          <div
            class="content"
            aria-label="Sucesso. Seus dados foram alterados conforme preenchimento do formulário."
            role="alert">
            <span class="message-title">Sucesso.</span>
            <span class="message-body"> {mensagem}</span>
          </div>
          <div class="close">
            <button
              class="br-button circle small"
              type="button"
              aria-label="Fechar a messagem alterta">
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
