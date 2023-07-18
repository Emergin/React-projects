import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
            activeClassName={classes.active}
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
            activeClassName={classes.active}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
