import server from './server'
import config from "./config";
import { CrossMintEndPoints } from './util/enums/crossmint-api.enum';
import { challengeMiddleware, comethMiddleware, polyanetMiddleware, soloonMiddleware } from './presentation/routers';

(async () => {
    server.use(CrossMintEndPoints.polyanets, polyanetMiddleware)
    server.use(CrossMintEndPoints.comeths, comethMiddleware)
    server.use(CrossMintEndPoints.soloons, soloonMiddleware)
    server.use(CrossMintEndPoints.challenge, challengeMiddleware)

    server.listen(config.PORT, () => console.log(`Running on http://localhost:${config.PORT}`))
})()