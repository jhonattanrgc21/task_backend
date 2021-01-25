// ======================================
//			Main Modules
// ======================================
import 'reflect-metadata';
import App from './app.module';
import * as dotenv from 'dotenv';

// ======================================
//				Constant
// ======================================
const PORT = process.env.NODE_PORT || 4000;

async function main(){   
    dotenv.config(); // Para leer las variables de entorno
    const app = await App();

    app.listen(PORT, () => console.log(`Application is running on: http://localhost:${PORT}`))
}
main();
