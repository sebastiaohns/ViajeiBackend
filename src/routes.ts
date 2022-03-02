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

router.get("/viagem", createViagem.retrieveAll);
router.get("/viagem/:id", createViagem.retrieveById);
router.get("/pessoa", createPessoa.retrieveAll);
router.get("/pessoa/:id", createPessoa.retrieveById);
router.get("/atividade", createAtividade.retrieveAll);
router.get("/atividade/:id", createAtividade.retrieveById);
router.get("/pessoaViagem", createPessoaViagem.retrieveAll);

router.put("/viagem/:id", createViagem.editData);
router.put("/pessoa/:id", createPessoa.editData);
router.put("/atividade/:id", createAtividade.editData);

// router.delete("/viagem/:id", createViagem.delete);
// router.delete("/pessoa/:id", createPessoa.delete);
router.delete("/atividade/:id", createAtividade.delete);
router.delete("/pessoaViagem/:id_pessoa/:id_viagem", createPessoaViagem.delete);

export { router };
