import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './games.model';
import { ObjectidPipe } from '../pipes/objectid/objectid.pipe';

@Controller('games')
export class GamesController {
  constructor(private gameService: GamesService) {}

  @Get()
  async getAllGames(): Promise<Game[]> {
    return await this.gameService.getAllGames();
  }

  @Get(':id')
  @UsePipes(ObjectidPipe)
  async getGame(@Param('id') id: string): Promise<Game> {
    return await this.gameService.getGame(id);
  }
}
