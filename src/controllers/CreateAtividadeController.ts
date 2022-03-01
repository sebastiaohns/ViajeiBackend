import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateAtividadeController {
  async handle(request: Request, response: Response) {
    const {
      titulo,
      descricao,
      valor,
      data,
      local,
      id_pessoa,
      id_viagem
    } = request.body;

    const atividade = await prismaClient.atividade.create({
      data: {
        titulo,
        descricao,
        valor,
        data,
        local,
        id_pessoa,
        id_viagem
      }
    });

    return response.json(atividade);
  }
}