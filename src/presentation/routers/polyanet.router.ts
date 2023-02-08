import express from 'express'
import { Request, Response } from 'express'
import { CleanPolyanetMegaverseUseCase } from '../../domain/interfaces/use-cases/polyanet/clean-polyanet-megaverse.usecase'
import { CreatePolyanetUseCase } from '../../domain/interfaces/use-cases/polyanet/create-polyanet.usecase'
import { DeletePolyanetUseCase } from '../../domain/interfaces/use-cases/polyanet/delete-polyanet.usecase'
import { DrawXPolyanetUseCase } from '../../domain/interfaces/use-cases/polyanet/draw-x-polyanet.usecase'
import { CrossMintEndPoints } from '../../util/enums/crossmint-api.enum'

export default function PolyanetRouter(
    createPolyanetUseCase: CreatePolyanetUseCase,
    deletePolyanetUseCase: DeletePolyanetUseCase,
    drawXPolyanetUseCase: DrawXPolyanetUseCase,
    cleanPolyanetMegaverseUseCase: CleanPolyanetMegaverseUseCase
) {
    const router = express.Router()

    router.post('/', async (req: Request, res: Response) => {
        try {
            const response = await createPolyanetUseCase.execute(CrossMintEndPoints.polyanet, req.body)
            console.log(response);
            res.statusCode = 201
            res.json({ message: "Polyanet created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    router.delete('/', async (req: Request, res: Response) => {
        try {
            await deletePolyanetUseCase.execute(CrossMintEndPoints.polyanet, req.body)
            res.statusCode = 201
            res.json({ message: "Polyanet deleted" })
        } catch (err) {
            res.status(500).send({ message: "Error deleting data" })
        }
    })

    router.post('/draw-x', async (_req: Request, res: Response) => {
        try {
            await drawXPolyanetUseCase.execute(CrossMintEndPoints.polyanet)
            res.json({ message: "X mark drawed" })
        } catch (err) {
            res.status(500).send({ message: "Error drawing X" })
        }
    })

    router.post('/clean', async (_req: Request, res: Response) => {
        try {
            await cleanPolyanetMegaverseUseCase.execute(CrossMintEndPoints.polyanet)
            res.json({ message: "Map cleaned" })
        } catch (err) {
            res.status(500).send({ message: "Error cleaning the polyanet megaverse" })
        }
    })

    return router
}