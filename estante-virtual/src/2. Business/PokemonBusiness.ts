import { PokemonDataBase } from "../3. Data/PokemonDataBase";
import { Pokemon, PokemonDTO } from "../models/PokemonModel";
import { IdGenerator } from "../services/idGenerator";

const pokeDB = new PokemonDataBase();
const idGenerator = new IdGenerator();

export class PokemonBusiness {

    public findPoke = async (input: string): Promise<any> => {

        const queryResult: any = await pokeDB.findPoke(input)

        if(!input) {
            throw new Error("Necessário passar algum nome para procurar");
            
        }

        if (!queryResult[0]) {
            throw new Error("Não foi encontrado nenhum pokemon")
        };

        return queryResult[0]
    };

    public getPokes = async (): Promise<any> => {

        const queryResult: any = await pokeDB.getPokes()

        if (!queryResult[0]) {
            throw new Error("Não foi encontrado nenhum pokemon")
        };

        return queryResult[0]

    };

    public alterPokes = async (input: any): Promise<any> => {

        await pokeDB.alterPokes(input)

        // if (!queryResult[0]) {
        //     throw new Error("Não foi encontrado nenhum pokemon")
        // };

        // return queryResult[0]

    };

    public createPoke = async (input: any): Promise<any> => {

        const { name, pokedex_number, img_name, generation, evolution_stage, evolved, family_id, cross_gen,
            type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, aquireable, spawns,
            regional, raidable, hatchable, shiny, nest, new_poke, not_gettable, future_evolve, cp_40, 
            cp_39 } = input

            const id: string = idGenerator.generate();

        const newPoke: PokemonDTO = {
            id: id,
            name,
            pokedex_number,
            img_name,
            generation,
            evolution_stage,
            evolved,
            family_id,
            cross_gen,
            type_1,
            type_2,
            weather_1,
            weather_2,
            stat_total,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            new_poke,
            not_gettable,
            future_evolve,
            cp_40,
            cp_39
        };

        await pokeDB.createPoke(newPoke);

    };
    

}