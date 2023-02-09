import config from "../../config";
import { DrawCrossmintLogo } from "../../domain/use-cases/challenge/draw-crossmint-logo.usecase";
import { GoalMap } from "../../domain/use-cases/challenge/goal-map.usecase";
import { CreateCometh } from "../../domain/use-cases/cometh/create-cometh.usecase";
import { DeleteCometh } from "../../domain/use-cases/cometh/delete.cometh.usecase";
import CrossmintApi from "../../domain/use-cases/crossmint/crossmint-api.usecase";
import { CleanPolyanetMegaverse } from "../../domain/use-cases/polyanet/clean-polyanet-megaverse.usecase";
import { CreatePolyanet } from "../../domain/use-cases/polyanet/create-polyanet.usecase";
import { DeletePolyanet } from "../../domain/use-cases/polyanet/delete-polyanet.usecase";
import { DrawXPolyanet } from "../../domain/use-cases/polyanet/draw-x-polyanet.usecase";
import { CreateSoloon } from "../../domain/use-cases/soloon/create-soloon.usecase";
import { DeleteSoloon } from "../../domain/use-cases/soloon/delete-soloon.usecase";
import ChallengeRouter from "./challenge.router";
import ComethRouter from "./cometh.router";
import PolyanetRouter from "./polyanet.router";
import SoloonRouter from "./soloon.router";

const crossmitApi = new CrossmintApi(config.CROSSMINT_API_URL_BASE);

export const challengeMiddleware = ChallengeRouter(
    new GoalMap(crossmitApi),
    new DrawCrossmintLogo(crossmitApi)
);

export const polyanetMiddleware = PolyanetRouter(
    new CreatePolyanet(crossmitApi),
    new DeletePolyanet(crossmitApi),
    new DrawXPolyanet(crossmitApi),
    new CleanPolyanetMegaverse(crossmitApi)
);

export const comethMiddleware = ComethRouter(
    new CreateCometh(crossmitApi),
    new DeleteCometh(crossmitApi)
);

export const soloonMiddleware = SoloonRouter(
    new CreateSoloon(crossmitApi),
    new DeleteSoloon(crossmitApi)
);