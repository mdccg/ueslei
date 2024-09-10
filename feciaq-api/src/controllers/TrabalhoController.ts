/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Request, Response } from "express";
import { FindManyOptions, Repository } from 'typeorm';
import { AppDataSource } from "../data-source";
import { Autor } from "../entity/Autor";
import { Trabalho } from "../entity/Trabalho";
import Status from '../enum/Status';
import { cpfRegExp, validAreas } from '../utils';

export default class TrabalhoController {
  private _trabalhoRepository: Repository<Trabalho>;
  
  constructor () {
    this._trabalhoRepository = AppDataSource.getRepository(Trabalho);
  }

  async salvar(req: Request, res: Response) {
    const { titulo, area, codigo, autores } = req.body;

    if (!titulo || titulo.length < 1) {
      return res.status(400).json({ errorMessages: [Status.INVALID_TITLE] });
    }

    if (!area || !validAreas.includes(area)) {
      return res.status(400).json({ errorMessages: [Status.INVALID_AREA] });
    }
    
    if (!autores || !('length' in autores)) {
      return res.status(400).json({ errorMessages: [Status.INVALID_AUTHOR_LIST] });
    }

    if (autores.length < 2 || autores.length > 7) {
      return res.status(429).json({ errorMessages: [Status.EXCEEDED_AUTHOR_LIMIT] });
    }

    autores.forEach(({ nome, genero, cpf }) => {
      if (!nome || !genero || !cpf) {
        return res.status(400).json({ errorMessages: [Status.INVALID_AUTHOR] });
      }

      if (nome.length < 1) {
        return res.status(400).json({ errorMessages: [Status.INVALID_AUTHOR_NAME] });
      }

      if (genero !== 'M' && genero !== 'F') {
        return res.status(400).json({ errorMessages: [Status.WOKE_FOUND] });
      }
      
      if (!cpfRegExp.test(cpf)) {
        return res.status(400).json({ errorMessages: [Status.INVALID_CPF] });
      }
    });

    // Se passou em todas as validações, salve todos os dados na transação
    await AppDataSource.transaction(async (transactionalEntityManager) => {
      const autoresSalvos: Autor[] = [];

      for (let i = 0; i < autores.length; i++) {
        const autor = new Autor();
        Object.assign(autor, autores[i]);
        const autorSalvo = await transactionalEntityManager.save(autor);
        autoresSalvos.push(autorSalvo);
      }

      const trabalho = new Trabalho();
      trabalho.area = area;
      trabalho.codigo = codigo;
      trabalho.titulo = titulo;
      trabalho.autores = autoresSalvos;

      const trabalhoSalvo = await transactionalEntityManager.save(trabalho);
      return res.status(201).json({ trabalho: trabalhoSalvo });
    });
  }

  async buscarTrabalhosPorArea(req: Request, res: Response) {
    const { codArea } = req.params;

    if (!codArea || !validAreas.includes(codArea)) {
      return res.status(400).json({ errorMessages: [Status.INVALID_AREA] });
    }

    const criteria: FindManyOptions<Trabalho> = {
      where: {
        area: codArea
      }
    };

    const trabalhos = await this._trabalhoRepository.find(criteria);
    res.status(200).json({ trabalhos });
  }
}
