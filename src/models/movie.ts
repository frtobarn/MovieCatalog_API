import { Schema, Types, model, Model } from "mongoose";
import { Movie } from "../interfaces/movie.interface";

const MovieSchema = new Schema<Movie>(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
      enum: ["drama", "terror", "suspenso", "animación"],
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    likes: {
      type: [String],
      required: true,
      default:[]
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MovieModel = model("Peliculas", MovieSchema);

export default MovieModel;
