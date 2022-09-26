import { Request, Response, Router } from "express";
import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
  getMoviesGenres,
  getMoviesTitle,
  getMoviesYears,
} from "../controllers/movie";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getMovies);

router.get("/:id", logMiddleware, getMovie);

router.post("/", postMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

router.get("/genre/:genre", getMoviesGenres);

router.get("/year/:year", getMoviesYears);

router.get("/title/:title", getMoviesTitle);

export { router };
