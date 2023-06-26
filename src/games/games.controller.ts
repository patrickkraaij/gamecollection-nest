import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './games.model';

@Controller('games')
export class GamesController {
  constructor(private gameService: GamesService) {}

  @Get()
  async getAllGames(): Promise<Game[]> {
    return await this.gameService.getAllGames();
  }

  @Get(':id')
  async getGame(@Param('id') id: string): Promise<Game> {
    return await this.gameService.getGame(id);
  }
}
