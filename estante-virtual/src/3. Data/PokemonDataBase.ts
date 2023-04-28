
import { BaseDatabase } from "./BaseDataBase";


export class PokemonDataBase extends BaseDatabase {

    private static TABLE_NAME = "Pokemon";


    public findPoke = async (input: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .where({ input })
                .into(PokemonDataBase.TABLE_NAME);
            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                // throw new Error(400, "error.message");
            }
        }
    }

    public getPokes = async (): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .into(PokemonDataBase.TABLE_NAME);

            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                // throw new Error(400, "error.message");
            }
        }
    }


    public alterPokes = async (input: any): Promise<any> => {
        try {
            const result = await this.getConnection()
                .insert({ input })
                .into(PokemonDataBase.TABLE_NAME);

            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                // throw new Error(400, "error.message");
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
                // throw new Error(400, "error.message");
            }
        }
    }
}
