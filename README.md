# ⚡ Quiz Relâmpago

Um mini‑jogo educativo em React onde o jogador responde perguntas rápidas sobre curiosidades do Brasil.  
Parte da coleção _Educational Games_ criada pela **TodayHost Studios**.

---

## 🚀 Tecnologias

- React
- Vite
- CSS
- JavaScript moderno
- Assistido por IA (MS-Copilot Pro)

---

## 🧠 Objetivo do Jogo

Responder corretamente o maior número de perguntas dentro de uma sequência de 10 questões.  
Cada pergunta possui alternativas e feedback imediato.

---

## 📦 Funcionalidades

- Tela inicial com fade
- Perguntas embaralhadas
- Alternativas embaralhadas
- Feedback visual de acerto/erro
- Barra de progresso animada
- Bloqueio de múltiplos cliques
- Tela final com pontuação
- Opção de reiniciar o quiz

---

## 📁 Estrutura do Projeto

```

src/
components/
StartScreen.jsx
ProgressBar.jsx
QuestionCard.jsx
screens/
GameScreen.jsx
EndScreen.jsx
data/
questions.js
utils/
shuffle.js
App.jsx
main.jsx

```

---

## 📄 Documentação

Este projeto segue Spec‑Driven Development (SDD).
Consulte:

- [`spec.md`](./spec.md) — requisitos funcionais e regras do jogo
- [`design.md`](./design.md) — diretrizes visuais e UI/UX

---

## ▶️ Como rodar o projeto

```sh
npm install
npm run dev
```

Acesse:

```
http://localhost:5173
```

---

## 🏁 Deploy

Para publicar no GitHub Pages:

```sh
npm run build
```

---

## 👨‍💻 Autor

**João Lindoso**
Criando experiências que ensinam.
