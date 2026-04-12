# FinChat — Contexto do Projeto para Claude Code

## O que é
App de finanças pessoais com interface de chat em linguagem natural.
O usuário digita frases como "gasto 180 mercado" ou "recebi 4000 salário"
e o app interpreta, categoriza e registra automaticamente.

## Stack
- **Frontend:** HTML/CSS/JS — arquivo único `finchat.html`
- **Mobile:** Capacitor (wrapper Android/iOS)
- **Storage atual:** localStorage (migrar para SQLite nativo)
- **Build Android:** Android Studio + Gradle
- **Repositório:** https://github.com/ednelsonsantos/finchat

## Estrutura do projeto
```
finchat/
├── finchat.html        # app principal (arquivo único)
├── android/            # projeto Capacitor/Android
│   ├── app/
│   │   └── build.gradle
│   └── capacitor.config.json
├── CLAUDE.md           # este arquivo
└── README.md
```

## Funcionalidades já implementadas
- [x] Parser de linguagem natural com dicionário de categorias
- [x] Registro de transações (gastos e receitas)
- [x] Dashboard com KPIs e card "posso gastar hoje"
- [x] Histórico com busca e filtros por mês
- [x] Metas por categoria com barra de progresso e alertas (80% / 100%)
- [x] Gastos fixos/recorrentes com controle de vencimento
- [x] Objetivos de poupança com cálculo de aporte mensal
- [x] Exportação PDF e CSV
- [x] Dark mode
- [x] PWA (Service Worker + manifest)
- [x] Responsividade mobile
- [x] Filtro por mês

## Telas existentes
| Tab | Descrição |
|-----|-----------|
| 💬 Chat | Entrada principal em linguagem natural |
| 📊 Dashboard | KPIs + gráficos |
| 📋 Histórico | Lista com edição por toque |
| 🎯 Metas | Progresso por categoria |
| 🔁 Fixos | Contas recorrentes |
| ⭐ Objetivos | Poupança com metas |
| 📈 Categorias | Barras de gastos |
| ⚙️ Config | Perfil e preferências |

## Próximos passos (em ordem de prioridade)
1. **Ícone e splash screen** — ícone personalizado do FinChat no APK ✅
2. **Tela de boas-vindas** — onboarding com nome do usuário (primeira abertura) ✅
3. **Teclado numérico** — abrir teclado numérico automaticamente no input
4. **Licença open source para lojas** — metadata F-Droid (fastlane/metadata/android/),
   verificar dependências livres (Chart.js ✅, jsPDF ✅, Gemini opcional ✅),
   badge REUSE/SPDX, publicar no F-Droid e IzzyOnDroid
5. **SQLite nativo** — substituir localStorage por @capacitor-community/sqlite
6. **Gerar APK assinado** — keystore + build de produção para distribuição
7. **Backup Google Drive** — exportar/importar JSON na nuvem automaticamente
8. **Biometria/PIN** — proteger o app com impressão digital ou senha
9. **Compartilhar relatório** — enviar PDF/resumo por WhatsApp ou e-mail

## Configurações Gradle relevantes
- Kotlin stdlib: forçar versão 1.8.22 (conflito jdk7/jdk8 já resolvido)
- ProGuard: usar `proguard-android-optimize.txt` (já corrigido)
- `kotlin.stdlib.default.dependency=false` no gradle.properties

## Padrões do projeto
- O app inteiro vive no `finchat.html` — CSS, JS e HTML no mesmo arquivo
- Dados em localStorage com chaves: `registros`, `metas`, `fixos`, `objetivos`
- Categorias definidas no objeto `CATS` no início do script
- Profissionais ambíguos (podem ser gasto ou receita) no array `PROFISSIONAIS`
- Tema: variáveis CSS `--color-*` para suporte a dark mode

## Observações importantes
- O projeto foi convertido de PWA/HTML para Capacitor Android
- Está rodando corretamente no emulador Android Studio
- Antes de gerar o APK final, implementar os itens 1 e 2 acima
- Licença: MIT © 2026 Ednelson Santos
