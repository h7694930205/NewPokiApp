import Layout from "Layout";
import Berry from "Pages/Berry";
import BerryDetails from "Pages/Berry/BerryDetails";
import ContestType from "Pages/Contest";
import ContestDetails from "Pages/Contest/ContestDetails";
import EncounterList from "Pages/Encounter";
import EncounterDetails from "Pages/Encounter/EncounterDetails";
import Evolution from "Pages/Evolution";
import EvolutionDetails from "Pages/Evolution/EvolutionDetails";
import Home from "Pages/Home";
import Move from "Pages/Move";
import MoveDetails from "Pages/Move/MoveDetails";
import MyPokemonList from "Pages/MyPokemonList";
import PokemonDetails from "Pages/PokemonDetails";
import PokemonList from "Pages/PokemonList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokemon/list" element={<PokemonList />} />
          <Route path="/my/pokemon/list/" element={<MyPokemonList />} />
          <Route path="pokemon/:listId" element={<PokemonDetails />} />
          <Route path="/berry/" element={<Berry/>} />
          <Route path="berry/:listId" element={<BerryDetails />} />
          <Route path="/contest-type/" element={<ContestType />} />
          <Route path="contest-type/:listId" element={<ContestDetails />} />
          <Route path="contest-effect/:listId" element={<ContestDetails />} />
          <Route path="super-contest-effect/:listId" element={<ContestDetails />} />
          <Route path="/encounter-method/" element={<EncounterList />} />
          <Route path="/encounter-method/:listId" element={<EncounterDetails />} />
          <Route path="/encounter-condition/:listId" element={<EncounterDetails />} />
          <Route path="/encounter-condition-value/:listId" element={<EncounterDetails />} />

          <Route path="/evolution-chain/" element={<Evolution />}/>
          <Route path="/evolution-chain/:listId" element={<EvolutionDetails />}/>
          <Route path="/evolution-trigger/:listId" element={<EvolutionDetails />}/>

          <Route path="/move" element={<Move />}/>
          <Route path = "/move/:listId" element ={<MoveDetails/>}/>
          <Route path="/move-ailment/:listId" element={<MoveDetails />}/>

          <Route path="move-target/:listId" element={<MoveDetails />} />
          <Route path="/move-battle-style/:listId" element={<MoveDetails />}/>
          <Route path="/move-category/:listId" element={<MoveDetails />}/>
          <Route path="/move-damage-class/:listId" element={<MoveDetails />}/>
          <Route path="/move-learn-method/:listId" element={<MoveDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
//move/4