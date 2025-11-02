import { Request, Response } from "express";
import db from "../database/connection";

// GET /images/:id → retorna todas as imagens de um cliente
export const getImages = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const images = await db("images").where({ client_id: id });
    return res.json(images);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar capturas", error });
  }
};

// POST /images → cria uma nova captura
export const postImages = async (req: Request, res: Response) => {
  try {
    const { phone, imageBase64 } = req.body;

    if (!phone || !imageBase64) {
      return res
        .status(400)
        .json({ message: "Telefone e imagem são obrigatórios" });
    }

    const [newImage] = await db("images")
      .insert({
        phone,
        image_base64: imageBase64,
      })
      .returning("*");

    return res.status(201).json(newImage);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao salvar captura", error });
  }
};


// DELETE /images/:id → deleta uma captura
export const deleteImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await db("images").where({ id }).del();

    if (!deleted)
      return res.status(404).json({ message: "Captura não encontrada" });

    return res.json({ message: "Captura deletada com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar captura", error });
  }
};
