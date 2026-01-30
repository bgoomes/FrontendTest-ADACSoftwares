# Landing Page - React + Vite + Tailwind CSS

Uma landing page moderna e responsiva construída com React 19, Vite e Tailwind CSS, utilizando TypeScript para maior segurança de tipos.

## 🚀 Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.2.4** - Build tool rápido e moderno
- **TypeScript 5.9** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first para estilização
- **ESLint** - Ferramenta de linting para código limpo e consistente
- **SWC** - Compilador JavaScript rápido (via @vitejs/plugin-react-swc)

## 📋 Pré-requisitos

- Node.js >= 16.x
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
\`\`\`bash
git clone <seu-repositorio>
cd frontendTest
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

## 🎯 Scripts Disponíveis

### Desenvolvimento
\`\`\`bash
npm run dev
\`\`\`
Inicia o servidor de desenvolvimento com HMR (Hot Module Replacement) ativado na porta `http://localhost:5173`

### Build
\`\`\`bash
npm run build
\`\`\`
Compila o TypeScript e cria a build otimizada para produção na pasta `dist/`

### Preview
\`\`\`bash
npm run preview
\`\`\`
Visualiza a build de produção localmente

### Linting
\`\`\`bash
npm run lint
\`\`\`
Verifica o código em busca de erros e padrões de codificação

## 📁 Estrutura do Projeto

\`\`\`
frontendTest/
├── src/
│   ├── App.tsx           # Componente principal da aplicação
│   ├── main.tsx          # Ponto de entrada React
│   ├── index.css         # Estilos globais
│   └── assets/           # Imagens e outros assets
├── public/               # Arquivos estáticos
├── index.html            # Arquivo HTML principal
├── package.json          # Dependências do projeto
├── tsconfig.json         # Configuração TypeScript
├── tsconfig.app.json     # Configuração TypeScript para a aplicação
├── tsconfig.node.json    # Configuração TypeScript para Node
├── vite.config.ts        # Configuração do Vite
└── README.md             # Este arquivo
\`\`\`

## 🎨 Configurando Tailwind CSS

Se o Tailwind ainda não estiver configurado, execute:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Atualize o arquivo `tailwind.config.js`:
\`\`\`js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

Adicione as diretivas do Tailwind em `src/index.css`:
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## 💡 Desenvolvimento

### Hot Module Replacement (HMR)
O projeto está configurado com HMR do Vite, permitindo atualização instantânea do código sem recarregar a página.

### TypeScript
O projeto utiliza TypeScript em modo estrito. Todos os componentes e funções devem ter tipagem adequada.

### ESLint
Execute `npm run lint` regularmente para garantir a qualidade do código.

## 🚀 Deployment

### Build para Produção
\`\`\`bash
npm run build
\`\`\`

A pasta `dist/` contém os arquivos otimizados prontos para produção.

### Deploy em Plataformas Populares

**Vercel:**
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

**Netlify:**
\`\`\`bash
npm run build
# Deploy a pasta 'dist' no Netlify
\`\`\`

## 📚 Recursos Adicionais

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vite.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)

## 📝 Licença

Este projeto está sob licença MIT.

## 👨‍💻 Contribuição

Contribuições são bem-vindas! Para grandes mudanças, abra uma issue primeiro para discutir as alterações propostas.

---

**Desenvolvido com ❤️ usando React + Vite + Tailwind CSS**