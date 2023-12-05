/* eslint-disable prettier/prettier */
import { join } from 'path';

const root = join(__dirname, '/../../');

export default () => ({
    sqliteOptions: {
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        migrationsTableName: 'todos_migrations',
        entities: [join(__dirname, '/../**/**.entity.{ts,js}')],
        migrations: [join(__dirname, '/../../shared/infra/typeorm/migrations/*.{ts,js}')],
        cli: {
            migrationsDir: join(__dirname, '/../../shared/infra/typeorm/migrations')
        },
        synchronize: true,
        logging: false,
    },
    mssqlOption: {
        type: 'mssql',
        database: 'todos',
        host: 'localhost',
        port: 1433,
        username: 'sa',
        password: 'bpm12345',
        dropSchema: true,
        migrationsTableName: 'todos_migrations',
        entities: [join(root, '**/**/**.entity.{ts,js}')],
        migrations: [join(root, 'shared/infra/typeorm/migrations/*.{ts,js}')],
        cli: {
            migrationsDir: join(root, 'shared/infra/typeorm/migrations')
        },
        synchronize: true,
        logging: false,
    },
});
