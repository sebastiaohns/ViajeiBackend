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

  async retrieveAll(request: Request, response: Response) {
    const todas_viagens = await prismaClient.viagem.findMany();

    return response.json(todas_viagens)
  }

  async retrieveById(request: Request, response: Response) {
    const { id } = request.params;

    const viagem = await prismaClient.viagem.findUnique({
      where: { id: id }
    });

    return response.json(viagem)
  }

  async editData(request: Request, response: Response) {
    const { id } = request.params;
    const { destino, data_ida, data_volta, titulo, descricao } = request.body;

    const viagem = await prismaClient.viagem.findUnique({
      where: { id: id }
    })

    const new_viagem = {
      destino: (destino ? destino : viagem?.destino),
      data_ida: (data_ida ? data_ida : viagem?.data_ida),
      data_volta: (data_volta ? data_volta : viagem?.data_volta),
      titulo: (titulo ? titulo : viagem?.titulo),
      descricao: (descricao ? descricao : viagem?.descricao),
    }

    const update_viagem = await prismaClient.viagem.update({
      where: {
        id: id,
      },
      data: new_viagem,
    })

    return response.json(update_viagem)
  }

  // async delete(request: Request, response: Response) {
  //   const { id } = request.params;

  //   await prismaClient.viagem.delete({
  //     where: {
  //       id: id
  //     }
  //   })

  //   return response.json({ message: "Viagem excluida com sucesso!" });
  // }
}