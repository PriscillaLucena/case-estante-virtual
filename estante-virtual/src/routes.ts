import express from "express";
import { PokemonController } from "./1. Controller/PokemonController";
import { PokemonBusiness } from "./2. Business/PokemonBusiness";
import { PokemonDataBase } from "./3. Data/PokemonDataBase";
import { IdGenerator } from "./services/IdGenerator";

export const pokeRouter = express.Router();

const pokeBusiness = new PokemonBusiness(
    new PokemonDataBase,
    new IdGenerator
)

const pokeController = new PokemonController(pokeBusiness);

pokeRouter.get("/find_name", pokeController.findPoke);
pokeRouter.get("/find_id", pokeController.getPokeById);
pokeRouter.get("/get_all", pokeController.getAllPokes);
pokeRouter.patch("/alterate", pokeController.alterPokes);
// pokeRouter.post("/create", pokeController.createPokes);
pokeRouter.delete("/delete", pokeController.deletePoke);

