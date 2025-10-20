# 📐 CSS Layout: Flexbox e Grid

## 🎯 Objetivo do Módulo

Este módulo ensina as técnicas modernas de layout em CSS, focando em **Flexbox** e **CSS Grid**, que são as ferramentas mais poderosas e flexíveis para criar layouts responsivos e profissionais.

---

## 🚀 Tutorial para Iniciantes - Comece Aqui!

Se você é iniciante, comece por esta seção antes de mergulhar nos detalhes técnicos.

### Passo 1: Entenda o Problema

**Antigamente (antes de Flexbox e Grid):**

Criar layouts em CSS era complicado e usava técnicas não ideais:

```css
/* ❌ Método antigo com float */
.sidebar {
    float: left;
    width: 250px;
}

.main {
    margin-left: 250px; /* Tinha que calcular manualmente */
}

/* Problema: Difícil de manter, quebra fácil */
```

**Hoje (com Flexbox e Grid):**

```css
/* ✅ Método moderno com Grid */
.container {
    display: grid;
    grid-template-columns: 250px 1fr;
}

/* Simples, intuitivo e responsivo! */
```

---

### Passo 2: Flexbox em 3 Minutos

**O que é Flexbox?**
É uma forma de organizar elementos em **uma direção**: linha (→) ou coluna (↓).

**Exemplo mais simples possível:**

```html
<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

```css
/* Sem flexbox: itens um embaixo do outro */
.container {
    /* Itens se comportam como blocos normais */
}
```

```css
/* Com flexbox: itens lado a lado */
.container {
    display: flex; /* ← A mágica acontece aqui! */
}
/* Resultado: [Item 1] [Item 2] [Item 3] */
```

**As 3 propriedades mais importantes:**

```css
.container {
    display: flex;
    
    /* 1. Onde colocar os itens? */
    justify-content: center; /* center | space-between | flex-start | flex-end */
    
    /* 2. Como alinhar verticalmente? */
    align-items: center; /* center | flex-start | flex-end | stretch */
    
    /* 3. Espaço entre itens */
    gap: 1rem;
}
```

**Exemplo prático - Centralizar um botão:**

```css
.button-container {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;     /* Centraliza verticalmente */
    height: 200px;
}
```

```html
<div class="button-container">
    <button>Clique Aqui</button>
</div>
<!-- Botão perfeitamente centralizado! -->
```

---

### Passo 3: CSS Grid em 3 Minutos

**O que é CSS Grid?**
É uma forma de organizar elementos em **duas direções**: linhas E colunas (como uma planilha).

**Exemplo mais simples possível:**

```html
<div class="grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
```

```css
/* Grid de 3 colunas */
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 colunas iguais */
    gap: 1rem;
}
```

**Resultado:**
```
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
└───┴───┴───┘
```

**As 3 propriedades mais importantes:**

```css
.grid {
    display: grid;
    
    /* 1. Quantas colunas? Qual tamanho? */
    grid-template-columns: 200px 1fr 200px; /* 3 colunas */
    
    /* 2. Quantas linhas? Qual tamanho? */
    grid-template-rows: auto 1fr auto; /* 3 linhas */
    
    /* 3. Espaço entre células */
    gap: 1rem;
}
```

**Exemplo prático - Layout de página:**

```css
.page {
    display: grid;
    grid-template-columns: 250px 1fr; /* Sidebar + Main */
    grid-template-rows: auto 1fr auto; /* Header + Conteúdo + Footer */
    min-height: 100vh;
    gap: 1rem;
}
```

**Resultado:**
```
┌─────────────────────────┐
│        Header           │
├──────────┬──────────────┤
│  Sidebar │    Main      │
│  250px   │  (cresce)    │
├──────────┴──────────────┤
│        Footer           │
└─────────────────────────┘
```

---

### Passo 4: Qual Usar? Regra Simples

**Use esta regra:**

```
📏 Uma direção (linha OU coluna) = Flexbox
📊 Duas direções (linhas E colunas) = Grid
```

**Exemplos:**

| Preciso fazer | Use | Por quê |
|---------------|-----|---------|
| Navbar horizontal com logo e menu | Flexbox | Uma linha horizontal |
| Lista vertical de notificações | Flexbox | Uma coluna vertical |
| Layout de página com sidebar | Grid | Linhas E colunas |
| Galeria 4x4 de fotos | Grid | Grid estruturado |
| 3 botões lado a lado | Flexbox | Uma linha |
| Dashboard com widgets | Grid | Posições específicas |

---

### Passo 5: Primeiro Projeto - Navbar Simples

**Vamos criar uma navbar passo a passo:**

**HTML:**
```html
<nav class="navbar">
    <div class="logo">MeuSite</div>
    <div class="links">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
    </div>
</nav>
```

**CSS - Passo 1: Estrutura básica**
```css
.navbar {
    background: #333;
    color: white;
    padding: 1rem 2rem;
}
```

**CSS - Passo 2: Ativar Flexbox**
```css
.navbar {
    display: flex; /* ← Ativa o flexbox */
    background: #333;
    color: white;
    padding: 1rem 2rem;
}
/* Agora logo e links ficam lado a lado */
```

**CSS - Passo 3: Distribuir espaço**
```css
.navbar {
    display: flex;
    justify-content: space-between; /* ← Logo à esquerda, links à direita */
    align-items: center; /* ← Alinha verticalmente */
    background: #333;
    color: white;
    padding: 1rem 2rem;
}
```

**CSS - Passo 4: Links em linha**
```css
.links {
    display: flex; /* ← Links também usam flexbox */
    gap: 2rem; /* ← Espaço entre links */
}

.links a {
    color: white;
    text-decoration: none;
}
```

**Pronto! Navbar profissional com poucas linhas.**

---

### Passo 6: Segundo Projeto - Layout de Página

**Vamos criar um layout completo:**

**HTML:**
```html
<div class="page">
    <header>Cabeçalho</header>
    <aside>Menu</aside>
    <main>Conteúdo</main>
    <footer>Rodapé</footer>
</div>
```

**CSS - Usando Grid:**
```css
.page {
    display: grid;
    
    /* 2 colunas: 250px + restante */
    grid-template-columns: 250px 1fr;
    
    /* 3 linhas: auto + cresce + auto */
    grid-template-rows: auto 1fr auto;
    
    /* Nomear áreas (opcional mas útil) */
    grid-template-areas:
        "header header"
        "aside main"
        "footer footer";
    
    min-height: 100vh;
    gap: 1rem;
}

header { grid-area: header; }
aside  { grid-area: aside; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

**Pronto! Layout profissional de página.**

---

### 🎓 Resumo para Iniciantes

**Para usar Flexbox:**
1. No container: `display: flex`
2. Distribua itens: `justify-content`
3. Alinhe verticalmente: `align-items`
4. Espaçamento: `gap`

**Para usar Grid:**
1. No container: `display: grid`
2. Defina colunas: `grid-template-columns`
3. Defina linhas: `grid-template-rows`
4. Espaçamento: `gap`

**Dica de ouro:**
- Não tente decorar tudo!
- Entenda o conceito
- Pratique com exemplos simples
- Consulte a documentação quando necessário

---

## 📚 Conteúdo do Módulo

### 1. **Flexbox (Flexible Box Layout)**
- Conceitos fundamentais
- Container flex vs itens flex
- Direção principal e cruzada
- Alinhamento e distribuição
- Casos práticos de uso

### 2. **CSS Grid Layout**
- Sistema de grade bidimensional
- Grid containers e grid items
- Linhas e colunas explícitas/implícitas
- Áreas nomeadas de grid
- Layout responsivo com grid

### 3. **Comparação e Quando Usar**

#### 🤔 Flexbox vs Grid - Qual Escolher?

A escolha entre Flexbox e Grid depende da situação. Ambos são poderosos, mas cada um tem seus pontos fortes.

---

#### 📏 Diferenças Fundamentais

| Aspecto | Flexbox | CSS Grid |
|---------|---------|----------|
| **Dimensão** | Unidimensional (linha OU coluna) | Bidimensional (linhas E colunas) |
| **Melhor para** | Componentes e alinhamento | Layouts de página |
| **Controle** | Itens controlam a si mesmos | Container controla tudo |
| **Ordem visual** | Fácil de alterar com `order` | Fácil de alterar com áreas |
| **Responsividade** | Quebra com `flex-wrap` | Redefine áreas com media queries |
| **Complexidade** | Mais simples para casos básicos | Mais simples para layouts complexos |

---

#### ✅ Quando Usar Flexbox

**Use Flexbox quando:**

1. **Alinhamento simples de elementos**
   ```css
   /* Centralizar um botão */
   .button-container {
       display: flex;
       justify-content: center;
   }
   ```

2. **Navegação horizontal**
   ```css
   /* Menu de navegação */
   .nav {
       display: flex;
       gap: 2rem;
   }
   ```

3. **Layout em uma única direção**
   ```css
   /* Lista vertical de items */
   .list {
       display: flex;
       flex-direction: column;
       gap: 1rem;
   }
   ```

4. **Cards que devem se ajustar**
   ```css
   /* Cards flexíveis */
   .cards {
       display: flex;
       flex-wrap: wrap;
       gap: 1rem;
   }
   
   .card {
       flex: 1 1 300px;
   }
   ```

5. **Componentes internos de interface**
   - Barras de ferramentas
   - Forms com labels e inputs
   - Modais e dialogs
   - Badges e tags

**Exemplos práticos onde Flexbox é ideal:**
- ✅ Navbar com logo e menu
- ✅ Footer com links distribuídos
- ✅ Galeria de imagens que quebra linha
- ✅ Formulário com campos lado a lado
- ✅ Card com ícone e texto
- ✅ Barra de busca com input e botão

---

#### ✅ Quando Usar CSS Grid

**Use CSS Grid quando:**

1. **Layout bidimensional (linhas E colunas)**
   ```css
   /* Dashboard com seções diferentes */
   .dashboard {
       display: grid;
       grid-template-columns: 200px 1fr 300px;
       grid-template-rows: auto 1fr auto;
   }
   ```

2. **Layout de página completo**
   ```css
   /* Estrutura de site */
   .page {
       display: grid;
       grid-template-areas:
           "header header"
           "sidebar main"
           "footer footer";
   }
   ```

3. **Grid de itens uniformes**
   ```css
   /* Galeria de fotos */
   .gallery {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
       gap: 1rem;
   }
   ```

4. **Controle preciso de posicionamento**
   ```css
   /* Item específico ocupando múltiplas células */
   .featured-item {
       grid-column: span 2;
       grid-row: span 2;
   }
   ```

5. **Layout tipo revista/jornal**
   ```css
   .magazine {
       display: grid;
       grid-template-columns: repeat(12, 1fr);
   }
   
   .main-story {
       grid-column: span 8;
   }
   
   .side-story {
       grid-column: span 4;
   }
   ```

**Exemplos práticos onde Grid é ideal:**
- ✅ Layout de página (header, footer, sidebar)
- ✅ Galeria de produtos em grade
- ✅ Dashboard com widgets
- ✅ Layout de revista/blog
- ✅ Formulário complexo com campos em grid
- ✅ Calendário

---

#### 🔄 Combinando Flexbox e Grid

**A melhor prática é usar ambos juntos!**

**Padrão comum:**
- **Grid**: Estrutura principal da página
- **Flexbox**: Componentes individuais

**Exemplo prático:**

```html
<div class="app">
    <header class="header">
        <div class="logo">Logo</div>
        <nav class="nav">...</nav>
        <div class="user">User</div>
    </header>
    
    <div class="content">
        <aside class="sidebar">...</aside>
        <main class="main">
            <div class="cards">
                <div class="card">...</div>
            </div>
        </main>
    </div>
</div>
```

```css
/* Grid para layout principal */
.app {
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
}

.content {
    display: grid;
    grid-template-columns: 250px 1fr;
}

/* Flexbox para header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav {
    display: flex;
    gap: 2rem;
}

/* Grid para cards */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Flexbox dentro do card */
.card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

---

#### 📊 Tabela de Decisão Rápida

| Situação | Use | Por quê |
|----------|-----|---------|
| Elementos em linha com espaçamento igual | Flexbox | `gap` e `justify-content` |
| Página com header, sidebar, main, footer | Grid | Controle bidimensional |
| Card com imagem, título e texto verticalmente | Flexbox | Direção única (coluna) |
| Galeria 3x3 de fotos | Grid | Grid explícito |
| Navbar com logo à esquerda, menu ao centro, botão à direita | Flexbox | `justify-content: space-between` |
| Dashboard com widgets de tamanhos diferentes | Grid | Controle de `grid-column` e `grid-row` |
| Formulário com label e input lado a lado | Flexbox | Alinhamento simples |
| Layout de revista com artigo principal e secundários | Grid | Posicionamento complexo |
| Footer com links centralizados | Flexbox | `justify-content: center` |
| Calendário mensal | Grid | Grid explícito 7x5 |

---

#### 💡 Dicas de Decisão

**Pergunte-se:**

1. **"Preciso controlar linhas E colunas ao mesmo tempo?"**
   - ✅ Sim → Grid
   - ❌ Não → Flexbox

2. **"É um componente pequeno ou layout de página?"**
   - 🔸 Componente → Flexbox
   - 📄 Página → Grid

3. **"Os itens devem quebrar para nova linha?"**
   - Flexbox: Usa `flex-wrap`
   - Grid: Usa `repeat(auto-fit, ...)`

4. **"Preciso de espaçamento uniforme entre itens?"**
   - Ambos funcionam bem com `gap`!

5. **"Vou reorganizar o layout em mobile?"**
   - Flexbox: Muda `flex-direction`
   - Grid: Redefine `grid-template-areas`

---

#### 🎯 Casos Específicos de Aplicação

**Navbar/Header:**
```css
/* ✅ Flexbox é perfeito */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

**Layout de Página:**
```css
/* ✅ Grid é perfeito */
.page {
    display: grid;
    grid-template-areas:
        "header header"
        "nav main"
        "footer footer";
}
```

**Galeria de Imagens:**
```css
/* ✅ Grid com auto-fit */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**Card de Produto:**
```css
/* ✅ Flexbox para componente */
.product-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

**Formulário em Grid:**
```css
/* ✅ Grid para layout complexo */
.form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.full-width {
    grid-column: span 2;
}
```

**Centralizar Conteúdo:**
```css
/* ✅ Ambos funcionam */

/* Flexbox */
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Grid (mais simples) */
.center-grid {
    display: grid;
    place-items: center;
}
```

---

## 🚀 Por Que Aprender Layout Moderno?

### ❌ Problemas dos Métodos Antigos
- **Float**: Difícil de controlar, quebra fácil
- **Position**: Complexo para layouts responsivos
- **Table-display**: Limitado e não semântico
- **Inline-block**: Problemas com espaçamentos

### ✅ Vantagens do Flexbox e Grid
- **Flexbox**: Perfeito para componentes e layouts unidimensionais
- **Grid**: Ideal para layouts bidimensionais complexos
- **Responsividade**: Nativa e intuitiva
- **Alinhamento**: Controle total vertical e horizontal
- **Manutenibilidade**: Código mais limpo e legível

---

## 📋 Flexbox - Guia Prático

### Conceitos Básicos

O Flexbox (Flexible Box Layout) é um modelo de layout unidimensional, ou seja, trabalha com elementos em uma única direção por vez: linha (horizontal) ou coluna (vertical). Ele é perfeito para distribuir espaço e alinhar elementos de forma dinâmica.

**Ativando o Flexbox:**

```css
.container {
    display: flex; /* Torna o elemento um flex container */
}
```

Quando você aplica `display: flex` em um elemento:
- O elemento se torna um **flex container**
- Seus filhos diretos se tornam **flex items**
- Os flex items podem ser facilmente alinhados e distribuídos

---

### 🎯 Propriedades do Container (Flex Container)

#### 1. **flex-direction** - Direção Principal dos Itens

Define a direção na qual os flex items são posicionados no container.

**Valores possíveis:**
- `row` (padrão): Itens em linha, da esquerda para direita
- `row-reverse`: Itens em linha, da direita para esquerda
- `column`: Itens em coluna, de cima para baixo
- `column-reverse`: Itens em coluna, de baixo para cima

**Exemplo simples:**

```css
/* Exemplo 1: Itens em linha (horizontal) */
.container-row {
    display: flex;
    flex-direction: row; /* ← → (padrão) */
}
```

```html
<div class="container-row">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
<!-- Resultado: [Item 1] [Item 2] [Item 3] -->
```

```css
/* Exemplo 2: Itens em coluna (vertical) */
.container-column {
    display: flex;
    flex-direction: column; /* ↑ ↓ */
}
```

```html
<div class="container-column">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
<!-- Resultado: 
     [Item 1]
     [Item 2]
     [Item 3]
-->
```

---

#### 2. **flex-wrap** - Quebra de Linha

Controla se os itens devem ou não quebrar para uma nova linha quando não há espaço suficiente.

**Valores possíveis:**
- `nowrap` (padrão): Todos os itens em uma única linha, mesmo que encolham
- `wrap`: Itens quebram para nova linha se necessário
- `wrap-reverse`: Itens quebram para nova linha na ordem reversa

**Exemplo simples:**

```css
/* Exemplo 1: Sem quebra (nowrap) */
.container-nowrap {
    display: flex;
    flex-wrap: nowrap;
    width: 300px; /* Container com largura limitada */
}
```

```html
<div class="container-nowrap">
    <div style="width: 150px;">Item 1</div>
    <div style="width: 150px;">Item 2</div>
    <div style="width: 150px;">Item 3</div>
</div>
<!-- Itens vão encolher para caber em 300px -->
```

```css
/* Exemplo 2: Com quebra (wrap) */
.container-wrap {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
}
```

```html
<div class="container-wrap">
    <div style="width: 150px;">Item 1</div>
    <div style="width: 150px;">Item 2</div>
    <div style="width: 150px;">Item 3</div>
</div>
<!-- Item 3 quebra para nova linha -->
```

---

#### 3. **justify-content** - Alinhamento no Eixo Principal

Controla como os itens são distribuídos ao longo do eixo principal (horizontal se row, vertical se column).

**Valores possíveis:**
- `flex-start`: Itens agrupados no início
- `flex-end`: Itens agrupados no final
- `center`: Itens centralizados
- `space-between`: Espaço igual entre itens, sem espaço nas extremidades
- `space-around`: Espaço igual ao redor de cada item
- `space-evenly`: Espaço perfeitamente igual entre todos os itens

**Exemplos simples:**

```css
/* Exemplo 1: Centralizar itens */
.container-center {
    display: flex;
    justify-content: center;
    border: 2px solid #333;
    padding: 10px;
}
```

```html
<div class="container-center">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
<!-- Resultado: |     [A][B][C]     | -->
```

```css
/* Exemplo 2: Espaço entre itens */
.container-between {
    display: flex;
    justify-content: space-between;
    border: 2px solid #333;
    padding: 10px;
}
```

```html
<div class="container-between">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
<!-- Resultado: |[A]        [B]        [C]| -->
```

```css
/* Exemplo 3: Espaço uniforme */
.container-evenly {
    display: flex;
    justify-content: space-evenly;
    border: 2px solid #333;
    padding: 10px;
}
```

```html
<div class="container-evenly">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
<!-- Resultado: |  [A]  [B]  [C]  | -->
```

---

#### 4. **align-items** - Alinhamento no Eixo Cruzado

Controla como os itens são alinhados no eixo perpendicular ao principal (vertical se row, horizontal se column).

**Valores possíveis:**
- `stretch` (padrão): Itens esticam para preencher o container
- `flex-start`: Itens alinhados no início do eixo cruzado
- `flex-end`: Itens alinhados no final do eixo cruzado
- `center`: Itens centralizados no eixo cruzado
- `baseline`: Itens alinhados pela linha de base do texto

**Exemplos simples:**

```css
/* Exemplo 1: Centralizar verticalmente */
.container-align-center {
    display: flex;
    align-items: center;
    height: 200px; /* Container com altura */
    border: 2px solid #333;
}
```

```html
<div class="container-align-center">
    <div>Item pequeno</div>
    <div style="height: 100px;">Item grande</div>
</div>
<!-- Itens centralizados verticalmente -->
```

```css
/* Exemplo 2: Esticar itens */
.container-stretch {
    display: flex;
    align-items: stretch;
    height: 200px;
}
```

```html
<div class="container-stretch">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
<!-- Itens ocupam toda a altura do container -->
```

---

#### 5. **align-content** - Alinhamento de Múltiplas Linhas

Controla o alinhamento de múltiplas linhas de itens. **Só funciona quando há wrap e múltiplas linhas**.

**Valores possíveis:**
- `stretch` (padrão): Linhas esticam para preencher o espaço
- `flex-start`: Linhas agrupadas no início
- `flex-end`: Linhas agrupadas no final
- `center`: Linhas centralizadas
- `space-between`: Espaço entre linhas
- `space-around`: Espaço ao redor de linhas

**Exemplo simples:**

```css
.container-align-content {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    height: 400px;
    border: 2px solid #333;
}
```

```html
<div class="container-align-content">
    <div style="width: 100%;">Linha 1</div>
    <div style="width: 100%;">Linha 2</div>
    <div style="width: 100%;">Linha 3</div>
</div>
<!-- Linhas distribuídas com espaço entre elas -->
```

---

#### 6. **gap** - Espaçamento Entre Itens

Define o espaçamento entre os flex items de forma simples e limpa.

**Exemplo simples:**

```css
/* Exemplo: Espaçamento uniforme */
.container-gap {
    display: flex;
    gap: 20px; /* 20px de espaço entre todos os itens */
}
```

```html
<div class="container-gap">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
<!-- Automaticamente 20px entre cada item -->
```

```css
/* Exemplo: Espaçamento diferente para linhas e colunas */
.container-gap-2d {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px; /* 10px vertical, 20px horizontal */
}
```

---

### 🎯 Propriedades dos Itens (Flex Items)

#### 1. **flex-grow** - Fator de Crescimento

Define quanto um item pode crescer em relação aos outros quando há espaço extra disponível.

**Exemplo simples:**

```css
.item-normal {
    flex-grow: 0; /* Não cresce (padrão) */
}

.item-grow {
    flex-grow: 1; /* Pode crescer */
}

.item-grow-2x {
    flex-grow: 2; /* Cresce 2x mais que flex-grow: 1 */
}
```

```html
<div style="display: flex; width: 600px;">
    <div class="item-normal" style="background: lightblue;">
        Tamanho fixo
    </div>
    <div class="item-grow" style="background: lightgreen;">
        Cresce 1x
    </div>
    <div class="item-grow-2x" style="background: lightcoral;">
        Cresce 2x
    </div>
</div>
<!-- O item com flex-grow: 2 ocupa o dobro do espaço extra -->
```

---

#### 2. **flex-shrink** - Fator de Encolhimento

Define quanto um item pode encolher em relação aos outros quando falta espaço.

**Exemplo simples:**

```css
.item-no-shrink {
    flex-shrink: 0; /* Não encolhe */
    width: 200px;
}

.item-can-shrink {
    flex-shrink: 1; /* Pode encolher (padrão) */
    width: 200px;
}
```

```html
<div style="display: flex; width: 300px;">
    <div class="item-no-shrink" style="background: lightblue;">
        Não encolhe
    </div>
    <div class="item-can-shrink" style="background: lightgreen;">
        Pode encolher
    </div>
</div>
<!-- O segundo item encolhe para caber -->
```

---

#### 3. **flex-basis** - Tamanho Inicial

Define o tamanho inicial de um item antes de o espaço restante ser distribuído.

**Exemplo simples:**

```css
.item-basis {
    flex-basis: 200px; /* Tamanho inicial de 200px */
}

.item-basis-auto {
    flex-basis: auto; /* Baseado no conteúdo (padrão) */
}
```

```html
<div style="display: flex;">
    <div class="item-basis" style="background: lightblue;">
        200px de base
    </div>
    <div class="item-basis-auto" style="background: lightgreen;">
        Tamanho automático
    </div>
</div>
```

---

#### 4. **flex** - Propriedade Abreviada

Combina flex-grow, flex-shrink e flex-basis em uma única propriedade.

**Sintaxe:** `flex: <grow> <shrink> <basis>`

**Exemplos simples:**

```css
/* Exemplo 1: Item flexível padrão */
.item-flex-1 {
    flex: 1; /* Equivale a: flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}

/* Exemplo 2: Item que não encolhe */
.item-flex-fixed {
    flex: 0 0 200px; /* grow: 0, shrink: 0, basis: 200px */
}

/* Exemplo 3: Item que cresce mas tem base */
.item-flex-grow-basis {
    flex: 1 0 150px; /* grow: 1, shrink: 0, basis: 150px */
}
```

```html
<div style="display: flex;">
    <div class="item-flex-1" style="background: lightblue;">
        Flexível
    </div>
    <div class="item-flex-fixed" style="background: lightgreen;">
        200px fixo
    </div>
    <div class="item-flex-1" style="background: lightcoral;">
        Flexível
    </div>
</div>
```

---

#### 5. **align-self** - Alinhamento Individual

Permite que um item específico tenha alinhamento diferente dos outros.

**Exemplo simples:**

```css
.container-items {
    display: flex;
    align-items: flex-start; /* Padrão para todos */
    height: 200px;
}

.item-self-center {
    align-self: center; /* Este item será centralizado */
}

.item-self-end {
    align-self: flex-end; /* Este item vai para o final */
}
```

```html
<div class="container-items" style="border: 2px solid #333;">
    <div style="background: lightblue;">Início</div>
    <div class="item-self-center" style="background: lightgreen;">Centro</div>
    <div class="item-self-end" style="background: lightcoral;">Final</div>
</div>
```

---

#### 6. **order** - Ordem de Exibição

Controla a ordem visual dos itens, sem alterar o HTML.

**Exemplo simples:**

```css
.item-first {
    order: 1;
}

.item-second {
    order: 2;
}

.item-third {
    order: 3;
}
```

```html
<div style="display: flex;">
    <div class="item-third" style="background: lightblue;">
        HTML: Terceiro, Visual: Terceiro
    </div>
    <div class="item-first" style="background: lightgreen;">
        HTML: Primeiro, Visual: Primeiro
    </div>
    <div class="item-second" style="background: lightcoral;">
        HTML: Segundo, Visual: Segundo
    </div>
</div>
<!-- Ordem visual: Segundo → Primeiro → Terceiro -->
```

---

### 📊 Tabela Resumo - Propriedades Flexbox

#### Propriedades do Container

| Propriedade | Valores | O Que Faz |
|-------------|---------|-----------|
| `flex-direction` | `row`, `column`, `row-reverse`, `column-reverse` | Define se itens vão em linha ou coluna |
| `flex-wrap` | `nowrap`, `wrap`, `wrap-reverse` | Permite quebra de linha |
| `justify-content` | `flex-start`, `center`, `space-between`, `space-around`, `space-evenly` | Distribui espaço no eixo principal |
| `align-items` | `stretch`, `flex-start`, `center`, `flex-end`, `baseline` | Alinha no eixo cruzado |
| `align-content` | `stretch`, `flex-start`, `center`, `space-between` | Alinha múltiplas linhas |
| `gap` | `<length>` | Espaçamento entre itens |

#### Propriedades dos Itens

| Propriedade | Valores | O Que Faz |
|-------------|---------|-----------|
| `flex-grow` | `<number>` | Quanto o item cresce |
| `flex-shrink` | `<number>` | Quanto o item encolhe |
| `flex-basis` | `<length>` ou `auto` | Tamanho inicial do item |
| `flex` | `<grow> <shrink> <basis>` | Combina as 3 acima |
| `align-self` | Mesmo que `align-items` | Alinhamento individual |
| `order` | `<number>` | Ordem visual do item |

---

## 🎯 CSS Grid - Guia Prático

### Conceitos Básicos

O CSS Grid é um sistema de layout **bidimensional**, ou seja, trabalha com linhas E colunas simultaneamente. É perfeito para criar layouts de página complexos com controle total sobre posicionamento.

**Ativando o Grid:**

```css
.container {
    display: grid; /* Torna o elemento um grid container */
}
```

Quando você aplica `display: grid` em um elemento:
- O elemento se torna um **grid container**
- Seus filhos diretos se tornam **grid items**
- Você pode definir linhas e colunas explicitamente
- Os itens podem ser posicionados em células específicas

**Conceitos importantes:**
- **Grid Lines (linhas do grid)**: As linhas divisórias numeradas (começam em 1)
- **Grid Tracks (trilhas)**: O espaço entre duas linhas adjacentes (colunas ou linhas)
- **Grid Cells (células)**: A interseção de uma linha e uma coluna
- **Grid Areas (áreas)**: Um grupo de células formando uma área retangular

---

### 🎯 Propriedades do Container (Grid Container)

#### 1. **grid-template-columns** - Definindo Colunas

Define a largura e quantidade de colunas no grid.

**Unidades comuns:**
- `px`: Pixels fixos
- `%`: Porcentagem do container
- `fr`: Fração do espaço disponível (flexível)
- `auto`: Baseado no conteúdo
- `minmax()`: Define min e max
- `repeat()`: Repete padrão

**Exemplos simples:**

```css
/* Exemplo 1: Três colunas iguais */
.grid-three-equal {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* ou usando repeat: */
    grid-template-columns: repeat(3, 1fr);
}
```

```html
<div class="grid-three-equal">
    <div>Coluna 1</div>
    <div>Coluna 2</div>
    <div>Coluna 3</div>
</div>
<!-- Três colunas de tamanho igual -->
```

```css
/* Exemplo 2: Colunas com tamanhos diferentes */
.grid-mixed {
    display: grid;
    grid-template-columns: 200px 1fr 2fr;
    /* 200px fixo | 1 parte flexível | 2 partes flexíveis */
}
```

```html
<div class="grid-mixed">
    <div>Sidebar (200px)</div>
    <div>Conteúdo (1fr)</div>
    <div>Main (2fr - dobro)</div>
</div>
```

```css
/* Exemplo 3: Grid responsivo automático */
.grid-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* Colunas de no mínimo 200px, ajusta automaticamente */
}
```

```html
<div class="grid-auto">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <!-- Número de colunas ajusta conforme espaço disponível -->
</div>
```

---

#### 2. **grid-template-rows** - Definindo Linhas

Define a altura e quantidade de linhas no grid.

**Exemplos simples:**

```css
/* Exemplo 1: Linhas com alturas fixas */
.grid-rows-fixed {
    display: grid;
    grid-template-rows: 100px 200px 100px;
}
```

```html
<div class="grid-rows-fixed">
    <div>Linha 1 - 100px</div>
    <div>Linha 2 - 200px</div>
    <div>Linha 3 - 100px</div>
</div>
```

```css
/* Exemplo 2: Linha automática baseada no conteúdo */
.grid-rows-auto {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh; /* Altura total da janela */
}
```

```html
<div class="grid-rows-auto">
    <div>Header (altura do conteúdo)</div>
    <div>Main (ocupa espaço restante)</div>
    <div>Footer (altura do conteúdo)</div>
</div>
```

```css
/* Exemplo 3: Repetir linhas */
.grid-rows-repeat {
    display: grid;
    grid-template-rows: repeat(4, 150px);
    /* 4 linhas de 150px cada */
}
```

---

#### 3. **grid-template-areas** - Áreas Nomeadas

Permite nomear áreas do grid para facilitar o posicionamento. É extremamente visual e intuitivo!

**Exemplo simples - Layout de Página:**

```css
.page-grid {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header  header  header"
        "sidebar content aside"
        "footer  footer  footer";
    min-height: 100vh;
    gap: 10px;
}

/* Posicionando elementos nas áreas */
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

```html
<div class="page-grid">
    <header class="header">Cabeçalho</header>
    <nav class="sidebar">Menu</nav>
    <main class="content">Conteúdo Principal</main>
    <aside class="aside">Barra Lateral</aside>
    <footer class="footer">Rodapé</footer>
</div>
```

**Visualização:**
```
┌─────────────────────────────────┐
│          header                 │
├──────┬───────────────┬──────────┤
│side  │    content    │  aside   │
│bar   │               │          │
├──────┴───────────────┴──────────┤
│          footer                 │
└─────────────────────────────────┘
```

**Exemplo simples - Layout de Card:**

```css
.card-grid {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "image title"
        "image description";
    gap: 15px;
}

.card-image { grid-area: image; }
.card-title { grid-area: title; }
.card-desc { grid-area: description; }
```

```html
<div class="card-grid">
    <img class="card-image" src="foto.jpg" alt="Foto">
    <h3 class="card-title">Título do Card</h3>
    <p class="card-desc">Descrição do conteúdo...</p>
</div>
```

---

#### 4. **gap** (ou grid-gap) - Espaçamento Entre Células

Define o espaçamento entre as células do grid.

**Exemplos simples:**

```css
/* Exemplo 1: Espaçamento uniforme */
.grid-gap-uniform {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* 20px entre todas as células */
}
```

```css
/* Exemplo 2: Espaçamento diferente para linhas e colunas */
.grid-gap-different {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 30px; /* 10px vertical, 30px horizontal */
    /* ou separado: */
    row-gap: 10px;
    column-gap: 30px;
}
```

---

#### 5. **justify-items** - Alinhamento Horizontal dos Itens

Alinha os itens horizontalmente dentro de suas células.

**Valores possíveis:**
- `start`: Alinha no início (esquerda)
- `end`: Alinha no final (direita)
- `center`: Centraliza
- `stretch` (padrão): Estica para preencher a célula

**Exemplo simples:**

```css
.grid-justify-center {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-items: center;
    gap: 10px;
}
```

```html
<div class="grid-justify-center">
    <div style="width: 50px; background: lightblue;">A</div>
    <div style="width: 50px; background: lightgreen;">B</div>
    <div style="width: 50px; background: lightcoral;">C</div>
</div>
<!-- Cada item de 50px centralizado em sua célula de 150px -->
```

---

#### 6. **align-items** - Alinhamento Vertical dos Itens

Alinha os itens verticalmente dentro de suas células.

**Valores possíveis:**
- `start`: Alinha no topo
- `end`: Alinha no fundo
- `center`: Centraliza
- `stretch` (padrão): Estica verticalmente

**Exemplo simples:**

```css
.grid-align-center {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px;
    align-items: center;
    gap: 10px;
}
```

```html
<div class="grid-align-center">
    <div style="height: 50px; background: lightblue;">A</div>
    <div style="height: 80px; background: lightgreen;">B</div>
    <div style="height: 40px; background: lightcoral;">C</div>
</div>
<!-- Itens centralizados verticalmente na linha de 150px -->
```

---

#### 7. **justify-content** - Alinhamento do Grid Inteiro (Horizontal)

Alinha o grid inteiro horizontalmente dentro do container quando o grid é menor que o container.

**Exemplo simples:**

```css
.grid-justify-content {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* 300px total */
    width: 500px; /* Container maior que o grid */
    justify-content: center; /* Centraliza os 300px nos 500px */
    gap: 10px;
}
```

---

#### 8. **align-content** - Alinhamento do Grid Inteiro (Vertical)

Alinha o grid inteiro verticalmente dentro do container.

**Exemplo simples:**

```css
.grid-align-content {
    display: grid;
    grid-template-rows: repeat(3, 100px); /* 300px total */
    height: 500px; /* Container maior que o grid */
    align-content: center; /* Centraliza os 300px nos 500px */
}
```

---

### 🎯 Propriedades dos Itens (Grid Items)

#### 1. **grid-column** - Posicionamento em Colunas

Define em quais colunas o item se estende.

**Sintaxe:** `grid-column: <linha-início> / <linha-fim>`

**Exemplos simples:**

```css
/* Exemplo 1: Item ocupa colunas 1 e 2 */
.item-col-1-3 {
    grid-column: 1 / 3; /* Da linha 1 até linha 3 (ocupa colunas 1 e 2) */
}
```

```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
    <div class="item-col-1-3" style="background: lightblue;">
        Ocupa 2 colunas
    </div>
    <div style="background: lightgreen;">Col 3</div>
    <div style="background: lightcoral;">Col 4</div>
</div>
```

```css
/* Exemplo 2: Usando span (mais intuitivo) */
.item-span-2 {
    grid-column: span 2; /* Ocupa 2 colunas a partir da posição atual */
}
```

```css
/* Exemplo 3: Item ocupa todas as colunas */
.item-full-width {
    grid-column: 1 / -1; /* -1 significa última linha */
}
```

---

#### 2. **grid-row** - Posicionamento em Linhas

Define em quais linhas o item se estende.

**Exemplos simples:**

```css
/* Exemplo 1: Item ocupa linhas 1 e 2 */
.item-row-1-3 {
    grid-row: 1 / 3;
}
```

```css
/* Exemplo 2: Item ocupa 3 linhas */
.item-span-3-rows {
    grid-row: span 3;
}
```

```html
<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 100px; gap: 10px;">
    <div class="item-span-3-rows" style="background: lightblue;">
        3 linhas de altura
    </div>
    <div style="background: lightgreen;">Item 2</div>
    <div style="background: lightcoral;">Item 3</div>
    <div style="background: lightyellow;">Item 4</div>
    <div style="background: lightpink;">Item 5</div>
</div>
```

---

#### 3. **grid-area** - Posicionamento Completo

Pode ser usado de duas formas:

**Forma 1: Nome de área (quando usando grid-template-areas)**

```css
.header {
    grid-area: header; /* Nome definido em grid-template-areas */
}
```

**Forma 2: Posicionamento completo**

```css
.item-custom {
    grid-area: 1 / 2 / 3 / 4;
    /* linha-início / coluna-início / linha-fim / coluna-fim */
}
```

**Exemplo simples:**

```html
<div style="display: grid; grid-template-columns: repeat(4, 100px); grid-template-rows: repeat(3, 100px); gap: 5px;">
    <div style="grid-area: 1 / 1 / 3 / 3; background: lightblue;">
        2x2 grid
    </div>
    <div style="background: lightgreen;">Auto</div>
    <div style="background: lightcoral;">Auto</div>
    <!-- Outros itens preenchem automaticamente -->
</div>
```

---

#### 4. **justify-self** - Alinhamento Horizontal Individual

Alinha um item específico horizontalmente, sobrescrevendo justify-items.

**Exemplo simples:**

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-items: start; /* Todos começam à esquerda */
}

.item-center {
    justify-self: center; /* Este item é centralizado */
}
```

```html
<div class="grid-container">
    <div style="width: 50px; background: lightblue;">Esquerda</div>
    <div class="item-center" style="width: 50px; background: lightgreen;">Centro</div>
    <div style="width: 50px; background: lightcoral;">Esquerda</div>
</div>
```

---

#### 5. **align-self** - Alinhamento Vertical Individual

Alinha um item específico verticalmente.

**Exemplo simples:**

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px;
    align-items: start; /* Todos no topo */
}

.item-bottom {
    align-self: end; /* Este item vai para o fundo */
}
```

```html
<div class="grid-container">
    <div style="background: lightblue;">Topo</div>
    <div class="item-bottom" style="background: lightgreen;">Fundo</div>
    <div style="background: lightcoral;">Topo</div>
</div>
```

---

### 📊 Tabela Resumo - Propriedades Grid

#### Propriedades do Container

| Propriedade | Valores/Exemplo | O Que Faz |
|-------------|-----------------|-----------|
| `grid-template-columns` | `1fr 2fr`, `repeat(3, 1fr)`, `200px auto` | Define quantidade e largura das colunas |
| `grid-template-rows` | `100px auto 50px`, `repeat(4, 1fr)` | Define quantidade e altura das linhas |
| `grid-template-areas` | `"header header" "nav main"` | Nomeia áreas do grid visualmente |
| `gap` | `20px`, `10px 20px` | Espaçamento entre células |
| `justify-items` | `start`, `center`, `end`, `stretch` | Alinha todos os itens horizontalmente |
| `align-items` | `start`, `center`, `end`, `stretch` | Alinha todos os itens verticalmente |
| `justify-content` | `start`, `center`, `space-between` | Alinha o grid inteiro horizontalmente |
| `align-content` | `start`, `center`, `space-around` | Alinha o grid inteiro verticalmente |

#### Propriedades dos Itens

| Propriedade | Valores/Exemplo | O Que Faz |
|-------------|-----------------|-----------|
| `grid-column` | `1 / 3`, `span 2`, `1 / -1` | Define quais colunas o item ocupa |
| `grid-row` | `2 / 4`, `span 3` | Define quais linhas o item ocupa |
| `grid-area` | `header`, `1 / 1 / 2 / 4` | Nome da área ou posição completa |
| `justify-self` | `start`, `center`, `end` | Alinha item individual horizontalmente |
| `align-self` | `start`, `center`, `end` | Alinha item individual verticalmente |

---

### 🎓 Funções Especiais do Grid

#### **repeat()** - Repetir Padrões

```css
/* Em vez de escrever: */
.grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

/* Use repeat: */
.grid {
    grid-template-columns: repeat(4, 1fr);
}

/* Repete padrões complexos: */
.grid-pattern {
    grid-template-columns: repeat(3, 100px 200px);
    /* Resultado: 100px 200px 100px 200px 100px 200px */
}
```

#### **minmax()** - Tamanho Mínimo e Máximo

```css
.grid-minmax {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    /* Cada coluna: mínimo 200px, máximo 1fr (divide espaço) */
}

.grid-content {
    grid-template-rows: minmax(100px, auto);
    /* Linha: mínimo 100px, cresce com o conteúdo */
}
```

#### **auto-fit vs auto-fill** - Grids Responsivos

```css
/* auto-fit: Colapsa colunas vazias */
.grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* auto-fill: Mantém colunas vazias */
.grid-auto-fill {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

**Exemplo prático auto-fit:**

```css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

```html
<div class="responsive-grid">
    <div style="background: lightblue; padding: 20px;">Card 1</div>
    <div style="background: lightgreen; padding: 20px;">Card 2</div>
    <div style="background: lightcoral; padding: 20px;">Card 3</div>
    <div style="background: lightyellow; padding: 20px;">Card 4</div>
</div>
<!-- Ajusta automaticamente o número de colunas conforme o espaço -->
```

---

## 💡 Exemplos Práticos - Passo a Passo

### 🔥 Exemplo 1: Header Responsivo com Flexbox

**Objetivo:** Criar um cabeçalho com logo à esquerda, menu no centro e botão à direita.

#### Passo 1: Estrutura HTML

```html
<header class="header">
    <div class="logo">MeuSite</div>
    <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>
    </nav>
    <div class="actions">
        <button class="btn-login">Login</button>
    </div>
</header>
```

#### Passo 2: CSS - Ativar Flexbox no Header

```css
.header {
    display: flex; /* Ativa o flexbox */
    background: #2c3e50;
    padding: 1rem 2rem;
    color: white;
}
```

**O que acontece:** Os 3 filhos (logo, nav, actions) ficam em linha.

#### Passo 3: Distribuir Espaço

```css
.header {
    display: flex;
    justify-content: space-between; /* Distribui espaço entre os elementos */
    align-items: center; /* Alinha verticalmente */
    background: #2c3e50;
    padding: 1rem 2rem;
}
```

**O que acontece:** Logo vai para esquerda, nav no meio, actions na direita.

#### Passo 4: Estilizar a Navegação com Flexbox

```css
.nav {
    display: flex; /* Nav também usa flexbox */
    gap: 2rem; /* Espaçamento entre links */
}

.nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav a:hover {
    color: #3498db;
}
```

#### Passo 5: Estilizar o Botão

```css
.btn-login {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
}

.btn-login:hover {
    background: #2980b9;
}
```

#### Passo 6: Responsividade (Mobile)

```css
@media (max-width: 768px) {
    .header {
        flex-direction: column; /* Muda para coluna */
        gap: 1rem;
    }
    
    .nav {
        flex-direction: column; /* Nav em coluna também */
        text-align: center;
        gap: 1rem;
    }
}
```

**Resultado completo:**

```css
/* CSS completo */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2c3e50;
    padding: 1rem 2rem;
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav a:hover {
    color: #3498db;
}

.btn-login {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
}

.btn-login:hover {
    background: #2980b9;
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
}
```

---

### 🎴 Exemplo 2: Grid de Cards com Flexbox

**Objetivo:** Criar um grid de cards que se ajusta automaticamente.

#### Passo 1: HTML Básico

```html
<div class="cards-container">
    <div class="card">
        <img src="imagem1.jpg" alt="Produto 1">
        <h3>Produto 1</h3>
        <p>Descrição do produto</p>
        <button>Comprar</button>
    </div>
    <div class="card">
        <img src="imagem2.jpg" alt="Produto 2">
        <h3>Produto 2</h3>
        <p>Descrição do produto</p>
        <button>Comprar</button>
    </div>
    <div class="card">
        <img src="imagem3.jpg" alt="Produto 3">
        <h3>Produto 3</h3>
        <p>Descrição do produto</p>
        <button>Comprar</button>
    </div>
</div>
```

#### Passo 2: Container com Flexbox

```css
.cards-container {
    display: flex;
    flex-wrap: wrap; /* Permite quebra de linha */
    gap: 1.5rem;
    padding: 2rem;
}
```

#### Passo 3: Estilizar os Cards

```css
.card {
    flex: 1 1 300px; /* Cresce, encolhe, base 300px */
    /* Equivale a:
       flex-grow: 1 (pode crescer)
       flex-shrink: 1 (pode encolher)
       flex-basis: 300px (tamanho mínimo)
    */
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column; /* Conteúdo do card em coluna */
}
```

#### Passo 4: Elementos Internos do Card

```css
.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card h3 {
    padding: 1rem 1rem 0.5rem;
    color: #2c3e50;
}

.card p {
    padding: 0 1rem;
    color: #7f8c8d;
    flex-grow: 1; /* Ocupa espaço disponível */
}

.card button {
    margin: 1rem;
    padding: 0.75rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
}

.card button:hover {
    background: #2980b9;
}
```

**Por que `flex: 1 1 300px`?**
- Cards crescem para preencher espaço disponível
- Cards encolhem se necessário
- Cada card tem no mínimo 300px
- Resultado: Layout responsivo automático!

---

### 🏛️ Exemplo 3: Layout de Página Completo com Grid

**Objetivo:** Criar o famoso layout "Holy Grail" - header, footer, sidebar, conteúdo e aside.

#### Passo 1: Estrutura HTML

```html
<div class="page-layout">
    <header class="header">Cabeçalho do Site</header>
    <nav class="sidebar">Menu Lateral</nav>
    <main class="main">Conteúdo Principal</main>
    <aside class="aside">Informações Extras</aside>
    <footer class="footer">Rodapé</footer>
</div>
```

#### Passo 2: Definir o Grid

```css
.page-layout {
    display: grid;
    min-height: 100vh; /* Altura mínima da tela */
    
    /* 3 colunas: sidebar (250px), main (flexível), aside (200px) */
    grid-template-columns: 250px 1fr 200px;
    
    /* 3 linhas: header (auto), conteúdo (flexível), footer (auto) */
    grid-template-rows: auto 1fr auto;
    
    gap: 1rem;
    padding: 1rem;
}
```

**O que acontece:** Grid de 3x3 (9 células no total).

#### Passo 3: Nomear as Áreas

```css
.page-layout {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 250px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header  header  header"
        "sidebar main    aside"
        "footer  footer  footer";
    gap: 1rem;
    padding: 1rem;
}
```

**Visualização:**
```
┌──────────────────────────────────┐
│        header (3 colunas)        │
├─────────┬──────────────┬─────────┤
│ sidebar │     main     │  aside  │
│ (250px) │  (flexível)  │ (200px) │
├─────────┴──────────────┴─────────┤
│        footer (3 colunas)        │
└──────────────────────────────────┘
```

#### Passo 4: Posicionar Elementos nas Áreas

```css
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

#### Passo 5: Estilizar Cada Seção

```css
.header {
    grid-area: header;
    background: #2c3e50;
    color: white;
    padding: 2rem;
    text-align: center;
}

.sidebar {
    grid-area: sidebar;
    background: #34495e;
    color: white;
    padding: 1.5rem;
}

.main {
    grid-area: main;
    background: white;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.aside {
    grid-area: aside;
    background: #ecf0f1;
    padding: 1.5rem;
}

.footer {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    padding: 1.5rem;
    text-align: center;
}
```

#### Passo 6: Responsividade para Mobile

```css
@media (max-width: 768px) {
    .page-layout {
        /* 1 coluna no mobile */
        grid-template-columns: 1fr;
        
        /* Reorganiza as áreas verticalmente */
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
    }
}
```

**O que acontece no mobile:**
```
┌─────────────┐
│   header    │
├─────────────┤
│    main     │
├─────────────┤
│   sidebar   │
├─────────────┤
│    aside    │
├─────────────┤
│   footer    │
└─────────────┘
```

---

### 📦 Exemplo 4: Grid de Produtos Responsivo

**Objetivo:** Grid que ajusta automaticamente o número de colunas.

#### Passo 1: HTML

```html
<div class="products-grid">
    <div class="product">Produto 1</div>
    <div class="product">Produto 2</div>
    <div class="product">Produto 3</div>
    <div class="product">Produto 4</div>
    <div class="product">Produto 5</div>
    <div class="product">Produto 6</div>
</div>
```

#### Passo 2: Grid Responsivo Automático

```css
.products-grid {
    display: grid;
    
    /* A mágica está aqui: */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    gap: 2rem;
    padding: 2rem;
}
```

**O que significa:**
- `repeat()`: Repete o padrão
- `auto-fit`: Ajusta automaticamente o número de colunas
- `minmax(250px, 1fr)`: Cada coluna tem no mínimo 250px e no máximo 1fr

**Resultado:**
- Tela grande: 4 colunas
- Tela média: 3 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna
- Tudo automático!

#### Passo 3: Estilizar Produtos

```css
.product {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s;
}

.product:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}
```

---

### 🎯 Exemplo 5: Centralizar Elemento (Flexbox vs Grid)

#### Método 1: Flexbox

```css
.container-flex {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;     /* Centraliza verticalmente */
    height: 100vh;
}
```

```html
<div class="container-flex">
    <div class="box">Estou no centro!</div>
</div>
```

#### Método 2: Grid

```css
.container-grid {
    display: grid;
    place-items: center; /* Centraliza ambos os eixos */
    height: 100vh;
}
```

```html
<div class="container-grid">
    <div class="box">Estou no centro!</div>
</div>
```

**Qual usar?**
- Flexbox: Quando tem mais elementos e controle fino
- Grid: Quando quer apenas centralizar (mais simples)

---

### 🔄 Exemplo 6: Alternando Entre Grid e Flexbox

**Objetivo:** Usar Grid para layout geral e Flexbox para componentes.

```html
<div class="dashboard">
    <header class="dash-header">
        <!-- Flexbox para o header -->
        <div class="header-left">Logo</div>
        <div class="header-right">User</div>
    </header>
    
    <main class="dash-main">
        <!-- Grid para os cards -->
        <div class="stats-grid">
            <div class="stat-card">
                <!-- Flexbox dentro do card -->
                <div class="card-icon">📊</div>
                <div class="card-info">
                    <h3>Vendas</h3>
                    <p>R$ 10.000</p>
                </div>
            </div>
            <!-- Mais cards... -->
        </div>
    </main>
</div>
```

```css
/* Grid para layout principal */
.dashboard {
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
}

/* Flexbox para header */
.dash-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #2c3e50;
    color: white;
}

/* Grid para os cards */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
}

/* Flexbox dentro de cada card */
.stat-card {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-icon {
    font-size: 2.5rem;
}

.card-info h3 {
    margin: 0;
    color: #7f8c8d;
    font-size: 0.9rem;
}

.card-info p {
    margin: 0.25rem 0 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
}
```

**Regra geral:**
- **Grid**: Layout de página, seções principais
- **Flexbox**: Componentes, navbars, cards internos

---

## 🎮 Exercícios Práticos

### 🏆 Nível Iniciante
1. **Barra de Navegação**: Criar uma navbar horizontal com logo à esquerda e links à direita
2. **Card Layout**: Três cards em linha que se ajustam automaticamente
3. **Centralização**: Centralizar um elemento vertical e horizontalmente

### 🏆 Nível Intermediário
1. **Layout Holy Grail**: Header, footer, sidebar e conteúdo principal
2. **Grid de Produtos**: Layout responsivo de produtos (2, 3, 4 colunas)
3. **Dashboard**: Layout de dashboard com diferentes seções

### 🏆 Nível Avançado
1. **Layout Revista**: Layout complexo tipo revista/jornal
2. **Componente Card Avançado**: Card com múltiplas seções e responsividade
3. **Layout Masonry**: Estilo Pinterest com alturas diferentes

---

## 📱 Design Responsivo

### Mobile-First com Flexbox

```css
/* Mobile primeiro */
.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        flex-wrap: nowrap;
    }
}
```

### Mobile-First com Grid

```css
/* Mobile primeiro */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}
```

---

## 🔧 Ferramentas e Recursos

### 🎯 Ferramentas Online
- **Flexbox Froggy**: Jogo para aprender Flexbox
- **Grid Garden**: Jogo para aprender CSS Grid
- **Flexbox Defense**: Tower defense com Flexbox
- **CSS Grid Generator**: Gerador visual de grid

### 📚 Recursos de Estudo
- **MDN Web Docs**: Documentação completa
- **CSS-Tricks**: Guias detalhados
- **Flexbox Cheatsheet**: Referência rápida
- **Grid Cheatsheet**: Referência rápida

### 🔍 DevTools
- **Firefox Grid Inspector**: Visualizador de grid
- **Chrome Flexbox Inspector**: Inspetor de flexbox
- **Layout debugging**: Ferramentas de depuração

---

## ✅ Checklist de Aprendizado

### Flexbox
- [ ] Entender a diferença entre container e itens
- [ ] Dominar `justify-content` e `align-items`
- [ ] Saber usar `flex-grow`, `flex-shrink`, `flex-basis`
- [ ] Criar layouts responsivos com flexbox
- [ ] Resolver problemas comuns de alinhamento

### CSS Grid
- [ ] Definir colunas e linhas
- [ ] Usar `grid-template-areas` para layouts nomeados
- [ ] Posicionar itens com `grid-column` e `grid-row`
- [ ] Criar layouts responsivos com `auto-fit` e `minmax`
- [ ] Combinar grid com flexbox quando necessário

### Geral
- [ ] Escolher entre flexbox e grid para cada situação
- [ ] Implementar design mobile-first
- [ ] Debuggar layouts com DevTools
- [ ] Criar componentes reutilizáveis
- [ ] Otimizar performance dos layouts

---

## 🎯 Próximos Passos

Após dominar este módulo, você estará pronto para:

1. **06-css-avancado**: Animações, transformações e efeitos avançados
2. **07-javascript-basico**: Adicionar interatividade aos layouts
3. **09-frameworks-bootstrap**: Usar frameworks baseados nestes conceitos

---

## 💡 Dicas Importantes

### ✅ Boas Práticas
- Use **flexbox para componentes** (navbar, cards, botões)
- Use **grid para layouts de página** (estrutura geral)
- Sempre pense **mobile-first**
- Use **semantic HTML** com CSS moderno
- **Teste em múltiplos dispositivos**

### ❌ Evite
- Usar flexbox para layouts bidimensionais complexos
- Usar grid para alinhamento simples de componentes
- Misturar float com flexbox/grid desnecessariamente
- Esquecer de testar responsividade
- Usar valores fixos sem considerar diferentes telas

---

🚀 **Lembre-se**: Flexbox e Grid são as bases do CSS moderno. Dominar essas técnicas vai transformar sua capacidade de criar layouts profissionais e responsivos!