# 🎓 Revisão Completa: Desenvolvimento Web com HTML, CSS e JavaScript

## 📋 Índice

1. [Introdução](#introdução)
2. [Objetivos da Sessão](#objetivos-da-sessão)
3. [Conteúdo Revisado](#conteúdo-revisado)
4. [Fluxo da Sessão de 2 Horas](#fluxo-da-sessão-de-2-horas)
5. [Exemplo Prático Completo](#exemplo-prático-completo)
6. [Conceitos Detalhados por Tópico](#conceitos-detalhados-por-tópico)
7. [Exercícios Práticos](#exercícios-práticos)
8. [Recursos Adicionais](#recursos-adicionais)

---

## 📖 Introdução

Bem-vindo à sessão de **revisão completa** do curso de Desenvolvimento Web! Esta sessão foi cuidadosamente planejada para consolidar todo o conhecimento adquirido ao longo dos 11 módulos do curso, através de uma abordagem prática e progressiva.

### O que você vai aprender nesta sessão?

Esta revisão cobre **todos os tópicos** do repositório de desenvolvimento web, incluindo:

- ✅ **HTML Básico** - Estrutura e elementos fundamentais
- ✅ **HTML Semântico** - Tags semânticas e metadados
- ✅ **CSS Fundamentos** - Sintaxe, seletores e organização
- ✅ **CSS Cores e Medidas** - Sistemas de cores e unidades
- ✅ **CSS Layout** - Flexbox e Grid
- ✅ **CSS Avançado** - Animações, transformações e efeitos
- ✅ **JavaScript Básico** - Variáveis, funções e estruturas
- ✅ **JavaScript DOM** - Manipulação de elementos
- ✅ **Bootstrap** - Framework e componentes
- ✅ **HTML5 Avançado** - Formulários e multimídia
- ✅ **HTML com FastAPI** - Integração backend

### Por que esta revisão é importante?

🎯 **Consolidação de Conhecimento**: Revisar é essencial para fixar o aprendizado  
🚀 **Aplicação Prática**: Você verá todos os conceitos funcionando juntos  
💡 **Visão Holística**: Entenda como HTML, CSS e JavaScript se complementam  
📈 **Preparação Profissional**: Aprenda fluxos de trabalho reais  

---

## 🎯 Objetivos da Sessão

Ao final desta sessão de 2 horas, você será capaz de:

1. **Estruturar** uma página web completa com HTML5 semântico
2. **Estilizar** interfaces profissionais com CSS3 moderno
3. **Implementar** interatividade com JavaScript
4. **Integrar** frameworks como Bootstrap de forma eficiente
5. **Criar** layouts responsivos que funcionam em todos os dispositivos
6. **Aplicar** boas práticas de desenvolvimento web
7. **Desenvolver** um projeto completo do zero ao deploy

---

## 📚 Conteúdo Revisado

### Visão Geral dos 11 Módulos

#### 📌 **Módulo 01: HTML Básico**
**O que é**: Fundamentos da linguagem de marcação que estrutura a web  
**Conceitos-chave**: 
- Estrutura básica de um documento HTML
- Tags essenciais: `<html>`, `<head>`, `<body>`
- Elementos de texto: headings, parágrafos, listas
- Links e imagens
- Tabelas básicas

**Por que importa**: HTML é a espinha dorsal de toda página web. Sem uma estrutura HTML sólida, nada mais funciona.

---

#### 📌 **Módulo 02: HTML Estrutura Semântica**
**O que é**: Uso de tags HTML que descrevem o significado do conteúdo  
**Conceitos-chave**:
- Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Metadados: charset, viewport, description
- Open Graph para redes sociais
- SEO (Search Engine Optimization)
- Acessibilidade

**Por que importa**: Semântica melhora SEO, acessibilidade e manutenibilidade do código.

**Exemplo Prático**:
```html
<!-- ❌ Não semântico -->
<div class="header">
  <div class="nav">Menu</div>
</div>

<!-- ✅ Semântico -->
<header>
  <nav>Menu</nav>
</header>
```

---

#### 📌 **Módulo 03: CSS Fundamentos**
**O que é**: Linguagem de estilo que define a aparência visual  
**Conceitos-chave**:
- Sintaxe CSS: seletores, propriedades, valores
- Tipos de CSS: inline, interno, externo
- Seletores: elemento, classe, ID, atributo
- Especificidade e cascata
- Box model: margin, padding, border

**Por que importa**: CSS separa conteúdo de apresentação, tornando o código mais limpo e manutenível.

**Exemplo Prático**:
```css
/* Seletor de classe */
.botao {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}

/* Seletor de ID */
#titulo-principal {
    font-size: 2rem;
    font-weight: bold;
}

/* Seletor de elemento */
p {
    line-height: 1.6;
    margin-bottom: 1rem;
}
```

---

#### 📌 **Módulo 04: CSS Cores e Medidas**
**O que é**: Sistemas para definir cores e dimensões em CSS  
**Conceitos-chave**:
- **Cores**: 
  - Nomeadas (`red`, `blue`)
  - Hexadecimal (`#FF0000`)
  - RGB/RGBA (`rgb(255, 0, 0)`)
  - HSL/HSLA (`hsl(0, 100%, 50%)`)
  - Gradientes lineares e radiais
- **Medidas**:
  - Absolutas: `px`, `pt`, `cm`
  - Relativas: `%`, `em`, `rem`, `vh`, `vw`

**Por que importa**: Escolher unidades corretas garante responsividade e consistência visual.

**Exemplo Prático**:
```css
/* Cores diferentes */
.box-1 { background-color: #007bff; }           /* Hex */
.box-2 { background-color: rgb(0, 123, 255); }  /* RGB */
.box-3 { background-color: rgba(0, 123, 255, 0.5); } /* RGBA com transparência */
.box-4 { background-color: hsl(211, 100%, 50%); }    /* HSL */

/* Gradientes */
.gradiente-linear {
    background: linear-gradient(90deg, #667eea, #764ba2);
}

.gradiente-radial {
    background: radial-gradient(circle, #667eea, #764ba2);
}

/* Medidas relativas para responsividade */
.container {
    width: 90%;           /* Porcentagem do pai */
    max-width: 1200px;    /* Limite máximo em pixels */
    padding: 2rem;        /* rem é relativo ao root */
    margin: 0 auto;
}

.hero {
    height: 100vh;        /* 100% da altura da viewport */
}
```

---

#### 📌 **Módulo 05: CSS Layout**
**O que é**: Técnicas modernas para criar layouts de página  
**Conceitos-chave**:
- **Flexbox**:
  - Layouts unidimensionais (linha ou coluna)
  - Propriedades: `justify-content`, `align-items`, `flex-direction`, `gap`
  - Alinhamento e distribuição de espaço
- **CSS Grid**:
  - Layouts bidimensionais (linhas E colunas)
  - Grid template areas
  - Auto-fit e auto-fill
  - Grid responsivo

**Por que importa**: Flexbox e Grid são essenciais para layouts modernos e responsivos.

**Exemplo Prático - Flexbox**:
```css
/* Layout de navegação horizontal */
.navbar {
    display: flex;
    justify-content: space-between;  /* Espaço entre itens */
    align-items: center;              /* Alinhamento vertical */
    padding: 1rem;
    gap: 1rem;                        /* Espaço entre elementos */
}

/* Cards em linha */
.cards-container {
    display: flex;
    flex-wrap: wrap;                  /* Quebra em múltiplas linhas */
    gap: 2rem;
}

.card {
    flex: 1 1 300px;                  /* Cresce, encolhe, base 300px */
}
```

**Exemplo Prático - Grid**:
```css
/* Layout de página completo */
.layout-grid {
    display: grid;
    grid-template-columns: 250px 1fr;  /* Sidebar + conteúdo */
    grid-template-rows: auto 1fr auto;  /* Header, main, footer */
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Grid responsivo de cards */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

---

#### 📌 **Módulo 06: CSS Avançado**
**O que é**: Técnicas avançadas de estilização e efeitos visuais  
**Conceitos-chave**:
- **Transformações**: `translate`, `rotate`, `scale`, `skew`
- **Transições**: Animações suaves entre estados
- **Animações**: `@keyframes` para animações complexas
- **Filtros**: `blur`, `brightness`, `contrast`, `grayscale`
- **Pseudo-classes**: `:hover`, `:focus`, `:active`, `:nth-child`
- **Pseudo-elementos**: `::before`, `::after`

**Por que importa**: Efeitos visuais melhoram a experiência do usuário e tornam o site mais atraente.

**Exemplo Prático**:
```css
/* Transformações e transições */
.botao {
    background-color: #007bff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;  /* Transição suave */
}

.botao:hover {
    transform: translateY(-5px) scale(1.05);  /* Move para cima e aumenta */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Animação com keyframes */
@keyframes pulsar {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.notificacao {
    animation: pulsar 2s infinite;
}

/* Filtros */
.imagem-hover {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.imagem-hover:hover {
    filter: grayscale(0%) brightness(1.1);
}

/* Pseudo-elementos */
.titulo::before {
    content: "📌 ";
}

.link::after {
    content: " →";
    transition: transform 0.3s ease;
    display: inline-block;
}

.link:hover::after {
    transform: translateX(5px);
}
```

---

#### 📌 **Módulo 07: JavaScript Básico**
**O que é**: Linguagem de programação que adiciona interatividade  
**Conceitos-chave**:
- **Variáveis**: `let`, `const`, `var`
- **Tipos de dados**: string, number, boolean, object, array
- **Operadores**: aritméticos, lógicos, comparação
- **Estruturas de controle**: `if/else`, `switch`, `for`, `while`
- **Funções**: declaração, parâmetros, retorno
- **Arrays e métodos**: `push`, `pop`, `map`, `filter`, `forEach`
- **Objetos**: propriedades e métodos

**Por que importa**: JavaScript é a única linguagem que roda no navegador, permitindo interatividade.

**Exemplo Prático**:
```javascript
// Variáveis e constantes
const nome = "João";           // Não pode ser reatribuído
let idade = 25;                // Pode ser reatribuído
var cidade = "São Paulo";      // Escopo antigo (evitar)

// Tipos de dados
let texto = "Hello World";     // String
let numero = 42;               // Number
let ativo = true;              // Boolean
let vazio = null;              // Null
let indefinido;                // Undefined

// Arrays
const frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");            // Adiciona ao final
console.log(frutas.length);    // 4

// Métodos de array
const numeros = [1, 2, 3, 4, 5];

// map - transforma cada elemento
const dobrados = numeros.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter - filtra elementos
const pares = numeros.filter(num => num % 2 === 0);
// [2, 4]

// forEach - itera sobre elementos
numeros.forEach(num => {
    console.log(num);
});

// Objetos
const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "Rio de Janeiro",
    
    // Método do objeto
    apresentar: function() {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
    }
};

console.log(pessoa.apresentar());

// Estruturas de controle
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Loop for
for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`);
}

// Funções
function somar(a, b) {
    return a + b;
}

// Arrow function (ES6+)
const multiplicar = (a, b) => a * b;

console.log(somar(5, 3));        // 8
console.log(multiplicar(4, 2));  // 8
```

---

#### 📌 **Módulo 08: JavaScript DOM**
**O que é**: Manipulação da estrutura HTML com JavaScript  
**Conceitos-chave**:
- **Seleção de elementos**: `getElementById`, `querySelector`, `querySelectorAll`
- **Manipulação de conteúdo**: `innerHTML`, `textContent`, `innerText`
- **Manipulação de atributos**: `getAttribute`, `setAttribute`, `classList`
- **Criação de elementos**: `createElement`, `appendChild`
- **Event listeners**: `addEventListener`, eventos de mouse, teclado, formulário
- **Event object**: `preventDefault`, `target`, `currentTarget`

**Por que importa**: DOM é a ponte entre JavaScript e HTML, permitindo páginas dinâmicas.

**Exemplo Prático**:
```javascript
// SELEÇÃO DE ELEMENTOS

// Por ID
const titulo = document.getElementById('titulo');

// Por classe (retorna NodeList)
const botoes = document.querySelectorAll('.botao');

// Por seletor CSS
const primeiroParagrafo = document.querySelector('p');
const todosLinks = document.querySelectorAll('a[href^="https"]');

// MANIPULAÇÃO DE CONTEÚDO

// Alterar texto
titulo.textContent = "Novo Título";

// Alterar HTML
const container = document.getElementById('container');
container.innerHTML = '<p>Novo <strong>conteúdo</strong></p>';

// MANIPULAÇÃO DE CLASSES

// Adicionar classe
botao.classList.add('ativo');

// Remover classe
botao.classList.remove('desabilitado');

// Alternar classe
botao.classList.toggle('selecionado');

// Verificar se tem classe
if (botao.classList.contains('ativo')) {
    console.log('Botão está ativo');
}

// MANIPULAÇÃO DE ESTILOS

// Estilo inline
titulo.style.color = 'blue';
titulo.style.fontSize = '2rem';
titulo.style.backgroundColor = '#f0f0f0';

// CRIAÇÃO DE ELEMENTOS

// Criar novo elemento
const novoDiv = document.createElement('div');
novoDiv.className = 'card';
novoDiv.innerHTML = `
    <h3>Título do Card</h3>
    <p>Conteúdo do card</p>
`;

// Adicionar ao DOM
document.body.appendChild(novoDiv);

// Inserir antes de outro elemento
const referencia = document.getElementById('referencia');
container.insertBefore(novoDiv, referencia);

// EVENT LISTENERS

// Evento de clique
const botao = document.getElementById('meuBotao');
botao.addEventListener('click', function(evento) {
    console.log('Botão clicado!');
    console.log('Elemento:', evento.target);
});

// Evento de input (formulário)
const campo = document.getElementById('campo');
campo.addEventListener('input', function(e) {
    console.log('Valor digitado:', e.target.value);
});

// Evento de submit (formulário)
const form = document.getElementById('meuForm');
form.addEventListener('submit', function(evento) {
    evento.preventDefault();  // Previne recarregar página
    
    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value
    };
    
    console.log('Dados do formulário:', dados);
});

// EXEMPLO COMPLETO: Contador
let contador = 0;
const display = document.getElementById('display');
const btnIncremento = document.getElementById('incrementar');
const btnDecremento = document.getElementById('decrementar');
const btnReset = document.getElementById('reset');

function atualizarDisplay() {
    display.textContent = contador;
    
    // Muda cor baseado no valor
    if (contador > 0) {
        display.style.color = 'green';
    } else if (contador < 0) {
        display.style.color = 'red';
    } else {
        display.style.color = 'black';
    }
}

btnIncremento.addEventListener('click', () => {
    contador++;
    atualizarDisplay();
});

btnDecremento.addEventListener('click', () => {
    contador--;
    atualizarDisplay();
});

btnReset.addEventListener('click', () => {
    contador = 0;
    atualizarDisplay();
});
```

---

#### 📌 **Módulo 09: Bootstrap Framework**
**O que é**: Framework CSS que acelera o desenvolvimento  
**Conceitos-chave**:
- **Grid System**: Sistema de 12 colunas responsivo
- **Componentes**: Botões, cards, modals, navbar, forms
- **Classes utilitárias**: Margin, padding, cores, display
- **Responsividade**: Breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`)
- **JavaScript components**: Modais, tooltips, carrosséis

**Por que importa**: Bootstrap permite criar interfaces profissionais rapidamente.

**Exemplo Prático**:
```html
<!-- Grid System -->
<div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-4">
            <!-- 6 colunas em tablet, 4 em desktop -->
        </div>
        <div class="col-md-6 col-lg-8">
            <!-- 6 colunas em tablet, 8 em desktop -->
        </div>
    </div>
</div>

<!-- Componentes -->

<!-- Botões -->
<button class="btn btn-primary">Primário</button>
<button class="btn btn-success">Sucesso</button>
<button class="btn btn-danger">Perigo</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-lg btn-primary">Grande</button>

<!-- Card -->
<div class="card">
    <img src="imagem.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Título do Card</h5>
        <p class="card-text">Descrição do card</p>
        <a href="#" class="btn btn-primary">Ver mais</a>
    </div>
</div>

<!-- Navbar Responsiva -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sobre</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Classes Utilitárias -->
<div class="mt-5 mb-3 p-4 text-center bg-light rounded shadow">
    <!-- mt-5: margin-top -->
    <!-- mb-3: margin-bottom -->
    <!-- p-4: padding -->
    <!-- text-center: centralizar texto -->
    <!-- bg-light: background claro -->
    <!-- rounded: bordas arredondadas -->
    <!-- shadow: sombra -->
</div>

<!-- Formulário Bootstrap -->
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" required>
        <div class="invalid-feedback">
            Email inválido
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

---

#### 📌 **Módulo 10: HTML5 Avançado**
**O que é**: Recursos modernos do HTML5  
**Conceitos-chave**:
- **Formulários avançados**: 
  - Tipos de input: `email`, `date`, `number`, `range`, `color`
  - Validação nativa: `required`, `pattern`, `minlength`, `maxlength`
  - Atributos: `placeholder`, `autocomplete`, `autofocus`
- **Multimídia**:
  - `<video>` e `<audio>` nativos
  - Controles customizados
- **APIs HTML5**:
  - LocalStorage e SessionStorage
  - Geolocation
  - Canvas

**Por que importa**: HTML5 oferece recursos poderosos sem dependência de plugins.

**Exemplo Prático**:
```html
<!-- Formulário com validação HTML5 -->
<form class="needs-validation" novalidate>
    <!-- Email com validação -->
    <div class="mb-3">
        <label for="email" class="form-label">Email *</label>
        <input type="email" class="form-control" id="email" required>
        <div class="invalid-feedback">
            Por favor, insira um email válido.
        </div>
    </div>
    
    <!-- Número com min/max -->
    <div class="mb-3">
        <label for="idade" class="form-label">Idade *</label>
        <input type="number" class="form-control" id="idade" 
               min="18" max="100" required>
        <div class="invalid-feedback">
            Idade deve estar entre 18 e 100 anos.
        </div>
    </div>
    
    <!-- URL -->
    <div class="mb-3">
        <label for="site" class="form-label">Website</label>
        <input type="url" class="form-control" id="site" 
               placeholder="https://exemplo.com">
    </div>
    
    <!-- Telefone com pattern -->
    <div class="mb-3">
        <label for="telefone" class="form-label">Telefone</label>
        <input type="tel" class="form-control" id="telefone" 
               pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
               placeholder="11 99999-9999">
        <small class="text-muted">Formato: XX XXXXX-XXXX</small>
    </div>
    
    <!-- Data -->
    <div class="mb-3">
        <label for="data" class="form-label">Data de Nascimento</label>
        <input type="date" class="form-control" id="data">
    </div>
    
    <!-- Range -->
    <div class="mb-3">
        <label for="range" class="form-label">Satisfação: <span id="valor">50</span>%</label>
        <input type="range" class="form-range" id="range" 
               min="0" max="100" value="50" 
               oninput="document.getElementById('valor').textContent = this.value">
    </div>
    
    <!-- Color picker -->
    <div class="mb-3">
        <label for="cor" class="form-label">Cor favorita</label>
        <input type="color" class="form-control" id="cor" value="#007bff">
    </div>
    
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>

<!-- Vídeo HTML5 -->
<video controls width="100%">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Seu navegador não suporta vídeo HTML5.
</video>

<!-- Áudio HTML5 -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Seu navegador não suporta áudio HTML5.
</audio>
```

**JavaScript para validação**:
```javascript
// Validação de formulário Bootstrap
const forms = document.querySelectorAll('.needs-validation');

forms.forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    }, false);
});

// LocalStorage
localStorage.setItem('usuario', 'João');
const usuario = localStorage.getItem('usuario');
localStorage.removeItem('usuario');

// SessionStorage
sessionStorage.setItem('token', 'abc123');

// Geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    });
}
```

---

#### 📌 **Módulo 11: HTML com FastAPI**
**O que é**: Integração de frontend HTML com backend Python  
**Conceitos-chave**:
- **API REST**: Endpoints HTTP (GET, POST, PUT, DELETE)
- **Fetch API**: Requisições assíncronas em JavaScript
- **JSON**: Formato de troca de dados
- **CORS**: Cross-Origin Resource Sharing
- **Formulários**: Envio de dados para o backend

**Por que importa**: Conectar frontend com backend é essencial para aplicações completas.

**Exemplo Prático**:
```javascript
// GET - Buscar dados
async function buscarUsuarios() {
    try {
        const resposta = await fetch('http://localhost:8000/api/usuarios');
        
        if (!resposta.ok) {
            throw new Error('Erro ao buscar usuários');
        }
        
        const usuarios = await resposta.json();
        console.log('Usuários:', usuarios);
        
        // Exibir na página
        exibirUsuarios(usuarios);
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Erro ao buscar usuários');
    }
}

// POST - Criar novo usuário
async function criarUsuario(dados) {
    try {
        const resposta = await fetch('http://localhost:8000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        
        if (!resposta.ok) {
            throw new Error('Erro ao criar usuário');
        }
        
        const novoUsuario = await resposta.json();
        console.log('Usuário criado:', novoUsuario);
        
        return novoUsuario;
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}

// Exemplo de uso com formulário
document.getElementById('formUsuario').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    };
    
    try {
        await criarUsuario(dados);
        alert('Usuário criado com sucesso!');
        e.target.reset();
    } catch (erro) {
        alert('Erro ao criar usuário');
    }
});

// PUT - Atualizar usuário
async function atualizarUsuario(id, dados) {
    const resposta = await fetch(`http://localhost:8000/api/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });
    
    return await resposta.json();
}

// DELETE - Deletar usuário
async function deletarUsuario(id) {
    const resposta = await fetch(`http://localhost:8000/api/usuarios/${id}`, {
        method: 'DELETE'
    });
    
    return await resposta.json();
}
```

---

## ⏰ Fluxo da Sessão de 2 Horas

Esta sessão foi cuidadosamente planejada para maximizar o aprendizado em 2 horas:

### ⏱️ **Parte 1: Revisão Teórica (30 minutos)**

#### 🕐 **0:00 - 0:10 | Abertura e Contextualização**
- Apresentação dos objetivos da sessão
- Visão geral dos 11 módulos
- Importância de cada tecnologia (HTML, CSS, JavaScript)
- Como elas trabalham juntas

#### 🕐 **0:10 - 0:20 | Fundamentos HTML e CSS**
- **HTML**: Estrutura semântica, metadados, acessibilidade
- **CSS**: Seletores, box model, cores e medidas
- **Demonstração rápida**: Estrutura de uma página completa

#### 🕐 **0:20 - 0:30 | Layouts e Interatividade**
- **CSS Layout**: Flexbox vs Grid - quando usar cada um
- **JavaScript**: Variáveis, funções, DOM
- **Bootstrap**: Componentes e grid system
- **Demonstração rápida**: Layout responsivo

---

### ⏱️ **Parte 2: Exemplo Prático Guiado (60 minutos)**

#### 🕐 **0:30 - 0:45 | Estrutura HTML (15 min)**

**O que faremos**: Criar a estrutura completa do portfólio

**Passos**:
1. Estrutura básica HTML5 com metadados
2. Navegação semântica com Bootstrap
3. Seções: Hero, Sobre, Habilidades, Projetos, Contato
4. Footer com redes sociais

**Conceitos aplicados**:
- ✅ Módulo 01: Tags básicas
- ✅ Módulo 02: HTML semântico
- ✅ Módulo 09: Classes Bootstrap
- ✅ Módulo 10: Formulários HTML5

**Resultado esperado**: Estrutura HTML completa e semântica

---

#### 🕐 **0:45 - 1:15 | Estilização CSS (30 min)**

**O que faremos**: Estilizar completamente a página

**Passos**:
1. **Variáveis CSS** (5 min)
   - Cores, espaçamentos, fontes
   
2. **Seção Hero** (8 min)
   - Gradiente de fundo
   - Flexbox para centralização
   - Animações de entrada
   - Formas decorativas
   
3. **Cards e Layout** (10 min)
   - Grid de habilidades
   - Cards de projetos
   - Barras de progresso
   - Efeitos hover
   
4. **Responsividade** (7 min)
   - Media queries
   - Ajustes para tablet e mobile
   - Menu responsivo

**Conceitos aplicados**:
- ✅ Módulo 03: Fundamentos CSS
- ✅ Módulo 04: Cores e medidas
- ✅ Módulo 05: Flexbox e Grid
- ✅ Módulo 06: Animações e transformações

**Resultado esperado**: Página visualmente atraente e responsiva

---

#### 🕐 **1:15 - 1:30 | JavaScript e Interatividade (15 min)**

**O que faremos**: Adicionar toda a interatividade

**Passos**:
1. **Barras de progresso animadas** (4 min)
   - Seleção de elementos
   - Animação com CSS via JavaScript
   
2. **Formulário com validação** (5 min)
   - Event listeners
   - Validação em tempo real
   - Contador de caracteres
   
3. **Navegação suave** (3 min)
   - Scroll suave entre seções
   - Botão "voltar ao topo"
   
4. **Interações extras** (3 min)
   - Notificações personalizadas
   - Animações ao scroll

**Conceitos aplicados**:
- ✅ Módulo 07: JavaScript básico
- ✅ Módulo 08: Manipulação DOM
- ✅ Módulo 10: Validação HTML5

**Resultado esperado**: Página totalmente interativa e funcional

---

### ⏱️ **Parte 3: Revisão e Exercícios (30 minutos)**

#### 🕐 **1:30 - 1:45 | Análise do Código (15 min)**

**O que faremos**: Revisar o código criado em detalhes

**Tópicos**:
1. **Estrutura do projeto**
   - Organização de arquivos
   - Separação de responsabilidades
   
2. **Boas práticas aplicadas**
   - HTML semântico
   - CSS modular
   - JavaScript limpo
   
3. **Como cada módulo foi aplicado**
   - Identificar onde cada conceito aparece
   - Entender a integração entre tecnologias
   
4. **Melhorias possíveis**
   - Otimizações de performance
   - Acessibilidade
   - SEO

---

#### 🕐 **1:45 - 2:00 | Desafios Práticos (15 min)**

**Exercícios rápidos para consolidar**:

1. **Exercício 1** (5 min): Adicionar uma nova seção "Depoimentos"
   - Usar Grid para layout
   - Adicionar cards com citações
   - Implementar animação ao scroll

2. **Exercício 2** (5 min): Criar um menu mobile melhorado
   - Adicionar ícone hambúrguer animado
   - Fechar ao clicar fora
   - Adicionar transições suaves

3. **Exercício 3** (5 min): Implementar modo escuro
   - Botão para alternar tema
   - Salvar preferência no LocalStorage
   - Aplicar cores diferentes

---

## 💻 Exemplo Prático Completo

### 📁 Estrutura do Projeto

```
revisao/
├── exemplo/
│   ├── index.html        # Estrutura HTML completa
│   ├── styles.css        # Estilos CSS
│   └── script.js         # JavaScript
└── README.md             # Este arquivo
```

### 🚀 Como Usar o Exemplo

1. **Abrir o projeto**:
   ```bash
   cd src/html/revisao/exemplo
   ```

2. **Abrir no navegador**:
   - Abra o arquivo `index.html` diretamente no navegador
   - Ou use um servidor local:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (com http-server instalado)
     npx http-server
     ```

3. **Explorar o código**:
   - Abra os arquivos no seu editor favorito (VS Code recomendado)
   - Leia os comentários explicativos
   - Experimente modificar os valores

### 🔍 Pontos-Chave do Exemplo

O exemplo **`index.html`** demonstra:

1. ✅ **Estrutura HTML5 semântica completa**
   - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
   - Metadados otimizados para SEO e redes sociais
   
2. ✅ **Navegação responsiva com Bootstrap**
   - Navbar que colapsa em mobile
   - Links de navegação suave
   
3. ✅ **Seção Hero impactante**
   - Gradiente CSS
   - Flexbox para centralização
   - Animações de entrada
   
4. ✅ **Grid de habilidades**
   - CSS Grid responsivo
   - Barras de progresso animadas
   - Efeitos hover
   
5. ✅ **Cards de projetos**
   - Bootstrap cards
   - Gradientes personalizados
   - Interatividade
   
6. ✅ **Formulário completo**
   - Validação HTML5
   - Feedback visual
   - Contador de caracteres

O exemplo **`styles.css`** demonstra:

1. ✅ **Variáveis CSS**
2. ✅ **Gradientes lineares e radiais**
3. ✅ **Flexbox e Grid layouts**
4. ✅ **Animações com @keyframes**
5. ✅ **Transformações e transições**
6. ✅ **Media queries para responsividade**

O exemplo **`script.js`** demonstra:

1. ✅ **Manipulação do DOM**
2. ✅ **Event listeners**
3. ✅ **Validação de formulários**
4. ✅ **Animações JavaScript**
5. ✅ **LocalStorage**
6. ✅ **APIs do navegador**

---

## 🎯 Exercícios Práticos

### 📝 Exercício 1: Adicionar Seção de Depoimentos

**Objetivo**: Criar uma nova seção com depoimentos de clientes

**Requisitos**:
- Use Grid com 3 colunas no desktop, 1 no mobile
- Cada depoimento deve ter: foto, nome, cargo, texto
- Adicione animação ao aparecer na tela
- Use ícones de estrelas para avaliação

**Dica**: Use `Intersection Observer` para detectar quando a seção aparece

---

### 📝 Exercício 2: Implementar Modo Escuro

**Objetivo**: Adicionar alternância entre tema claro e escuro

**Requisitos**:
- Botão toggle no header
- Alterar todas as cores
- Salvar preferência no LocalStorage
- Transição suave entre temas
- Ícone de sol/lua

**Dica**: Use variáveis CSS e uma classe no `<body>`

---

### 📝 Exercício 3: Galeria de Imagens

**Objetivo**: Criar uma galeria lightbox

**Requisitos**:
- Grid de imagens responsivo
- Modal ao clicar na imagem
- Navegação entre imagens (anterior/próxima)
- Fechar com ESC ou clique fora
- Animações de abertura/fechamento

**Dica**: Use Bootstrap Modal ou crie seu próprio

---

### 📝 Exercício 4: Filtro de Projetos

**Objetivo**: Adicionar filtros por tecnologia

**Requisitos**:
- Botões de filtro (Todos, HTML, CSS, JavaScript)
- Animação ao filtrar
- Contador de projetos visíveis
- Use `data attributes` para categorias

**Dica**: Use `filter()` do JavaScript para filtrar elementos

---

## 📚 Recursos Adicionais

### 📖 Documentação Oficial

- **MDN Web Docs**: https://developer.mozilla.org/
- **W3Schools**: https://www.w3schools.com/
- **Bootstrap Docs**: https://getbootstrap.com/docs/
- **CSS Tricks**: https://css-tricks.com/

### 🎨 Ferramentas Úteis

- **Can I Use**: Compatibilidade de navegadores
- **ColorHunt**: Paletas de cores
- **Google Fonts**: Fontes gratuitas
- **Font Awesome**: Ícones
- **Unsplash**: Imagens gratuitas

### 💡 Próximos Passos

1. **Aprofundar JavaScript**
   - ES6+ features
   - Async/Await
   - Promises
   
2. **Frameworks Modernos**
   - React
   - Vue.js
   - Angular
   
3. **Backend**
   - FastAPI (Python)
   - Node.js/Express
   - Databases
   
4. **Deploy**
   - GitHub Pages
   - Netlify
   - Vercel

---

## ✅ Checklist de Conclusão

Ao final desta sessão, você deve ser capaz de:

- [ ] Estruturar uma página HTML5 semântica completa
- [ ] Criar layouts responsivos com Flexbox e Grid
- [ ] Aplicar cores, gradientes e medidas adequadas
- [ ] Implementar animações e transições CSS
- [ ] Manipular o DOM com JavaScript
- [ ] Validar formulários HTML5
- [ ] Usar componentes Bootstrap eficientemente
- [ ] Integrar HTML/CSS/JavaScript em um projeto completo
- [ ] Aplicar boas práticas de desenvolvimento web
- [ ] Entender o fluxo completo de desenvolvimento frontend

---

## 🎉 Conclusão

Parabéns por completar esta revisão! Você agora tem uma visão holística de como HTML, CSS e JavaScript trabalham juntos para criar aplicações web modernas.

### 🚀 Continue Praticando

A melhor forma de consolidar o conhecimento é **praticar**. Sugestões:

1. **Recrie sites existentes** - Escolha um site e tente replicá-lo
2. **Modifique o exemplo** - Adicione suas próprias funcionalidades
3. **Crie projetos pessoais** - Portfolio, blog, landing page
4. **Contribua para projetos open source** - GitHub é seu amigo

### 💪 Você está Pronto!

Com o conhecimento adquirido, você está preparado para:

- ✅ Desenvolver sites profissionais
- ✅ Trabalhar em equipes de desenvolvimento
- ✅ Aprender frameworks modernos
- ✅ Construir seu portfólio
- ✅ Participar de projetos reais

---

**Bons estudos e boa sorte em sua jornada como desenvolvedor web! 🚀**
