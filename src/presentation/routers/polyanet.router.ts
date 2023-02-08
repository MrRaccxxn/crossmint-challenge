import express from 'express'
import { Request, Response } from 'express'
import { CreatePolyanetUseCase } from '../../domain/interfaces/use-cases/polyanet/create-polyanet.usecase'
import { DeletePolyanetUseCase } from '../../domain/interfaces/use-cases/polyanet/delete-polyanet.usecase'
import { CrossMintEndPoints } from '../../util/enums/crossmint-api.enum'

export default function PolyanetRouter(
    createPolyanetUseCase: CreatePolyanetUseCase,
    deletePolyanetUseCase: DeletePolyanetUseCase
) {
    const router = express.Router()

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createPolyanetUseCase.execute(CrossMintEndPoints.polyanet, req.body)
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

    return router
}