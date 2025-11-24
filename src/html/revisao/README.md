# 🎓 Revisão Completa: Desenvolvimento Web com HTML, CSS e JavaScript

## 📋 Índice

1. [Introdução](#introdução)
2. [Objetivos da Sessão](#objetivos-da-sessão)
3. [Conteúdo Revisado](#conteúdo-revisado)
4. [Exemplos Completos do Repositório](#exemplos-completos-do-repositório)
5. [Fluxo da Sessão de 2 Horas](#fluxo-da-sessão-de-2-horas)
6. [Exemplo Prático Completo](#exemplo-prático-completo)
7. [Conceitos Detalhados por Tópico](#conceitos-detalhados-por-tópico)
8. [Exercícios Práticos](#exercícios-práticos)
9. [Recursos Adicionais](#recursos-adicionais)

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

## 📂 Exemplos Completos do Repositório

Esta seção contém links para exemplos práticos e completos de cada módulo do curso, disponíveis diretamente no repositório. Estes exemplos são arquivos HTML, CSS e JavaScript que você pode abrir e estudar.

---

### 🔗 **Módulo 01: HTML Básico**

**Localização**: [`src/html/01-html-basico/`](../01-html-basico/)

| Arquivo | Descrição |
|---------|-----------|
| [index.html](../01-html-basico/index.html) | Página inicial com estrutura básica HTML |
| [pagina1.html](../01-html-basico/pagina1.html) | Exemplo de headings e parágrafos |
| [pagina2.html](../01-html-basico/pagina2.html) | Exemplo de listas ordenadas e não ordenadas |
| [pagina3.html](../01-html-basico/pagina3.html) | Exemplo de links e âncoras |

**Exemplo Simples - Estrutura HTML Básica:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é meu primeiro parágrafo em HTML.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <a href="https://github.com">Visite o GitHub</a>
</body>
</html>
```

---

### 🔗 **Módulo 02: HTML Estrutura Semântica**

**Localização**: [`src/html/02-html-estrutura-semantica/src/`](../02-html-estrutura-semantica/src/)

| Arquivo | Descrição |
|---------|-----------|
| [exemplo.html](../02-html-estrutura-semantica/src/exemplo.html) | Estrutura semântica completa |
| [exemplo_tag_seo.html](../02-html-estrutura-semantica/src/exemplo_tag_seo.html) | Tags para SEO |
| [exemplo_tag_open_graph.html](../02-html-estrutura-semantica/src/exemplo_tag_open_graph.html) | Meta tags Open Graph |
| [exemplo_tag_responsividade.html](../02-html-estrutura-semantica/src/exemplo_tag_responsividade.html) | Tags de responsividade |

**Exemplo Simples - HTML Semântico:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição da página para SEO">
    <meta property="og:title" content="Título para Redes Sociais">
    <title>Página Semântica</title>
</head>
<body>
    <header>
        <nav>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Bem-vindo ao Site</h1>
            <article>
                <h2>Artigo Principal</h2>
                <p>Conteúdo do artigo...</p>
            </article>
        </section>
        
        <aside>
            <h3>Informações Extras</h3>
            <p>Conteúdo lateral...</p>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Meu Site</p>
    </footer>
</body>
</html>
```

---

### 🔗 **Módulo 03: CSS Fundamentos**

**Localização**: [`src/html/03-css-fundamentos/src/`](../03-css-fundamentos/src/)

| Arquivo | Descrição |
|---------|-----------|
| [exemplo.html](../03-css-fundamentos/src/exemplo.html) | Exemplo básico de CSS |
| [exemploClasses.html](../03-css-fundamentos/src/exemploClasses.html) | Uso de classes CSS |
| [exemploHierarquiaPrecedencia.html](../03-css-fundamentos/src/exemploHierarquiaPrecedencia.html) | Hierarquia e especificidade |
| [exemploBootstrap.html](../03-css-fundamentos/src/exemploBootstrap.html) | CSS com Bootstrap |

**Exemplo Simples - CSS Fundamentos:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>CSS Fundamentos</title>
    <style>
        /* Reset básico */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        /* Estilos do body */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
        }
        
        /* Seletor de classe */
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Seletor de ID */
        #titulo {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
        }
        
        /* Seletor de elemento */
        p {
            color: #666;
            margin-bottom: 10px;
        }
        
        /* Hover */
        .botao {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .botao:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="titulo">CSS Fundamentos</h1>
        <p>Este é um exemplo de estilização com CSS.</p>
        <button class="botao">Clique Aqui</button>
    </div>
</body>
</html>
```

---

### 🔗 **Módulo 04: CSS Cores e Medidas**

**Localização**: [`src/html/04-css-cores-medidas/src/`](../04-css-cores-medidas/src/)

| Pasta | Descrição |
|-------|-----------|
| [cores/](../04-css-cores-medidas/src/cores/) | Exemplos de sistemas de cores |
| [medidas/](../04-css-cores-medidas/src/medidas/) | Exemplos de unidades de medida |

**Exemplo Simples - Cores e Medidas:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cores e Medidas CSS</title>
    <style>
        :root {
            --cor-primaria: #007bff;
            --cor-secundaria: #6c757d;
            --espaco-base: 1rem;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 2rem;
        }
        
        /* Diferentes formas de cores */
        .box-hex { background-color: #ff5733; }
        .box-rgb { background-color: rgb(40, 167, 69); }
        .box-rgba { background-color: rgba(0, 123, 255, 0.7); }
        .box-hsl { background-color: hsl(280, 70%, 50%); }
        
        .box {
            width: 150px;
            height: 100px;
            margin: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 8px;
        }
        
        /* Medidas relativas vs absolutas */
        .texto-px { font-size: 16px; }      /* Absoluto */
        .texto-em { font-size: 1.2em; }     /* Relativo ao pai */
        .texto-rem { font-size: 1.5rem; }   /* Relativo ao root */
        
        /* Gradientes */
        .gradiente-linear {
            background: linear-gradient(90deg, #667eea, #764ba2);
            padding: 20px;
            color: white;
            border-radius: 8px;
        }
        
        .gradiente-radial {
            background: radial-gradient(circle, #f093fb, #f5576c);
            padding: 20px;
            color: white;
            border-radius: 8px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Cores CSS</h1>
    <div class="box box-hex">HEX</div>
    <div class="box box-rgb">RGB</div>
    <div class="box box-rgba">RGBA</div>
    <div class="box box-hsl">HSL</div>
    
    <h2>Gradientes</h2>
    <div class="gradiente-linear">Gradiente Linear</div>
    <div class="gradiente-radial">Gradiente Radial</div>
    
    <h2>Medidas de Texto</h2>
    <p class="texto-px">Texto em pixels (16px)</p>
    <p class="texto-em">Texto em em (1.2em)</p>
    <p class="texto-rem">Texto em rem (1.5rem)</p>
</body>
</html>
```

---

### 🔗 **Módulo 05: CSS Layout**

**Localização**: [`src/html/05-css-layout/src/`](../05-css-layout/src/)

| Arquivo | Descrição |
|---------|-----------|
| [index.html](../05-css-layout/src/index.html) | Índice de exemplos |
| [flexbox-navbar.html](../05-css-layout/src/flexbox-navbar.html) | Navbar com Flexbox |
| [grid-holy-grail.html](../05-css-layout/src/grid-holy-grail.html) | Layout Holy Grail com Grid |
| [progressivo/](../05-css-layout/src/progressivo/) | Exemplos progressivos de layout |

**Exemplo Simples - Flexbox e Grid:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>CSS Layout - Flexbox e Grid</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; padding: 20px; }
        
        /* FLEXBOX - Navegação Horizontal */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #333;
            padding: 15px 20px;
            border-radius: 8px;
        }
        
        .navbar-brand { color: white; font-weight: bold; }
        
        .navbar-menu {
            display: flex;
            gap: 20px;
            list-style: none;
        }
        
        .navbar-menu a {
            color: white;
            text-decoration: none;
        }
        
        /* FLEXBOX - Cards em Linha */
        .cards-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 30px 0;
        }
        
        .card-flex {
            flex: 1 1 200px;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        /* CSS GRID - Layout de Página */
        .page-grid {
            display: grid;
            grid-template-columns: 200px 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                "header header"
                "sidebar main"
                "footer footer";
            gap: 10px;
            min-height: 400px;
            margin-top: 30px;
        }
        
        .header { grid-area: header; background: #007bff; color: white; padding: 15px; }
        .sidebar { grid-area: sidebar; background: #e9ecef; padding: 15px; }
        .main { grid-area: main; background: #f8f9fa; padding: 15px; }
        .footer { grid-area: footer; background: #333; color: white; padding: 15px; }
        
        /* GRID - Cards Responsivos */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .card-grid {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>CSS Layout</h1>
    
    <h2>Flexbox - Navbar</h2>
    <nav class="navbar">
        <div class="navbar-brand">Logo</div>
        <ul class="navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
    
    <h2>Flexbox - Cards</h2>
    <div class="cards-flex">
        <div class="card-flex">Card 1</div>
        <div class="card-flex">Card 2</div>
        <div class="card-flex">Card 3</div>
    </div>
    
    <h2>CSS Grid - Layout de Página</h2>
    <div class="page-grid">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="main">Conteúdo Principal</div>
        <div class="footer">Footer</div>
    </div>
    
    <h2>CSS Grid - Cards Responsivos</h2>
    <div class="cards-grid">
        <div class="card-grid">Card 1</div>
        <div class="card-grid">Card 2</div>
        <div class="card-grid">Card 3</div>
        <div class="card-grid">Card 4</div>
    </div>
</body>
</html>
```

---

### 🔗 **Módulo 06: CSS Avançado**

**Localização**: [`src/html/06-css-avancado/`](../06-css-avancado/)

| Arquivo | Descrição |
|---------|-----------|
| [estilizando-div.html](../06-css-avancado/estilizando-div.html) | Estilização de divs |
| [exemplo-leiaute.html](../06-css-avancado/exemplo-leiaute.html) | Exemplo de layout avançado |
| [exemplo-nav-json.html](../06-css-avancado/exemplo-nav-json.html) | Navegação dinâmica |
| [css/](../06-css-avancado/css/) | Arquivos CSS avançados |

**Exemplo Simples - Animações e Transformações:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>CSS Avançado - Animações</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background: #f0f0f0;
        }
        
        /* Transições */
        .btn-transicao {
            background: #007bff;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-transicao:hover {
            background: #0056b3;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        /* Transformações */
        .box-transform {
            width: 100px;
            height: 100px;
            background: #28a745;
            margin: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            transition: transform 0.3s ease;
        }
        
        .box-transform:hover { transform: rotate(45deg) scale(1.2); }
        
        /* Keyframes Animation */
        @keyframes pulsar {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes deslizar {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        
        .animacao-pulsar {
            animation: pulsar 2s infinite;
            background: #dc3545;
            color: white;
            padding: 20px;
            border-radius: 50%;
            display: inline-block;
        }
        
        .animacao-deslizar {
            animation: deslizar 1s ease-out;
            background: #6f42c1;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        
        /* Pseudo-elementos */
        .titulo-decorado {
            position: relative;
            display: inline-block;
            margin: 30px 0;
        }
        
        .titulo-decorado::before {
            content: "✨ ";
        }
        
        .titulo-decorado::after {
            content: "";
            display: block;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            margin-top: 5px;
        }
        
        /* Filtros */
        .imagem-filtro {
            width: 200px;
            height: 150px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><rect fill="%23007bff" width="200" height="150"/><text x="50%" y="50%" fill="white" text-anchor="middle" dy=".3em">Imagem</text></svg>');
            filter: grayscale(100%);
            transition: filter 0.3s;
            border-radius: 8px;
        }
        
        .imagem-filtro:hover {
            filter: grayscale(0%) brightness(1.1);
        }
    </style>
</head>
<body>
    <h1>CSS Avançado</h1>
    
    <h2>Transições</h2>
    <button class="btn-transicao">Passe o Mouse</button>
    
    <h2>Transformações</h2>
    <div class="box-transform">Rotate</div>
    
    <h2 class="titulo-decorado">Pseudo-elementos</h2>
    
    <h2>Animações</h2>
    <div class="animacao-pulsar">Pulsando</div>
    <div class="animacao-deslizar">Deslizando da Esquerda</div>
    
    <h2>Filtros</h2>
    <div class="imagem-filtro"></div>
</body>
</html>
```

---

### 🔗 **Módulo 07: JavaScript Básico**

**Localização**: [`src/html/07-javascript-basico/src/`](../07-javascript-basico/src/)

| Arquivo | Descrição |
|---------|-----------|
| [index.html](../07-javascript-basico/src/index.html) | Exemplo de JavaScript básico |
| [variaveis-tipos.html](../07-javascript-basico/src/variaveis-tipos.html) | Variáveis e tipos de dados |

**Exemplo Simples - JavaScript Básico:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Básico</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .output { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; }
        button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 5px; }
        button:hover { background: #0056b3; }
    </style>
</head>
<body>
    <h1>JavaScript Básico</h1>
    
    <h2>Variáveis e Tipos</h2>
    <div class="output" id="variaveis"></div>
    
    <h2>Operações</h2>
    <button onclick="somar()">Somar</button>
    <button onclick="subtrair()">Subtrair</button>
    <div class="output" id="operacoes"></div>
    
    <h2>Arrays</h2>
    <button onclick="mostrarFrutas()">Mostrar Frutas</button>
    <button onclick="adicionarFruta()">Adicionar Fruta</button>
    <div class="output" id="arrays"></div>
    
    <h2>Objetos</h2>
    <button onclick="mostrarPessoa()">Mostrar Pessoa</button>
    <div class="output" id="objetos"></div>
    
    <script>
        // Variáveis
        const nome = "João";           // String - não muda
        let idade = 25;                // Number - pode mudar
        const ativo = true;            // Boolean
        
        // Mostrar variáveis
        document.getElementById('variaveis').innerHTML = `
            <strong>Nome:</strong> ${nome} (string)<br>
            <strong>Idade:</strong> ${idade} (number)<br>
            <strong>Ativo:</strong> ${ativo} (boolean)
        `;
        
        // Funções de operações
        function somar() {
            const a = 10;
            const b = 5;
            const resultado = a + b;
            document.getElementById('operacoes').innerHTML = `${a} + ${b} = ${resultado}`;
        }
        
        function subtrair() {
            const a = 10;
            const b = 5;
            const resultado = a - b;
            document.getElementById('operacoes').innerHTML = `${a} - ${b} = ${resultado}`;
        }
        
        // Arrays
        const frutas = ["Maçã", "Banana", "Laranja"];
        
        function mostrarFrutas() {
            let html = "<strong>Frutas:</strong><ul>";
            frutas.forEach(function(fruta, index) {
                html += `<li>${index + 1}. ${fruta}</li>`;
            });
            html += "</ul>";
            document.getElementById('arrays').innerHTML = html;
        }
        
        function adicionarFruta() {
            const novaFruta = "Uva";
            frutas.push(novaFruta);
            mostrarFrutas();
        }
        
        // Objetos
        const pessoa = {
            nome: "Maria",
            idade: 30,
            profissao: "Desenvolvedora",
            apresentar: function() {
                return `Olá, sou ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
            }
        };
        
        function mostrarPessoa() {
            document.getElementById('objetos').innerHTML = `
                <strong>Objeto Pessoa:</strong><br>
                Nome: ${pessoa.nome}<br>
                Idade: ${pessoa.idade}<br>
                Profissão: ${pessoa.profissao}<br>
                <em>${pessoa.apresentar()}</em>
            `;
        }
    </script>
</body>
</html>
```

---

### 🔗 **Módulo 08: JavaScript DOM**

**Localização**: [`src/html/08-javascript-dom/src/`](../08-javascript-dom/src/)

| Arquivo | Descrição |
|---------|-----------|
| [1acessoDOM.html](../08-javascript-dom/src/1acessoDOM.html) | Acesso ao DOM |
| [2manipulacaoConteudoDOM.html](../08-javascript-dom/src/2manipulacaoConteudoDOM.html) | Manipulação de conteúdo |
| [3manipulacaoEventos.html](../08-javascript-dom/src/3manipulacaoEventos.html) | Manipulação de eventos |
| [5eventosDOM.html](../08-javascript-dom/src/5eventosDOM.html) | Eventos do DOM |
| [6estilosDOM.html](../08-javascript-dom/src/6estilosDOM.html) | Estilos via DOM |

**Exemplo Simples - Manipulação do DOM:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>JavaScript DOM</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; }
        .card { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0; }
        button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 5px; }
        button:hover { background: #0056b3; }
        input { padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin: 5px; }
        .destaque { background: #ffc107 !important; }
        .lista-item { padding: 10px; margin: 5px 0; background: #e9ecef; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="titulo">JavaScript DOM</h1>
        
        <div class="card">
            <h2>1. Seleção de Elementos</h2>
            <p id="paragrafo">Este parágrafo pode ser modificado.</p>
            <button onclick="alterarTexto()">Alterar Texto</button>
            <button onclick="alterarEstilo()">Alterar Estilo</button>
        </div>
        
        <div class="card">
            <h2>2. Criar Elementos</h2>
            <div id="lista-container"></div>
            <input type="text" id="novo-item" placeholder="Digite um item">
            <button onclick="adicionarItem()">Adicionar Item</button>
        </div>
        
        <div class="card">
            <h2>3. Event Listeners</h2>
            <div id="area-click" style="background:#e9ecef; padding:30px; text-align:center; border-radius:8px; cursor:pointer;">
                Clique aqui!
            </div>
            <p>Contador de cliques: <span id="contador">0</span></p>
        </div>
        
        <div class="card">
            <h2>4. Formulário</h2>
            <form id="meu-form">
                <input type="text" id="nome-input" placeholder="Seu nome" required>
                <button type="submit">Enviar</button>
            </form>
            <p id="resultado-form"></p>
        </div>
    </div>
    
    <script>
        // 1. SELEÇÃO E MANIPULAÇÃO
        function alterarTexto() {
            const paragrafo = document.getElementById('paragrafo');
            paragrafo.textContent = 'Texto alterado com JavaScript!';
        }
        
        function alterarEstilo() {
            const paragrafo = document.getElementById('paragrafo');
            paragrafo.classList.toggle('destaque');
        }
        
        // 2. CRIAR ELEMENTOS
        function adicionarItem() {
            const input = document.getElementById('novo-item');
            const container = document.getElementById('lista-container');
            
            if (input.value.trim() !== '') {
                const novoItem = document.createElement('div');
                novoItem.className = 'lista-item';
                novoItem.textContent = input.value;
                
                // Botão de remover
                const btnRemover = document.createElement('button');
                btnRemover.textContent = 'X';
                btnRemover.style.cssText = 'float:right; background:#dc3545; padding:2px 8px;';
                btnRemover.onclick = function() {
                    novoItem.remove();
                };
                
                novoItem.appendChild(btnRemover);
                container.appendChild(novoItem);
                input.value = '';
            }
        }
        
        // 3. EVENT LISTENERS
        let cliques = 0;
        const areaClick = document.getElementById('area-click');
        const contadorElement = document.getElementById('contador');
        
        areaClick.addEventListener('click', function() {
            cliques++;
            contadorElement.textContent = cliques;
            this.style.backgroundColor = `hsl(${cliques * 30}, 70%, 80%)`;
        });
        
        // 4. FORMULÁRIO
        const form = document.getElementById('meu-form');
        form.addEventListener('submit', function(evento) {
            evento.preventDefault();
            
            const nome = document.getElementById('nome-input').value;
            const resultado = document.getElementById('resultado-form');
            resultado.innerHTML = `<strong>Olá, ${nome}!</strong> Formulário enviado com sucesso.`;
            
            this.reset();
        });
    </script>
</body>
</html>
```

---

### 🔗 **Módulo 09: Bootstrap Framework**

**Localização**: [`src/html/09-frameworks-bootstrap/src/`](../09-frameworks-bootstrap/src/)

| Arquivo | Descrição |
|---------|-----------|
| [exemplo.html](../09-frameworks-bootstrap/src/exemplo.html) | Exemplo básico Bootstrap |
| [exemploGrid.html](../09-frameworks-bootstrap/src/exemploGrid.html) | Sistema de Grid |
| [exemploModal.html](../09-frameworks-bootstrap/src/exemploModal.html) | Modal Bootstrap |
| [exemplo-form.html](../09-frameworks-bootstrap/src/exemplo-form.html) | Formulários Bootstrap |
| [bootstrap-avancado.html](../09-frameworks-bootstrap/src/bootstrap-avancado.html) | Recursos avançados |

**Exemplo Simples - Bootstrap:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Framework</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">MeuSite</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Sobre</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- Conteúdo -->
    <div class="container mt-5">
        <h1 class="text-center mb-4">Bootstrap Framework</h1>
        
        <!-- Grid System -->
        <div class="row g-4 mb-5">
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card 1</h5>
                        <p class="card-text">Exemplo de card Bootstrap.</p>
                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card 2</h5>
                        <p class="card-text">Sistema de grid responsivo.</p>
                        <a href="#" class="btn btn-success">Ver Detalhes</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card 3</h5>
                        <p class="card-text">Componentes pré-estilizados.</p>
                        <a href="#" class="btn btn-warning">Explorar</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Botões -->
        <div class="mb-5">
            <h3>Botões</h3>
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-outline-primary">Outline</button>
        </div>
        
        <!-- Alertas -->
        <div class="mb-5">
            <h3>Alertas</h3>
            <div class="alert alert-success">Sucesso! Operação realizada.</div>
            <div class="alert alert-warning">Atenção! Verifique os dados.</div>
            <div class="alert alert-danger">Erro! Algo deu errado.</div>
        </div>
        
        <!-- Formulário -->
        <div class="row">
            <div class="col-md-6">
                <h3>Formulário</h3>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Nome</label>
                        <input type="text" class="form-control" placeholder="Seu nome">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="seu@email.com">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mensagem</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

### 🔗 **Módulo 10: HTML5 Avançado**

**Localização**: [`src/html/10-html5-avancado/`](../10-html5-avancado/)

| Arquivo | Descrição |
|---------|-----------|
| [index.html](../10-html5-avancado/index.html) | Índice de exemplos HTML5 |
| [formularios-avancados.html](../10-html5-avancado/formularios-avancados.html) | Formulários HTML5 |
| [multimidia-html5.html](../10-html5-avancado/multimidia-html5.html) | Vídeo e áudio |
| [semantico-acessibilidade.html](../10-html5-avancado/semantico-acessibilidade.html) | Semântica e acessibilidade |

**Exemplo Simples - Formulários HTML5:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Avançado - Formulários</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select, textarea { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
        input:valid { border-color: #28a745; }
        input:invalid:not(:placeholder-shown) { border-color: #dc3545; }
        button { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background: #0056b3; }
        .range-value { display: inline-block; width: 50px; text-align: center; }
    </style>
</head>
<body>
    <h1>HTML5 Formulários Avançados</h1>
    
    <form id="form-avancado">
        <!-- Email com validação -->
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="seu@email.com">
        </div>
        
        <!-- URL -->
        <div class="form-group">
            <label for="website">Website</label>
            <input type="url" id="website" name="website" placeholder="https://seusite.com">
        </div>
        
        <!-- Telefone com pattern -->
        <div class="form-group">
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" 
                   pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" 
                   placeholder="11 99999-9999">
            <small>Formato: XX XXXXX-XXXX</small>
        </div>
        
        <!-- Número com min/max -->
        <div class="form-group">
            <label for="idade">Idade *</label>
            <input type="number" id="idade" name="idade" min="18" max="100" required>
        </div>
        
        <!-- Data -->
        <div class="form-group">
            <label for="nascimento">Data de Nascimento</label>
            <input type="date" id="nascimento" name="nascimento">
        </div>
        
        <!-- Range -->
        <div class="form-group">
            <label for="satisfacao">Satisfação: <span id="range-valor" class="range-value">50</span>%</label>
            <input type="range" id="satisfacao" name="satisfacao" min="0" max="100" value="50"
                   oninput="document.getElementById('range-valor').textContent = this.value">
        </div>
        
        <!-- Color -->
        <div class="form-group">
            <label for="cor">Cor Favorita</label>
            <input type="color" id="cor" name="cor" value="#007bff">
        </div>
        
        <!-- Datalist (autocomplete) -->
        <div class="form-group">
            <label for="linguagem">Linguagem Favorita</label>
            <input type="text" id="linguagem" name="linguagem" list="linguagens" placeholder="Escolha ou digite">
            <datalist id="linguagens">
                <option value="JavaScript">
                <option value="Python">
                <option value="Java">
                <option value="C#">
                <option value="PHP">
            </datalist>
        </div>
        
        <!-- Textarea com contador -->
        <div class="form-group">
            <label for="mensagem">Mensagem * <span id="contador">0</span>/500</label>
            <textarea id="mensagem" name="mensagem" required minlength="10" maxlength="500" rows="4"
                      oninput="document.getElementById('contador').textContent = this.value.length"></textarea>
        </div>
        
        <button type="submit">Enviar Formulário</button>
    </form>
    
    <script>
        document.getElementById('form-avancado').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulário válido! Dados seriam enviados.');
        });
    </script>
</body>
</html>
```

---

### 🔗 **Módulo 11: HTML com FastAPI**

**Localização**: [`src/html/11-html-fastapi/`](../11-html-fastapi/)

| Pasta | Descrição |
|-------|-----------|
| [exemplo-simples/](../11-html-fastapi/exemplo-simples/) | Exemplo simples de integração |
| [formulario_fastapi/](../11-html-fastapi/formulario_fastapi/) | Formulário com FastAPI |
| [formulario_fastapi_completo/](../11-html-fastapi/formulario_fastapi_completo/) | Exemplo completo |

**Exemplo Simples - Integração com API:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML + API</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
        .card { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0; }
        button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 5px; }
        button:hover { background: #0056b3; }
        input { padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin: 5px; width: 200px; }
        #resultado { background: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 15px; }
        .usuario-item { background: white; padding: 10px; margin: 5px 0; border-radius: 5px; border-left: 4px solid #007bff; }
        .loading { color: #6c757d; font-style: italic; }
    </style>
</head>
<body>
    <h1>Integração HTML + API</h1>
    
    <div class="card">
        <h2>Buscar Dados (GET)</h2>
        <button onclick="buscarUsuarios()">Buscar Usuários</button>
        <div id="lista-usuarios"></div>
    </div>
    
    <div class="card">
        <h2>Enviar Dados (POST)</h2>
        <form id="form-usuario" onsubmit="criarUsuario(event)">
            <input type="text" id="nome" placeholder="Nome" required>
            <input type="email" id="email" placeholder="Email" required>
            <button type="submit">Criar Usuário</button>
        </form>
        <div id="resultado-post"></div>
    </div>
    
    <div class="card">
        <h2>API Pública (JSONPlaceholder)</h2>
        <button onclick="buscarPosts()">Buscar Posts</button>
        <div id="lista-posts"></div>
    </div>
    
    <script>
        // Simulação de dados locais (substitua pela URL real da API)
        const usuariosLocais = [
            { id: 1, nome: "João Silva", email: "joao@email.com" },
            { id: 2, nome: "Maria Santos", email: "maria@email.com" },
            { id: 3, nome: "Pedro Costa", email: "pedro@email.com" }
        ];
        
        // GET - Buscar usuários (simulado)
        async function buscarUsuarios() {
            const container = document.getElementById('lista-usuarios');
            container.innerHTML = '<p class="loading">Carregando...</p>';
            
            // Simula delay de API
            await new Promise(resolve => setTimeout(resolve, 500));
            
            let html = '';
            usuariosLocais.forEach(usuario => {
                html += `
                    <div class="usuario-item">
                        <strong>${usuario.nome}</strong><br>
                        <small>${usuario.email}</small>
                    </div>
                `;
            });
            container.innerHTML = html;
        }
        
        // POST - Criar usuário (simulado)
        async function criarUsuario(evento) {
            evento.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const resultado = document.getElementById('resultado-post');
            
            resultado.innerHTML = '<p class="loading">Enviando...</p>';
            
            // Simula delay de API
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Simula resposta do servidor
            const novoUsuario = {
                id: usuariosLocais.length + 1,
                nome: nome,
                email: email
            };
            
            usuariosLocais.push(novoUsuario);
            
            resultado.innerHTML = `
                <p style="color: #28a745;">✅ Usuário criado com sucesso!</p>
                <pre>${JSON.stringify(novoUsuario, null, 2)}</pre>
            `;
            
            document.getElementById('form-usuario').reset();
        }
        
        // GET - API Real (JSONPlaceholder)
        async function buscarPosts() {
            const container = document.getElementById('lista-posts');
            container.innerHTML = '<p class="loading">Carregando da API...</p>';
            
            try {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
                
                // Verifica se a resposta foi bem-sucedida
                if (!resposta.ok) {
                    throw new Error(`HTTP error! status: ${resposta.status}`);
                }
                
                const posts = await resposta.json();
                
                let html = '';
                posts.forEach(post => {
                    html += `
                        <div class="usuario-item">
                            <strong>${post.title}</strong><br>
                            <small>${post.body.substring(0, 100)}...</small>
                        </div>
                    `;
                });
                container.innerHTML = html;
            } catch (erro) {
                container.innerHTML = `<p style="color: #dc3545;">Erro ao buscar dados: ${erro.message}</p>`;
            }
        }
    </script>
</body>
</html>
```

---

### 📁 **Exemplo Integrado Completo**

Para ver todos os conceitos trabalhando juntos, acesse o exemplo completo da revisão:

**Localização**: [`src/html/revisao/exemplo/`](./exemplo/)

| Arquivo | Descrição |
|---------|-----------|
| [index.html](./exemplo/index.html) | Estrutura HTML completa com todos os módulos |
| [styles.css](./exemplo/styles.css) | CSS com todas as técnicas aprendidas |
| [script.js](./exemplo/script.js) | JavaScript com DOM e interatividade |

Este exemplo demonstra um **portfólio profissional** que integra:
- ✅ HTML5 semântico com metadados
- ✅ CSS3 com variáveis, Flexbox, Grid e animações
- ✅ JavaScript com manipulação do DOM e eventos
- ✅ Bootstrap para componentes responsivos
- ✅ Formulários com validação HTML5
- ✅ Boas práticas de acessibilidade

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
