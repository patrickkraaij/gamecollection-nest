import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from './games.model';

@Injectable()
export class GamesService {
  private games: Game[] = [];

  constructor(@InjectModel('Game') private readonly gameModel: Model<Game>) {}

  async getAllGames(): Promise<Game[]> {
    this.games = await this.gameModel.find().exec();
    return this.games;
  }

  async getGame(id: string): Promise<Game> {
    const game = await this.gameModel.findById(id).exec();
    return game;
  }
}
