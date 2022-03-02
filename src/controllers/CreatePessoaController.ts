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

  async retrieveAll(request: Request, response: Response) {
    const todas_pessoas = await prismaClient.pessoa.findMany();

    return response.json(todas_pessoas)
  }

  async retrieveById(request: Request, response: Response) {
    const { id } = request.params;

    const pessoa = await prismaClient.pessoa.findUnique({
      where: { id: id }
    });

    return response.json(pessoa)
  }

  async editData(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, sobrenome, telefone, email, cargo } = request.body;

    const pessoa = await prismaClient.pessoa.findUnique({
      where: { id: id }
    })

    const new_pessoa = {
      nome: (nome ? nome : pessoa?.nome),
      sobrenome: (sobrenome ? sobrenome : pessoa?.sobrenome),
      telefone: (telefone ? telefone : pessoa?.telefone),
      email: (email ? email : pessoa?.email),
      cargo: (cargo ? cargo : pessoa?.cargo),
    }

    const update_pessoa = await prismaClient.pessoa.update({
      where: {
        id: id,
      },
      data: new_pessoa,
    })

    return response.json(update_pessoa)
  }

  // async delete(request: Request, response: Response) {
  //   const { id } = request.params;

  //   await prismaClient.pessoa.delete({
  //     where: {
  //       id: id
  //     }
  //   })

  //   return response.json({ message: "Pessoa excluida com sucesso!" });
  // }
}
