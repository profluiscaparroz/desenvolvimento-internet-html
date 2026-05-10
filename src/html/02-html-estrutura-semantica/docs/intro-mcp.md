# 1️⃣ Tags HTML semânticas (o mais importante para iniciantes)

Explique que a IA entende melhor quando usamos **tags com significado**.

### ❌ Ruim

```html
<div>
  <div>Curso de Python</div>
  <div>Aprenda programação</div>
</div>
```

### ✅ Melhor (semântico)

```html
<article>
  <h1>Curso de Python</h1>
  <p>Aprenda programação com exemplos práticos.</p>
</article>
```

### Tags importantes para ensinar

* `<header>` → cabeçalho
* `<nav>` → navegação
* `<main>` → conteúdo principal
* `<article>` → conteúdo independente
* `<section>` → seção
* `<aside>` → conteúdo lateral
* `<footer>` → rodapé
* `<h1> até <h6>` → hierarquia

Exemplo completo simples:

```html
<header>
  <h1>Curso de HTML</h1>
</header>

<main>
  <article>
    <h2>O que é HTML?</h2>
    <p>HTML é a linguagem base da web.</p>
  </article>
</main>

<footer>
  <p>Autor: Luis</p>
</footer>
```

Isso já melhora muito para IA e SEO. 🚀

---

# 2️⃣ Meta tags (metadados básicos)

Explique que essas tags ficam dentro do `<head>`.

```html
<head>
  <title>Curso de HTML Básico</title>
  <meta charset="UTF-8">
  <meta name="description" content="Aprenda HTML básico com exemplos simples">
  <meta name="keywords" content="HTML, CSS, programação, aula">
  <meta name="author" content="Luis Caparroz">
</head>
```

O que cada uma faz:

* `title` → título da página
* `description` → resumo para buscadores
* `keywords` → palavras-chave (menos importante hoje)
* `author` → autor

---

# 3️⃣ Dados estruturados (JSON-LD) — SEO moderno para IA

Aqui você mostra o conceito de **contexto estruturado (MCP-like)**.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso de HTML Básico",
  "description": "Aprenda HTML com exemplos práticos",
  "author": {
    "@type": "Person",
    "name": "Luis Caparroz"
  }
}
</script>
```

Isso diz explicitamente para IA:

* isso é um curso
* quem é o autor
* qual o tema

---

# 🎓 Exemplo completo para aula

Você pode mostrar isso pronto:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Curso HTML</title>
  <meta charset="UTF-8">
  <meta name="description" content="Curso básico de HTML">
  <meta name="author" content="Luis">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Curso HTML Básico",
    "author": {
      "@type": "Person",
      "name": "Luis"
    }
  }
  </script>

</head>

<body>

<header>
  <h1>Curso de HTML</h1>
</header>

<main>
  <article>
    <h2>Introdução</h2>
    <p>Aprenda HTML do zero.</p>
  </article>
</main>

<footer>
  <p>Autor: Luis</p>
</footer>

</body>
</html>
```

---

# 🧠 Como explicar para os alunos

Você pode dizer:

* HTML semântico → organiza o conteúdo
* meta tags → descrevem a página
* JSON-LD → explicam o significado para IA

---

# 🧪 Exercício para alunos

Peça para eles:

1. Criar uma página sobre um curso
2. Usar:

   * `<header>`
   * `<article>`
   * `<footer>`
   * meta description
   * author
3. (Opcional) adicionar JSON-LD

---

# 🎯 Resumo simples para slide

HTML para IA =

* Tags semânticas
* Meta tags
* Dados estruturados
