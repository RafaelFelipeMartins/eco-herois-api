# Eco Heróis Bot 🌱

Um bot do WhatsApp que ajuda a mapear locais de descarte inadequado de resíduos usando análise de imagens com IA.

## Funcionalidades 🚀

- Integração com WhatsApp para reportar facilmente
- Análise de imagens usando OpenAI GPT-4 Vision
- Rastreamento de localização dos pontos de descarte
- Autenticação e autorização de usuários
- Geração e armazenamento de relatórios 
- Endpoints de API REST

## Pré-requisitos 📋

- Node.js
- PostgreSQL
- Conta no WhatsApp
- Chave de API da OpenAI

## Instalação 🔧

1. Clone o repositório
```sh
git clone https://github.com/RafaelFelipeMartins/eco-herois-api.git .
```
2. Instale as dependências:
```sh
npm install
```

3. Crie um arquivo `.env` baseado no `.env.example`:
```sh
DB_HOST=localhost
DB_USER=postgres
DB_PASS=sua_senha
DB_NAME=postgres
OPENAI_API_KEY=sua_chave_api_openai
```

4. Execute as migrações do banco de dados:
```sh
npm run migrate
```

5. Inicie o servidor:
```sh
npm start
```

## Como Usar 💬

1. Escaneie o código QR que aparecer no console com uma conta do WhatsApp que funcionará como bot
2. Envie uma mensagem ou foto contendo descarte inadequado de resíduos para a conta do bot
3. Leia e confirme a análise da IA
4. Compartilhe a localização ou endereço do local da foto
5. O relatório será automaticamente gerado e armazenado no banco de dados

## Endpoints da API 🛣️

- `GET /health` - Verificar status da API
- `POST /users` - Gerenciamento de usuários
- `POST /images` - Processamento de imagens
- `POST /reports` - Geração de relatórios

## Estrutura do Projeto 📁

```
src/
├── bot/           # Implementação do bot WhatsApp
├── controllers/   # Controladores das rotas da API
├── database/      # Configuração e migrações do banco de dados
└── routes/        # Definições das rotas da API
```

## Contribuindo 🤝

Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.