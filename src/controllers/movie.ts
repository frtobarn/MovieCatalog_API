import { Request, response, Response } from "express";
import {
  insertAMovie,
  getAllMovies,
  getAMovie,
  updateAMovie,
  deleteAMovie,
} from "../services/movie";
import { handelHttp } from "../utils/error.handle";

const getMovie = async (/*{ body }:*/ req: Request, res: Response) => {
  try {
    const responsedItem = await getAMovie(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

const getMovies = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getAllMovies();
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEMS");
  }
};

const updateMovie = async (req: Request, res: Response) => {
  try {
    const responsedItem = await updateAMovie(req.params.id, req.body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_UPDATING_ITEM");
  }
};

const postMovie = async ({ body }: Request, res: Response) => {
  try {
    const responsedItem = await insertAMovie(body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_POSTING_ITEM", error);
  }
};

const deleteMovie = async (req: Request, res: Response) => {
  try {
    const responsedItem = await deleteAMovie(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_DELETING_ITEM");
  }
};

export { getMovie, getMovies, updateMovie, postMovie, deleteMovie };
