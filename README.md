# App

GymPass Style app.


## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [] Deve ser possível se autenticar;
- [] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [] Deve ser possível o usuário obter seu histórico de check-ins;
- [] Deve ser possível o usuário buscar academias próximas;
- [] Deve ser possível o usuário buscar academias pelo nome;
- [] Deve ser possível o usuário realizar check-in em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [] deve ser possível cadastrar uma academia;

## RNs (Requisitos de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] O usuário não deve poder fazer 2 check-ins no mesmo dia;
- [] O usuário não poder fazer check-ins no se não estiver perto (100m) da academia;
- [] O check-in só pode ser validado até 20 minutos após criado;
- [] O Check-in só pode ser validado por administradores;
- [] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa esta criptografada;
- [x] Os dados da aplicação precisam esta persistidos em um banco PostgreSQL;
- [] Todas lista de dados precisam estar paginadas com 20 itens por página;
- [] O usuário deve ser identicado por um JWT (JSON Web Token);


### Comandos Docker
````bash
# Rodando docker compose
$ docker-compose -f DockerConfig/docker-compose.yml up -d

# Verificar os contêineres em execução
$ docker ps
````

### Comandos Prisma

```` bash
#  Cria e aplica uma nova migração em um ambiente de desenvolvimento.
$ yarn prisma migrate dev

# Gera o cliente Prisma baseado no esquema atual. Use este comando sempre que atualizar o schema.prisma
$ yarn prisma generate

# Abre o Prisma Studio, uma interface gráfica para gerenciar os dados no banco.
$ yarn prisma studio
````