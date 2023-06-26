import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  apiId: { type: Object, required: true },
  title: { type: String, required: true },
  platform: { type: String, required: true },
  releaseDate: { type: String, required: false },
  overview: { type: String, required: false },
  ESRB: { type: String, required: false },
  players: { type: Number, required: false },
  youtube: { type: String, required: false },
  rating: { type: String, required: false },
  simular: { type: String, required: false },
  publisher: { type: Array, required: false },
  developer: { type: Array, required: false },
  genres: { type: Array, required: false },
  images: { type: Object, required: false },
});

interface IapiID {
  thegamesdb: number;
}

interface Iimages {
  boxart: {
    size: {
      original?: string;
      small?: string;
      thumb?: string;
      cropped_center_thumb?: string;
      medium?: string;
      large?: string;
      data?: {
        [key: number]: [
          {
            id?: number;
            type?: string;
            side?: string;
            filename?: string;
            resolution?: string;
          },
        ];
      };
    };
  };
}

export interface Game {
  _id: string;
  apiId: IapiID;
  title: string;
  platform: number;
  releaseDate: string | null;
  overview: string | null;
  ESRB: string | null;
  players: number | string;
  youtube: string | null;
  rating: string | null;
  simular: string | null;
  publisher: number[] | null;
  developer: number[] | null;
  genres: number[] | null;
  images: Iimages | null;
}
