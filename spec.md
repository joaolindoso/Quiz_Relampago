# 📄 Especificação — Jogo 2: Quiz Relâmpago

_(Spec‑Driven Development — versão 1.0)_

## 🎯 Visão Geral

Um quiz rápido com 10 perguntas sobre curiosidades do Brasil.
O jogador responde uma pergunta por vez e recebe feedback imediato.

---

## 🧱 Arquitetura

- React + Vite
- Componentes reutilizáveis
- Estados controlados por hooks
- Funções puras em `/utils`

---

## 🧩 Requisitos Funcionais

### Tela Inicial

- RF01 — Exibir nome do jogo
- RF02 — Exibir botão “Iniciar”
- RF03 — Exibir marca “TodayHost Studios”
- RF04 — Aplicar fade out ao iniciar

### Jogo

- RF05 — Exibir uma pergunta por vez
- RF06 — Embaralhar perguntas no início
- RF07 — Embaralhar alternativas
- RF08 — Exibir feedback visual de acerto/erro
- RF09 — Impedir múltiplos cliques
- RF10 — Avançar automaticamente após 1–2 segundos
- RF11 — Exibir barra de progresso animada
- RF12 — Registrar pontuação
- RF13 — Finalizar após 10 perguntas

### Tela Final

- RF14 — Exibir pontuação final
- RF15 — Exibir botão “Jogar novamente”

---

## 🎨 Requisitos Não Funcionais

- RnF01 — Animações suaves
- RnF02 — Responsividade mínima
- RnF03 — Código limpo e componentizado
- RnF04 — Feedback visual claro
- RnF05 — Tempo de resposta rápido

---

## 🧪 Critérios de Aceitação

- CA01 — Perguntas devem aparecer em ordem aleatória
- CA02 — Alternativas devem ser embaralhadas
- CA03 — Feedback deve ser imediato
- CA04 — Jogador não pode clicar duas vezes
- CA05 — Barra de progresso deve animar suavemente
- CA06 — Tela final deve mostrar pontuação correta

---

## 📦 Dados

Arquivo `questions.js` deve conter:

```js
[
  {
    question: "Qual é o maior bioma do Brasil?",
    options: ["Amazônia", "Cerrado", "Caatinga", "Pampa"],
    answer: "Amazônia"
  },
  ...
]
```

---

## 🔧 Utilitários

`shuffle.js` deve:

- embaralhar arrays
- retornar nova lista sem modificar a original

---

## 🏁 Fluxo do Jogo

1. Tela inicial
2. Fade out
3. Pergunta 1
4. Jogador responde
5. Feedback
6. Avança automaticamente
7. Repetir até 10 perguntas
8. Tela final com pontuação

---

## 📌 Observações

- Feedback deve ser claro e rápido
- Barra de progresso deve refletir a pergunta atual
- Pontuação deve ser precisa
