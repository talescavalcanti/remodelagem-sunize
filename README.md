# Sunize - Landing Page Premium (Projeto de Portfólio)

<p align="center">
  <img src="/logo-1.png" alt="Sunize Logo" width="200" />
</p>

> **⚠️ Aviso Importante:** Este projeto é exclusivamente para **fins de portfólio e demonstração de habilidades técnicas**. A Sunize não utiliza esta landing page em produção. Este é um projeto de remodelagem/reconstrução feito para練習 (praticar) e展示 (demonstrar) competências em desenvolvimento frontend avançado.

<p align="center">
  <strong>Landing page completa e sofisticada para a Sunize</strong><br>
  Plataforma completa para venda de produtos digitais com checkout ultra-rápido e sistema anti-fraude inteligente.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=gsap" alt="GSAP" />
</p>

---

## 📋 Índice

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes](#componentes)
5. [Hooks Personalizados](#hooks-personalizados)
6. [Paleta de Cores](#paleta-de-cores)
7. [Fontes](#fontes)
8. [Como Executar](#como-executar)
9. [Scripts Disponíveis](#scripts-disponíveis)
10. [Funcionalidades Principais](#funcionalidades-principais)
11. [Créditos](#créditos)

---

## 🔍 Sobre o Projeto

> **Este projeto é Apenas para Portfólio** — A Sunize não utiliza esta página em seu site oficial. Este é um exercício de desenvolvimento frontend para demonstrar habilidades com Next.js, React, TypeScript, Tailwind CSS e GSAP.

Este projeto consiste em uma **landing page premium e completa** para a **Sunize** (uso exclusivo para portfólio), uma plataforma digital destinada a criadores de conteúdo que desejam vender produtos digitais. O site apresenta um design moderno, sofisticado e totalmente responsivo, com animações avançadas que proporcionam uma experiência de usuário excepcional.

A landing page foi desenvolvida com foco em conversão, apresentando de forma clara e atrativa todas as funcionalidades e benefícios da plataforma Sunize, incluindo:

> **Nota:** Este projeto foi criado apenas para fins de portfólio. A Sunize possui seu próprio site e landing pages oficiais que não são relacionadas a este projeto.

- **Checkout Transparente Personalizável** - Customize cada detalhe da página de pagamento
- **Aprovação Instantânea de Produtos** - IA analisa e aprova produtos em segundos
- **Área de Membros Estilo Netflix** - Interface premium para seus alunos
- **Sistema de Afiliação** - Gestão automatizada de comissões
- **Infraestrutura Robusta** - Preparada para grandes lançamentos
- **Recuperação de Vendas** - Automação via WhatsApp, E-mail e SMS

---

## 🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as mais modernas tecnologias do ecossistema frontend:

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 16.2.0 | Framework React com renderização híbrida (App Router) |
| **React** | 19.2.4 | Biblioteca JavaScript para construção de interfaces |
| **TypeScript** | 5.x | Superset JavaScript com tipagem estática |
| **Tailwind CSS** | 4.x | Framework CSS utilitário com customização via CSS variables |
| **GSAP** | 3.14.2 | Biblioteca de animações de alto desempenho |
| **Framer Motion** | 12.38.0 | Biblioteca de animações para React |
| **ESLint** | 9.x | Ferramenta de análise de código estática |

### Dependências Principais

```json
{
  "dependencies": {
    "next": "16.2.0",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "framer-motion": "^12.38.0",
    "gsap": "^3.14.2"
  },
  "devDependencies": {
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "typescript": "^5",
    "eslint": "^9",
    "eslint-config-next": "16.2.0"
  }
}
```

---

## 📁 Estrutura do Projeto

O projeto segue a arquitetura moderna do **Next.js App Router**, com organização clara de componentes, hooks e estilos:

```
remodelagem-sunize/
├── public/                          # Arquivos estáticos
│   ├── logo-1.png                  # Logo da Sunize
│   ├── mockup-dash-2048x1100.png   # Dashboard mockup
│   ├── member-mockup.png           # Área de membros mockup
│   ├── cel-mockup.png              # App mobile mockup
│   ├── mokcupplcas.png             # Placas de premiação
│   └── integrações/                # Logos de integrações
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── page.tsx               # Página principal (landing page)
│   │   ├── layout.tsx             # Layout raiz com metadata e fonts
│   │   └── globals.css            # Estilos globais e configuração Tailwind
│   ├── components/                # Componentes React
│   │   ├── index.ts               # Export centralizado de componentes
│   │   ├── Navbar.tsx            # Navegação com efeito liquid-glass
│   │   ├── Hero.tsx              # Seção hero com GSAP SplitText
│   │   ├── BentoGrid.tsx          # Grid de features com scroll animation
│   │   ├── PremiumSection.tsx     # Seção área de membros
│   │   ├── FeesSection.tsx        # Seção de taxas
│   │   ├── CTAProposal.tsx        # Call-to-action proposta comercial
│   │   ├── Milestones.tsx         # Seção de premiações
│   │   ├── Integrations.tsx       # Logos de integrações
│   │   ├── MobileApp.tsx          # Seção app mobile
│   │   ├── Footer.tsx            # Rodapé completo
│   │   ├── AnimatedButton.tsx     # Botão animado com gradiente
│   │   ├── PremiumButton.tsx      # Botão premium com hover effect
│   │   └── SmoothScrollProvider.tsx  # Provider GSAP ScrollSmoother
│   └── hooks/                     # Hooks personalizados
│       ├── index.ts               # Export centralizado de hooks
│       └── useGSAPAnimations.ts  # Hooks de animações GSAP
├── package.json                   # Dependências e scripts
├── tsconfig.json                  # Configuração TypeScript
├── next.config.ts                 # Configuração Next.js
├── postcss.config.mjs             # Configuração PostCSS
├── eslint.config.mjs               # Configuração ESLint
└── README.md                      # Este arquivo
```

---

## 🎨 Componentes

A landing page é composta por **13 componentes principais**, cada um responsável por uma seção específica da página:

### 1. Navbar.tsx
Navegação fixa com efeito **liquid-glass** (estilo Apple). Apresenta:
- Logo da Sunize
- Links de navegação (Recursos, Soluções, Preços, Afiliados)
- Botões de Entrar e Começar Agora
- Animação de entrada e comportamento de scroll (hide/show)
- **Tecnologia:** GSAP ScrollTrigger para detecção de direção de scroll

### 2. Hero.tsx
Seção principal com impacto visual:
- Badge "A Nova Era Digital"
- Título animado com **GSAP SplitText** (caracteres e linhas)
- Subtítulo animado por palavras
- Botão CTA com animação
- Indicador de scroll animado
- Dashboard mockup com sombra gradiente
- Background radial gradient
- **Tecnologia:** GSAP SplitText, timeline de animação

### 3. BentoGrid.tsx
Grid de funcionalidades com animação scroll-triggered:
- 6 features principais com ícones Material Symbols
- Lista interativa no lado esquerdo
- Cards premium com gradientes no lado direito
- Animação de pin durante scroll
- Progress bar preenchimento dinâmico
- **Tecnologia:** GSAP ScrollTrigger com pin, SplitText

### 4. PremiumSection.tsx
Seção "Área de Membros Premium":
- Layout em grid (texto + imagem)
- Lista de benefícios com checkmarks
- Imagem com efeito parallax
- **Tecnologia:** Hooks personalizados (useTextReveal, useParallax, useStaggerElements)

### 5. FeesSection.tsx
Seção de taxas e formas de pagamento:
- PIX D+0 (recebimento instantâneo)
- Cartão D+15 (saque antecipado)
- Boleto D+1 (confirmação rápida)
- Cards com glass effect e animação stagger

### 6. CTAProposal.tsx
Call-to-action para proposta comercial:
- Container com gradiente primary
- Título com SplitText (chars + words)
- Animação de container com scale
- Botão invertido
- **Tecnologia:** GSAP SplitText, ScrollTrigger

### 7. Milestones.tsx
Seção de reconhecimentos e premiações:
- Título e subtítulo com animações
- Imagem das placas de inúmera
- **Tecnologia:** useTextReveal, useCardsStagger

### 8. Integrations.tsx
Seção de integrações nativas:
- Grid de logos de ferramentas integradas
- 15+ logos de parceiros (Meta, Google Ads, Kwai, etc.)
- Animações de stagger e hover

### 9. MobileApp.tsx
Seção do aplicativo mobile:
- Texto com animações reveal
- Botões para App Store e Google Play (SVG customizados)
- Mockup de celular com parallax
- **Tecnologia:** useParallax, useStaggerElements

### 10. Footer.tsx
Rodapé completo e detalhado:
- Seção newsletter com CTA
- Colunas de navegação (Produto, Empresa, Suporte, Legal)
- Links de redes sociais (Instagram, YouTube, TikTok, LinkedIn)
- Badges de app stores
- Métodos de pagamento (Pix, Visa, Mastercard, Boleto)
- Selo de segurança SSL
- **Tecnologia:** GSAP SplitText, ScrollTrigger

### 11. AnimatedButton.tsx
Botão animado multifuncional:
- 3 variantes: primary, secondary, inverted
- Efeito de borda orbital opcional
- Animação de ícone deslizante
- Transições suaves

### 12. PremiumButton.tsx
Botão premium com efeitos avançados:
- Efeito de fill com scaleY no hover
- Animação de scale e shadow
- Transições GSAP
- Cores temáticas

### 13. SmoothScrollProvider.tsx
Provider de scroll suave:
- Implementa GSAP ScrollSmoother
- Context API para comunicação
- Suporte a resize observer
- Gerenciamento de estado de prontidão

---

## ⚓ Hooks Personalizados

O projeto conta com **6 hooks personalizados** para animações, todos baseados na biblioteca GSAP:

### 1. useTextReveal
Animações de reveal em textos com controle granular:
- **Parâmetros:** splitType, animation, start, stagger, duration
- **Tipos de split:** lines, words, chars, ou combinações
- **Animações:** reveal (máscara), blur, rotation, scale
- **Uso principal:** Títulos e parágrafos das seções

### 2. useCardsStagger
Animações stagger para cards e elementos similares:
- **Parâmetros:** selector, y, x, stagger, duration, start
- **Funcionalidade:** Anima múltiplos elementos com delay progressivo
- **Uso principal:** Listas de features, cards de taxas

### 3. useParallax
Efeito de profundidade em elementos:
- **Parâmetros:** direction, speed, start, end
- **Direções:** horizontal ou vertical
- **Uso principal:** Imagens em seções específicas

### 4. useCounter
Contador animado com scroll trigger:
- **Parâmetros:** endValue, duration, prefix, suffix
- **Formatação:** Suporte a decimais e locale pt-BR
- **Uso:** Números estatísticos (não utilizado na landing atual)

### 5. useFadeIn
Animação fade in básica:
- **Parâmetros:** y, x, duration, start, delay
- **Funcionalidade:** Fade in com translação opcional
- **Uso:** Elementos que precisam de entrada sutil

### 6. useStaggerElements
Stagger para elementos arbitrários:
- **Parâmetros:** selector, y, x, opacity, scale, rotation, stagger
- **Funcionalidade:** Anima qualquer grupo de elementos
- **Uso:** Listas, botões, itens de navegação

---

## 🎨 Paleta de Cores

O design utiliza uma paleta de cores cuidadosamente selecionada, inspirada em tons quentes e premium:

### Cores Primárias

| Nome | Hex | Uso |
|------|-----|-----|
| Primary | `#FFB693` | Cor principal (laranja claro) |
| Primary Container | `#FF8A4C` | Container primary (laranja) |
| On Primary | `#562000` | Texto sobre primary |
| On Primary Container | `#6C2A00` | Texto sobre container |

### Cores Secundárias e Terciárias

| Nome | Hex | Uso |
|------|-----|-----|
| Secondary | `#FBB798` | Cor secundária |
| Secondary Container | `#6C3D25` | Container secundário |
| Tertiary | `#46D8F2` | Cor terciária (azul ciano) |
| Tertiary Container | `#00BAD4` | Container terciário |

### Cores de Superfície (Dark Theme)

| Nome | Hex | Uso |
|------|-----|-----|
| Background | `#10131A` | Fundo principal |
| Surface | `#10131A` | Superfície |
| Surface Container Lowest | `#0B0E14` | Container mais escuro |
| Surface Container Low | `#191C22` | Container escuro |
| Surface Container | `#1D2026` | Container padrão |
| Surface Container High | `#272A31` | Container claro |
| Surface Container Highest | `#32353C` | Container mais claro |

### Cores de Texto

| Nome | Hex | Uso |
|------|-----|-----|
| On Background | `#E1E2EB` | Texto principal |
| On Surface | `#E1E2EB` | Texto sobre superfície |
| On Surface Variant | `#DDC1B5` | Texto variante |
| Outline | `#A58B80` | Bordas |

### Cores de Gradiente

```css
/* Primary Gradient */
background: linear-gradient(135deg, #FF8A4C 0%, #FF5F2E 100%);

/* Text Gradient */
background: linear-gradient(135deg, #FFB693 0%, #FF8A4C 100%);
```

---

## 🔤 Fontes

O projeto utiliza duas fontes do Google Fonts, selecionadas por sua legibilidade e modernidade:

### Sora (Headlines)
- **Weights:** 400, 500, 600, 700, 800
- **Uso:** Títulos e headlines
- **Variável:** `--font-sora`

### Manrope (Body)
- **Weights:** 400, 500, 600, 700, 800
- **Uso:** Textos do corpo, botões, navegação
- **Variável:** `--font-manrope`

### Material Symbols
- **Uso:** Ícones através da fonte Material Symbols Outlined
- **Importação:** Google Fonts CDN

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd remodelagem-sunize
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

### Build de Produção

```bash
# Criar build de produção
npm run build

# Servir build de produção
npm start
```

---

## 📜 Scripts Disponíveis

O arquivo `package.json` contém os seguintes scripts:

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `next dev` | Inicia servidor de desenvolvimento |
| `build` | `next build` | Cria build de produção |
| `start` | `next start` | Serve build de produção |
| `lint` | `eslint` | Executa verificação ESLint |

---

## ✨ Funcionalidades Principais

### Animações Avançadas

- **GSAP SplitText:** Texto animado por caracteres, palavras e linhas individualmente
- **GSAP ScrollTrigger:** Animações ativadas pelo scroll
- **GSAP ScrollSmoother:** Experiência de scroll premium e suave
- **Parallax:** Efeitos de profundidade em imagens

### Efeitos Visuais

- **Liquid Glass:** Efeito de vidro premium estilo Apple na navbar
- **Glass Card:** Cards com efeito de vidro fosco
- **Gradientes:** Gradientes primários e textuais sofisticados
- **Shadows:** Sombras personalizadas com glow
- **Card Shine Effect:** Efeito de brilho em cards

### Design Responsivo

- **Mobile First:** Desenvolvimento focado em mobile
- **Breakpoints:** Tailwind CSS com breakpoints customizados
- **Imagens:** Otimização automática com Next.js Image
- **Touch:** Suporte a interações touch

### Boas Práticas

- **TypeScript:** Tipagem completa e segura
- **Componentização:** Componentes reutilizáveis e modulares
- **Hooks:** Custom hooks para lógica de animações
- **Context API:** Gerenciamento de estado com React Context
- **SEO:** Metadata otimizada para mecanismos de busca

---

## 📱 Seções da Landing Page

A landing page é composta por **10 seções principais**:

1. **Navbar** - Navegação fixa com efeito glass
2. **Hero** - Seção principal com call-to-action
3. **BentoGrid** - Grid de funcionalidades (6 features)
4. **PremiumSection** - Área de membros estilo Netflix
5. **FeesSection** - Taxas de pagamento
6. **CTAProposal** - Proposta para grandes vendedores
7. **Milestones** - Reconhecimentos e premiações
8. **Integrations** - Integrações com ferramentas
9. **MobileApp** - App mobile com notificações em tempo real
10. **Footer** - Rodapé completo com newsletter

---

## 📄 Configuração TypeScript

O projeto utiliza TypeScript com configuração rigorosa:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🔒 Variáveis de Ambiente

O projeto não requer variáveis de ambiente para desenvolvimento local. Para produção, configure conforme necessário.

---

## 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📝 Licença e Disclaimer

> **Este projeto é exclusivamente para fins de portfólio.** A Sunize não utiliza esta landing page em produção. O conteúdo textual, logotipos e imagens utilizadas são meramente ilustrativos para demonstrar habilidades de desenvolvimento frontend.

Este código-fonte é disponibilizado sob licença MIT para fins de estudo e demonstração.

---

## 📞 Contato (Autor do Projeto)

Este projeto foi desenvolvido para prática e demonstração de habilidades em desenvolvimento frontend avançado.

Se você tiver dúvidas sobre o código ou quiser entrar em contato:

- **GitHub:** [https://github.com/talescavalcanti]
- **LinkedIn:** [www.linkedin.com/in/tales-cavalcanti-66730835a]

---

> **Nota:** A marca Sunize e seus produtos são propriedade da empresa respective. Este projeto não possui nenhuma afiliação oficial com a Sunize.

---

<p align="center">
  <strong>Desenvolvido com ❤️ e tecnologia de ponta</strong>
</p>
