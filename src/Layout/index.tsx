import { Link, Outlet } from "react-router-dom";
import "./index.css";
import { Strings } from "Resource/Strings";

const Layout = () => {
  return (
    <>
      <div className="header">
        <h1>{Strings.Pokemon}</h1>
      </div>
      <div className="navbar">
        <li>
          <Link to={"/"}>{Strings.home}</Link>
        </li>
        <li>
          <Link to={"/pokemon/list"}>{Strings.pokemonList}</Link>
        </li>
        <li>
          <Link to={"/my/pokemon/list"}>{Strings.myPokemonList}</Link>
        </li>
        <li>
          <Link to={"berry/"}>{Strings.berries}</Link>
        </li>
        <li>
          <Link to={"contest-type/"}>{Strings.contest}</Link>
        </li>
        <li>
          <Link to={"encounter-method/"}>{Strings.encounter}</Link>
        </li>
        <li>
          <Link to={"evolution-chain/"}>{Strings.evolution}</Link>
        </li>
        <li>
          <Link to={"move/"}>{Strings.moves}</Link>
        </li>
      </div>
      <div className="container main-content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
