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

  async retrieveAll(request: Request, response: Response) {
    const todasPessoasViagens = await prismaClient.pessoaViagem.findMany();

    return response.json(todasPessoasViagens)
  }

  async delete(request: Request, response: Response) {
    const { id_pessoa, id_viagem } = request.params;

    const pessoaViagen = await prismaClient.pessoaViagem.findFirst({
      where: {
        id_pessoa: id_pessoa,
        id_viagem: id_viagem
      }
    });

    await prismaClient.pessoaViagem.delete({
      where: {
        id: pessoaViagen?.id
      }
    })

    return response.json({ message: "Pessoa excluido da viagem com sucesso!" });
  }
}