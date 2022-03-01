import { Router } from 'express'
import { CreatePessoaController } from './controllers/CreatePessoaController';

const router = Router();

const createPessoa = new CreatePessoaController();

router.post("/pessoa", createPessoa.handle);

export { router };