"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const keep_alive_1 = require("./keep-alive");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'https://holdingbsc.re',
            'https://www.holdingbsc.re',
            'https://ambu-zeta.vercel.app',
            'http://localhost:3000',
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
    (0, keep_alive_1.startKeepAlive)(port);
}
void bootstrap();
//# sourceMappingURL=main.js.map