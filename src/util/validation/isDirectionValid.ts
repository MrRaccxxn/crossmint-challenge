import { ComethDirection, ComethDirectionType } from "../../domain/entities/cometh.entity";
import { SoolonColor, SoolonColorType } from "../../domain/entities/soloon.entity";

export const isDirectionValid = (direction: string): direction is ComethDirectionType => {
    const directions = Object.values(ComethDirection)
    return directions.some((direction: string) => direction === direction)
};

export const isColorValid = (color: string): color is SoolonColorType => {
    const colors = Object.values(SoolonColor)
    return colors.some((color: string) => color === color)
}