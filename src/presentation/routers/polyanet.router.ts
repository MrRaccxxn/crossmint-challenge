import express from 'express'
import { Request, Response } from 'express'
import { CreatePolyanetUseCase } from '../../domain/interfaces/use-cases/create-polyanet.use-case'

export default function PolyanetRouter(
    createPolyanetUseCase: CreatePolyanetUseCase
) {
    const router = express.Router()

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createPolyanetUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Polyanet created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}