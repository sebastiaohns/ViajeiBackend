Instalação

1 - Criar projeto node $ npm init

2 - Adicionar lib prisma $ yarn add prisma -D

3 - Adicionar código do prisma no tsconfig.json

4 - Inicializar prisma $ yarn prisma init

5 - Configurar database_url do prisma database = viajei

Criando tabelas

1 - Codificar informações da tabela no schema.prisma

2 - Criar a base de dados e a tabela $ yarn prisma migrate dev (inserir nome da migration)

3 - Criar controller para da tabela
