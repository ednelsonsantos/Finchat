<div align="center">

# 💬 FinChat

### Registre suas finanças como se estivesse mandando mensagem

[![HTML](https://img.shields.io/badge/HTML-único%20arquivo-orange?style=flat-square&logo=html5)](https://ednelsonsantos.github.io/Finchat/)
[![PWA](https://img.shields.io/badge/PWA-instalável-5A0FC8?style=flat-square&logo=pwa)](https://ednelsonsantos.github.io/Finchat/)
[![Tamanho](https://img.shields.io/badge/tamanho-321kb-brightgreen?style=flat-square)](#)
[![License](https://img.shields.io/badge/licença-MIT-green?style=flat-square)](LICENSE)
[![Zero backend](https://img.shields.io/badge/backend-zero-brightgreen?style=flat-square)](#)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-ativo-2088FF?style=flat-square&logo=github)](https://ednelsonsantos.github.io/Finchat/)

**App de controle financeiro pessoal que roda inteiramente no navegador.**<br>
Sem cadastro. Sem servidor. Sem mensalidade. Seus dados ficam no seu dispositivo.

<h3><a href="https://ednelsonsantos.github.io/Finchat/">🌐 Acesse agora no GitHub Pages</a></h3>

<a href="#como-usar">▶ Como usar</a> · <a href="#instalação-pwa">📲 Instalar como app</a> · <a href="#testando-no-mobile">🧪 Testar no mobile</a>

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

O app entende, categoriza e registra. Funciona offline, instala no celular como PWA e roda 100% local — sem nenhuma dependência externa.

---

## 📱 Interface

### Tela inicial — limpa e focada

```
┌─────────────────────────────────┐
│  💬 FinChat        💰 R$ 3.820  │  ← saldo clicável → dashboard
│                                 │
│  ╔═══════════════════════════╗  │
│  ║  Você pode gastar hoje   ║  │
│  ║       R$ 87,00/dia       ║  │  ← número em destaque
│  ║  Rec: 4.400 · Gas: 380   ║  │
│  ╚═══════════════════════════╝  │
│                                 │
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
| 🏠 | Home | Input + card do dia + atalhos rápidos |
| 📊 | Dashboard | KPIs + 4 gráficos + score financeiro + exportação PDF/CSV |
| 📋 | Histórico | Lista com busca em tempo real, swipe para excluir e edição |
| 🎯 | Metas | Limites mensais por categoria com alertas |
| 🔁 | Fixos | Recorrentes com controle de vencimento |
| ⭐ | Sonhos | Objetivos de poupança de longo prazo |
| 📈 | Categorias | Barras de gastos com contagem |
| ⚙️ | Config | Perfil, modo escuro, backup, categorias personalizadas |

Cada tela tem um botão `←` para voltar à home.

---

## 🚀 Funcionalidades

### 🏠 Home minimalista
- **Card "quanto posso gastar hoje"** — verde quando ok, laranja quando apertado, vermelho quando estourado
- **Saldo em destaque** — pill clicável leva ao dashboard
- **Atalhos rápidos** — últimas categorias usadas viram botões que pré-preenchem o input
- **Undo** — toast com botão "Desfazer" por 5s após cada registro

### 📝 Parser em linguagem natural (100% local, sem IA externa)
- Detecta tipo, valor, categoria e data automaticamente
- Reconhece variações: *"gasto"*, *"paguei"*, *"comprei"*, *"recebi"*, *"faturei"*...
- Datas relativas: *"ontem"*, *"15/04"*
- **30+ profissionais mapeados** com hints contextuais
- Para profissionais ambíguos (eletricista, dev), pergunta se pagou ou recebeu
- Validação anti-registro sem contexto (bloqueia entradas como "aaa 123")
- Preview do número sequencial antes de registrar

### 💡 Hints contextuais inteligentes
- Exemplos clicáveis específicos por categoria e profissional
- Modo claro: fundo branco com letras pretas
- Modo escuro: fundo preto com letras brancas — máximo contraste

### 📊 Dashboard visual
- **Gráfico de linha** — evolução do saldo no mês
- **Gráfico de rosca** — gastos por categoria com percentuais
- **Gráfico de barras** — entradas vs saídas nos últimos 7 dias
- **Gráfico comparativo** — receitas e gastos dos últimos 6 meses
- **Gráfico de tendência** — gastos acumulados: mês atual vs mês anterior (linha)
- **Score financeiro** — pontuação 0–100 baseada em poupança, metas e contas em dia
- **Previsão de fechamento** — projeção de gasto total com base no ritmo atual
- Filtro por mês com navegação `‹ Abr 2026 ›`
- Exportação PDF e CSV no header do dashboard

### 💬 Chat financeiro local
- Detecta automaticamente se é registro ou consulta
- Consultas locais: *"quanto gastei essa semana?"*, *"resumo do mês"*, *"top categorias"*
- Funciona 100% offline

### 🎯 Metas por categoria
- Limites mensais com barra de progresso e alertas automáticos (80% e 100%)

### 🔁 Lançamentos fixos/recorrentes
- Cadastre uma vez, controle vencimento, registre com um toque
- Alertas: vence hoje, em atraso, aviso prévio (1–3 dias)

### ⭐ Objetivos de poupança
- Metas de longo prazo com cálculo automático de aporte mensal

### 💳 Carteiras múltiplas
- Nubank, dinheiro, cartão — cada uma com ícone e cor personalizados
- Limite de cartão com alerta ao atingir 80% e 100%
- Transferência entre carteiras

### ÷ Divisão de gastos
- Divida qualquer gasto igualmente ou com valor livre
- Painel "A receber" com total por pessoa
- Botão **WhatsApp** para cobrar diretamente: *"Olá João! Você me deve R$ 50,00 💸"*

### 🏷️ Tags personalizadas
- Marque transações com `#viagem`, `#trabalho`, `#festa`...
- Busca por tag no histórico (toque na tag para filtrar)

### 📦 Categorias personalizadas
- Crie suas próprias categorias além das 13 padrão (emoji + nome + palavras-chave)
- Detectadas automaticamente pelo parser e disponíveis no modal de edição

### 📆 Resumos automáticos
- **Relatório mensal**: ao virar o mês, mostra resumo de receitas, gastos, metas e top categoria
- **Resumo semanal**: todo domingo, total da semana vs semana anterior + top 3 categorias

### 🔢 Numeração por categoria
- `escola #001`, `inglês #002` — sequência global por categoria

### 🔍 Busca e edição
- Busca em tempo real no histórico
- **Swipe para excluir** — deslize o item para a esquerda no mobile
- Toque para editar qualquer registro — modal com nota e tags

### 📄 Exportação
- **PDF** — relatório completo com métricas e gráficos
- **CSV/Excel** — BOM UTF-8 para Excel brasileiro
- **JSON** — backup completo com restore

### ☁️ Backup Google Drive
- Sincronização manual ou automática (toggle em Config)
- Merge bidirecional: une dados locais com dados do Drive sem duplicar
- Modo grupo/casal: compartilhe dados via código de grupo

### 🌙 Modo escuro
- Toggle nas configurações, preferência salva entre sessões
- Hints: fundo preto, letras brancas — máximo contraste

### 📱 Mobile e PWA
- Bottom navigation visível em qualquer tamanho de tela
- `font-size: 16px` nos inputs — sem zoom automático no iOS
- `safe-area-inset` para notch e barra de gestos
- Instalável como PWA, roda offline via Service Worker
- Onboarding de primeiro uso (3 passos: nome → meta → notificações)

### 🔒 Segurança
- PIN de 4 dígitos para proteger o app
- Biometria (impressão digital / Face ID) via Capacitor

---

## 🗂️ Categorias (13 padrão + personalizadas)

| Categoria | Exemplos |
|---|---|
| 🛒 Alimentação | mercado, ifood, restaurante, açaí, padaria... |
| 💊 Saúde | farmácia, médico, academia, pilates, exame... |
| 🚗 Transporte | uber, gasolina, ônibus, pedágio, IPVA... |
| 🏠 Moradia | aluguel, condomínio, luz, internet, gás... |
| 🎬 Lazer | netflix, cinema, show, spotify, viagem... |
| 📚 Educação | curso, faculdade, duolingo, udemy... |
| 🐾 Pets | veterinário, ração, pet shop, tosa... |
| 👕 Vestuário | roupa, tênis, bolsa, shein, shopee... |
| 📈 Investimento | CDB, tesouro direto, ações, cripto... |
| 💼 Salário | salário, holerite, 13º, férias, PLR... |
| 💻 Renda extra | freela, projeto, comissão, venda... |
| 🔧 Serviços | eletricista, pedreiro, mecânico... |
| 📦 Outros | qualquer coisa não categorizada |
| ➕ Personalizadas | crie suas próprias em ⚙️ Config |

**Profissionais (30+):** dermatologista, cardiologista, psicólogo, dentista, nutricionista, oftalmologista, ginecologista, ortopedista, neurologista, médico, eletricista, encanador, pedreiro, pintor, diarista, mecânico, jardineiro, programador, designer, advogado, contador, fotógrafo, personal trainer, babá, marceneiro, técnico de TI, manicure, cabeleireiro.

---

## 🛠️ Tecnologias

Zero dependências de backend. Zero build step.

| Tecnologia | Uso | Versão |
|---|---|---|
| HTML5 / CSS3 / JS | Base completa | Vanilla |
| [Chart.js](https://chartjs.org) | 5 gráficos | 4.4.1 (CDN) |
| [jsPDF](https://github.com/parallax/jsPDF) | Exportação PDF | 2.5.1 (CDN) |
| [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) | Tabelas no PDF | 3.8.2 (CDN) |
| localStorage / SQLite | Persistência | Nativo |
| Service Worker | Cache offline + PWA | Nativo |

---

## 🗃️ Dados salvos

```
finchat_registros_v1     → transações
finchat_metas_v1         → metas por categoria
finchat_recorrentes_v1   → lançamentos fixos
finchat_objetivos_v1     → objetivos de poupança
finchat_carteiras_v1     → carteiras
finchat_cats_custom_v1   → categorias personalizadas
finchat_config_v1        → configurações
finchat_dark             → preferência de tema
finchat_notif_log        → controle de notificações enviadas
```

---

## 💻 Como usar

### Opção 1 — GitHub Pages (recomendado, sem instalar nada)

Acesse direto pelo navegador:

👉 **[https://ednelsonsantos.github.io/Finchat/](https://ednelsonsantos.github.io/Finchat/)**

Funciona em qualquer dispositivo. Para instalar como PWA, basta seguir os passos em [Instalação PWA](#instalação-pwa).

### Opção 2 — Rodar localmente

```bash
# Clone
git clone https://github.com/ednelsonsantos/Finchat.git
cd Finchat

# Abrir direto (uso básico)
start index.html       # Windows
open index.html        # macOS

# Servir via HTTP (PWA + Service Worker)
python -m http.server 8080
# Acesse: http://localhost:8080
```

---

## 🧪 Testando no mobile

**Chrome DevTools** — `F12` → ícone de celular → escolha o dispositivo

**BlueStacks** (emulador Android):
```bash
# 1. Baixe em bluestacks.com
# 2. Sirva o arquivo
python -m http.server 8080
# 3. Descubra seu IP local
ipconfig    # Windows — copie o IPv4
# 4. No Chrome do BlueStacks acesse:
# http://SEU_IP:8080
```

**Android Studio AVD:**
```bash
# IP especial do emulador para acessar o localhost da máquina
http://10.0.2.2:8080
```

**Celular físico** (mesma rede Wi-Fi):
```bash
python -m http.server 8080
# No celular: http://SEU_IP_LOCAL:8080
# Banner de instalação PWA aparece automaticamente no Chrome Android
```

> Dica: para testar sem configurar nada, use diretamente o GitHub Pages em qualquer dispositivo: [https://ednelsonsantos.github.io/Finchat/](https://ednelsonsantos.github.io/Finchat/)

---

## 📱 Instalação PWA

| Plataforma | Como instalar |
|---|---|
| Android (Chrome) | Menu `⋮` → Adicionar à tela inicial |
| iPhone (Safari) | Compartilhar → Adicionar à Tela de Início |
| Desktop Chrome/Edge | Ícone de instalação na barra de endereço |

---

## 🖥️ Electron — app desktop

Roda como aplicativo nativo no Windows, macOS e Linux.

```bash
npm install
npm run electron          # abre o app direto
npm run electron:build    # gera instalador em dist-electron/
```

O build gera um instalador `.exe` (Windows), `.dmg` (macOS) ou `.AppImage` (Linux).

---

## 📲 Capacitor — APK Android

Transforma o app em APK para instalar diretamente no celular.

**Pré-requisitos:**
- [Android Studio](https://developer.android.com/studio) instalado
- JDK 17+ no PATH

```bash
npm install

# Primeira vez — adiciona a plataforma Android
npx cap add android

# A cada mudança no index.html
npx cap sync

# Abre o Android Studio para build/emulador
npm run cap:android
```

No Android Studio: **Run ▶** para emulador ou **Build → Build Bundle/APK** para gerar o APK.

> iOS requer macOS + Xcode. No Windows só Android é suportado.

---

## 🗺️ Roadmap

### Implementado ✅

- [x] Parser de linguagem natural (100% local, sem IA externa)
- [x] Dashboard com 5 gráficos (linha, rosca, barras, comparativo 6 meses, tendência)
- [x] Score financeiro (pontuação 0–100)
- [x] Previsão de fechamento do mês
- [x] Metas por categoria com alertas
- [x] Lançamentos fixos/recorrentes com notificações de vencimento
- [x] Objetivos de poupança
- [x] Carteiras múltiplas com limite e alertas
- [x] Transferência entre carteiras
- [x] Divisão de gastos com cobrança via WhatsApp
- [x] Tags personalizadas (`#viagem`, `#trabalho`...)
- [x] Categorias personalizadas (emoji + palavras-chave)
- [x] Relatório mensal automático ao virar o mês
- [x] Resumo semanal automático (todo domingo)
- [x] Undo do último registro (5 segundos)
- [x] Swipe para excluir no histórico (mobile)
- [x] Busca em tempo real com filtro por tag
- [x] Exportação PDF, CSV e JSON backup
- [x] Backup Google Drive (manual e automático)
- [x] Modo casal/grupo via código compartilhado no Drive
- [x] Importação de extrato CSV/OFX
- [x] Dark mode
- [x] PWA instalável + Service Worker offline
- [x] Onboarding de primeiro uso
- [x] PIN e biometria (Capacitor)
- [x] Capacitor — APK Android
- [x] Electron — app desktop

### Implementado recentemente ✅

- [x] Busca por voz (Web Speech API)
- [x] Alertas de limite no chat ao registrar
- [x] Categorias personalizadas com emoji picker
- [x] Editar lançamentos fixos
- [x] Filtro por carteira no histórico

### Implementado recentemente ✅ (2ª leva)

- [x] Parcelamento automático ("comprei tênis 600 em 6x")
- [x] Insights automáticos no dashboard (dia mais caro, maior gasto, comparativo meses)
- [x] Alerta de padrão incomum ao registrar
- [x] Simulador de juros / empréstimo (modal + comando no chat)
- [x] Desafio de economia (gamificação na aba Metas)
- [x] Modo quiosque ⚡ (botão flutuante para registro rápido sem sair da tela)
- [x] Lembrete diário por horário (Config → toggle + seletor de hora)
- [x] Projeção de reserva de emergência (aba Objetivos)

### Próximas melhorias 🚧

- [ ] Exportar relatório em imagem para redes sociais

---

## 🤝 Contribuindo

```bash
# 1. Clique em "Fork" no GitHub (canto superior direito do repositório)
# 2. Clone o seu fork
git clone https://github.com/SEU_USUARIO/Finchat.git
cd Finchat
git checkout -b minha-melhoria

# 3. Edite o arquivo principal
# edite index.html

# 4. Commit e push
git commit -am "feat: minha melhoria"
git push origin minha-melhoria

# 5. Abra um Pull Request no GitHub
```

### Adicionar palavras ao dicionário

```javascript
// Nova palavra numa categoria:
alimentacao: { palavras: ['mercado', 'SUA_PALAVRA', ...] }

// Novo profissional:
{
  palavras: ['nome'], icon: '🔨', label: 'Nome',
  cat: 'Serviços', badge: 'bg-amber',
  tipo: null, ambiguo: true,
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

MIT © 2026

---

<div align="center">

**FinChat · 321kb · um único arquivo HTML · zero backend · zero rastreamento**

Seus dados são seus.

**[⬆ Voltar ao topo](#-finchat)**

</div>
