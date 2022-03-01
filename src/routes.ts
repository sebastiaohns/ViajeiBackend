import { Router } from 'express'
import { CreateAtividadeController } from './controllers/CreateAtividadeController';
import { CreatePessoaController } from './controllers/CreatePessoaController';
import { CreatePessoaViagemController } from './controllers/CreatePessoaViagemController';
import { CreateViagemController } from './controllers/CreateViagemController';

const router = Router();

const createPessoa = new CreatePessoaController();
const createViagem = new CreateViagemController();
const createPessoaViagem = new CreatePessoaViagemController();
const createAtividade = new CreateAtividadeController();

router.post("/pessoa", createPessoa.handle);
router.post("/viagem", createViagem.handle);
router.post("/pessoaViagem", createPessoaViagem.handle);
router.post("/atividade", createAtividade.handle);

export { router };
