from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
import json
import os

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# ---------- FUNÇÕES AUXILIARES ----------

def salvar_usuario(nome: str, email: str, idade: int):
    """Salva um novo usuário no arquivo JSON"""
    if not os.path.exists("usuarios.json") or os.stat("usuarios.json").st_size == 0:
        usuarios = []
    else:
        with open("usuarios.json", "r") as f:
            usuarios = json.load(f)

    novo_usuario = {"nome": nome, "email": email, "idade": idade}
    usuarios.append(novo_usuario)

    with open("usuarios.json", "w") as f:
        json.dump(usuarios, f, indent=4)


def carregar_usuarios():
    """Carrega usuários do arquivo JSON"""
    if not os.path.exists("usuarios.json") or os.stat("usuarios.json").st_size == 0:
        return []
    with open("usuarios.json", "r") as f:
        return json.load(f)

# ---------- ROTAS ----------

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """Página inicial"""
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/formulario", response_class=HTMLResponse)
async def formulario(request: Request):
    """Exibe o formulário HTML"""
    return templates.TemplateResponse("formulario.html", {"request": request})


@app.post("/enviar")
async def receber_dados(
    nome: str = Form(...),
    email: str = Form(...),
    idade: int = Form(...)
):
    """Recebe os dados do formulário e salva no JSON"""
    salvar_usuario(nome, email, idade)
    return RedirectResponse(url="/usuarios", status_code=303)

@app.get("/usuarios", response_class=HTMLResponse)
async def listar_usuarios(request: Request):
    """Mostra a lista de usuários cadastrados"""
    usuarios = carregar_usuarios()
    return templates.TemplateResponse("usuarios.html", {"request": request, "usuarios": usuarios})
