import { Request, Response } from "express";
import { PokemonBusiness } from "../2. Business/PokemonBusiness";
import { BaseError } from "../Error/BaseError";
import { CriaPokeDTO } from "../models/PokemonModel";

export class PokemonController {
    constructor(
        private pokeBusiness: PokemonBusiness
    ) { }

    public findPokeByName = async (req: Request, res: Response): Promise<any> => {
        try {

            const name = String(req.query.name);

            const pokemonList: any = await this.pokeBusiness.findPokeByName(name)
        
            res.status(200).send(pokemonList)

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        };
    };

    public getPokeById = async (req: Request, res: Response): Promise<any> => {
        try {

            const id: string = req.params.id;

            const pokemonList = await this.pokeBusiness.getPokeById(id)

            res.status(200).send(pokemonList)

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        };
    };

    public getAllPokes = async (req: Request, res: Response): Promise<any> => {
        try {
            const page = Number(req.query.page) 
            const pokemonList = await this.pokeBusiness.getAllPokes(page)

            res.status(200).send(pokemonList)

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        };
    };

    public alterPokes = async (req: Request, res: Response): Promise<void> => {
        try {

            const { field, body } = req.body;
            const id = String(req.params.id)

            await this.pokeBusiness.alterPokes(field, body, id)

            res.status(200).send(`o campo "${field}" foi alterado com sucesso!`)

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        };
    };

    public createPokes = async (req: Request, res: Response): Promise<void> => {
        try {

            const { name, pokedex_number, img_name, generation, evolution_stage, evolved, family_id, cross_gen,
                type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, aquireable, spawns,
                regional, raidable, hatchable, shiny, nest, new_poke, not_gettable, future_evolve, cp_40,
                cp_39 } = req.body;

                const input: CriaPokeDTO = {
                    name, pokedex_number, img_name, generation, evolution_stage, evolved, family_id, cross_gen,
                type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, aquireable, spawns,
                regional, raidable, hatchable, shiny, nest, new_poke, not_gettable, future_evolve, cp_40,
                cp_39 }

            await this.pokeBusiness.createPokes(input)

            res.status(200).send(`Pokemón criado com sucesso!`)

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        };
    };

    public deletePoke = async (req: Request, res: Response): Promise<void> => {
        try {

            const id  = req.params.id;

            await this.pokeBusiness.deletePoke(id)

            res.status(200).send(`Pokemon deletado com sucesso!`)

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        };
    };

};

