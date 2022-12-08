export type PokemonData = {
    name:string
    id:number
    sprites: {
        front_defaut: string
    }
    types: {
        slot: number
        type: {
            nome: string
            url: string
        }
    }[]
}