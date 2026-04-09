<div align="center">

# 💬 FinChat

### Registre suas finanças como se estivesse mandando mensagem

[![HTML](https://img.shields.io/badge/HTML-único%20arquivo-orange?style=flat-square&logo=html5)](finchat.html)
[![PWA](https://img.shields.io/badge/PWA-instalável-5A0FC8?style=flat-square&logo=pwa)](finchat.html)
[![IA](https://img.shields.io/badge/IA-Gemini%202.0%20Flash-4285F4?style=flat-square&logo=google)](https://aistudio.google.com)
[![License](https://img.shields.io/badge/licença-MIT-green?style=flat-square)](LICENSE)
[![Zero deps](https://img.shields.io/badge/dependências-zero%20backend-brightgreen?style=flat-square)](#)

**FinChat é um app de controle financeiro pessoal que funciona inteiramente no navegador.**  
Sem cadastro. Sem servidor. Sem mensalidade. Seus dados ficam no seu dispositivo.

[▶ Demo ao vivo](#como-usar) · [📲 Instalar como app](#instalação-pwa) · [✨ Ativar IA](#inteligência-artificial)

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

## 🚀 Funcionalidades

### 📝 Parser em linguagem natural
- Detecta **tipo** (gasto/receita), **valor**, **categoria** e **data** automaticamente
- Reconhece variações: *"gasto"*, *"paguei"*, *"comprei"*, *"recebi"*, *"entrou"*...
- Entende datas relativas: *"ontem"*, *"15/04"*, *"semana passada"*
- **30+ profissionais mapeados**: médicos, eletricista, dentista, programador, diarista...
- Para profissionais ambíguos (eletricista, pedreiro), pergunta se **pagou ou recebeu**

### 💡 Hints contextuais inteligentes
- Ao digitar "médico", aparecem exemplos clicáveis de como registrar
- Cada categoria tem dicas específicas e exemplos de formato
- Preview do número sequencial que o registro vai receber

### 📊 Dashboard visual
- **"Quanto posso gastar hoje"** — calcula automaticamente baseado em receitas, gastos e fixos pendentes
- Gráfico de evolução do saldo no mês (linha)
- Gráfico de gastos por categoria (rosca/doughnut)
- Barras comparativas dos últimos 7 dias (receitas vs gastos)
- 4 KPIs: receitas, gastos, saldo, total de registros

### 🎯 Metas por categoria
- Defina limites mensais por categoria (ex: Alimentação ≤ R$ 800)
- Barra de progresso com 3 estados: ✅ ok / ⚡ atenção (80%) / ⚠️ estourado
- Notificações automáticas ao registrar um gasto que afeta uma meta

### 🔁 Lançamentos fixos/recorrentes
- Cadastre aluguel, salário, internet, academia uma única vez
- Controle de vencimento: verde / laranja (≤ 3 dias) / vermelho (vencido)
- Botão "Registrar agora" com um toque — cai direto no histórico
- Resumo de gastos e receitas fixas mensais + contagem de pendentes

### ⭐ Objetivos de poupança
- Metas de longo prazo: viagem, carro, reserva de emergência
- Barra de progresso com cálculo automático de aporte mensal necessário
- Botão "Adicionar aporte" para registrar depósitos parciais
- Badge de status: no caminho certo / atrasado / concluído 🎉

### 💬 Chat financeiro
- Perguntas em linguagem natural: *"quanto gastei essa semana?"*, *"onde gastei mais?"*, *"qual meu saldo?"*
- Detecta automaticamente se a entrada é um **registro** ou uma **consulta**
- Com IA ativada: respostas personalizadas com contexto real dos seus dados

### 🔢 Numeração por categoria
- Cada gasto recebe um número sequencial dentro da sua categoria
- Ex: `escola #001`, `inglês #002`, `cursinho #003`
- Numeração global (não reseta por mês) — útil para controle de parcelas

### 🔍 Busca no histórico
- Campo de busca em tempo real por descrição, categoria ou valor
- Combina com filtros de tipo (todos/receitas/gastos) e filtro de mês

### 📄 Exportação
- **PDF** — relatório completo com métricas, tabela de lançamentos e gastos por categoria
- **CSV/Excel** — com BOM UTF-8 para abrir direto no Excel brasileiro (separador `;`)
- **JSON** — backup completo com registros, metas, fixos, objetivos e configurações
- Seleção de período: este mês / esta semana / todos os registros

### ⚙️ Configurações
- Nome de usuário e estatísticas de uso
- Moeda (Real, Dólar, Euro)
- Dia de início do mês para relatórios
- Toggles: alertas de vencimento, confirmação antes de excluir
- **Modo escuro** — com detecção automática da preferência do sistema
- Import/export de backup JSON

---

## ✨ Inteligência Artificial

O FinChat integra o **Gemini 2.0 Flash** do Google — o modelo mais rápido e capaz do tier gratuito.

### Limites gratuitos (mais que suficiente para uso pessoal)
| Recurso | Limite gratuito |
|---|---|
| Requisições | 1.500 / dia |
| RPM | 15 / minuto |
| Tokens de saída | 1.024 por resposta |
| Custo | **R$ 0,00** |

### Como ativar

1. Acesse [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Clique em **"Create API Key"** (sem precisar de cartão de crédito)
3. Copie a chave gerada (começa com `AIza...`)
4. No FinChat, vá em **Config ⚙️ → Inteligência Artificial**
5. Cole a chave e clique em **"Testar conexão"**

### O que a IA faz

**Fallback do parser** — quando o parser local tem confiança < 70%, o Gemini analisa a frase e melhora o resultado. Isso resolve casos complexos como:
- *"dentista cobrou 350 mas convênio pagou 200, diferença 150"*
- *"paguei metade do aluguel pro João"*
- Valores parcelados com cálculo implícito

**Chat inteligente** — as perguntas no chat são respondidas com contexto real dos seus dados:
- *"analise meus gastos e me dê dicas"*
- *"qual categoria devo reduzir?"*
- *"como está minha saúde financeira esse mês?"*

**Arquitetura de custo zero** — a chave API é do próprio usuário. O app nunca envia dados para servidores de terceiros além da API do Google quando explicitamente acionada.

---

## 📱 Instalação PWA

O FinChat pode ser instalado como app nativo no celular e desktop — sem lojas de app, sem instalador.

### Android (Chrome)
1. Abra o `finchat.html` no Chrome
2. Toque no menu `⋮` → **"Adicionar à tela inicial"**
3. O app aparece como ícone verde na tela inicial

### iPhone / iPad (Safari)
1. Abra no Safari
2. Toque em **Compartilhar** (ícone de caixa com seta)
3. **"Adicionar à Tela de Início"**

### Desktop (Chrome / Edge)
1. Abra o arquivo no navegador
2. Clique no ícone de instalação na barra de endereço (ou menu → Instalar)

> **Funciona offline** após a primeira abertura — o Service Worker faz cache automático.

---

## 🗂️ Categorias suportadas

| Categoria | Exemplos de palavras reconhecidas |
|---|---|
| 🛒 Alimentação | mercado, restaurante, ifood, padaria, açaí, delivery... |
| 💊 Saúde | farmácia, médico, academia, pilates, exame, plano... |
| 🚗 Transporte | uber, gasolina, ônibus, pedágio, multa, IPVA... |
| 🏠 Moradia | aluguel, condomínio, luz, internet, IPTU, gás... |
| 🎬 Lazer | netflix, cinema, show, spotify, videogame, viagem... |
| 📚 Educação | curso, faculdade, duolingo, udemy, workshop... |
| 🐾 Pets | veterinário, ração, pet shop, vacina, tosa... |
| 👕 Vestuário | roupa, tênis, bolsa, zara, shein, shopee... |
| 📈 Investimento | CDB, tesouro direto, ações, cripto, previdência... |
| 💼 Salário | salário, holerite, 13º, férias, PLR, pro-labore... |
| 💻 Renda extra | freela, projeto, comissão, venda, consultoria... |
| 🔧 Serviços | eletricista, pedreiro, mecânico, marceneiro... |

---

## 🛠️ Tecnologias

O projeto é intencionalmente **zero dependências de backend e build**.

| Tecnologia | Uso | Versão |
|---|---|---|
| HTML5 / CSS3 / JS | Base do app | Vanilla |
| [Chart.js](https://chartjs.org) | Gráficos do dashboard | 4.4.1 (CDN) |
| [jsPDF](https://github.com/parallax/jsPDF) | Exportação PDF | 2.5.1 (CDN) |
| [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) | Tabelas no PDF | 3.8.2 (CDN) |
| [Gemini API](https://ai.google.dev) | IA (opcional) | 2.0 Flash |
| localStorage | Persistência de dados | Nativo |
| Service Worker | Cache offline / PWA | Nativo |

**Nenhum framework, nenhum bundler, nenhum npm.** Abre direto no navegador.

---

## 🗃️ Estrutura de dados

Todos os dados são salvos no `localStorage` do navegador em chaves separadas:

```
finchat_registros_v1  →  Array de transações
finchat_metas_v1      →  Objeto com metas por categoria
finchat_recorrentes_v1→  Array de lançamentos fixos
finchat_objetivos_v1  →  Array de objetivos de poupança
finchat_config_v1     →  Configurações do usuário
finchat_gemini_key    →  Chave API (criptografada localmente)
finchat_dark          →  Preferência de tema
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

## 💻 Como usar localmente

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/finchat.git

# Entre na pasta
cd finchat

# Opção 1: abrir direto (funciona para uso básico)
start finchat.html          # Windows
open finchat.html           # macOS
xdg-open finchat.html       # Linux

# Opção 2: servir via HTTP (necessário para PWA e IA)
python -m http.server 8080
# Acesse: http://localhost:8080/finchat.html
```

> Para testar o PWA e a integração com a API do Gemini, use a **Opção 2** com servidor HTTP, pois o Service Worker e chamadas de API requerem contexto HTTP(S).

---

## 🧪 Testando no mobile (sem celular físico)

### Chrome DevTools (mais rápido)
1. Abra o `finchat.html` no Chrome
2. Pressione `F12` → clique no ícone de celular (Toggle device toolbar)
3. Escolha um dispositivo: Pixel 7, iPhone 14, Galaxy S21...

### BlueStacks (emulador Android — Windows/Mac)
1. Baixe em [bluestacks.com](https://www.bluestacks.com)
2. Instale e abra o Chrome interno
3. Acesse `http://SEU_IP_LOCAL:8080/finchat.html`
4. Teste instalação PWA normalmente

### Android Studio AVD (mais fiel)
1. Instale o [Android Studio](https://developer.android.com/studio)
2. Crie um AVD (Virtual Device) com API 33+
3. Abra o Chrome no emulador
4. Acesse `http://10.0.2.2:8080/finchat.html` (IP especial do AVD para localhost)

---

## 📸 Telas

| Tela | Descrição |
|---|---|
| 💬 Chat | Campo de entrada com hints inteligentes e chips de consulta |
| 📊 Dashboard | KPIs + card "posso gastar hoje" + 3 gráficos |
| 📋 Histórico | Lista com busca, filtros e edição por toque |
| 🎯 Metas | Barras de progresso por categoria com alertas |
| 🔁 Fixos | Controle de vencimento com status visual |
| ⭐ Objetivos | Metas de poupança com aporte mensal calculado |
| 📈 Categorias | Barras de gastos com contagem de lançamentos |
| ⚙️ Config | Perfil, IA, preferências, backup |

---

## 🗺️ Roadmap

- [ ] Múltiplas carteiras / contas (Nubank, Bradesco, dinheiro)
- [ ] Controle de cartão de crédito com fatura
- [ ] Gráfico comparativo mês a mês (últimos 6 meses)
- [ ] Migração para Capacitor (APK Android / iOS nativo)
- [ ] SQLite via Electron para uso desktop
- [ ] Sincronização via Google Drive / Dropbox (backup automático)
- [ ] Importação de extrato OFX/CSV de bancos

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se encontrar um bug ou tiver sugestão:

1. Abra uma **Issue** descrevendo o problema ou ideia
2. Fork o repositório
3. Crie uma branch: `git checkout -b minha-melhoria`
4. Faça suas alterações no `finchat.html`
5. Abra um **Pull Request**

### Adicionando palavras ao dicionário

O dicionário fica no início do `<script>` em `finchat.html`. Para adicionar uma categoria ou palavra:

```javascript
// Em CATS, adicione na lista de palavras da categoria
alimentacao: {
  palavras: ['mercado', 'supermercado', 'SUA_PALAVRA_AQUI', ...]
}

// Para novo profissional, adicione em PROFISSIONAIS:
{
  palavras: ['nome_profissional'],
  icon: '🔨',
  label: 'Nome Exibido',
  cat: 'Serviços',
  badge: 'bg-amber',
  tipo: null,          // null = ambíguo (pagou ou recebeu?)
  ambiguo: true,
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

Feito com 💚 em um único arquivo HTML · Sem servidor · Sem rastreamento · Seus dados são seus

**[⬆ Voltar ao topo](#-finchat)**

</div>
