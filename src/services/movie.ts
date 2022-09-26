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
  const responseItem = await MovieModel.findOne({ _id: id });
  return responseItem;
};

const updateAMovie = async (id: String, data: Movie) => {
  const responseItem = await MovieModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //True devuelve el objeto actualizado, si no el viejo
  });
  return responseItem;
};

const deleteAMovie = async (id: String) => {
  const responseItem = await MovieModel.findOneAndDelete({ _id: id });
  return responseItem;
};

const getMoviesByGenre = async (genre: String) => {
  const responseItems = await MovieModel.find({ class: genre });
  return responseItems;
};

const getMoviesByYear = async (year: String) => {
  const responseItems = await MovieModel.find({ year: year });
  return responseItems;
};

const getMoviesByName = async (title: String) => {
  const responseItems = await MovieModel.find({ title: title });
  return responseItems;
};

export {
  insertAMovie,
  getAllMovies,
  getAMovie,
  updateAMovie,
  deleteAMovie,
  getMoviesByGenre,
  getMoviesByName,
  getMoviesByYear
};
