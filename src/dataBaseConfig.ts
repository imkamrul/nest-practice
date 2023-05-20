import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
export const DatabaseConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'nest-js',
  entities: [User],
  synchronize: true,
});
