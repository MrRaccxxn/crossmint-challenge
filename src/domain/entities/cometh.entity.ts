import { Position } from "./position.entity";

export type ComethDirectionType = "up" | "down" | "right" | "left";

export enum ComethDirection {
    up = "up",
    down = "down",
    right = "right",
    left = "left"
}

export interface Cometh extends Position {
    direction: ComethDirectionType;
}