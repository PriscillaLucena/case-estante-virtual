
import { BaseError } from "../Error/BaseError";
import { BaseDatabase } from "./BaseDataBase";




export class PokemonDataBase extends BaseDatabase {

    private static TABLE_NAME = "Pokemon";


    public findPoke = async (input: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .where({ name: input })
                .orWhere({ type_1: input })
                .into(PokemonDataBase.TABLE_NAME);
            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonDB");
            }
        }
    }

    public getPokeById = async (input: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .where({ id: input })
                .into(PokemonDataBase.TABLE_NAME);
            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonDB");
            }
        }
    }


    public getAllPokes = async (): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .into(PokemonDataBase.TABLE_NAME);

            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonDB");
            }
        }
    }


    public alterPokes = async (field: string, body: any, id: string): Promise<any> => {
        try {
            const message = "Pokemon editado com sucesso!"

            await this.getConnection().raw(`
            UPDATE Pokemon SET ${field} = "${body}" WHERE id = "${id}"; 
            `)

            return message
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonDB");
            }
        }
    };


    //-------------------------. verificar se vai dar boa esse input    
    public createPoke = async (input: any): Promise<any> => {
        try {

            await this.getConnection()
            .insert({input})
            .into(PokemonDataBase.TABLE_NAME);
           
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonDB");
            }
        }
    }

    public deletePoke = async (input: any): Promise<any> => {
        try {

            await this.getConnection()
            .delete("*")
            .where({id: input})
            .into(PokemonDataBase.TABLE_NAME);
           
        } catch (error) {
            if (error instanceof Error) {
                throw new BaseError(400, "erro no PokemonDB");
            }
        }
    }
}
