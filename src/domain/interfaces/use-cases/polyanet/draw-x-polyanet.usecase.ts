export interface DrawXPolyanetUseCase {
    execute(url: string): Promise<void>;
}