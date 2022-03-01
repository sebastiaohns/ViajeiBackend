import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreatePessoaViagemController {
  async handle(request: Request, response: Response) {
    const { id_pessoa, id_viagem } = request.body;

    const pessoaViagen = await prismaClient.pessoaViagem.create({
      data: {
        id_pessoa,
        id_viagem
      }
    });

    return response.json(pessoaViagen);
  }
}