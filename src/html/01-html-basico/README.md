# 📚 HTML Básico: Fundamentos Práticos

## 🎯 Bem-vindo ao Módulo de HTML Básico!

Este módulo é dedicado ao **aprendizado prático dos elementos fundamentais do HTML**. Aqui você encontrará explicações técnicas, exemplos de código e exercícios práticos para dominar as tags e estruturas essenciais do HTML.

> **Pré-requisito**: Se você ainda não completou o módulo [00-fundamentos-previos](../00-fundamentos-previos/README.md), recomendamos começar por lá para entender os conceitos básicos de programação e web.

---

## 📋 O Que Você Aprenderá Neste Módulo

Neste módulo, você aprenderá a usar na prática:
- ✅ Estrutura básica de documentos HTML5
- ✅ Tags semânticas e sua importância
- ✅ Elementos de texto e formatação
- ✅ Links, imagens e caminhos de arquivos
- ✅ Formulários e inputs
- ✅ Listas e tabelas
- ✅ Atributos HTML e boas práticas

---

## 🏗️ Estrutura Básica de um Documento HTML5

Todo documento HTML5 segue uma estrutura padrão. Vamos entender cada parte:

### 📄 Anatomia de um Documento HTML

```html
<!DOCTYPE html>
<!-- Declaração HTML5 - informa ao navegador que este é um documento HTML5 -->

<html lang="pt-BR">
<!-- Tag raiz que envolve todo o documento. O atributo lang define o idioma -->

<head>
    <!-- Cabeçalho: contém metadados e configurações (não visível ao usuário) -->
    
    <meta charset="UTF-8">
    <!-- Define codificação de caracteres UTF-8 (suporta acentos e caracteres especiais) -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Configuração para responsividade em dispositivos móveis -->
    
    <meta name="description" content="Descrição da página para SEO">
    <!-- Descrição que aparece nos resultados de busca -->
    
    <title>Título da Página</title>
    <!-- Título que aparece na aba do navegador -->
    
    <link rel="stylesheet" href="estilo.css">
    <!-- Link para arquivo CSS externo -->
</head>

<body>
    <!-- Corpo: contém todo o conteúdo visível da página -->
    
    <h1>Conteúdo da Página</h1>
    <p>Este é um parágrafo de exemplo.</p>
    
</body>
</html>
```

### 🔍 Entendendo Cada Parte

#### 1. **DOCTYPE**
```html
<!DOCTYPE html>
```
- Sempre deve ser a primeira linha do documento
- Informa ao navegador que o documento usa HTML5
- Sem ele, o navegador pode entrar em "quirks mode" (modo de compatibilidade)

#### 2. **Tag `<html>`**
```html
<html lang="pt-BR">
```
- Tag raiz que envolve todo o documento
- Atributo `lang` define o idioma (importante para acessibilidade e SEO)
- Códigos comuns: `pt-BR` (português), `en` (inglês), `es` (espanhol)

#### 3. **Seção `<head>`**
- Contém metadados (informações sobre o documento)
- Não é visível para o usuário
- Inclui: título, links para CSS, meta tags, scripts

#### 4. **Seção `<body>`**
- Contém todo o conteúdo visível da página
- Textos, imagens, vídeos, formulários, etc.

---

## 📝 Meta Tags Essenciais

As meta tags fornecem informações importantes sobre o documento:

### **Charset (Obrigatória)**
```html
<meta charset="UTF-8">
```
- Define a codificação de caracteres
- UTF-8 suporta praticamente todos os idiomas do mundo
- **Sempre use UTF-8!**

### **Viewport (Essencial para Mobile)**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: largura igual à do dispositivo
- `initial-scale=1.0`: zoom inicial de 100%
- Torna o site responsivo em dispositivos móveis

### **Description (Importante para SEO)**
```html
<meta name="description" content="Descrição curta e objetiva da página">
```
- Aparece nos resultados de busca do Google
- Deve ter entre 150-160 caracteres
- Descreve o conteúdo da página de forma atrativa

### **Keywords (Opcional)**
```html
<meta name="keywords" content="html, tutorial, web, desenvolvimento">
```
- Palavras-chave relacionadas ao conteúdo
- Menos importante atualmente para SEO
- Separadas por vírgulas

### **Author (Opcional)**
```html
<meta name="author" content="Seu Nome">
```
- Identifica o autor do documento

---

## 🏷️ Tags Semânticas HTML5

HTML5 introduziu tags semânticas que dão significado ao conteúdo, melhorando acessibilidade e SEO:

### **Estrutura Semântica Completa**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site com Estrutura Semântica</title>
</head>
<body>
    <!-- CABEÇALHO DA PÁGINA -->
    <header>
        <h1>Nome do Site</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- CONTEÚDO PRINCIPAL -->
    <main>
        <!-- SEÇÃO DE CONTEÚDO -->
        <section id="sobre">
            <h2>Sobre Nós</h2>
            
            <!-- ARTIGO INDEPENDENTE -->
            <article>
                <h3>Nossa História</h3>
                <p>Conteúdo do artigo...</p>
            </article>
        </section>
        
        <!-- CONTEÚDO LATERAL -->
        <aside>
            <h3>Links Relacionados</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </aside>
    </main>
    
    <!-- RODAPÉ DA PÁGINA -->
    <footer>
        <p>&copy; 2024 - Todos os direitos reservados</p>
    </footer>
</body>
</html>
```

### 📦 Descrição das Tags Semânticas

| Tag | Uso | Descrição |
|-----|-----|-----------|
| `<header>` | Cabeçalho | Topo da página ou seção. Geralmente contém logo e navegação |
| `<nav>` | Navegação | Menu de navegação principal |
| `<main>` | Conteúdo principal | Conteúdo principal único da página (apenas 1 por página) |
| `<section>` | Seção | Agrupa conteúdo relacionado tematicamente |
| `<article>` | Artigo | Conteúdo independente e reutilizável (post, notícia, comentário) |
| `<aside>` | Conteúdo lateral | Conteúdo relacionado, mas não essencial (sidebar, widgets) |
| `<footer>` | Rodapé | Rodapé da página ou seção. Geralmente contém copyright, links |
| `<figure>` | Figura | Agrupa imagem e legenda |
| `<figcaption>` | Legenda | Legenda para `<figure>` |

### ✨ Por Que Usar Tags Semânticas?

1. **Acessibilidade**: Leitores de tela identificam melhor a estrutura
2. **SEO**: Motores de busca entendem melhor o conteúdo
3. **Manutenção**: Código mais legível e organizado
4. **Padrões**: Segue as melhores práticas do HTML5

---

## ✍️ Elementos de Texto e Formatação

### **Títulos (Headings)**

HTML oferece 6 níveis de títulos, do mais importante (h1) ao menos importante (h6):

```html
<h1>Título Principal - Nível 1</h1>
<h2>Título Secundário - Nível 2</h2>
<h3>Título Terciário - Nível 3</h3>
<h4>Título Nível 4</h4>
<h5>Título Nível 5</h5>
<h6>Título Nível 6</h6>
```

**Boas Práticas:**
- ✅ Apenas um `<h1>` por página (título principal)
- ✅ Respeite a hierarquia (não pule níveis)
- ✅ Use títulos para estruturar, não para tamanho
- ❌ Evite: h1 → h3 (pulou o h2)

### **Parágrafos e Quebras de Linha**

```html
<p>Este é um parágrafo de texto. Parágrafos adicionam espaçamento automático antes e depois.</p>

<p>Este é outro parágrafo.<br>
Esta linha tem uma quebra de linha manual.</p>

<hr>
<!-- Tag <hr> cria uma linha horizontal divisória -->

<p>Parágrafo após a linha divisória.</p>
```

### **Formatação de Texto**

```html
<!-- ÊNFASE E IMPORTÂNCIA -->
<p>Texto <strong>em negrito (importante)</strong></p>
<p>Texto <b>em negrito (estético)</b></p>
<p>Texto <em>em itálico (ênfase)</em></p>
<p>Texto <i>em itálico (estético)</i></p>

<!-- MARCAÇÃO E DESTAQUE -->
<p>Texto <mark>destacado em amarelo</mark></p>
<p>Texto <small>menor</small></p>
<p>Texto <del>riscado (deletado)</del></p>
<p>Texto <ins>sublinhado (inserido)</ins></p>
<p>Texto <sub>subscrito</sub> e <sup>sobrescrito</sup></p>

<!-- CÓDIGO E TÉCNICO -->
<p>Use a tag <code>&lt;div&gt;</code> para containers</p>
<p>Variável: <var>x = 10</var></p>
<p>Saída de programa: <samp>Arquivo não encontrado</samp></p>
<p>Entrada do usuário: <kbd>Ctrl + C</kbd></p>

<!-- CITAÇÕES -->
<p>Como disse Einstein: <q>A imaginação é mais importante que o conhecimento</q></p>

<blockquote cite="https://exemplo.com">
    <p>Esta é uma citação em bloco, usada para citações longas.</p>
    <footer>— Autor da citação</footer>
</blockquote>
```

### 📚 Diferença: Strong vs B, Em vs I

| Semântico | Visual | Quando Usar |
|-----------|--------|-------------|
| `<strong>` | `<b>` | Use `<strong>` para texto **importante** (SEO e acessibilidade) |
| `<em>` | `<i>` | Use `<em>` para **ênfase** na leitura |
| - | - | Use `<b>` e `<i>` apenas para estilo visual sem significado semântico |

---

## 🔗 Links e Navegação

### **Links Básicos**

```html
<!-- Link externo -->
<a href="https://www.google.com">Visite o Google</a>

<!-- Link interno (mesma página) -->
<a href="#secao1">Ir para Seção 1</a>

<!-- Link para e-mail -->
<a href="mailto:contato@exemplo.com">Enviar E-mail</a>

<!-- Link para telefone -->
<a href="tel:+5511999999999">Ligar Agora</a>

<!-- Link que abre em nova aba -->
<a href="https://www.google.com" target="_blank">Abrir em Nova Aba</a>

<!-- Link para download -->
<a href="documento.pdf" download>Baixar PDF</a>
```

### **Atributos do Link**

| Atributo | Descrição | Exemplo |
|----------|-----------|---------|
| `href` | URL de destino | `href="pagina.html"` |
| `target` | Onde abrir o link | `target="_blank"` (nova aba) |
| `title` | Dica ao passar o mouse | `title="Descrição do link"` |
| `download` | Força download do arquivo | `download="nome.pdf"` |
| `rel` | Relação com destino | `rel="noopener"` (segurança) |

### **Caminhos de Arquivos**

#### **Caminho Relativo**
Relativo à localização do arquivo atual:

```html
<!-- Arquivo na mesma pasta -->
<a href="pagina.html">Mesma Pasta</a>

<!-- Arquivo em subpasta -->
<a href="pasta/pagina.html">Subpasta</a>

<!-- Arquivo em pasta superior -->
<a href="../pagina.html">Pasta Anterior</a>

<!-- Dois níveis acima -->
<a href="../../pagina.html">Duas Pastas Acima</a>
```

#### **Caminho Absoluto**
Caminho completo desde a raiz:

```html
<!-- URL completa -->
<a href="https://www.exemplo.com/pagina.html">URL Completa</a>

<!-- Caminho desde a raiz do site -->
<a href="/pasta/pagina.html">Desde a Raiz</a>
```

### **Âncoras (Links Internos)**

```html
<!-- Definir a âncora (destino) -->
<h2 id="secao1">Seção 1</h2>

<!-- Link para a âncora -->
<a href="#secao1">Ir para Seção 1</a>

<!-- Link para âncora em outra página -->
<a href="outra-pagina.html#secao2">Ir para Seção 2 (outra página)</a>

<!-- Voltar ao topo -->
<a href="#">Voltar ao Topo</a>
```

---

## 🖼️ Imagens

### **Tag `<img>`**

```html
<!-- Imagem básica -->
<img src="imagem.jpg" alt="Descrição da imagem">

<!-- Imagem com dimensões -->
<img src="imagem.jpg" alt="Descrição" width="300" height="200">

<!-- Imagem com título (tooltip) -->
<img src="imagem.jpg" alt="Descrição" title="Passe o mouse para ver">

<!-- Imagem responsiva -->
<img src="imagem.jpg" alt="Descrição" style="max-width: 100%; height: auto;">
```

### **Atributos Essenciais**

| Atributo | Obrigatório? | Descrição |
|----------|--------------|-----------|
| `src` | ✅ Sim | Caminho da imagem |
| `alt` | ✅ Sim | Texto alternativo (acessibilidade e SEO) |
| `width` | ❌ Não | Largura em pixels |
| `height` | ❌ Não | Altura em pixels |
| `title` | ❌ Não | Tooltip ao passar o mouse |
| `loading` | ❌ Não | `lazy` para carregamento preguiçoso |

### **Imagem com Link**

```html
<a href="destino.html">
    <img src="imagem.jpg" alt="Clique aqui">
</a>
```

### **Figure e Figcaption**

Para agrupar imagem com legenda:

```html
<figure>
    <img src="foto.jpg" alt="Paisagem">
    <figcaption>Foto tirada no pôr do sol</figcaption>
</figure>
```

### **Formatos de Imagem Recomendados**

| Formato | Quando Usar | Características |
|---------|-------------|-----------------|
| **JPG** | Fotos | Boa compressão, sem transparência |
| **PNG** | Logos, ícones | Suporta transparência, melhor qualidade |
| **SVG** | Ícones, logos | Vetorial (não pixeliza), arquivo leve |
| **WebP** | Geral | Formato moderno, melhor compressão |
| **GIF** | Animações | Suporta animação, cores limitadas |

---

## 📋 Listas

### **Lista Não Ordenada (Bullets)**

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### **Lista Ordenada (Numerada)**

```html
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>
```

### **Lista de Definição**

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

### **Listas Aninhadas**

```html
<ul>
    <li>Frutas
        <ul>
            <li>Maçã</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetais
        <ul>
            <li>Cenoura</li>
            <li>Brócolis</li>
        </ul>
    </li>
</ul>
```

---

## 📊 Tabelas

### **Estrutura Básica**

```html
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>25</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
            <td>Rio de Janeiro</td>
        </tr>
    </tbody>
</table>
```

### **Elementos de Tabela**

| Tag | Descrição |
|-----|-----------|
| `<table>` | Define a tabela |
| `<thead>` | Cabeçalho da tabela |
| `<tbody>` | Corpo da tabela |
| `<tfoot>` | Rodapé da tabela |
| `<tr>` | Linha da tabela (table row) |
| `<th>` | Célula de cabeçalho (table header) |
| `<td>` | Célula de dados (table data) |

### **Mesclagem de Células**

```html
<table>
    <tr>
        <!-- Mescla 2 colunas -->
        <th colspan="2">Nome Completo</th>
        <th>Idade</th>
    </tr>
    <tr>
        <td>João</td>
        <td>Silva</td>
        <td rowspan="2">25</td> <!-- Mescla 2 linhas -->
    </tr>
    <tr>
        <td>Maria</td>
        <td>Santos</td>
    </tr>
</table>
```

---

## 📝 Formulários

### **Formulário Básico**

```html
<form action="/processar" method="POST">
    <!-- Campo de texto -->
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    
    <!-- Campo de e-mail -->
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Campo de senha -->
    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" required>
    
    <!-- Botão de envio -->
    <button type="submit">Enviar</button>
</form>
```

### **Tipos de Input**

```html
<!-- Texto -->
<input type="text" placeholder="Digite seu nome">

<!-- E-mail (com validação) -->
<input type="email" placeholder="email@exemplo.com">

<!-- Senha (texto oculto) -->
<input type="password">

<!-- Número -->
<input type="number" min="0" max="100" step="5">

<!-- Data -->
<input type="date">

<!-- Hora -->
<input type="time">

<!-- Cor -->
<input type="color">

<!-- Arquivo -->
<input type="file" accept=".pdf,.jpg,.png">

<!-- Checkbox -->
<input type="checkbox" id="aceito">
<label for="aceito">Aceito os termos</label>

<!-- Radio buttons -->
<input type="radio" id="opcao1" name="opcao" value="1">
<label for="opcao1">Opção 1</label>

<input type="radio" id="opcao2" name="opcao" value="2">
<label for="opcao2">Opção 2</label>

<!-- Range (slider) -->
<input type="range" min="0" max="100" value="50">

<!-- URL -->
<input type="url" placeholder="https://exemplo.com">

<!-- Telefone -->
<input type="tel" placeholder="(11) 99999-9999">

<!-- Busca -->
<input type="search" placeholder="Buscar...">
```

### **Outros Elementos de Formulário**

```html
<!-- Textarea (texto multilinha) -->
<textarea rows="5" cols="30" placeholder="Digite sua mensagem"></textarea>

<!-- Select (lista suspensa) -->
<select name="pais">
    <option value="">Escolha um país</option>
    <option value="br">Brasil</option>
    <option value="pt">Portugal</option>
    <option value="us">Estados Unidos</option>
</select>

<!-- Select múltiplo -->
<select name="cores" multiple>
    <option value="vermelho">Vermelho</option>
    <option value="azul">Azul</option>
    <option value="verde">Verde</option>
</select>

<!-- Datalist (autocomplete) -->
<input list="navegadores" name="navegador">
<datalist id="navegadores">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
</datalist>

<!-- Fieldset (agrupa campos) -->
<fieldset>
    <legend>Informações Pessoais</legend>
    <label>Nome: <input type="text"></label>
    <label>Idade: <input type="number"></label>
</fieldset>

<!-- Botões -->
<button type="submit">Enviar</button>
<button type="reset">Limpar</button>
<button type="button">Ação Personalizada</button>
```

### **Atributos de Validação**

```html
<!-- Campo obrigatório -->
<input type="text" required>

<!-- Tamanho mínimo e máximo -->
<input type="text" minlength="3" maxlength="20">

<!-- Padrão (regex) -->
<input type="text" pattern="[A-Za-z]{3,}">

<!-- Valor mínimo e máximo (números) -->
<input type="number" min="1" max="10">

<!-- Placeholder -->
<input type="text" placeholder="Digite aqui">

<!-- Somente leitura -->
<input type="text" value="Não editável" readonly>

<!-- Desabilitado -->
<input type="text" disabled>

<!-- Autofocus (foco automático) -->
<input type="text" autofocus>

<!-- Autocomplete -->
<input type="email" autocomplete="email">
```

---

## 🎨 Atributos Globais

Atributos que podem ser usados em qualquer elemento HTML:

### **Identificação e Classificação**

```html
<!-- ID (único na página) -->
<div id="cabecalho"></div>

<!-- Class (pode repetir) -->
<p class="destaque importante"></p>

<!-- Title (tooltip) -->
<span title="Esta é uma dica">Passe o mouse aqui</span>
```

### **Estilo e Dados**

```html
<!-- Style (CSS inline) -->
<p style="color: red; font-size: 18px;">Texto vermelho</p>

<!-- Data attributes (dados personalizados) -->
<div data-user-id="123" data-role="admin">Usuário</div>
```

### **Acessibilidade e Semântica**

```html
<!-- Lang (idioma do elemento) -->
<p lang="en">This is in English</p>

<!-- Hidden (oculto) -->
<div hidden>Conteúdo oculto</div>

<!-- Tabindex (ordem de navegação por teclado) -->
<button tabindex="1">Primeiro</button>
<button tabindex="2">Segundo</button>

<!-- Role (ARIA - acessibilidade) -->
<div role="navigation">Menu</div>

<!-- Aria-label (rótulo para leitores de tela) -->
<button aria-label="Fechar">X</button>
```

---

## 📦 Elementos de Agrupamento

### **Div (Divisão Genérica)**

```html
<div class="container">
    <div class="header">Cabeçalho</div>
    <div class="content">Conteúdo</div>
    <div class="footer">Rodapé</div>
</div>
```

- `<div>` é um container genérico sem significado semântico
- Use quando não houver tag semântica apropriada
- Útil para agrupar elementos para estilização com CSS

### **Span (Trecho Inline)**

```html
<p>Este texto tem uma <span style="color: red;">palavra vermelha</span>.</p>
```

- `<span>` é um container inline genérico
- Não quebra linha
- Útil para estilizar partes de texto

### **Quando Usar Div vs Tags Semânticas**

❌ **Evite:**
```html
<div class="header">
    <div class="nav">Menu</div>
</div>
```

✅ **Prefira:**
```html
<header>
    <nav>Menu</nav>
</header>
```

---

## 🎯 Comentários HTML

```html
<!-- Este é um comentário -->
<!-- Os comentários não aparecem na página -->

<!--
    Comentário
    em múltiplas
    linhas
-->

<p>Texto visível</p> <!-- comentário após elemento -->
```

**Dicas:**
- Use comentários para explicar código complexo
- Não abuse - código deve ser autoexplicativo
- Não coloque informações sensíveis em comentários

---

## ✅ Boas Práticas HTML

### **Estrutura e Organização**

✅ **Faça:**
- Use indentação consistente (2 ou 4 espaços)
- Feche todas as tags
- Use minúsculas para tags e atributos
- Um `<h1>` por página
- Estrutura semântica (header, main, footer)
- Valide seu HTML (W3C Validator)

❌ **Evite:**
- Tags não fechadas
- Atributos sem valor entre aspas
- Pular níveis de heading (h1 → h3)
- Múltiplos `<main>` na mesma página
- Usar `<div>` quando existe tag semântica

### **Acessibilidade**

✅ **Sempre:**
- Atributo `alt` em todas as imagens
- `label` associado a inputs (com `for` e `id`)
- Hierarquia lógica de headings
- Contraste adequado de cores
- Navegação por teclado funcionando

### **SEO (Otimização para Buscadores)**

✅ **Importante:**
- Título descritivo e único (`<title>`)
- Meta description atraente
- Headings com palavras-chave
- URLs amigáveis
- Links com texto descritivo
- Imagens com `alt` descritivo

### **Performance**

✅ **Otimize:**
- Comprima imagens
- Use lazy loading: `<img loading="lazy">`
- Minimize uso de CSS e JS inline
- Use CDN para recursos externos
- Estruture HTML de forma enxuta

---

## 📚 Exemplos Práticos Neste Módulo

Esta pasta contém diversos exemplos práticos para você estudar:

| Arquivo | Conteúdo | Nível |
|---------|----------|-------|
| **index.html** | Portal de navegação dos exemplos | 🟢 Básico |
| **estrutura-basica.html** | Guia completo da estrutura HTML5 com explicações visuais | 🟢 Básico |
| **pagina1.html** | Estrutura básica e viewport | 🟢 Básico |
| **pagina2.html** | Formatação de texto (exemplo com História da Linguagem C) | 🟢 Básico |
| **pagina3.html** | CSS interno e estilização | 🟡 Intermediário |
| **pagina4.html** | Atributos HTML diversos | 🟢 Básico |
| **pagina5.html** | Formulários básicos | 🟢 Básico |
| **pagina6.html** | Tipos de input | 🟡 Intermediário |
| **pagina7.html** | Links e seus atributos | 🟢 Básico |
| **pagina8.html** | Imagens e atributos | 🟢 Básico |
| **pagina9.html** | Listas (ul, ol, li, dl) | 🟢 Básico |
| **pagina10.html** | Tags semânticas (header, nav, main, footer) | 🟢 Básico |
| **pagina11.html** | Tabelas (table, tr, td) | 🟡 Intermediário |
| **pagina12.html** | Divisões (div, span) | 🟢 Básico |

### 🎓 Como Estudar os Exemplos

1. **Abra o arquivo** no navegador
2. **Visualize o resultado** da página
3. **Abra o código-fonte** no editor (VS Code)
4. **Leia os comentários** explicativos
5. **Experimente modificar** o código
6. **Veja as mudanças** no navegador (recarregue a página)

---

## 🔗 Recursos Adicionais

### **Documentação Oficial**
- [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - Referência completa
- [W3Schools HTML](https://www.w3schools.com/html/) - Tutoriais e exemplos
- [HTML Living Standard](https://html.spec.whatwg.org/) - Especificação oficial

### **Ferramentas**
- [W3C Validator](https://validator.w3.org/) - Valida seu HTML
- [Can I Use](https://caniuse.com/) - Compatibilidade de recursos
- [HTML5 Outliner](https://gsnedders.html5.org/outliner/) - Verifica estrutura semântica

### **Prática**
- [CodePen](https://codepen.io/) - Editor online para praticar
- [JSFiddle](https://jsfiddle.net/) - Outro editor online
- [FreeCodeCamp](https://www.freecodecamp.org/) - Curso interativo gratuito

---

## 🚀 Próximos Passos

Após dominar este módulo, você estará pronto para:

1. **[02-html-estrutura-semantica](../02-html-estrutura-semantica/)** - Aprofundar em HTML semântico
2. **[03-css-fundamentos](../03-css-fundamentos/)** - Começar a estilizar suas páginas
3. **[07-javascript-basico](../07-javascript-basico/)** - Adicionar interatividade

---

## 💡 Dicas de Estudo

### ✅ Faça
- ✅ Digite o código (não copie e cole)
- ✅ Experimente modificar os exemplos
- ✅ Crie seus próprios exemplos
- ✅ Use as ferramentas de desenvolvedor do navegador (F12)
- ✅ Pratique todos os dias, mesmo que por 30 minutos

### ❌ Evite
- ❌ Apenas ler sem praticar
- ❌ Pular conceitos básicos
- ❌ Tentar aprender tudo de uma vez
- ❌ Decorar código (entenda o conceito!)

---

## 📞 Precisa de Ajuda?

- **Stack Overflow em Português**: Pergunte e busque respostas
- **MDN Web Docs**: Documentação completa e confiável
- **Comunidades Discord**: Vários servidores de programação
- **GitHub**: Veja código de outros projetos

---

## 🎯 Checklist de Progresso

Marque conforme for dominando cada tópico:

### Fundamentos
- [ ] Entendo a estrutura básica HTML5 (DOCTYPE, html, head, body)
- [ ] Sei usar meta tags essenciais (charset, viewport)
- [ ] Conheço as tags semânticas (header, nav, main, footer)

### Conteúdo
- [ ] Sei usar headings corretamente (h1-h6)
- [ ] Domino parágrafos e formatação de texto
- [ ] Sei criar e estilizar listas (ul, ol, dl)
- [ ] Consigo criar tabelas simples e complexas

### Links e Mídia
- [ ] Sei criar links (internos, externos, âncoras)
- [ ] Entendo caminhos relativos e absolutos
- [ ] Consigo adicionar imagens com atributos corretos
- [ ] Sei usar figure e figcaption

### Formulários
- [ ] Sei criar formulários básicos
- [ ] Conheço os diferentes tipos de input
- [ ] Sei usar labels e validação
- [ ] Entendo fieldset e legend

### Boas Práticas
- [ ] Escrevo HTML semântico
- [ ] Adiciono atributos alt em imagens
- [ ] Uso comentários quando necessário
- [ ] Valido meu código HTML

---

**🎉 Parabéns por começar sua jornada no HTML! Com prática e dedicação, você dominará esta linguagem fundamental da web.**

---

*Última atualização: 2024*
