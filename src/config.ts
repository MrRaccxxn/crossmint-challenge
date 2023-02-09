import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ENV {
    PORT: number | undefined;
    CROSSMINT_API_URL_BASE: string | undefined;
    CANDIDATE_ID: string | undefined;
    MEGAVERSE_MATRIX_SIZE_CHALLENGE_1: string | undefined;
}

interface Config {
    PORT: number;
    CROSSMINT_API_URL_BASE: string;
    CANDIDATE_ID: string;
    MEGAVERSE_MATRIX_SIZE_CHALLENGE_1: string;
}

const getConfig = (): ENV => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
        CROSSMINT_API_URL_BASE: process.env.CROSSMINT_API_URL_BASE,
        CANDIDATE_ID: process.env.CANDIDATE_ID,
        MEGAVERSE_MATRIX_SIZE_CHALLENGE_1: process.env.MEGAVERSE_MATRIX_SIZE_CHALLENGE_1
    };
};

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in .env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
