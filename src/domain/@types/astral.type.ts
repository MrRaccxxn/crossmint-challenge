import { Cometh } from "../entities/cometh.entity"
import { Polyanet } from "../entities/polyanet.entity"
import { Soloon } from "../entities/soloon.entity"

export type Astral = Soloon | Polyanet | Cometh

export enum AstralNames {
    soloon = 'soloon',
    polyanet = 'polyanet',
    cometh = 'cometh',
    space = 'space'
}
