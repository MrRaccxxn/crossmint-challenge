
export interface DrawCrossmintLogoUseCase {
    execute(matrixData: string[][]): Promise<void>;
}