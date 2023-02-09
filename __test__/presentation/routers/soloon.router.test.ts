import request from "supertest";
import { Soloon, SoolonColor } from "../../../src/domain/entities/soloon.entity";
import { CreateSoloonUseCase } from "../../../src/domain/interfaces/use-cases/soloon/create-soloon.usecase";
import { DeleteSoloonUseCase } from "../../../src/domain/interfaces/use-cases/soloon/delete-soloon.usecase";
import SoloonRouter from "../../../src/presentation/routers/soloon.router";
import server from "../../../src/server";
import { CrossMintEndPoints } from "../../../src/util/enums/crossmint-api.enum";

class MockCreateSoloonUseCase implements CreateSoloonUseCase {
    execute(url: string, soloon: Soloon): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

class MockDeleteSoloonUseCase implements DeleteSoloonUseCase {
    execute(url: string, soloon: Soloon): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

describe("Soloon Router", () => {
    let mockCreateSoloonUseCase: CreateSoloonUseCase;
    let mockDeleteSoloonUseCase: DeleteSoloonUseCase;

    beforeAll(() => {
        mockCreateSoloonUseCase = new MockCreateSoloonUseCase()
        mockDeleteSoloonUseCase = new MockDeleteSoloonUseCase()

        server.use(
            CrossMintEndPoints.soloons,
            SoloonRouter(
                mockCreateSoloonUseCase,
                mockDeleteSoloonUseCase,
            ))
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    describe("POST /soloons create", () => {
        test("POST /soloons - success", async () => {
            const InputData: Soloon = { row: 1, column: 1, color: SoolonColor.blue }
            jest.spyOn(mockCreateSoloonUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).post(CrossMintEndPoints.soloons).send(InputData)
            expect(response.status).toBe(201)
        });

        test("POST /soloons - returns 500 on use case error", async () => {
            const InputData: Soloon = { row: 1, column: 1, color: SoolonColor.blue }
            jest.spyOn(mockCreateSoloonUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post(CrossMintEndPoints.soloons).send(InputData)
            expect(response.status).toBe(500)
        });
    })

    describe("DELETE /soloons delete", () => {
        test("DELETE /soloons - success", async () => {
            const InputData: Soloon = { row: 1, column: 1, color: SoolonColor.purple }
            jest.spyOn(mockDeleteSoloonUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).delete(CrossMintEndPoints.soloons).send(InputData)
            expect(response.status).toBe(201)
        });

        test("DELETE /soloons - returns 500 on use case error", async () => {
            const InputData: Soloon = { row: 1, column: 1, color: SoolonColor.blue }
            jest.spyOn(mockDeleteSoloonUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).delete(CrossMintEndPoints.soloons).send(InputData)
            expect(response.status).toBe(500)
        });
    })
})