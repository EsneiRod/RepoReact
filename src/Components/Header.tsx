
import '../Style/Style.css';
import { CONS_URL} from '../Constants/NamePath';

const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <a href = {CONS_URL.PAGE_HOME}>Inicio</a>
        <a href = {CONS_URL.PAGE_NOSOTROS}>Acerca de</a>
        <a href = {CONS_URL.PAGE_CONTACTO}>Contacto</a>
      </nav>
    </header>
  );
}

export default Header;