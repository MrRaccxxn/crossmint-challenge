import request from "supertest";
import { Polyanet } from "../../../src/domain/entities/polyanet.entity";
import { CleanPolyanetMegaverseUseCase } from "../../../src/domain/interfaces/use-cases/polyanet/clean-polyanet-megaverse.usecase";
import { CreatePolyanetUseCase } from "../../../src/domain/interfaces/use-cases/polyanet/create-polyanet.usecase";
import { DeletePolyanetUseCase } from "../../../src/domain/interfaces/use-cases/polyanet/delete-polyanet.usecase";
import { DrawXPolyanetUseCase } from "../../../src/domain/interfaces/use-cases/polyanet/draw-x-polyanet.usecase";
import PolyanetRouter from "../../../src/presentation/routers/polyanet.router";
import server from "../../../src/server";
import { CrossMintEndPoints } from "../../../src/util/enums/crossmint-api.enum";

class MockCreatePolyanetUseCase implements CreatePolyanetUseCase {
    execute(url: string, polyanet: Polyanet): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

class MockDeletePolyanetUseCase implements DeletePolyanetUseCase {
    execute(url: string, polyanet: Polyanet): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

class MockCleanPolyanetMegaverseUseCase implements CleanPolyanetMegaverseUseCase {
    execute(url: string): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

class MockDrawXPolyanetUseCase implements DrawXPolyanetUseCase {
    execute(url: string): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

describe("Polyanet Router", () => {
    let mockCreatePolyanetUseCase: CreatePolyanetUseCase;
    let mockDeletePolyanetUseCase: DeletePolyanetUseCase;
    let mockCleanPolyanetMegaverseUseCase: CleanPolyanetMegaverseUseCase;
    let mockDrawXPolyanetUseCase: DrawXPolyanetUseCase;

    beforeAll(() => {
        mockCreatePolyanetUseCase = new MockCreatePolyanetUseCase()
        mockDeletePolyanetUseCase = new MockDeletePolyanetUseCase()
        mockCleanPolyanetMegaverseUseCase = new MockCleanPolyanetMegaverseUseCase()
        mockDrawXPolyanetUseCase = new MockDrawXPolyanetUseCase()

        server.use(
            CrossMintEndPoints.polyanets,
            PolyanetRouter(
                mockCreatePolyanetUseCase,
                mockDeletePolyanetUseCase,
                mockDrawXPolyanetUseCase,
                mockCleanPolyanetMegaverseUseCase,
            ))
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    describe("POST /polyanet create", () => {
        test("POST /polyanet - success", async () => {
            const InputData: Polyanet = { row: 1, column: 1 }
            jest.spyOn(mockCreatePolyanetUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).post(CrossMintEndPoints.polyanets).send(InputData)
            expect(response.status).toBe(201)
        });

        test("POST /polyanet - returns 500 on use case error", async () => {
            const InputData: Polyanet = { row: 1, column: 1 }
            jest.spyOn(mockCreatePolyanetUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post(CrossMintEndPoints.polyanets).send(InputData)
            expect(response.status).toBe(500)
        });
    })

    describe("DELETE /polyanet delete", () => {
        test("DELETE /polyanet - success", async () => {
            const InputData: Polyanet = { row: 1, column: 1 }
            jest.spyOn(mockDeletePolyanetUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).delete(CrossMintEndPoints.polyanets).send(InputData)
            expect(response.status).toBe(201)
        });

        test("DELETE /polyanet - returns 500 on use case error", async () => {
            const InputData: Polyanet = { row: 1, column: 1 }
            jest.spyOn(mockDeletePolyanetUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).delete(CrossMintEndPoints.polyanets).send(InputData)
            expect(response.status).toBe(500)
        });
    })

    describe("DRAW X /polyanet post", () => {
        test("DRAW X /polyanet - success", async () => {
            jest.spyOn(mockDrawXPolyanetUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).post(`${CrossMintEndPoints.polyanets}/draw-x`)
            expect(response.status).toBe(201);
        });

        test("DRAW X /polyanet - returns 500 on use case error", async () => {
            jest.spyOn(mockDrawXPolyanetUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post(`${CrossMintEndPoints.polyanets}/draw-x`)
            expect(response.status).toBe(500)
        });
    })

    describe("CLEAN /polyanet post", () => {
        test("CLEAN /polyanet - success", async () => {
            jest.spyOn(mockCleanPolyanetMegaverseUseCase, "execute").mockImplementation(() => Promise.resolve())
            const response = await request(server).post(`${CrossMintEndPoints.polyanets}/clean`)
            expect(response.status).toBe(201)
        });

        test("CLEAN /polyanet - returns 500 on use case error", async () => {
            jest.spyOn(mockCleanPolyanetMegaverseUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post(`${CrossMintEndPoints.polyanets}/clean`)
            expect(response.status).toBe(500)
        });
    })

})