import express from "express";
import PokemonController from "../controllers/PokemonController.ts";

const router = express.Router();

router.get("/team", PokemonController.getTeam);
router.post("/capture", PokemonController.captureCharacter);

export default router;