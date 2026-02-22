# 🎯 Atividade 01 — Portfólio Pessoal com Bootstrap

## 📖 Descrição da Atividade

Nesta atividade, você irá **criar um portfólio pessoal** utilizando HTML5 e o framework Bootstrap 5. O objetivo é praticar a estrutura semântica do HTML em conjunto com as classes utilitárias do Bootstrap para criar um site responsivo e profissional.

---

## 🎯 Objetivo de Aprendizagem

Ao concluir esta atividade, você será capaz de:

- ✅ Estruturar um site com múltiplas páginas em HTML5
- ✅ Aplicar classes do Bootstrap para criar layouts responsivos
- ✅ Criar uma navegação (navbar) funcional entre páginas
- ✅ Utilizar componentes Bootstrap (cards, botões, formulários)
- ✅ Garantir que o site funcione bem em dispositivos móveis e desktop

---

## 📁 Estrutura da Atividade

```
atividade-01/
├── index.html              ← Página principal (Home) — página de boas-vindas
├── sobre.html              ← Página Sobre — apresentação pessoal
├── projetos.html           ← Página de Projetos — portfólio de trabalhos
├── login.html              ← Página de Login — formulário de autenticação
├── referencia.html         ← Arquivo de referência com Bootstrap completo
├── bootstrap.css           ← Bootstrap 5 CSS (local)
├── bootstrap.js            ← Bootstrap 5 JS (local)
└── imagem-como-deve-ficar/ ← Imagens de referência visual
    ├── exemplo-index.png
    ├── exemplo-login.png
    ├── exemplo-meus-projetos.png
    └── exemplo-sobre.png
```

---

## 📌 Instruções

### 1. Entenda a estrutura base

Cada página já possui a estrutura HTML básica. Sua tarefa é **adicionar as classes Bootstrap corretas** para que o layout fique igual às imagens de referência na pasta `imagem-como-deve-ficar/`.

### 2. Consulte o arquivo de referência

O arquivo `referencia.html` contém um exemplo completo e funcional com todas as classes Bootstrap aplicadas corretamente. Use-o como guia, mas tente implementar você mesmo antes de consultar.

### 3. Componentes que você usará

**Navbar:**
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="index.html">Meu Portfólio</a>
        <!-- ... -->
    </div>
</nav>
```

**Cards para projetos:**
```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Nome do Projeto</h5>
        <p class="card-text">Descrição breve do projeto.</p>
        <a href="#" class="btn btn-primary">Ver Projeto</a>
    </div>
</div>
```

**Formulário de login:**
```html
<form>
    <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input type="email" class="form-control" id="email">
    </div>
    <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input type="password" class="form-control" id="senha">
    </div>
    <button type="submit" class="btn btn-primary">Entrar</button>
</form>
```

---

## 🖼️ Resultado Esperado

Confira as imagens na pasta `imagem-como-deve-ficar/` para ver como cada página deve ficar ao final da atividade.

---

## ✅ Critérios de Avaliação

| Critério | Descrição |
|----------|-----------|
| Estrutura HTML | Uso correto de tags semânticas (header, main, footer, nav) |
| Classes Bootstrap | Aplicação correta das classes nos elementos |
| Responsividade | Site funciona bem em mobile e desktop |
| Navegação | Links entre as páginas funcionando corretamente |
| Visual | Layout próximo ao das imagens de referência |

---

## 🔗 Recursos de Apoio

- [Documentação Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Módulo 09 - Frameworks Bootstrap](../09-frameworks-bootstrap/) — Aulas sobre Bootstrap
- [Módulo 01 - HTML Básico](../01-html-basico/) — Revisão de HTML

---

*Última atualização: 2026*
