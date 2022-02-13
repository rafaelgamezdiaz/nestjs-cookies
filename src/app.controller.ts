import { Controller, Get, Param, Session } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Set Color Function
   * @param color
   * @param session
   */
  @Get('/colors/:color')
  setColor(@Param('color') color: string, @Session() session: any) {
    session.color = color;
    return 'Session color was set.';
  }

  @Get('/colors')
  getColor(@Session() session: any) {
    return session.color;
  };

}
