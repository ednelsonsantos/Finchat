<div align="center">

# 💬 FinChat

### Registre suas finanças como se estivesse mandando mensagem

[![HTML](https://img.shields.io/badge/HTML-único%20arquivo-orange?style=flat-square&logo=html5)](finchat.html)
[![PWA](https://img.shields.io/badge/PWA-instalável-5A0FC8?style=flat-square&logo=pwa)](finchat.html)
[![IA](https://img.shields.io/badge/IA-Gemini%202.0%20Flash-4285F4?style=flat-square&logo=google)](https://aistudio.google.com)
[![Tamanho](https://img.shields.io/badge/tamanho-194KB-brightgreen?style=flat-square)](#)
[![License](https://img.shields.io/badge/licença-MIT-green?style=flat-square)](LICENSE)
[![Zero backend](https://img.shields.io/badge/backend-zero-brightgreen?style=flat-square)](#)

**App de controle financeiro pessoal que roda inteiramente no navegador.**  
Sem cadastro. Sem servidor. Sem mensalidade. Seus dados ficam no seu dispositivo.

[▶ Como usar](#como-usar) · [📲 Instalar como app](#instalação-pwa) · [✨ Ativar IA](#inteligência-artificial) · [🧪 Testar no mobile](#testando-no-mobile)

</div>

---

## ✨ O que é o FinChat?

Em vez de preencher formulários, você digita como numa conversa:

```
gasto 180 mercado
paguei 200 médico
recebi 4000 salário
eletricista 400
```

O app entende, categoriza e registra. Funciona offline, instala no celular como PWA e pode ser turbinado com IA do Google (gratuita).

---

## 📱 Interface

### Tela inicial — limpa e focada

A home foi projetada para ser rápida: abre, digita, fecha.

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
│  [🏠][📊][📋][🎯][🔁][⚙️]      │  ← bottom nav
└─────────────────────────────────┘
```

### Navegação pelo bottom nav

| Ícone | Tela | O que tem |
|---|---|---|
| 🏠 | Home | Input limpo + card do dia + atalhos rápidos |
| 📊 | Dashboard | KPIs + 3 gráficos + exportação PDF/CSV |
| 📋 | Histórico | Lista com busca em tempo real e edição por toque |
| 🎯 | Metas | Limites mensais por categoria com alertas |
| 🔁 | Fixos | Recorrentes com controle de vencimento |
| ⭐ | Sonhos | Objetivos de poupança de longo prazo |
| 📈 | Categorias | Barras de gastos com contagem de lançamentos |
| ⚙️ | Config | Perfil, IA, modo escuro, preferências, backup |

Cada tela tem um botão `←` no topo para voltar à home.

---

## 🚀 Funcionalidades

### 🏠 Home minimalista
- **Card "quanto posso gastar hoje"** — calcula automaticamente com base em receitas, gastos e fixos pendentes. Verde quando ok, laranja quando apertado, vermelho quando estourado
- **Saldo em destaque** — pill clicável leva direto ao dashboard
- **Atalhos rápidos** — últimas categorias usadas viram botões que pré-preenchem o input
- Input principal sempre visível com botão circular de envio

### 📝 Parser em linguagem natural
- Detecta **tipo**, **valor**, **categoria** e **data** automaticamente
- Reconhece variações: *"gasto"*, *"paguei"*, *"comprei"*, *"recebi"*, *"faturei"*...
- Entende datas relativas: *"ontem"*, *"15/04"*
- **30+ profissionais mapeados** com hints contextuais
- Para profissionais ambíguos (eletricista, dev), pergunta se pagou ou recebeu
- Preview do número sequencial antes de registrar

### 💡 Hints contextuais inteligentes
- Ao digitar "médico" aparecem exemplos clicáveis específicos para saúde
- Ao digitar "eletricista 400" pergunta se pagou ou recebeu
- **Modo claro:** fundo branco com letras pretas nítidas
- **Modo escuro:** fundo preto com letras brancas — máximo contraste

### 📊 Dashboard visual
- Card "Quanto posso gastar hoje" com cálculo automático
- **Gráfico de linha** — evolução do saldo no mês
- **Gráfico de rosca** — gastos por categoria com percentuais
- **Gráfico de barras** — entradas vs saídas nos últimos 7 dias
- 4 KPIs: receitas, gastos, saldo, total de registros
- **Filtro por mês** — navega entre meses com `‹ Abr 2026 ›`
- Exportação PDF e CSV direto do header do dashboard

### 💬 Chat financeiro
- Detecta automaticamente se a entrada é registro ou consulta
- Consultas locais: *"quanto gastei essa semana?"*, *"resumo do mês"*, *"onde gastei mais?"*
- Com IA ativada: respostas personalizadas com seus dados reais

### 🎯 Metas por categoria
- Limites mensais por categoria (ex: Alimentação ≤ R$ 800)
- Barra de progresso: ✅ ok / ⚡ atenção 80% / ⚠️ estourado
- Notificações automáticas ao registrar gastos que afetam metas

### 🔁 Lançamentos fixos/recorrentes
- Aluguel, salário, internet, academia — cadastre uma vez
- Status por cores: verde / laranja ≤3 dias / vermelho vencido
- "Registrar agora" com um toque — lança direto no histórico

### ⭐ Objetivos de poupança
- Metas de longo prazo: viagem, carro, reserva de emergência
- Cálculo automático do aporte mensal necessário
- Botão "Adicionar aporte" para registrar depósitos parciais

### 🔢 Numeração por categoria
- Cada gasto recebe número sequencial: `escola #001`, `inglês #002`
- Global (não reseta por mês) — útil para controlar parcelas

### 🔍 Busca e edição
- Busca em tempo real no histórico por descrição, categoria ou valor
- Toque em qualquer registro para editar — modal com todos os campos
- Campo de nota: *"parcela 2/6"*, *"pago com cartão Nubank"*

### 📄 Exportação
- **PDF** — relatório com métricas, tabela e gastos por categoria
- **CSV/Excel** — BOM UTF-8 para Excel brasileiro (separador `;`)
- **JSON** — backup completo: registros, metas, fixos, objetivos e config

### 🌙 Modo escuro
- Toggle nas configurações com aplicação imediata
- Preferência salva entre sessões
- Hints com fundo preto e letras brancas para máximo contraste
- Badges de categoria com cores vibrantes sobre fundo escuro

### 📱 Mobile e PWA
- Bottom navigation fixa em todos os tamanhos de tela
- `font-size: 16px` nos inputs para evitar zoom automático no iOS
- `safe-area-inset` para respeitar notch e barra de gestos
- Instalável como PWA com ícone próprio e modo offline

---

## ✨ Inteligência Artificial

Integra o **Gemini 2.0 Flash** como camada opcional — o parser local funciona sem IA.

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
Resultado melhorado com badge ✨ IA
```

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
5. Cole a chave → **"Testar conexão"**

### O que a IA resolve que o parser não resolve

- *"dentista cobrou 350 mas convênio pagou 200, diferença 150"*
- *"dividi a conta de R$ 180 em 3, paguei minha parte"*
- Chat avançado: *"analise meus gastos"*, *"qual categoria devo reduzir?"*

---

## 🗂️ Categorias (13)

| Categoria | Palavras reconhecidas |
|---|---|
| 🛒 Alimentação | mercado, restaurante, ifood, açaí, padaria, delivery... |
| 💊 Saúde | farmácia, médico, academia, pilates, exame, plano... |
| 🚗 Transporte | uber, gasolina, ônibus, pedágio, multa, IPVA... |
| 🏠 Moradia | aluguel, condomínio, luz, internet, IPTU, gás... |
| 🎬 Lazer | netflix, cinema, show, spotify, videogame, viagem... |
| 📚 Educação | curso, faculdade, duolingo, udemy, workshop... |
| 🐾 Pets | veterinário, ração, pet shop, vacina, tosa... |
| 👕 Vestuário | roupa, tênis, bolsa, zara, shein, shopee... |
| 📈 Investimento | CDB, tesouro direto, ações, cripto, FIIs... |
| 💼 Salário | salário, holerite, 13º, férias, PLR, pró-labore... |
| 💻 Renda extra | freela, projeto, comissão, venda, consultoria... |
| 🔧 Serviços | eletricista, pedreiro, mecânico, marceneiro... |
| 📦 Outros | qualquer coisa não categorizada |

### Profissionais mapeados (30+)

**Saúde** (sempre gasto): dermatologista, cardiologista, psicólogo, dentista, nutricionista, oftalmologista, ginecologista, ortopedista, neurologista, urologista, endocrinologista, médico

**Serviços** (pergunta se pagou ou recebeu): eletricista, encanador, pedreiro, pintor, diarista, mecânico, jardineiro, programador/dev, designer, advogado, contador, fotógrafo, personal trainer, babá, marceneiro, técnico de TI, manicure, cabeleireiro

---

## 🛠️ Tecnologias

Zero dependências de backend. Zero build step.

| Tecnologia | Uso | Versão |
|---|---|---|
| HTML5 / CSS3 / JS | Base completa | Vanilla |
| [Chart.js](https://chartjs.org) | 3 gráficos no dashboard | 4.4.1 (CDN) |
| [jsPDF](https://github.com/parallax/jsPDF) | Exportação PDF | 2.5.1 (CDN) |
| [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) | Tabelas no PDF | 3.8.2 (CDN) |
| [Gemini 2.0 Flash](https://ai.google.dev) | IA (opcional) | API REST |
| localStorage | Persistência | Nativo |
| Service Worker | Cache offline / PWA | Nativo |

---

## 🗃️ Estrutura de dados

```
finchat_registros_v1   → transações
finchat_metas_v1       → metas por categoria
finchat_recorrentes_v1 → lançamentos fixos
finchat_objetivos_v1   → objetivos de poupança
finchat_config_v1      → configurações
finchat_gemini_key     → chave API
finchat_dark           → preferência de tema
```

### Formato de um registro

```json
{
  "id": 1712345678901,
  "tipo": "gasto",
  "valor": 180.00,
  "descricao": "mercado",
  "categoria": { "key": "alimentacao", "label": "Alimentação" },
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

---

## 🧪 Testando no mobile

### Chrome DevTools — sem instalar nada
1. Abra no Chrome → `F12` → ícone de celular
2. Escolha: Pixel 7, iPhone 14, Galaxy S21...

### BlueStacks — emulador Android (Windows/Mac)
1. Baixe em [bluestacks.com](https://www.bluestacks.com)
2. Sirva com `python -m http.server 8080`
3. Descubra seu IP: `ipconfig` (Windows) → IPv4
4. No BlueStacks Chrome: `http://SEU_IP:8080/finchat.html`

### Android Studio AVD
1. Instale o [Android Studio](https://developer.android.com/studio)
2. Crie um AVD com API 34
3. No Chrome do emulador: `http://10.0.2.2:8080/finchat.html`

### Celular físico na mesma rede
```bash
python -m http.server 8080
# No celular: http://SEU_IP_LOCAL:8080/finchat.html
```

---

## 📱 Instalação PWA

| Plataforma | Como instalar |
|---|---|
| Android (Chrome) | Menu `⋮` → Adicionar à tela inicial |
| iPhone (Safari) | Compartilhar → Adicionar à Tela de Início |
| Desktop Chrome/Edge | Ícone de instalação na barra de endereço |

Após instalar: abre sem barra do navegador, funciona offline, tem ícone próprio.

---

## 🗺️ Roadmap

- [ ] Múltiplas carteiras (Nubank, dinheiro, cartão)
- [ ] Controle de cartão de crédito com fatura
- [ ] Gráfico comparativo dos últimos 6 meses
- [ ] Capacitor — APK Android / iOS nativo com SQLite
- [ ] Electron — app desktop com SQLite local
- [ ] Sincronização Google Drive / Dropbox
- [ ] Importação de extrato OFX/CSV de bancos
- [ ] Notificações push nativas

---

## 🤝 Contribuindo

1. Abra uma **Issue**
2. Fork → branch → edite o `finchat.html`
3. **Pull Request**

### Adicionando ao dicionário

```javascript
// Nova palavra numa categoria existente:
alimentacao: {
  palavras: ['mercado', 'SUA_PALAVRA', ...]
}

// Novo profissional:
{
  palavras: ['nome'],
  icon: '🔨', label: 'Nome', cat: 'Serviços',
  badge: 'bg-amber', tipo: null, ambiguo: true,
  sub: 'Serviço — pagou ou recebeu?',
  exemplos: [
    {t: 'paguei 300 nome', d: 'contratei'},
    {t: 'recebi 300 nome', d: 'prestei'},
  ],
  tip: 'Dica aqui.'
}
```

---

## 📄 Licença

MIT © 2026 — Livre para usar, modificar e distribuir.

---

<div align="center">

**FinChat · 194KB · um único arquivo HTML · zero backend · zero rastreamento**

Seus dados são seus.

**[⬆ Voltar ao topo](#-finchat)**

</div>
