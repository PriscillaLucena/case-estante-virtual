import { BaseDatabase } from "./BaseDataBase";

export class PokemonDataBase extends BaseDatabase {

    private static TABLE_NAME = "Pokemon";


    public findUser = async (input: string) => {
        try {
            const result = await this.getConnection()
                .select()
                .where({ input })

            return result[0];
        } catch (error) {
            if (error instanceof Error) {
                // throw new Error(400, "error.message");
            }
        }
    }

    
};