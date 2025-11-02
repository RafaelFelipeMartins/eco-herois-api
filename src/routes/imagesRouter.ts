import express from 'express';
import { getImages, postImages } from '../controllers/imagesController';

const router = express.Router();

router.get("/images/:id", getImages);
router.post("/images", postImages);

export default router;
