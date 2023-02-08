import server from './server'
import config from "./config";
import PolyanetRouter from './presentation/routers/polyanet.router';
import { CreatePolyanet } from './domain/use-cases/polyanet/create-polyanet.usecase';
import { DeletePolyanet } from './domain/use-cases/polyanet/delete-polyanet.usecase';
import CrossmintApi from './domain/use-cases/crossmint/crossmint-api.usecase';
import { CrossMintEndPoints } from './util/enums/crossmint-api.enum';
import { DrawXPolyanet } from './domain/use-cases/polyanet/draw-x-polyanet.usecase';
import { CleanPolyanetMegaverse } from './domain/use-cases/polyanet/clean-polyanet-megaverse.usecase';

(async () => {

    const crossmitApi = new CrossmintApi(config.CROSSMINT_API_URL_BASE);

    const polyanetMiddleWare = PolyanetRouter(
        new CreatePolyanet(crossmitApi),
        new DeletePolyanet(crossmitApi),
        new DrawXPolyanet(crossmitApi),
        new CleanPolyanetMegaverse(crossmitApi)
    )

    server.use(CrossMintEndPoints.polyanet, polyanetMiddleWare)

    server.listen(config.PORT, () => console.log(`Running on http://localhost:${config.PORT}`))
})()