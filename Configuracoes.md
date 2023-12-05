# Passos após a criação do projeto Nest

## Instalar as dependências:
- @nestjs/config (trabalhar com cofigurações e variáveis de ambiente)
- @nestjs/typeorm@7 (integração para trabalhar com o typeorm)
- mysql2 (para trabalhar com persistência)
- class-validator (para trabalhar com validação de classe)
- class-transformer (para trabalhar com a exibição de informações de uma classe)
- typeorm

## gerar módulos
nest g module [nome do modulo]
ex. nest g module Todo

## módulos
O módulo principal que é o app tem um service e um controller e a partir dele, outros módulos são importados.
Ao criar um novo módulo, o próximo passo é criar o service e o controller desse módulo
Logo para criar o controlador e o serviço nós usamos o seguinte comando:
- nest g controller [nome do controlador]
- nest g service [nome do service]