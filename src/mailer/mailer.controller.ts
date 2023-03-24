import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Mailer } from './mailer.interface';
import MailerService from './mailer.service';

@Controller()
export default class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('mailer')
  async findAll(@Body() mailer: Mailer, @Res() res: Response) {
    console.log('Api Start');
    const result = await this.mailerService.getHello(mailer);
    console.log('Api End: ', result);
    await new Promise<string>(() => {
      res.status(HttpStatus.OK).json({ result });
    });
  }
}
