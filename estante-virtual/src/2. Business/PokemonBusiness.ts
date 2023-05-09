import { PokemonDataBase } from "../3. Data/PokemonDataBase";
import { BaseError } from "../Error/BaseError";
import { PokemonDTO } from "../models/PokemonModel";
import { IdGenerator } from "../services/IdGenerator";

export class PokemonBusiness {
    constructor(
        private pokeDB: PokemonDataBase,
        private idGenerator: IdGenerator
    ) { }

    public findPokeByName = async (input: string): Promise<any> => {
        try {

           
            if (!input) {
                throw new BaseError(412, "Necessário passar algum nome para procurar");
            };

            const nameTratado: string = input[0].toLocaleUpperCase() + input.substring(1)
            
            const queryResult: any = await this.pokeDB.findPokeByName(nameTratado)

            console.log("query no business", queryResult)


            if (!queryResult) {
                throw new BaseError(400, "Não foi encontrado nenhum pokemon")
            };

            return queryResult

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    };


    public getPokeById = async (input: string): Promise<any> => {
        try {

            let queryResult: any = await this.pokeDB.getPokeById(input)

            if (!input) {
                throw new BaseError(400, "Necessário passar id");
            };


            if (!queryResult) {
                throw new BaseError(400, "Não foi encontrado nenhum pokemon")
            };

            return queryResult

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    };

    public getAllPokes = async (page: number): Promise<any> => {
        try {

            if (!page) {
                page = 1
            };

            const queryResult: any = await this.pokeDB.getAllPokes(page)

            console.log("page no business", page)

            if (!queryResult) {
                throw new BaseError(400, "Não foi encontrado nenhum pokemon")
            };

            return queryResult

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    };

    public alterPokes = async (field: string, body: any, id: string): Promise<void> => {

        try {

            if (!field) {
                throw new BaseError(412, "selecionar algo para alterar")
            };

            if (!body) {
                throw new BaseError(412, "Necessário passar informações para alterar")
            };

            if (!id) {
                throw new BaseError(412, "Necessário informar id para alterar")
            };

            await this.pokeDB.alterPokes(field, body, id)


        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    };

    public createPokes = async (input: any): Promise<any> => {

        const message = `Inclusão feita com sucesso!`

        try {

            const { name, pokedex_number, img_name, generation, evolution_stage, evolved, family_id, cross_gen,
                type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, aquireable, spawns,
                regional, raidable, hatchable, shiny, nest, new_poke, not_gettable, future_evolve, cp_40,
                cp_39 } = input

            const id: string = this.idGenerator.generate();
            const nameTratado: string = name[0].toLocaleUpperCase() + name.substring(1)

            const newPoke: PokemonDTO = {
                id: id,
                name: nameTratado,
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


            await this.pokeDB.createPokes(newPoke);

            return message

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    };

    public deletePoke = async (input: any): Promise<any> => {
        const message = `Deleção de ${input} feita com sucesso!`

        try {
            await this.pokeDB.deletePoke(input);

            if (!input) {
                throw new BaseError(412, "Necessário informar id para deletar")
            };

            return message
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }

    };
}