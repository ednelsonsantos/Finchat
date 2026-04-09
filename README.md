<div align="center">

# 💬 FinChat

### Registre suas finanças como se estivesse mandando mensagem

[![HTML](https://img.shields.io/badge/HTML-único%20arquivo-orange?style=flat-square&logo=html5)](finchat.html)
[![PWA](https://img.shields.io/badge/PWA-instalável-5A0FC8?style=flat-square&logo=pwa)](finchat.html)
[![IA](https://img.shields.io/badge/IA-Gemini%202.0%20Flash-4285F4?style=flat-square&logo=google)](https://aistudio.google.com)
[![Tamanho](https://img.shields.io/badge/tamanho-189KB-brightgreen?style=flat-square)](#)
[![License](https://img.shields.io/badge/licença-MIT-green?style=flat-square)](LICENSE)
[![Zero deps](https://img.shields.io/badge/backend-zero-brightgreen?style=flat-square)](#)

**FinChat é um app de controle financeiro pessoal que funciona inteiramente no navegador.**  
Sem cadastro. Sem servidor. Sem mensalidade. Seus dados ficam no seu dispositivo.

[▶ Como usar](#como-usar) · [📲 Instalar como app](#instalação-pwa) · [✨ Ativar IA](#inteligência-artificial) · [🧪 Testar no mobile](#testando-no-mobile)

</div>

---

## ✨ O que é o FinChat?

Em vez de preencher formulários chatos, você simplesmente digita como faria numa conversa:

```
gasto 180 mercado
paguei 200 médico
recebi 4000 salário
eletricista 400
```

O app entende a frase, categoriza automaticamente, mostra uma prévia e registra com um clique. Funciona offline, é instalável no celular como PWA, e pode ser turbinado com IA do Google (gratuita).

---

## 📱 Interface

### Tela inicial — limpa e focada

A home foi projetada para ser rápida: você abre, digita, fecha.

```
┌─────────────────────────────────┐
│  💬 FinChat        💰 R$ 3.820  │  ← saldo clicável → dashboard
│                                 │
│  ╔═══════════════════════════╗  │
│  ║  Você pode gastar hoje   ║  │
│  ║       R$ 87,00/dia       ║  │  ← único número em destaque
│  ║  Rec: 4.400 · Gas: 380   ║  │
│  ╚═══════════════════════════╝  │
│                                 │
│  Registrar rápido:              │
│  [🛒 mercado] [🏥 médico] [💼] │  ← atalhos das últimas categorias
│                                 │
│  ┌─────────────────────────────┐│
│  │ "gasto 80 farmácia"...      ││  ← input sempre visível
│  └──────────────────────[ → ] ┘│
│                                 │
│  📊 Ver dashboard e relatórios  │  ← acesso ao restante do app
│                                 │
│  [🏠][📊][📋][🎯][🔁][⚙️]      │  ← bottom nav
└─────────────────────────────────┘
```

### Dashboard e demais telas (acessíveis pelo nav)

Todas as telas avançadas ficam organizadas no bottom navigation:

| Ícone | Tela | O que tem |
|---|---|---|
| 🏠 | Home | Input limpo + card do dia + atalhos rápidos |
| 📊 | Dashboard | KPIs + 3 gráficos + card "posso gastar hoje" |
| 📋 | Histórico | Lista com busca, filtros e edição por toque |
| 🎯 | Metas | Limites por categoria com alertas automáticos |
| 🔁 | Fixos | Recorrentes com controle de vencimento |
| ⭐ | Sonhos | Objetivos de poupança de longo prazo |
| 📈 | Categorias | Barras de gastos com contagem de lançamentos |
| ⚙️ | Config | Perfil, IA, preferências, modo escuro, backup |

---

## 🚀 Funcionalidades

### 🏠 Home minimalista
- **Card "quanto posso gastar hoje"** — calcula automaticamente baseado em receitas do mês, gastos feitos e fixos pendentes. Muda de verde → laranja → vermelho conforme o orçamento aperta
- **Saldo em destaque** — pill clicável no topo leva direto ao dashboard
- **Atalhos rápidos** — as últimas categorias usadas viram botões que pré-preenchem o campo
- **Input principal** sempre visível, com botão de envio circular

### 📝 Parser em linguagem natural
- Detecta **tipo** (gasto/receita), **valor**, **categoria** e **data** automaticamente
- Reconhece variações: *"gasto"*, *"paguei"*, *"comprei"*, *"recebi"*, *"entrou"*, *"faturei"*...
- Entende datas relativas: *"ontem"*, *"15/04"*, *"semana passada"*
- **30+ profissionais mapeados**: médicos, eletricista, dentista, programador, diarista, manicure, cabeleireiro, marceneiro...
- Para profissionais ambíguos (eletricista, pedreiro), pergunta se **pagou ou recebeu**
- **Indicador de confiança** (0–100%) em tempo real
- **Preview do número sequencial** antes de registrar

### 💡 Hints contextuais inteligentes
- Ao digitar "médico", aparecem exemplos clicáveis de como registrar
- Ao digitar "eletricista 400" sem contexto, pergunta se pagou ou recebeu
- Cada categoria e profissional tem dicas específicas
- Filtro automático dos exemplos conforme a intenção selecionada

### 📊 Dashboard visual
- **"Quanto posso gastar hoje"** com cálculo automático de fixos pendentes
- **Gráfico de linha** — evolução do saldo acumulado no mês
- **Gráfico de rosca** — gastos por categoria com legenda e percentuais
- **Gráfico de barras** — entradas vs saídas nos últimos 7 dias
- 4 KPIs: receitas, gastos, saldo, total de registros
- **Filtro por mês** — navega entre meses com `‹ Abr 2026 ›`, atualiza todos os gráficos

### 💬 Chat financeiro
- Detecta automaticamente se a entrada é um **registro** ou uma **consulta**
- Perguntas locais respondidas sem IA: *"quanto gastei essa semana?"*, *"resumo do mês"*, *"onde gastei mais?"*
- Com IA ativada: respostas personalizadas com contexto real dos seus dados

### 🎯 Metas por categoria
- Defina limites mensais (ex: Alimentação ≤ R$ 800)
- Barra de progresso com 3 estados: ✅ ok / ⚡ atenção 80% / ⚠️ estourado
- **Notificações automáticas** ao registrar um gasto que afeta uma meta

### 🔁 Lançamentos fixos/recorrentes
- Cadastre aluguel, salário, internet, academia uma única vez
- Controle de vencimento com código de cores (verde / laranja ≤3 dias / vermelho vencido)
- Botão **"Registrar agora"** integrado — lança direto no histórico
- Resumo de fixos por mês e contagem de pendentes

### ⭐ Objetivos de poupança
- Metas de longo prazo: viagem, carro, reserva de emergência
- Barra de progresso + cálculo automático do **aporte mensal necessário**
- Botão "Adicionar aporte" para registrar depósitos parciais
- Badge: no caminho certo / atrasado / concluído 🎉

### 🔢 Numeração por categoria
- Cada gasto recebe um número sequencial dentro da sua categoria
- Exemplo: `escola #001`, `inglês #002`, `cursinho #003`
- Sequência global (não reseta por mês) — útil para controlar parcelas

### 🔍 Busca e edição no histórico
- Campo de busca em tempo real por descrição, categoria ou valor
- Toque em qualquer registro para **editar** — abre modal com todos os campos
- Campo de **nota/observação** opcional: *"parcela 2/6"*, *"pago com cartão Nubank"*
- Exclusão individual ou completa, com toggle de confirmação nas configurações

### 📄 Exportação
- **PDF** — relatório completo com métricas, tabela e gastos por categoria (jsPDF)
- **CSV/Excel** — BOM UTF-8 para abrir direto no Excel brasileiro (separador `;`)
- **JSON** — backup completo: registros, metas, fixos, objetivos e configurações
- Seleção de período: este mês / esta semana / todos os registros

### 🌙 Modo escuro
- Toggle nas Configurações com aplicação imediata
- Preferência salva entre sessões
- Tema cuidadosamente refinado em todos os componentes

### 📱 Mobile e PWA
- Layout responsivo com **bottom navigation** em telas ≤ 600px
- Inputs com `font-size: 16px` para evitar zoom automático no iOS
- Respeita `safe-area-inset` (notch do iPhone, barra de gestos Android)
- Instalável como PWA: ícone na tela inicial, roda offline via Service Worker

---

## ✨ Inteligência Artificial

O FinChat integra o **Gemini 2.0 Flash** do Google como camada opcional — o parser local funciona sem IA.

### Arquitetura de custo zero

```
Usuário digita
      ↓
Parser local (instantâneo, offline, gratuito)
      ↓
Confiança ≥ 70%? → Registra direto
      ↓ não
Gemini 2.0 Flash (800ms depois, só se tiver chave)
      ↓
Resultado melhorado com badge "✨ IA"
```

O Gemini só é acionado em casos difíceis. Para o uso diário comum, o parser local resolve tudo.

### Limites gratuitos do Gemini

| Recurso | Limite |
|---|---|
| Requisições | 1.500 / dia |
| Velocidade | 15 / minuto |
| Custo | **R$ 0,00** |

### Como ativar

1. Acesse [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Clique em **"Create API Key"** (sem cartão de crédito)
3. Copie a chave gerada (`AIza...`)
4. No FinChat: **Config ⚙️ → Inteligência Artificial**
5. Cole a chave e clique em **"Testar conexão"**

### O que a IA resolve que o parser não resolve

- Frases complexas: *"dentista cobrou 350 mas convênio pagou 200, diferença 150"*
- Valores com cálculo: *"dividi a conta de R$ 180 em 3, paguei minha parte"*
- Contexto ambíguo: *"paguei metade do aluguel pro João"*
- Chat avançado: *"analise meus gastos e me dê dicas"*, *"qual categoria devo reduzir?"*

---

## 🗂️ Categorias suportadas (13)

| Categoria | Exemplos de palavras reconhecidas |
|---|---|
| 🛒 Alimentação | mercado, restaurante, ifood, açaí, padaria, hortifruti, delivery... |
| 💊 Saúde | farmácia, médico, academia, pilates, crossfit, exame, plano, vacina... |
| 🚗 Transporte | uber, gasolina, ônibus, pedágio, multa, IPVA, borracharia... |
| 🏠 Moradia | aluguel, condomínio, luz, internet, IPTU, gás, CEMIG, COPEL... |
| 🎬 Lazer | netflix, cinema, show, spotify, videogame, viagem, airbnb... |
| 📚 Educação | curso, faculdade, duolingo, udemy, workshop, escola... |
| 🐾 Pets | veterinário, ração, pet shop, vacina, banho e tosa... |
| 👕 Vestuário | roupa, tênis, bolsa, zara, shein, shopee, sandália... |
| 📈 Investimento | CDB, tesouro direto, ações, cripto, FIIs, previdência... |
| 💼 Salário | salário, holerite, 13º, férias, PLR, pró-labore, adiantamento... |
| 💻 Renda extra | freela, projeto, comissão, venda, consultoria, mentoria... |
| 🔧 Serviços | eletricista, pedreiro, mecânico, marceneiro, fotógrafo... |
| 📦 Outros | qualquer coisa não categorizada |

### Profissionais mapeados (30+)

**Saúde** (sempre gasto): dermatologista, cardiologista, psicólogo, dentista, nutricionista, oftalmologista, ginecologista, ortopedista, neurologista, urologista, endocrinologista, médico/clínico

**Serviços** (ambíguo — pagou ou recebeu?): eletricista, encanador, pedreiro/obra, pintor, diarista/faxina, mecânico/oficina, jardineiro, programador/dev, designer, advogado, contador, fotógrafo, personal trainer, babá/cuidador, marceneiro, técnico de TI, manicure, cabeleireiro/salão

---

## 🛠️ Tecnologias

Projeto **zero dependências de backend e zero build step**.

| Tecnologia | Uso | Como carrega |
|---|---|---|
| HTML5 / CSS3 / JS | Base completa do app | Nativo |
| [Chart.js 4.4.1](https://chartjs.org) | 3 tipos de gráfico no dashboard | CDN |
| [jsPDF 2.5.1](https://github.com/parallax/jsPDF) | Exportação PDF | CDN |
| [jsPDF-AutoTable 3.8.2](https://github.com/simonbengtsson/jsPDF-AutoTable) | Tabelas no PDF | CDN |
| [Gemini 2.0 Flash](https://ai.google.dev) | IA parser + chat (opcional) | API REST |
| localStorage | Persistência de todos os dados | Nativo |
| Service Worker | Cache offline + PWA | Nativo |

**Nenhum framework. Nenhum bundler. Nenhum npm.** Abre direto no navegador.

---

## 🗃️ Estrutura de dados

Todos os dados ficam no `localStorage` do navegador:

```
finchat_registros_v1   → Array de transações
finchat_metas_v1       → Metas por categoria
finchat_recorrentes_v1 → Lançamentos fixos
finchat_objetivos_v1   → Objetivos de poupança
finchat_config_v1      → Configurações do usuário
finchat_gemini_key     → Chave API Gemini (local)
finchat_dark           → Preferência de tema
```

### Formato de um registro

```json
{
  "id": 1712345678901,
  "tipo": "gasto",
  "valor": 180.00,
  "descricao": "mercado",
  "categoria": {
    "key": "alimentacao",
    "label": "Alimentação",
    "badge": "bg-red",
    "cor": "#E24B4A"
  },
  "nota": "compra semanal",
  "data": "2026-04-08T14:30:00.000Z",
  "confianca": 95,
  "viaIA": false
}
```

---

## 💻 Como usar

```bash
# Clone o repositório
git clone https://github.com/ednelsonsantos/finchat.git
cd finchat

# Opção 1 — abrir direto (funciona para uso básico)
start finchat.html          # Windows
open finchat.html           # macOS
xdg-open finchat.html       # Linux

# Opção 2 — servir via HTTP (necessário para PWA e API Gemini)
python -m http.server 8080
# Acesse: http://localhost:8080/finchat.html
```

> Para testar o PWA e a IA do Gemini use sempre a **Opção 2**, pois Service Workers e chamadas de API requerem contexto HTTP ou HTTPS.

---

## 🧪 Testando no mobile

### Chrome DevTools — mais rápido (sem instalar nada)
1. Abra o `finchat.html` no Chrome
2. Pressione `F12` → ícone de celular (Toggle device toolbar)
3. Escolha um dispositivo: Pixel 7, iPhone 14, Galaxy S21...
4. Recarregue para aplicar o viewport mobile

### BlueStacks — emulador Android (Windows/Mac)
1. Baixe em [bluestacks.com](https://www.bluestacks.com) — instalação simples, ~5GB
2. Abra o Chrome interno
3. Sirva o arquivo: `python -m http.server 8080`
4. Descubra seu IP local: `ipconfig` (Windows) → IPv4
5. Acesse no BlueStacks: `http://SEU_IP:8080/finchat.html`
6. Teste o banner de instalação PWA (menu ⋮ → Adicionar à tela inicial)

### Android Studio AVD — mais fiel ao device real
1. Instale o [Android Studio](https://developer.android.com/studio) (~8GB)
2. Crie um AVD: Pixel 7 com API 34
3. Abra o Chrome no emulador
4. Use o IP especial do AVD: `http://10.0.2.2:8080/finchat.html`

### Celular físico na mesma rede Wi-Fi
```bash
python -m http.server 8080
# No celular, acesse: http://SEU_IP_LOCAL:8080/finchat.html
```
Essa é a forma mais rápida de ver o PWA funcionando de verdade — o banner de instalação aparece no Chrome Android.

---

## 📱 Instalação PWA

### Android (Chrome)
Abra o app → menu `⋮` → **"Adicionar à tela inicial"**

### iPhone / iPad (Safari)
Abra no Safari → **Compartilhar** → **"Adicionar à Tela de Início"**

### Desktop (Chrome / Edge)
Ícone de instalação na barra de endereço → **Instalar**

> Após instalar: o app abre sem barra do navegador, tem ícone próprio e **funciona offline** via Service Worker.

---

## 🗺️ Roadmap

- [ ] Múltiplas carteiras / contas (Nubank, Bradesco, dinheiro, cartão)
- [ ] Controle de cartão de crédito com fatura mensal
- [ ] Gráfico comparativo dos últimos 6 meses (tendência)
- [ ] Migração para Capacitor — APK Android / iOS nativo com SQLite
- [ ] Migração para Electron — app desktop com SQLite local
- [ ] Sincronização via Google Drive / Dropbox (backup automático)
- [ ] Importação de extrato OFX/CSV de bancos
- [ ] Notificações push nativas (via Capacitor)

---

## 🤝 Contribuindo

1. Abra uma **Issue** descrevendo o problema ou ideia
2. Fork o repositório
3. Crie uma branch: `git checkout -b minha-melhoria`
4. Edite o `finchat.html`
5. Abra um **Pull Request**

### Adicionando palavras ao dicionário

O dicionário fica no início do `<script>` em `finchat.html`:

```javascript
// Adicionar palavra numa categoria existente:
alimentacao: {
  palavras: ['mercado', 'supermercado', 'SUA_PALAVRA', ...]
}

// Adicionar novo profissional:
{
  palavras: ['nome_profissional'],
  icon: '🔨',
  label: 'Nome Exibido',
  cat: 'Serviços',
  badge: 'bg-amber',
  tipo: null,       // null = ambíguo | 'gasto' = sempre gasto
  ambiguo: true,    // true = pergunta se pagou ou recebeu
  sub: 'Serviço — pagou ou recebeu?',
  exemplos: [
    {t: 'paguei 300 nome_profissional', d: 'contratei'},
    {t: 'recebi 300 nome_profissional', d: 'prestei'},
  ],
  tip: 'Dica contextual aqui.'
}
```

---

## 📄 Licença

MIT © 2026 — Livre para usar, modificar e distribuir.

---

<div align="center">

**FinChat · 189KB · um único arquivo HTML · zero backend · zero rastreamento**

Seus dados são seus.

**[⬆ Voltar ao topo](#-finchat)**

</div>
