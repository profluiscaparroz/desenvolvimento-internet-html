# 🧱 1. O que é um formulário em HTML?

Um **formulário HTML** é o **mecanismo de coleta de dados** que permite que um usuário envie informações para um servidor web.
Ele é o **elo entre o front-end (interface)** e o **back-end (lógica e banco de dados)**.

📘 **Definição técnica:**
O elemento `<form>` representa uma **seção interativa** de um documento que **coleta entradas de dados** do usuário e as **envia para processamento**.

---

# ⚙️ 2. Estrutura básica de um formulário

Um formulário é definido com a tag `<form>` e normalmente contém elementos como `<input>`, `<textarea>`, `<select>`, `<button>`, entre outros.

Exemplo básico:

```html
<form action="/cadastro" method="POST">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Enviar</button>
</form>
```

## Explicação dos principais atributos:

| Atributo  | Descrição                                                                                     |
| --------- | --------------------------------------------------------------------------------------------- |
| `action`  | URL para onde os dados serão enviados (endpoint do servidor).                                 |
| `method`  | Define o método HTTP (`GET`, `POST`, etc).                                                    |
| `enctype` | Define o tipo de codificação dos dados enviados (usado principalmente em upload de arquivos). |
| `name`    | Nome do campo (chave usada no servidor para identificar o valor).                             |
| `id`      | Identificador único no documento (usado para associar `<label>` ou scripts JS).               |
| `value`   | Valor do campo (texto padrão ou valor selecionado).                                           |

---

# 🧩 3. Elementos de entrada (`input`, `textarea`, `select`)

Os formulários HTML são compostos de **elementos de entrada**.
Cada tipo serve para um propósito diferente.
A seguir, uma explicação detalhada dos principais:

---

## 3.1. `<input>`

É o elemento mais usado. Ele pode assumir vários **tipos de dados** através do atributo `type`.

Exemplo:

```html
<input type="text" name="usuario">
<input type="password" name="senha">
<input type="email" name="email">
<input type="number" name="idade">
<input type="checkbox" name="aceite">
<input type="radio" name="sexo" value="M"> Masculino
<input type="radio" name="sexo" value="F"> Feminino
<input type="file" name="arquivo">
```

### Tipos mais comuns:

| Tipo       | Função                                                       |
| ---------- | ------------------------------------------------------------ |
| `text`     | Texto simples                                                |
| `password` | Oculta os caracteres                                         |
| `email`    | Validação de formato de e-mail                               |
| `number`   | Apenas números                                               |
| `date`     | Data (com seletor de calendário)                             |
| `file`     | Upload de arquivos                                           |
| `checkbox` | Seleções múltiplas                                           |
| `radio`    | Seleção única entre opções                                   |
| `hidden`   | Campo oculto (usado para enviar dados invisíveis ao usuário) |

---

## 3.2. `<textarea>`

Usado para textos longos (ex: descrição, comentários).

```html
<textarea name="mensagem" rows="5" cols="40"></textarea>
```

---

## 3.3. `<select>` e `<option>`

Permitem listas suspensas (dropdowns).

```html
<select name="curso">
  <option value="ads">Análise e Desenvolvimento de Sistemas</option>
  <option value="engcomp">Engenharia da Computação</option>
</select>
```

---

## 3.4. `<button>`

Botões executam ações, como **enviar** o formulário ou **resetar** os campos.

```html
<button type="submit">Enviar</button>
<button type="reset">Limpar</button>
<button type="button" onclick="alert('Olá!')">Mensagem</button>
```

---

# 🌐 4. Funcionamento interno do envio

Quando o usuário clica em **“Enviar”** (`submit`):

1. O navegador **coleta todos os valores dos campos** do formulário.
2. Monta uma requisição HTTP para o endereço do `action`.
3. Usa o método definido (`GET` ou `POST`).
4. Envia a requisição ao servidor.
5. O servidor processa, responde e o navegador atualiza a página (ou mostra uma mensagem).

---

# 🚀 5. Métodos HTTP em formulários

O `method` define **como os dados serão enviados**.

## 5.1. `GET`

* Dados são enviados na **URL** (query string).
* Exemplo: `/buscar?nome=Luis&idade=30`
* Ideal para **pesquisas** ou **filtros**.
* **Não use para senhas ou dados confidenciais.**

## 5.2. `POST`

* Dados são enviados **no corpo (body)** da requisição.
* Usado para **cadastro, login, uploads**.
* Mais **seguro** e **sem limite de tamanho.**

---

# 🧱 6. O atributo `enctype` (tipo de codificação)

Usado com `POST`, define **como os dados são empacotados**.

| Valor                               | Descrição                                        |
| ----------------------------------- | ------------------------------------------------ |
| `application/x-www-form-urlencoded` | Padrão. Campos codificados em pares chave=valor. |
| `multipart/form-data`               | Necessário para **upload de arquivos**.          |
| `text/plain`                        | Texto simples (raro).                            |

Exemplo para upload:

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="foto">
  <button type="submit">Enviar</button>
</form>
```

---

# 💡 7. Atributos úteis nos campos

| Atributo       | Função                                           |
| -------------- | ------------------------------------------------ |
| `required`     | Torna o campo obrigatório                        |
| `placeholder`  | Texto explicativo dentro do campo                |
| `maxlength`    | Limite máximo de caracteres                      |
| `min` / `max`  | Intervalo numérico permitido                     |
| `pattern`      | Expressão regular para validar formato           |
| `disabled`     | Desabilita o campo                               |
| `readonly`     | Impede edição (mas ainda envia o valor)          |
| `autofocus`    | Define o campo que recebe foco ao abrir a página |
| `autocomplete` | Sugere valores salvos anteriormente              |

---

# 🧭 8. Organização visual e semântica

Formulários bem estruturados usam **rótulos (labels)** e **agrupamentos**.

### `<label>`

Associa um texto ao campo correspondente.

```html
<label for="email">E-mail:</label>
<input type="email" id="email" name="email">
```

Clicar no texto “E-mail” ativa o campo — importante para acessibilidade.

### `<fieldset>` e `<legend>`

Usados para agrupar campos relacionados.

```html
<fieldset>
  <legend>Informações pessoais</legend>
  <label>Nome:</label>
  <input type="text" name="nome">
</fieldset>
```

---

# 🔒 9. Segurança em formulários

Ensine seus alunos que **formulários são portas de entrada de dados externos** — e, portanto, devem ser tratados com cuidado.

### Riscos comuns:

* **Injeção de SQL (SQL Injection)**
  Exemplo: enviar `' OR '1'='1` em um campo de login.
* **XSS (Cross-site scripting)**
  Quando o campo aceita HTML/JS e o navegador executa o código.
* **CSRF (Cross-site request forgery)**
  Quando outro site força um usuário a enviar um formulário sem perceber.

### Boas práticas:

* Sempre **validar os dados no servidor**.
* **Nunca confiar no HTML ou JavaScript do cliente.**
* Usar **HTTPS** para proteger dados em trânsito.
* Implementar **tokens CSRF** em sistemas autenticados.

---

# 🧠 10. Validação de formulários

### 10.1. Validação no navegador (client-side)

Feita pelo próprio HTML5:

```html
<input type="email" required>
```

O navegador verifica o formato antes do envio.

### 10.2. Validação no servidor (server-side)

Feita pelo back-end (Python, PHP, .NET, etc):

```python
if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
    raise ValueError("Email inválido")
```

🔎 **Importante:** a validação no servidor é obrigatória — a do navegador é apenas uma ajuda visual.

---

# 🧰 11. Integração com JavaScript

Formulários podem ser manipulados com JavaScript para validações, envios assíncronos (AJAX) ou experiências mais ricas.

Exemplo simples:

```html
<form id="cadastro">
  <input type="text" name="nome">
  <button type="submit">Enviar</button>
</form>

<script>
document.getElementById('cadastro').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Formulário interceptado via JS!');
});
</script>
```

---

# 🧑‍🏫 12. Perguntas frequentes que os alunos fazem (e boas respostas)

| Pergunta do aluno                                | Resposta para ensinar                                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Por que o formulário recarrega a página?         | Porque o envio (`submit`) envia uma requisição completa HTTP ao servidor, o que naturalmente recarrega a resposta. |
| Como evitar o recarregamento?                    | Use JavaScript (fetch ou AJAX) para enviar os dados sem atualizar a página.                                        |
| Posso usar GET para login?                       | Não. GET expõe dados na URL; use POST sempre que houver informações sensíveis.                                     |
| Qual a diferença entre “name” e “id”?            | `name` identifica o dado que vai ao servidor; `id` serve para scripts e labels.                                    |
| Por que usar label?                              | Melhora a acessibilidade, a usabilidade e permite clicar no texto para ativar o campo.                             |
| O HTML valida os campos sozinho?                 | Sim, se usar atributos como `required`, `pattern`, `type`, mas isso não substitui a validação no servidor.         |
| Como enviar um arquivo?                          | Use `input type="file"` e `enctype="multipart/form-data"`.                                                         |
| O que é enctype?                                 | Define como o navegador codifica os dados ao enviar.                                                               |
| Posso ter mais de um formulário na mesma página? | Sim, cada `<form>` é independente.                                                                                 |
| Como enviar para APIs REST?                      | Defina `action` como o endpoint da API e `method` como POST, ou use fetch/axios com JavaScript.                    |

---

# 🧭 13. Conclusão

Formulários são a **base da interação web**.
Eles representam **a ponte entre o usuário e o servidor**, e dominá-los é essencial para compreender o fluxo de dados em qualquer aplicação web moderna.

Em resumo:

* O `<form>` **estrutura a coleta**.
* Os `inputs` **capturam dados**.
* Os métodos `GET` e `POST` **definem a forma de envio**.
* A **validação** garante integridade e segurança.
* E a **acessibilidade + boas práticas** tornam a experiência completa.

---

# 🧾 Projeto de Formulário com FastAPI (GET e POST)

Este projeto tem como objetivo **demonstrar o funcionamento de formulários HTML** integrados ao **FastAPI**, mostrando como o backend recebe dados via **métodos GET e POST**, e como salvá-los em um arquivo `JSON`.

O exemplo é didático e foi desenvolvido para uso em sala de aula, sendo compatível com **MacOS, Linux e Windows**.

---

## 📁 Estrutura do Projeto

```
formulario_fastapi/
│
├── main.py
├── templates/
│   ├── index.html
│   ├── formulario.html
│   └── usuarios.html
├── usuarios.json
├── requirements.txt
└── README.md
```

---

## 🚀 Objetivo do Projeto

Demonstrar:

* Como criar formulários HTML integrados com FastAPI.
* Como o método **GET** exibe páginas ou dados.
* Como o método **POST** envia dados de um formulário para o servidor.
* Como salvar e ler informações de um arquivo `JSON`.
* Como renderizar páginas HTML usando **Jinja2**.

---

## ⚙️ Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seuusuario/formulario_fastapi.git
cd formulario_fastapi
```

### 2️⃣ Crie o ambiente virtual

> Não suba o `.venv` no GitHub — mantenha-o local apenas.

**MacOS / Linux**

```bash
python3 -m venv .venv
source .venv/bin/activate
```

**Windows**

```bash
python -m venv .venv
.venv\Scripts\activate
```

### 3️⃣ Instale as dependências

```bash
pip install -r requirements.txt
```

### 4️⃣ Execute o servidor FastAPI

```bash
uvicorn main:app --reload
```

### 5️⃣ Acesse no navegador

👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 🧠 Entendendo o Funcionamento

### 🔹 1. Página Inicial (`GET /`)

Apresenta o menu principal do sistema:

* Um link para o formulário de cadastro
* Um link para visualizar os usuários cadastrados

Trecho do `main.py`:

```python
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
```

* **Método:** `GET`
* **Função:** Envia uma página HTML ao navegador
* **Explicação:** O navegador apenas solicita a página, sem enviar dados ao servidor.

---

### 🔹 2. Página de Formulário (`GET /formulario`)

Exibe o formulário HTML com campos de nome, e-mail e idade.

Trecho do `main.py`:

```python
@app.get("/formulario", response_class=HTMLResponse)
async def formulario(request: Request):
    return templates.TemplateResponse("formulario.html", {"request": request})
```

📘 **HTML do Formulário (`formulario.html`):**

```html
<form action="/enviar" method="post">
    <label>Nome:</label>
    <input type="text" name="nome" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Idade:</label>
    <input type="number" name="idade" required>

    <button type="submit">Enviar</button>
</form>
```

* **`action="/enviar"`** → define a rota que receberá os dados.
* **`method="post"`** → indica que os dados serão enviados no corpo da requisição.

---

### 🔹 3. Recebendo os Dados (`POST /enviar`)

Ao clicar em “Enviar”, o formulário envia os dados para o servidor.
O FastAPI lê esses dados, salva no `usuarios.json` e retorna uma mensagem de sucesso.

Trecho do `main.py`:

```python
@app.post("/enviar", response_class=HTMLResponse)
async def enviar(request: Request, nome: str = Form(...), email: str = Form(...), idade: int = Form(...)):
    salvar_usuario(nome, email, idade)
    return templates.TemplateResponse("formulario.html", {
        "request": request,
        "mensagem": f"Usuário {nome} cadastrado com sucesso!"
    })
```

* **Método:** `POST`
* **Função:** Recebe dados do formulário e processa no backend.
* **Diferença do GET:** O `POST` envia os dados no **corpo da requisição**, não pela URL.

---

### 🔹 4. Página de Usuários (`GET /usuarios`)

Lê o arquivo `usuarios.json` e mostra todos os cadastros na tela.

```python
@app.get("/usuarios", response_class=HTMLResponse)
async def listar_usuarios(request: Request):
    with open("usuarios.json", "r") as f:
        usuarios = json.load(f)
    return templates.TemplateResponse("usuarios.html", {"request": request, "usuarios": usuarios})
```

📘 **HTML (`usuarios.html`):**

```html
<ul>
{% for usuario in usuarios %}
  <li><b>{{ usuario.nome }}</b> - {{ usuario.email }} ({{ usuario.idade }} anos)</li>
{% endfor %}
</ul>
```

---

## 🧩 Conceitos Fundamentais: GET x POST

| Método   | Uso Principal                      | Envio de Dados         | Segurança    | Exemplo                           |
| -------- | ---------------------------------- | ---------------------- | ------------ | --------------------------------- |
| **GET**  | Solicitar informações do servidor  | Através da URL         | Menos seguro | `/usuarios?id=1`                  |
| **POST** | Enviar informações para o servidor | No corpo da requisição | Mais seguro  | Enviar formulários, uploads, etc. |

**Resumo prático:**

> GET → Busca informações
> POST → Envia informações

---

## 💾 Exemplo de `usuarios.json`

```json
[
    {
        "nome": "Ana Souza",
        "email": "ana@email.com",
        "idade": 29
    },
    {
        "nome": "Carlos Lima",
        "email": "carlos@email.com",
        "idade": 35
    }
]
```

---

## 📚 Conceitos Aplicados

* **FastAPI** → Criação de rotas e controle HTTP (GET/POST)
* **Jinja2** → Renderização de templates HTML
* **Formulários HTML** → Coleta de dados do usuário
* **JSON** → Armazenamento simples de dados
* **Boa prática:** Separar lógica de backend (`main.py`) de visual (`templates/`)

---
