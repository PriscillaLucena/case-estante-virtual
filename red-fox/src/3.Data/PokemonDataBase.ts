
import { BaseError } from "../Error/BaseError";
import { BaseDatabase } from "./BaseDataBase";


export class PokemonDataBase extends BaseDatabase {

    private static TABLE_NAME = "Pokemon";

    // --------------------filtra um Pokemón pelo seu nome-------------------
    public findPokeByName = async (input: string): Promise<any> => {
        try {

            console.log(input, "input no db")
            const result = await this.getConnection()
                .select("*")
                .where({ name: input })
                .into(PokemonDataBase.TABLE_NAME);

            return result[0];

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    }

    // --------------------filtra um Pokemón pelo seu id-------------------
    public getPokeById = async (input: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .where({ id: input })
                .into(PokemonDataBase.TABLE_NAME);
            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    }

    // --------Lista todos os Pokemóns e suas informações (páginas a cada 10 pokemons)------------
    public getAllPokes = async (page: number): Promise<any> => {
        try {

            let size = 10;
            let offset = size * (page - 1)

            const result = await this.getConnection()
                .select("*")
                .limit(size)
                .offset(offset)
                .into(PokemonDataBase.TABLE_NAME)

            console.log("page no db", page)

            return result;
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    }

    // ---------faz a alteração de qualquer informação de um Pokemón pelo seu id-------------
    public alterPokes = async (field: string, body: any, id: string): Promise<any> => {
        try {
            const message = "Pokemon editado com sucesso!"

            await this.getConnection().raw(`
            UPDATE Pokemon 
            SET ${field} = ${body} WHERE id = ${id}; 
            `)

            return message
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    };

    // -----------------------cria um novo Pokemón -----------------------
    public createPokes = async (input: any): Promise<any> => {
        try {

            await this.getConnection()
                .insert({
                    id: input.id,
                    name: input.name,
                    pokedex_number: input.pokedex_number,
                    img_name: input.img_name,
                    generation: input.generation,
                    evolution_stage: input.evolution_stage,
                    evolved: input.evolved,
                    family_id: input.family_id,
                    cross_gen: input.cross_gen,
                    type_1: input.type_1,
                    type_2: input.type_2,
                    weather_1: input.weather_1,
                    weather_2: input.weather_2,
                    stat_total: input.stat_total,
                    atk: input.atk,
                    def: input.def,
                    sta: input.sta,
                    legendary: input.legendary,
                    aquireable: input.aquireable,
                    spawns: input.spawns,
                    regional: input.regional,
                    raidable: input.raidable,
                    hatchable: input.hatchable,
                    shiny: input.shiny,
                    nest: input.nest,
                    new_poke: input.new_poke,
                    not_gettable: input.not_gettable,
                    future_evolve: input.future_evolve,
                    cp_40: input.cp_40,
                    cp_39: input.cp_39
                })
                .into(PokemonDataBase.TABLE_NAME);

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    }

    // --------------------deleta um Pokemón através do seu id-------------------
    public deletePoke = async (input: any): Promise<any> => {
        try {

            await this.getConnection()
                .delete("*")
                .where({ id: input })
                .into(PokemonDataBase.TABLE_NAME);

        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, error.message);
            }
        }
    }
}
