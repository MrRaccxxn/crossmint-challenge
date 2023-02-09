import request from "supertest";
import { Cometh, ComethDirection } from "../../../src/domain/entities/cometh.entity";
import { CreateComethUseCase } from "../../../src/domain/interfaces/use-cases/cometh/create-cometh.usecase";
import { DeleteComethUseCase } from "../../../src/domain/interfaces/use-cases/cometh/delete-cometh.usecase";
import ComethRouter from "../../../src/presentation/routers/cometh.router";
import server from "../../../src/server";
import { CrossMintEndPoints } from "../../../src/util/enums/crossmint-api.enum";

class MockCreateComethUseCase implements CreateComethUseCase {
    execute(url: string, cometh: Cometh): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

class MockDeleteComethUseCase implements DeleteComethUseCase {
    execute(url: string, cometh: Cometh): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

describe("Cometh Router", () => {
    let mockCreateComethUseCase: CreateComethUseCase;
    let mockDeleteComethUseCase: DeleteComethUseCase;

    beforeAll(() => {
        mockCreateComethUseCase = new MockCreateComethUseCase()
        mockDeleteComethUseCase = new MockDeleteComethUseCase()

        server.use(
            CrossMintEndPoints.comeths,
            ComethRouter(
                mockCreateComethUseCase,
                mockDeleteComethUseCase,
            ))
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    describe("POST /comeths create", () => {
        test("POST /comeths - success", async () => {
            const InputData: Cometh = { row: 1, column: 1, direction: ComethDirection.up }
            jest.spyOn(mockCreateComethUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).post(CrossMintEndPoints.comeths).send(InputData)
            expect(response.status).toBe(201)
        });

        test("POST /comeths - returns 500 on use case error", async () => {
            const InputData: Cometh = { row: 1, column: 1, direction: ComethDirection.up }
            jest.spyOn(mockCreateComethUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post(CrossMintEndPoints.comeths).send(InputData)
            expect(response.status).toBe(500)
        });
    })

    describe("DELETE /comeths delete", () => {
        test("DELETE /comeths - success", async () => {
            const InputData: Cometh = { row: 1, column: 1, direction: ComethDirection.down }
            jest.spyOn(mockDeleteComethUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).delete(CrossMintEndPoints.comeths).send(InputData)
            expect(response.status).toBe(201)
        });

        test("DELETE /comeths - returns 500 on use case error", async () => {
            const InputData: Cometh = { row: 1, column: 1, direction: ComethDirection.down }
            jest.spyOn(mockDeleteComethUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).delete(CrossMintEndPoints.comeths).send(InputData)
            expect(response.status).toBe(500)
        });
    })
})