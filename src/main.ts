import server from './server'
import config from "./config";

(async () => {
    server.listen(config.PORT, () => console.log(`Running on http://localhost:${config.PORT}`))
})()