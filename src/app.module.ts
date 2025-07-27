import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'password',
    //   database: 'test',
    //   entities: [User],
    //   synchronize: true, 
    // }),
    UserModule,
    TypeOrmModule.forFeature([User]),// k de dong nay o day bi loi, mac du cai nay co khai bao trong usermodule roi
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
