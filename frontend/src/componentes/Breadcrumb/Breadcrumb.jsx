export default function Breadcrumb() {
  return (
    <nav className="br-breadcrumb" aria-label="Breadcrumbs">
      <ol className="crumb-list p-0" role="list">
        <li className="crumb home">
          <a className="br-button circle" href="javascript:void(0)">
            <span className="sr-only">Página inicial</span>
            <i className="fas fa-home"></i>
          </a>
        </li>  
        <li className="crumb"><i className="icon fas fa-chevron-right"></i>
        <a href="javascript:void(0)">Painel</a>
        </li>
      </ol>
    </nav>
  );
}
