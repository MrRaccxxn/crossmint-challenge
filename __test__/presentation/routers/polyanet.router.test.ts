import request from "supertest";
import { Polyanet } from "../../../src/domain/entities/polyanet.entity";
import { CreatePolyanetUseCase } from "../../../src/domain/interfaces/use-cases/polyanet/create-polyanet.usecase";
import { DeletePolyanetUseCase } from "../../../src/domain/interfaces/use-cases/polyanet/delete-polyanet.usecase";
import PolyanetRouter from "../../../src/presentation/routers/polyanet.router";
import server from "../../../src/server";
import { CrossMintEndPoints } from "../../../src/util/enums/crossmint-api.enum";

class MockCreatePolyanetUseCase implements CreatePolyanetUseCase {
    execute(url: string, polyanet: Polyanet): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}

class MockDeletePolyanetUseCase implements DeletePolyanetUseCase {
    execute(url: string, polyanet: Polyanet): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}

describe("Polyanet Router", () => {
    let mockCreatePolyanetUseCase: CreatePolyanetUseCase;
    let mockDeletePolyanetUseCase: DeletePolyanetUseCase;

    beforeAll(() => {
        mockCreatePolyanetUseCase = new MockCreatePolyanetUseCase()
        mockDeletePolyanetUseCase = new MockDeletePolyanetUseCase()

        server.use(CrossMintEndPoints.polyanet, PolyanetRouter(mockCreatePolyanetUseCase, mockDeletePolyanetUseCase))
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    describe("POST /polyanet create", () => {
        test("POST /polyanet - success", async () => {
            const InputData = { row: 1, column: 1 }
            jest.spyOn(mockCreatePolyanetUseCase, "execute").mockImplementation(() => Promise.resolve(true))
            const response = await request(server).post(CrossMintEndPoints.polyanet).send(InputData)
            expect(response.status).toBe(201)
        });

        test("POST /polyanet - returns 500 on use case error", async () => {
            const InputData = { row: 1, column: 1 }
            jest.spyOn(mockCreatePolyanetUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post(CrossMintEndPoints.polyanet).send(InputData)
            expect(response.status).toBe(500)
        });
    })

    describe("DELETE /polyanet delete", () => {
        test("DELETE /polyanet - success", async () => {
            const InputData = { row: 1, column: 1 }
            jest.spyOn(mockDeletePolyanetUseCase, "execute").mockImplementation(() => Promise.resolve(true))
            const response = await request(server).delete(CrossMintEndPoints.polyanet).send(InputData)
            expect(response.status).toBe(201)
        });

        test("DELETE /polyanet - returns 500 on use case error", async () => {
            const InputData = { row: 1, column: 1 }
            jest.spyOn(mockDeletePolyanetUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).delete(CrossMintEndPoints.polyanet).send(InputData)
            expect(response.status).toBe(500)
        });
    })
})