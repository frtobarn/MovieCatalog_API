import { Request, Response, Router } from "express";
import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
} from "../controllers/movie";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getMovies);

router.get("/:id", logMiddleware, getMovie);

router.post("/", postMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

export { router };
