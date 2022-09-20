import { Movie } from "../interfaces/movie.interface";
import MovieModel from "../models/movie";

const insertAMovie = async (movie: Movie) => {
  const responseInsert = await MovieModel.create(movie);
  return responseInsert;
};

const getAllMovies = async () => {
  const responseItems = await MovieModel.find({});
  return responseItems;
};

const getAMovie = async (id: String) => {
  const responseItem = await MovieModel.findOne({ __id: id });
  return responseItem;
};

const updateAMovie = async (id: String, data: Movie) => {
  const responseItem = await MovieModel.findOneAndUpdate({ __id: id }, data, {
    new:true//True devuelve el objeto actualizado, si no el viejo
  });
  return responseItem;
};

const deleteAMovie = async (id: String) => {
  const responseItem = await MovieModel.findOneAndDelete({ __id: id });
  return responseItem;
};

export { insertAMovie, getAllMovies, getAMovie , updateAMovie, deleteAMovie};
