# API de Restaurante

## Versão Atual
Versão 1.0.0

## Objetivos
Implementar e aprimorar meus conhecimentos em Backend com a construção desta API(Conceitos de SOLID, REST e MVC). Ela tem o intuito de servir como estrutura de gerencia de vendas de um restaurante, desde o cadastro do restaurante até o cadastro de produtos e ofertas dos produtos de um restaurante.

## Tecnologias utilizadas
- **Node.js**
- **TypeScript**
- **MySQL**

<hr>

- **Sequelize** (fazer models e melhorar o fluxo do banco)
- **Express** (trabalhar com rotas HTTP)
- **DotEnv** (esconder variáveis críticas)
- **Jest** (testes unitários)
- **Eslint** (padronização, otimização e qualidade de código)
- **Prettier** (padronização e organização de códigos)
- **Commitlint** (padronização de commits)
- **Husky** (melhorar o fluxo de commits e comandos automáticos)

## Como utilizar

Instalar dependências
```
npm install
```

Preparar o Husky (**SOMENTE UMA VEZ**)
```
npm run husky:prepare
```

Executar o projeto
```
npm run start:dev
```

## Banco de Dados

- NN - NOT NULL
- AI - AUTO INCREMENT

### Tabela Restaurantes
| Restaurants    | Tipo de dado      
| -------------- | ----------------- |
| id (PK)        | BIGINT - AI NN    |
| name           | VARCHAR(50) - NN  |
| address        | VARCHAR(100) - NN |
| business_hours | VARCHAR(80) - NN  |

### Tabela Produtos
| Products                             | Tipo de dado     |
| ------------------------------------ | ---------------- |
| id (PK)                              | BIGINT - AI NN   |
| name                                 | VARCHAR(50) - NN |
| price                                | DOUBLE - NN      |
| category                             | VARCHAR(80) - NN |
| restaurant_id (FK = Restaurants(id)) | BIGINT - NN      |

### Tabela Promoções
| Sales                          | Tipo de dado     |
| ------------------------------ | ---------------- |
| id (PK)                        | BIGINT - AI NN   |
| description                    | VARCHAR(80) - NN |
| promotional_price              | DOUBLE - NN      |
| sale_init                      | DATETIME - NN    |
| sale_end                       | DATETIME - NN    |
| product_id (FK = Products(id)) | BIGINT - NN      |

## Documentação

### Rota padrão
```
localhost:3000/
```

### Rota Restaurante
| Rotas                  | Descrição                          | Parâmetros |
| ---------------------- | ---------------------------------- | ---------- |
| restaurants/           | Lista todos os restaurantes        | --         |
| restaurants/:id        | Retorna um restaurante             | id (Int)   |
| restaurants/create     | Cria um novo restaurante           | --         |
| restaurants/alter/:id  | Altera os dados de um restaurante  | id (Int)   |
| restaurants/delete/:id | Deleta um restaurante              | id (Int)   |

### Rota Produto
| Rotas                               | Descrição                                     | Parâmetros                    |
| ----------------------------------- | --------------------------------------------- | ----------------------------- |
| products/:restaurant_id             | Retorna todos os produtos de um restaurante   | restaurant_id (Int)           |
| products/create/:restaurant_id      | Cria um produto para um restaurante           | restaurant_id (Int)           |
| products/alter/:restaurant_id/:id   | Altera um produto de um restaurante           | restaurant_id (Int), id (Int) |
| products/delete/:restaurant_id/:id  | Deleta um produto de um restaurante           | restaurant_id (Int), id (Int) |

### Rota Promoção
| Rotas                    | Descrição                              | Parâmetros       |
| ------------------------ | -------------------------------------- | ---------------- |
| sales/:id                | Lista todas as promoções de um produto | product_id (Int) |
| sales/create/            | Cria uma promoção de um produto        | --               |
| sales/alter/:id          | Deleta um produto de um restaurante    | product_id (Int) |
| sales/delete/:id         | Deleta um produto de um restaurante    | product_id (Int) |

## Futuras implementações

### Banco de Dados
- Trocar a tipagem das PK's para UUID4
- Criação das tabelas para login de usuários com diferentes privilégios

### API
- Implementação do middleware para melhora da segurança, fluxo de dados e logging
- Criação de autenticação de usuário com controle de privilégios

### Instale o MySQL2 na versão mais recente
