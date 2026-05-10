# Exercício prático - Aula de desenlvimento para internet (HTML)

Esse exercício tem como objetivo preparar para a disciplina de projetos e prática do HTML.   
Recomenda-se seguir o passo a passo abaixo para manter um fluxo de trabalho bem definido.   

# Exercício 1 - Mini Projeto: Site Institucional de uma Empresa

Pensando na disciplina de projetos, cada aluno deverá criar **um pequeno site institucional de uma empresa fictícia**. 
O site será composto por **cinco páginas HTML conectadas entre si por links**.

As páginas que deverão ser criadas são:

* `index.html` — Página inicial
* `empresa.html` — Sobre a empresa
* `servicos.html` — Serviços ou produtos
* `equipe.html` — Equipe da empresa
* `contato.html` — Informações de contato

O tema da empresa pode ser livre. Alguns exemplos:

* empresa de tecnologia
* loja de roupas
* restaurante
* academia
* empresa de jogos
* assistência técnica
* empresa de desenvolvimento de software

O importante é organizar as informações utilizando **HTML básico**.

---

## Página Inicial (index.html)

A página inicial é a **porta de entrada do site**. Ela deve apresentar brevemente a empresa e permitir que o visitante navegue para outras páginas.

A página deve conter:

* Um **título principal** com o nome da empresa.
* Um **parágrafo apresentando a empresa**.
* Uma seção de navegação com links para as outras páginas.
* Uma imagem relacionada à empresa.

### Exemplo de título

```html
<h1>Tech Solutions</h1>
```

### Exemplo de parágrafo

```html
<p>
A Tech Solutions é uma empresa especializada em desenvolvimento de software
e soluções tecnológicas para empresas.
</p>
```

### Exemplo de lista com links para outras páginas

```html
<h2>Navegação</h2>

<ul>
<li><a href="empresa.html">Sobre a Empresa</a></li>
<li><a href="servicos.html">Nossos Serviços</a></li>
<li><a href="equipe.html">Nossa Equipe</a></li>
<li><a href="contato.html">Contato</a></li>
</ul>
```

### Exemplo de imagem

```html
<img src="empresa.jpg" alt="Imagem representando a empresa">
```

---

## Página Sobre a Empresa (empresa.html)

Nesta página, o objetivo é apresentar **informações institucionais da empresa**.

A página deve conter:

* Um título principal.
* Parágrafos explicando a história da empresa.
* Uma lista com valores ou princípios da empresa.

### Exemplo de título

```html
<h1>Sobre a Empresa</h1>
```

### Exemplo de parágrafo

```html
<p>
A empresa foi fundada em 2020 com o objetivo de oferecer soluções
tecnológicas inovadoras para pequenas e médias empresas.
</p>
```

### Exemplo de lista de valores da empresa

```html
<h2>Nossos Valores</h2>

<ul>
<li>Qualidade nos serviços</li>
<li>Compromisso com o cliente</li>
<li>Inovação tecnológica</li>
<li>Trabalho em equipe</li>
</ul>
```

### Link para voltar à página inicial

```html
<a href="index.html">Voltar para a página inicial</a>
```

---

## Página de Serviços ou Produtos (servicos.html)

Nesta página o aluno deve apresentar **os serviços ou produtos oferecidos pela empresa**.

A página deve conter:

* Um título principal.
* Pelo menos três serviços ou produtos.
* Um pequeno texto explicando cada um.

### Exemplo de estrutura

```html
<h1>Nossos Serviços</h1>

<h2>Desenvolvimento de Sites</h2>
<p>Criamos sites modernos e responsivos para empresas.</p>

<h2>Consultoria em Tecnologia</h2>
<p>Ajudamos empresas a escolher as melhores soluções tecnológicas.</p>

<h2>Manutenção de Sistemas</h2>
<p>Oferecemos suporte técnico e manutenção para sistemas existentes.</p>
```

### Link de navegação

```html
<a href="index.html">Voltar para a página inicial</a>
```

---

## Página da Equipe (equipe.html)

Nesta página, o aluno deve apresentar **os membros da equipe da empresa**.

A página deve conter:

* Um título principal.
* Pelo menos três pessoas da equipe.
* Nome, cargo e descrição da função.

### Exemplo

```html
<h1>Nossa Equipe</h1>

<h2>Maria Silva</h2>
<p>Diretora Executiva responsável pela gestão da empresa.</p>

<h2>João Santos</h2>
<p>Desenvolvedor de software especializado em aplicações web.</p>

<h2>Ana Costa</h2>
<p>Designer responsável pela criação das interfaces dos sistemas.</p>
```

### Exemplo de imagem da equipe

```html
<img src="equipe.jpg" alt="Foto da equipe da empresa">
```

---

## Página de Contato (contato.html)

Nesta página devem ser apresentadas **informações de contato da empresa**.

A página deve conter:

* Um título principal.
* Um pequeno texto convidando o visitante a entrar em contato.
* Uma lista com informações de contato.

### Exemplo

```html
<h1>Contato</h1>

<p>
Entre em contato conosco para saber mais sobre nossos serviços.
</p>
```

### Exemplo de lista de contato

```html
<ul>
<li>Telefone: (11) 99999-9999</li>
<li>Email: contato@empresa.com</li>
<li>Endereço: Rua Exemplo, 123</li>
<li>Horário de atendimento: 9h às 18h</li>
</ul>
```

### Exemplo de link externo

```html
<a href="https://www.google.com">Visite nosso parceiro</a>
```

### Link para voltar à página inicial

```html
<a href="index.html">Voltar para a página inicial</a>
```

# Exercicio 2 - Melhorar o visual

**Revisar suas cinco páginas** e adicionar **pelo menos três melhorias visuais utilizando `style` inline**, por exemplo:

* alterar cor de títulos
* centralizar algum texto
* mudar o tamanho da fonte
* alterar a cor de fundo
* ajustar o tamanho de alguma imagem

Abaixo há o que deve fazer e um exemplo. Os valores podem ser alterados.

## Exemplo 1 – Melhorando um título

### Antes

```html
<h1>Tech Solutions</h1>
```

### Depois (com estilo)

```html
<h1 style="color: blue; text-align: center;">Tech Solutions</h1>
```

## Exemplo 2 – Melhorando um parágrafo

### Antes

```html
<p>A Tech Solutions é uma empresa especializada em desenvolvimento de software.</p>
```

### Depois

```html
<p style="font-size:18px;">
A Tech Solutions é uma empresa especializada em desenvolvimento de software.
</p>
```

## Exemplo 3 – Alterando o fundo da página

### Antes

```html
<body>
```

### Depois

```html
<body style="background-color: lightgray;">
```

## Exemplo 4 – Melhorando uma lista

### Antes

```html
<ul>
<li>Qualidade</li>
<li>Inovação</li>
<li>Compromisso</li>
</ul>
```

### Depois

```html
<ul style="color: darkgreen;">
<li>Qualidade</li>
<li>Inovação</li>
<li>Compromisso</li>
</ul>
```

## Exemplo 5 – Melhorando uma imagem

### Antes

```html
<img src="empresa.jpg" alt="Imagem da empresa">
```

### Depois

```html
<img src="empresa.jpg" alt="Imagem da empresa" style="width:300px;">
```