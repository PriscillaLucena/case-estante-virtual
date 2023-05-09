export class Pokemon {
    constructor(
        private id: string,
        private name: string,
        private pokedex_number: string,
        private img_name: string,
        private generation: string,
        private evolution_stage: string,
        private evolved: string,
        private family_id: string,
        private cross_gen: string,
        private type_1: string,
        private type_2: string,
        private weather_1: string,
        private weather_2: string,
        private stat_total: string,
        private atk: string,
        private def: string,
        private sta: string,
        private legendary: string,
        private aquireable: string,
        private spawns: string,
        private regional: string,
        private raidable: string,
        private hatchable: string,
        private shiny: string,
        private nest: string,
        private new_poke: string,
        private not_gettable: string,
        private future_evolve: string,
        private cp_40: string,
        private cp_39: string
    ){}

    getId(){
        return this.id;
    };

    getName(){
        return this.name
    };

    getPokedexNumber(){
        return this.pokedex_number
    };

    getImgName(){
        return this.img_name
    };

    getGeneration(){
        return this.generation
    };

    getEvolutionStage(){
        return this.evolution_stage
    };

    getEvolved(){
        return this.evolved
    };

    getFamilyId(){
        return this.family_id
    };

    getCrossGen(){
        return this.cross_gen
    };

    getType1(){
        return this.type_1
    };

    getType2(){
        return this.type_2
    };

    getWeather1(){
        return this.weather_1
    };

    getWeather2(){
        return this.weather_2
    };

    getStatTotal(){
        return this.stat_total
    };

    getAtk(){
        return this.atk
    };

    getDef(){
        return this.def
    };

    getSta(){
        return this.sta
    };

    getLegendary(){
        return this.legendary
    };

    getAquireable(){
        return this.aquireable
    };

    getSpawns(){
        return this.spawns
    };

    getRegional(){
        return this.regional
    };

    getRaidable(){
        return this.raidable
    };

    getHatchable(){
        return this.hatchable
    };

    getShiny(){
        return this.shiny
    };

    getNest(){
        return this.nest
    };

    getNewPoke(){
        return this.new_poke
    };

    getNotGettable(){
        return this.not_gettable
    };

    getFutureEvolve(){
        return this.future_evolve
    };

    getCp40(){
        return this.cp_40
    };

    getCp39(){
        return this.cp_39
    };

    // --------------------Setters------------------------

    setId(id: string){
        this.id = id
    };

    setName(name: string){
        this.name = name
    };

    setPokedexNumber(pokedex_number: string){
        this.pokedex_number = pokedex_number
    };

    setImgName(img_name: string){
        this.img_name = img_name
    };

    setGeneration(generation: string){
        this.generation = generation
    };

    setEvolutionStage(evolution_stage: string){
        this.evolution_stage = evolution_stage
    };

    setEvolved(evolved: string){
        this.evolved = evolved
    };

    setFamilyId(family_id: string){
        this.family_id = family_id
    };

    setCrossGen(cross_gen: string){
        this.cross_gen = cross_gen
    };

    setType1(type_1: string){
        this.type_1 = type_1
    };

    setType2(type_2: string){
        this.type_2 = type_2
    };

    setWeather1(weather_1: string){
        this.weather_1 = weather_1
    };

    setWeather2(weather_2: string){
        this.weather_2 = weather_2
    };

    setStatTotal(stat_total: string){
        this.stat_total = stat_total
    };

    setAtk(atk: string){
        this.atk = atk
    };

    setDef(def: string){
        this.def = def
    };

    setSta(sta: string){
        this.sta = sta
    };

    setLegendary(legendary: string){
        this.legendary = legendary
    };

    setAquireable(aquireable: string){
        this.aquireable = aquireable
    };

    setSpawns(spawns: string){
        this.spawns = spawns
    };

    setRegional(regional: string){
        this.regional = regional
    };

    setRaidable(raidable: string){
        this.raidable = raidable
    };

    setHatchable(hatchable: string){
        this.hatchable = hatchable
    };

    setShiny(shiny: string){
        this.shiny = shiny
    };

    setNest(nest: string){
        this.nest = nest
    };

    setNewPoke(new_poke: string){
        this.new_poke = new_poke
    };

    setNotGettable(not_gettable: string){
        this.not_gettable = not_gettable
    };

    setFutureEvolve(future_evolve: string){
        this.future_evolve = future_evolve
    };

    setCp40(cp_40: string){
        this.cp_40 = cp_40
    };

    setCp39(cp_40: string){
        this.cp_39 = cp_40
    };
};


export interface PokemonDTO {
    id: string,
    name: string,
    pokedex_number: string,
    img_name: string,
    generation: string,
    evolution_stage: string,
    evolved: string,
    family_id: string,
    cross_gen: string,
    type_1: string,
    type_2: string,
    weather_1: string,
    weather_2: string,
    stat_total: string,
    atk: string,
    def: string,
    sta: string,
    legendary: string,
    aquireable: string,
    spawns: string,
    regional: string,
    raidable: string,
    hatchable: string,
    shiny: string,
    nest: string,
    new_poke: string,
    not_gettable: string,
    future_evolve: string,
    cp_40: string,
    cp_39: string
}

export interface CriaPokeDTO {
    name: string,
    pokedex_number: string,
    img_name: string,
    generation: string,
    evolution_stage: string,
    evolved: string,
    family_id: string,
    cross_gen: string,
    type_1: string,
    type_2: string,
    weather_1: string,
    weather_2: string,
    stat_total: string,
    atk: string,
    def: string,
    sta: string,
    legendary: string,
    aquireable: string,
    spawns: string,
    regional: string,
    raidable: string,
    hatchable: string,
    shiny: string,
    nest: string,
    new_poke: string,
    not_gettable: string,
    future_evolve: string,
    cp_40: string,
    cp_39: string
}