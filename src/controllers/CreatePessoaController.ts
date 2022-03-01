import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreatePessoaController {
  async handle(request: Request, response: Response) {
    const { nome, sobrenome, telefone, email, senha, cargo } = request.body;

    const pessoa = await prismaClient.pessoa.create({
      data: {
        nome,
        sobrenome,
        telefone,
        email,
        senha,
        cargo
      }
    });

    return response.json(pessoa);
  }
}
