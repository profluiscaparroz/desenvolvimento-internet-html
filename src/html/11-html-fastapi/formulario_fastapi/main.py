from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
import json
import os

# Criação da aplicação FastAPI
app = FastAPI()

# Configuração do diretório onde estão os templates HTML
templates = Jinja2Templates(directory="templates")

# ---------- FUNÇÕES AUXILIARES ----------

def salvar_usuario(nome: str, email: str, idade: int):
    """
    Salva um novo usuário no arquivo JSON.
    Se o arquivo não existir ou estiver vazio, cria uma lista vazia.
    Adiciona o novo usuário à lista e salva no arquivo.
    """
    if not os.path.exists("usuarios.json") or os.stat("usuarios.json").st_size == 0:
        usuarios = []  # Cria uma lista vazia se o arquivo não existir ou estiver vazio
    else:
        with open("usuarios.json", "r") as f:
            usuarios = json.load(f)  # Carrega os usuários existentes do arquivo

    # Cria um dicionário com os dados do novo usuário
    novo_usuario = {"nome": nome, "email": email, "idade": idade}
    usuarios.append(novo_usuario)  # Adiciona o novo usuário à lista

    # Salva a lista atualizada no arquivo JSON
    with open("usuarios.json", "w") as f:
        json.dump(usuarios, f, indent=4)


def carregar_usuarios():
    """
    Carrega os usuários do arquivo JSON.
    Retorna uma lista vazia se o arquivo não existir ou estiver vazio.
    """
    if not os.path.exists("usuarios.json") or os.stat("usuarios.json").st_size == 0:
        return []  # Retorna uma lista vazia se o arquivo não existir ou estiver vazio
    with open("usuarios.json", "r") as f:
        return json.load(f)  # Retorna a lista de usuários carregada do arquivo

# ---------- ROTAS ----------

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """
    Rota para a página inicial.
    Renderiza o template 'index.html'.
    """
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/formulario", response_class=HTMLResponse)
async def formulario(request: Request):
    """
    Rota para exibir o formulário HTML.
    Renderiza o template 'formulario.html'.
    """
    return templates.TemplateResponse("formulario.html", {"request": request})


@app.post("/enviar")
async def receber_dados(
    nome: str = Form(...),  # Recebe o campo 'nome' do formulário
    email: str = Form(...),  # Recebe o campo 'email' do formulário
    idade: int = Form(...)  # Recebe o campo 'idade' do formulário
):
    """
    Rota para receber os dados enviados pelo formulário.
    Salva os dados no arquivo JSON e redireciona para a página de usuários.
    """
    salvar_usuario(nome, email, idade)  # Salva os dados do usuário no arquivo JSON
    return RedirectResponse(url="/usuarios", status_code=303)  # Redireciona para a rota '/usuarios'


@app.get("/usuarios", response_class=HTMLResponse)
async def listar_usuarios(request: Request):
    """
    Rota para listar os usuários cadastrados.
    Carrega os usuários do arquivo JSON e renderiza o template 'usuarios.html'.
    """
    usuarios = carregar_usuarios()  # Carrega os usuários do arquivo JSON
    return templates.TemplateResponse("usuarios.html", {"request": request, "usuarios": usuarios})
