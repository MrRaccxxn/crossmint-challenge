import express from 'express'
import { AxiosResponse } from 'axios'
import { Request, Response } from 'express'
import { DrawCrossmintLogoUseCase } from '../../domain/interfaces/use-cases/challenge/draw-crossmint-logo.usecase'
import { GoalMapUseCase } from '../../domain/interfaces/use-cases/challenge/goal-map.usecase'
import config from '../../config';

export default function ChallengeRouter(
    goalMapUseCase: GoalMapUseCase,
    drawCrossmintLogoUseCase: DrawCrossmintLogoUseCase,
) {
    const router = express.Router()

    router.post('/2', async (_req: Request, res: Response) => {
        try {
            const goalMap: AxiosResponse = await goalMapUseCase.execute(`/map/${config.CANDIDATE_ID}/goal`)
            if (goalMap.data?.goal) {
                await drawCrossmintLogoUseCase.execute(goalMap.data.goal);
            }

            res.statusCode = 201
            res.json({ message: "Crossmint Logo Drawed!" })
        } catch (err) {
            res.status(500).send({ message: `Error: ${err}` })
        }
    })

    return router
}