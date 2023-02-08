export interface CleanPolyanetMegaverseUseCase {
    execute(url: string): Promise<void>;
}