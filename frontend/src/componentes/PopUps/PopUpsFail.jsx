import './PopUps.css'

export default function PopUpsFail({mensagem}) {
  return (
    <>
      <div class="br-message danger">
        <div class="icon">
          <i class="fas fa-times-circle fa-lg" aria-hidden="true"></i>
        </div>
        <div
          class="content"
          aria-label="Data de início do afastamento inválida. A data não pode ser superior à data atual."
          role="alert">
          <span class="message-title">
            Data de início do afastamento inválida.
          </span>
          <span class="message-body">
            {mensagem}

          </span>
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
    </>
  );
}
