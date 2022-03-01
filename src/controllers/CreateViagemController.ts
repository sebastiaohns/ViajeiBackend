import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateViagemController {
  async handle(request: Request, response: Response) {
    const { destino, data_ida, data_volta, titulo, descricao } = request.body;

    const viagem = await prismaClient.viagem.create({
      data: {
        destino,
        data_ida,
        data_volta,
        titulo,
        descricao
      }
    });

    return response.json(viagem)
  }
}