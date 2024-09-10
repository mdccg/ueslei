import { Router } from "express";
import TrabalhoController from "../controllers/TrabalhoController";

const trabalhosRouter = Router();

const trabalhoCtrl = new TrabalhoController();

trabalhosRouter.post("/", (req, res) => trabalhoCtrl.salvar(req, res));
trabalhosRouter.get("/area/:codArea", (req, res) => trabalhoCtrl.buscarTrabalhosPorArea(req, res));

export default trabalhosRouter;
