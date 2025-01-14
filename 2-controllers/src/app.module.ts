import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller'

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
