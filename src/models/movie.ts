import { Schema, Types, model, Model } from "mongoose";
import { Movie } from "../interfaces/movie.interface";

const MovieSchema = new Schema<Movie>(
  {
    title: {
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
    director:{
      type:String,
      required:true,
    },
    casting: {
      type:[String],
      required:true,
      default:[]
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

const MovieModel = model("movies", MovieSchema);

export default MovieModel;
