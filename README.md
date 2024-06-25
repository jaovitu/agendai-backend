# AGENDAÍ

Este é o backend do Agendai, um sistema de agendamentos para clínicas médicas. Ele foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js:**
- **TypeScript:**
- **Docker:**
- **Sequelize:**


Este projeto foi estruturado utilizando uma combinação de conceitos e boas práticas arquiteturais. Alguns dos princípios de design SOLID foram aplicados para garantir que o código seja compreensível, flexível e de fácil manutenção. Também foram utilizadas algumas ideias da Clean Architecture para manter uma separação clara entre as camadas da aplicação, permitindo que as principais regras de negócio permaneçam independentes de frameworks e detalhes de implementação. Além disso, o código segue o padrão Package by Feature, onde os arquivos são agrupados por funcionalidades, facilitando a manutenção e a escalabilidade do projeto.


## Instruções de Uso:
1. **Pré-requisitos:**
   - Certifique-se de ter o **Docker** instalado em sua máquina. Caso ainda não tenha, você pode baixá-lo e instalá-lo a partir do site oficial do Docker.

2. **Clone o Projeto:**
   - Clone o repositório do Agendai em sua máquina local:
     ```bash
     git clone https://github.com/jaovitu/agendai-backend.git
     cd agendai-backend
     ```

3. **Instale as Dependências:**
   - Execute o seguinte comando para instalar as dependências do projeto:
     ```bash
     npm install
     ```

4. **Inicialização dos Containers:**
   - Abra um terminal e execute o seguinte comando para construir e iniciar os contêineres Docker:
     ```bash
     docker-compose up -d
     ```
   - Isso iniciará os serviços definidos no arquivo `docker-compose.yaml`.

5. **Execução das Migrations:**
   - Execute os comandos para criar o banco de dados e aplicar as migrations do Sequelize:
     ```bash
     npx sequelize db:create
     npx sequelize db:migrate
     ```

6. **Configuração do Arquivo .env:**
   - Crie um arquivo `.env` na raiz do projeto e configure-o conforme o exemplo abaixo:
     ```env
     MYSQL_ROOT_PASSWORD='root'
     MYSQL_DATABASE_DEV='agendai'
     MYSQL_USER_DEV='agendai'
     MYSQL_PASSWORD_DEV='agendai#password'
     MYSQL_HOST_DEV='localhost'
     JWT_SECRET='756a1ff2-12b5-4532-870a-d5db69382673'
     ```
   - Lembre-se de ajustar as informações conforme necessário.

7. **Inicialize o projeto:**

     ```bash
        npm run dev
     ```
