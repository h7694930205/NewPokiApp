import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./PokemonSlice/PokemonSlice";
import { useDispatch } from "react-redux";
import { pokemonDetailReducer } from "./PokemonDetailSlice/PokemonDetailSlice";
import { BerryReducer } from "./BerrySlice/BerrySlice";
import { ContestReducer } from "./ContestSlice/ContestSlice";
import { EncounterReducer } from "./EncounterSlice/EncounterSlice";
import { EvolutionReducer } from "./EvolutionSlice/EvolutionSlice";
import { MoveReducer } from "./MoveSlice/MoveSlice";

export const store = configureStore({
  reducer: {
    pokemonStateData: pokemonReducer,
    pokemonDetailStateData: pokemonDetailReducer,
    berryStateData:BerryReducer,
    contestStateData:ContestReducer,
    encounterStateData: EncounterReducer,
    evolutionStateData: EvolutionReducer,
    moveStateData:MoveReducer
  },
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
