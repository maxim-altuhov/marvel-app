import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                'app__menu-link' + (isActive ? ' app__menu-link_active' : '')
              }
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              end
              to="/comics"
              className={({ isActive }) =>
                'app__menu-link' + (isActive ? ' app__menu-link_active' : '')
              }
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
