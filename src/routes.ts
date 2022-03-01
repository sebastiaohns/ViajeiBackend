import { Router } from 'express'
import { CreatePessoaController } from './controllers/CreatePessoaController';
import { CreateViagemController } from './controllers/CreateViagemController';

const router = Router();

const createPessoa = new CreatePessoaController();
const createViagem = new CreateViagemController();

router.post("/pessoa", createPessoa.handle);
router.post("/viagem", createViagem.handle);

export { router };
