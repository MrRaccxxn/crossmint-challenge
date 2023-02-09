import express from 'express'
import { Request, Response } from 'express'
import { CreateSoloonUseCase } from '../../domain/interfaces/use-cases/soloon/create-soloon.usecase'
import { DeleteSoloonUseCase } from '../../domain/interfaces/use-cases/soloon/delete-soloon.usecase'
import { CrossMintEndPoints } from '../../util/enums/crossmint-api.enum'

export default function SoloonRouter(
    createSoloonUseCase: CreateSoloonUseCase,
    deleteSoloonUseCase: DeleteSoloonUseCase
) {
    const router = express.Router()

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createSoloonUseCase.execute(CrossMintEndPoints.soloons, req.body)
            res.statusCode = 201
            res.json({ message: "Soloon created" })
        } catch (err) {
            res.status(500).send({ message: `Error saving data : ${err}` })
        }
    })

    router.delete('/', async (req: Request, res: Response) => {
        try {
            await deleteSoloonUseCase.execute(CrossMintEndPoints.soloons, req.body)
            res.statusCode = 201
            res.json({ message: "Soloon deleted" })
        } catch (err) {
            res.status(500).send({ message: `Error deleting data : ${err}` })
        }
    })

    return router
}