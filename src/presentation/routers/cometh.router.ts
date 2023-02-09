import express from 'express'
import { Request, Response } from 'express'
import { CreateComethUseCase } from '../../domain/interfaces/use-cases/cometh/create-cometh.usecase'
import { DeleteComethUseCase } from '../../domain/interfaces/use-cases/cometh/delete-cometh.usecase'
import { CrossMintEndPoints } from '../../util/enums/crossmint-api.enum'

export default function ComethRouter(
    createComethUseCase: CreateComethUseCase,
    deleteComethUseCase: DeleteComethUseCase,
) {
    const router = express.Router()

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createComethUseCase.execute(CrossMintEndPoints.comeths, req.body)
            res.statusCode = 201
            res.json({ message: "Cometh created" })
        } catch (err) {
            res.status(500).send({ message: `Error saving data : ${err}` })
        }
    })

    router.delete('/', async (req: Request, res: Response) => {
        try {
            await deleteComethUseCase.execute(CrossMintEndPoints.comeths, req.body)
            res.statusCode = 201
            res.json({ message: "Cometh deleted" })
        } catch (err) {
            res.status(500).send({ message: `Error deleting data : ${err}` })
        }
    })

    return router
}