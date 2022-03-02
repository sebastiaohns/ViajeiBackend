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

  async retrieveAll(request: Request, response: Response) {
    const todas_atividades = await prismaClient.atividade.findMany();

    return response.json(todas_atividades)
  }

  async retrieveById(request: Request, response: Response) {
    const { id } = request.params;

    const atividade = await prismaClient.atividade.findUnique({
      where: { id: id }
    });

    return response.json(atividade)
  }

  async editData(request: Request, response: Response) {
    const { id } = request.params;
    const {
      titulo,
      descricao,
      valor,
      data,
      local,
    } = request.body;

    const atividade = await prismaClient.atividade.findUnique({
      where: { id: id }
    })

    const new_atividade = {
      titulo: (titulo ? titulo : atividade?.titulo),
      descricao: (descricao ? descricao : atividade?.descricao),
      valor: (valor ? valor : atividade?.valor),
      data: (data ? data : atividade?.data),
      local: (local ? local : atividade?.local),
    }

    const update_atividade = await prismaClient.atividade.update({
      where: {
        id: id,
      },
      data: new_atividade,
    })

    return response.json(update_atividade)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await prismaClient.atividade.delete({
      where: {
        id: id
      }
    })

    return response.json({ message: "Atividade excluida com sucesso!" });
  }
}