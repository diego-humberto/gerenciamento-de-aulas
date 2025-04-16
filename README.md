Sistema de Gerenciamento de Aulas (SGA)

Um sistema completo para gerenciamento e acesso a cursos online, permitindo que os usuários aprendam no seu próprio ritmo, acompanhem seu progresso e alcancem seus objetivos educacionais.
📋 Funcionalidades

    Autenticação: Sistema completo de login e registro
    Listagem de Cursos: Visualização e busca de cursos disponíveis
    Detalhes do Curso: Informações detalhadas e conteúdo dos cursos
    Gerenciamento de Perfil: Edição de informações do usuário
    Acompanhamento de Progresso: Visualização do progresso em cada curso
    Design Responsivo: Interface adaptável a diferentes dispositivos
    Modo Escuro: Alternância entre temas claro e escuro
    Dashboard: Visão geral dos cursos e progresso do usuário
    Notificações: Sistema de alertas e mensagens importantes

🚀 Tecnologias Utilizadas

    Next.js
    React
    TypeScript
    Tailwind CSS
    Shadcn UI
    

🛠️ Instalação

# Clone o repositório
git clone https://github.com/seu-usuario/sga.git

# Entre na pasta do projeto
cd sga

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

📂 Estrutura do Projeto

sga/  
├── app/                    # Rotas e páginas da aplicação  
│   ├── courses/            # Páginas de cursos  
│   ├── dashboard/          # Dashboard do usuário  
│   ├── login/              # Página de login  
│   ├── register/           # Página de registro  
│   ├── globals.css         # Estilos globais  
│   └── layout.tsx          # Layout principal  
├── components/             # Componentes reutilizáveis  
│   ├── course-card.tsx     # Card de curso  
│   ├── header.tsx          # Cabeçalho da aplicação  
│   ├── mode-toggle.tsx     # Alternador de tema  
│   └── ui/                 # Componentes de UI  
├── lib/                    # Utilitários e tipos  
│   ├── mock-data.ts        # Dados de exemplo  
│   └── types.ts            # Definições de tipos  
└── public/                 # Arquivos estáticos  


🔍 Implementação
Etapas de Implementação

    Configuração Base: Estrutura inicial e configurações
    Componentes UI: Criação de componentes reutilizáveis
    Autenticação: Implementação das páginas de login e registro
    Listagem de Cursos: Exibição e filtragem de cursos
    Dashboard: Criação da visão geral do usuário
    Gerenciamento de Perfil: Edição de informações do usuário
    Modo Escuro: Implementação da alternância de temas
    Notificações: Sistema de alertas para o usuário

Componentes Principais

    Layout: Header, Footer, Sidebar
    Autenticação: Formulários de login e registro
    Cursos: Cards de curso, indicadores de progresso
    Perfil: Componentes de gerenciamento de usuário
    Navegação: Menus e links de navegação
    Tema: Alternador entre modo claro e escuro
    Notificações: Dropdown de alertas

📱 Capturas de Tela

Adicione capturas de tela do seu projeto aqui
🔮 Próximos Passos

    Integração com backend real
    Implementação de sistema de pagamentos
    Adição de recursos de comunidade e fórum
    Suporte a múltiplos idiomas
    Implementação de análises e relatórios avançados
