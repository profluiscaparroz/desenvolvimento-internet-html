# 🎨 CSS Avançado: Layouts, Animações e Efeitos

## 🎯 Bem-vindo ao Módulo de CSS Avançado!

Este módulo aprofunda os conhecimentos de CSS com **técnicas avançadas de layout, animações, transformações e efeitos visuais modernos**. Aqui você aprenderá a criar interfaces ricas e interativas usando apenas CSS e JavaScript.

> **Pré-requisito**: Antes de iniciar este módulo, certifique-se de ter concluído os módulos [03-css-fundamentos](../../03-css-fundamentos/), [04-css-cores-medidas](../../04-css-cores-medidas/) e [05-css-layout](../../05-css-layout/).

---

## 📋 O Que Você Aprenderá Neste Módulo

- ✅ Layouts avançados com Flexbox e CSS Grid
- ✅ Posicionamento preciso de elementos (static, relative, absolute, fixed, sticky)
- ✅ Animações CSS com `@keyframes`
- ✅ Transições suaves com `transition`
- ✅ Transformações 2D e 3D (`transform`)
- ✅ Efeitos visuais (sombras, gradientes, filtros)
- ✅ Navegação responsiva (navbar com submenus)
- ✅ Boas práticas de CSS moderno

---

## 🏗️ Estrutura do Módulo

```
06-css-avancado/
├── docs/
│   └── README.md           ← Você está aqui
├── css/
│   ├── style1.css          ← Estilos para exemplos básicos
│   ├── style2.css          ← Estilos para layout
│   ├── style3.css          ← Estilos para navbar
│   └── style4.css          ← Estilos para efeitos avançados
├── exemplo0.html           ← DIV básica com CSS (versão simplificada)
├── exemplo1.html           ← DIV e CSS - Layouts modernos (completo)
├── exemplo2.html           ← Animações e transições
├── exemplo3.html           ← Transformações CSS
├── estilizando-div.html    ← Técnicas de estilização de divs
├── exemplo-leiaute.html    ← Layouts complexos
├── exemplo-nav.html        ← Navegação responsiva básica
├── exemplo-nav-sub.html    ← Navegação com submenus
├── exemplo-nav-json.html   ← Navegação gerada dinamicamente
├── exercicio.html          ← Exercício prático
├── index.html              ← Página principal do módulo
└── exemplo/                ← Projeto completo de portfólio (referência)
    ├── index.html
    ├── login.html
    ├── projetos.html
    ├── sobre.html
    └── referencia.html
```

---

## 🔄 Posicionamento CSS

### Os 5 Tipos de Posicionamento

```css
/* 1. STATIC - padrão, segue o fluxo normal do documento */
.elemento {
    position: static; /* valor padrão */
}

/* 2. RELATIVE - posicionado em relação à sua posição original */
.elemento {
    position: relative;
    top: 10px;    /* desloca 10px para baixo da posição original */
    left: 20px;   /* desloca 20px para a direita */
}

/* 3. ABSOLUTE - posicionado em relação ao ancestral "positioned" */
.container {
    position: relative; /* torna-se referência para filhos absolute */
}

.elemento {
    position: absolute;
    top: 0;
    right: 0;    /* canto superior direito do container */
}

/* 4. FIXED - fixo na viewport (não rola com a página) */
.botao-topo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000; /* fica por cima de outros elementos */
}

/* 5. STICKY - "gruda" ao scroll quando atinge determinada posição */
.navbar {
    position: sticky;
    top: 0; /* gruda no topo ao fazer scroll */
}
```

---

## 🎬 Animações CSS

### Transições com `transition`

Use `transition` para animar mudanças de propriedades CSS de forma suave:

```css
.botao {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    
    /* transition: propriedade | duração | timing-function | atraso */
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.botao:hover {
    background-color: #0056b3;  /* muda suavemente */
    transform: translateY(-3px); /* sobe 3px suavemente */
}
```

### Animações com `@keyframes`

Use `@keyframes` para criar animações personalizadas:

```css
/* Define a animação */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animação com vários passos */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    25%       { transform: translateY(-15px); }
    50%       { transform: translateY(-10px); }
    75%       { transform: translateY(-15px); }
}

/* Aplica a animação */
.elemento {
    /* animation: nome | duração | timing | atraso | repetições | direção */
    animation: fadeIn 0.6s ease-out 0s 1 normal;

    /* Versão simplificada: */
    animation: bounce 1.5s ease infinite;
}
```

---

## 🔄 Transformações CSS

```css
/* Rotação */
.girar {
    transform: rotate(45deg);        /* 2D */
    transform: rotateX(45deg);       /* 3D - eixo X */
    transform: rotateY(45deg);       /* 3D - eixo Y */
}

/* Escala */
.ampliar {
    transform: scale(1.5);           /* aumenta 50% */
    transform: scaleX(2);            /* duplica largura */
}

/* Translação (mover) */
.mover {
    transform: translate(50px, 20px);    /* direita e baixo */
    transform: translateX(-30px);        /* só horizontal */
    transform: translateY(10px);         /* só vertical */
}

/* Inclinação */
.inclinar {
    transform: skew(15deg, 5deg);    /* horizontal e vertical */
}

/* Combinações (ordem importa!) */
.combinar {
    transform: translateY(-10px) rotate(5deg) scale(1.1);
}
```

---

## 🧭 Navegação Responsiva

### Navbar Básica com CSS

```html
<nav class="navbar">
    <div class="nav-container">
        <a href="#" class="nav-logo">MeuSite</a>
        
        <ul class="nav-menu" id="nav-menu">
            <li><a href="#" class="nav-link">Home</a></li>
            <li><a href="#" class="nav-link">Sobre</a></li>
            <li><a href="#" class="nav-link">Contato</a></li>
        </ul>
        
        <!-- Botão hambúrguer para mobile -->
        <div class="nav-toggle" id="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
```

```css
.navbar {
    background: #2d3748;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

/* Responsividade mobile */
@media (max-width: 768px) {
    .nav-menu {
        display: none;          /* oculta em mobile */
        flex-direction: column;
    }

    .nav-menu.ativo {
        display: flex;          /* mostra quando ativado */
    }

    .nav-toggle {
        display: flex;          /* mostra botão hambúrguer */
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
    }
}
```

---

## ✨ Efeitos Visuais Avançados

### Sombras

```css
/* Sombra em caixas */
.card {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    /* box-shadow: x-offset y-offset blur spread color */
}

/* Sombra interna */
.input {
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.15);
}

/* Múltiplas sombras */
.destaque {
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.1),
        0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Sombra em texto */
.titulo {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

### Filtros CSS

```css
/* Filtros de imagem e elementos */
.imagem:hover {
    filter: brightness(1.2);    /* aumenta brilho 20% */
    filter: contrast(1.5);      /* aumenta contraste */
    filter: grayscale(100%);    /* preto e branco */
    filter: blur(3px);          /* desfoque */
    filter: sepia(80%);         /* efeito sépia */
}

/* Fundo desfocado (efeito glassmorphism) */
.card-glass {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}
```

---

## 📚 Exemplos Práticos Neste Módulo

| Arquivo | Conteúdo | Nível |
|---------|----------|-------|
| **index.html** | Portal de navegação do módulo | 🟢 Básico |
| **exemplo0.html** | DIV básica com CSS simples | 🟢 Básico |
| **exemplo1.html** | Layouts modernos (Flexbox, Grid, posicionamento) | 🟡 Intermediário |
| **exemplo2.html** | Animações com `@keyframes` e `transition` | 🟡 Intermediário |
| **exemplo3.html** | Transformações 2D e 3D | 🟡 Intermediário |
| **estilizando-div.html** | Técnicas variadas de estilização | 🟢 Básico |
| **exemplo-leiaute.html** | Layouts de página completos | 🟡 Intermediário |
| **exemplo-nav.html** | Navbar responsiva simples | 🟡 Intermediário |
| **exemplo-nav-sub.html** | Navbar com dropdown/submenus | 🔴 Avançado |
| **exemplo-nav-json.html** | Navbar gerada via JavaScript/JSON | 🔴 Avançado |
| **exercicio.html** | Exercício prático integrado | 🟡 Intermediário |
| **exemplo/** | Projeto completo de portfólio (referência) | 🔴 Avançado |

---

## 🚀 Boas Práticas CSS Avançado

### Performance
- ✅ Prefira `transform` e `opacity` para animações (processadas pela GPU)
- ✅ Evite animar `width`, `height`, `margin`, `padding` (causam reflow)
- ✅ Use `will-change: transform` apenas quando necessário
- ✅ Limite o número de animações simultâneas

### Acessibilidade
- ✅ Respeite `prefers-reduced-motion` para usuários sensíveis a movimento
- ✅ Garanta que animações não impeçam o uso da página

```css
/* Desativa animações para quem prefere menos movimento */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Organização
- ✅ Agrupe regras CSS por componente
- ✅ Use variáveis CSS para valores reutilizáveis
- ✅ Comente seções complexas

---

## 🔗 Recursos Adicionais

- [MDN - CSS Animations](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Animations) - Referência completa
- [MDN - CSS Transforms](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform) - Transformações
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Guia visual
- [Animista](https://animista.net/) - Gerador de animações CSS
- [Cubic Bezier](https://cubic-bezier.com/) - Editor de timing functions

---

## 🚀 Próximos Passos

Após dominar este módulo, você estará pronto para:

1. **[07-javascript-basico](../../07-javascript-basico/)** - Adicionar programação e lógica
2. **[08-javascript-dom](../../08-javascript-dom/)** - Manipular elementos dinamicamente
3. **[09-frameworks-bootstrap](../../09-frameworks-bootstrap/)** - Usar um framework CSS profissional

---

*Última atualização: 2026*
