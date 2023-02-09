import { Position } from "./position.entity";

export type SoolonColorType = "blue" | "red" | "purple" | "white";

export enum SoolonColor  {
    blue = "blue",
    red = "red",
    purple = "purple",
    white = "white"
}

export interface Soloon extends Position {
    color: SoolonColorType;
}