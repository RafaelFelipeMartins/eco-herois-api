import { Request, Response } from "express";
import db from "../database/connection";

// POST /users — Realizar Cadastro
export const createUser = async (req: Request, res: Response) => {
  const { nome, email } = req.body;

  if (!nome || !email)
    return res.status(400).json({ message: "Nome e email são obrigatórios" });

  try {
    const [user] = await db("users").insert({ nome, email }).returning("*");
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao cadastrar usuário", error });
  }
};

// PUT /users/:id — Editar Cadastro
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const updated = await db("users").where({ id }).update({ nome, email }).returning("*");

    if (updated.length === 0)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res.json(updated[0]);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
};
