import { PokemonDataBase } from "../3. Data/PokemonDataBase";
import { BaseError } from "../Error/BaseError";
import { PokemonDTO } from "../models/PokemonModel";
import { IdGenerator } from "../services/IdGenerator";

const pokeDB = new PokemonDataBase();
const idGenerator = new IdGenerator();

export class PokemonBusiness {

    public findPoke = async (input: string): Promise<any> => {
        try {

            const queryResult: any = await pokeDB.findPoke(input)

            if (!input) {
                throw new BaseError(412, "Necessário passar algum nome para procurar");

            }

            if (!queryResult[0]) {
                throw new BaseError(400, "Não foi encontrado nenhum pokemon")
            };

            return queryResult[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonBusiness");
            }
        }
    };


    public getPokeById = async (input: string): Promise<any> => {
        try {

            const queryResult: any = await pokeDB.getPokeById(input)

            if (!input) {
                throw new Error("Necessário passar id");

            }

            if (!queryResult[0]) {
                throw new Error("Não foi encontrado nenhum pokemon")
            };

            return queryResult[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonBusiness");
            }
        }
    };

    public getAllPokes = async (): Promise<any> => {
        try {

            const queryResult: any = await pokeDB.getAllPokes()

            if (!queryResult[0]) {
                throw new BaseError(400, "Não foi encontrado nenhum pokemon")
            };

            return queryResult[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonBusiness");
            }
        }
    };

    public alterPokes = async (field: string, body: any, id: string): Promise<any> => {

        const message = `Alteração de ${id} feita com sucesso!`

        try {

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonBusiness");
            }
        }


        await pokeDB.alterPokes(field, body, id)

        if (!field) {
            throw new BaseError(412, "Necessário informar campo para alterar")
        };

        if (!body) {
            throw new BaseError(412, "Necessário passar informações para alterar")
        };

        if (!id) {
            throw new BaseError(412, "Necessário informar id para alterar")
        };

        return message

    };

    public createPoke = async (input: any): Promise<any> => {

        const message = `Inclusão feita com sucesso!`

        try {

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

            return message

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonBusiness");
            }
        }
    };

    public deletPoke = async (input: any): Promise<any> => {
        const message = `Deleção de ${input} feita com sucesso!`

        try {
            await pokeDB.deletePoke(input);

            if (!input) {
                throw new BaseError(412, "Necessário informar id para deletar")
            };

            return message
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonBusiness");
            }
        }

    };
}