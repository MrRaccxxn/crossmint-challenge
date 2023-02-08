import request from "supertest";
import { Polyanet } from "../../../src/domain/entities/polyanet.entity";
import { CreatePolyanetUseCase } from "../../../src/domain/interfaces/use-cases/create-polyanet.use-case";
import PolyanetRouter from "../../../src/presentation/routers/polyanet.router";
import server from "../../../src/server";

class MockCreatePolyanetUseCase implements CreatePolyanetUseCase {
    execute(polyanet: Polyanet): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}

describe("Polyanet Router", () => {
    let mockCreatePolyanetUseCase: CreatePolyanetUseCase;

    beforeAll(() => {
        mockCreatePolyanetUseCase = new MockCreatePolyanetUseCase()
        server.use("/polyanet", PolyanetRouter(mockCreatePolyanetUseCase))
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    describe("POST /polyanet", () => {
        test("POST /polyanet - success", async () => {
            const InputData = { row: 1, column: 1 }
            jest.spyOn(mockCreatePolyanetUseCase, "execute").mockImplementation(() => Promise.resolve(true))
            const response = await request(server).post("/polyanet").send(InputData)
            expect(response.status).toBe(201)
        });

        test("POST /polyanet - returns 500 on use case error", async () => {
            const InputData = { row: 1, column: 1 }
            jest.spyOn(mockCreatePolyanetUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post("/polyanet").send(InputData)
            expect(response.status).toBe(500)
        });
    })
})