from fastapi import FastAPI, Form, Request, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
import json
import os
from pathlib import Path

app = FastAPI()
templates = Jinja2Templates(directory="templates")

USUARIOS_PATH = Path("usuarios.json")


# ---------- UTILITÁRIOS ----------

def garantir_arquivo():
    """Garante que o arquivo exista e contenha JSON válido (lista)."""
    if not USUARIOS_PATH.exists():
        USUARIOS_PATH.write_text("[]", encoding="utf-8")
    else:
        # se existir mas vazio, escrever lista vazia
        if USUARIOS_PATH.stat().st_size == 0:
            USUARIOS_PATH.write_text("[]", encoding="utf-8")


def carregar_usuarios():
    garantir_arquivo()
    with open(USUARIOS_PATH, "r", encoding="utf-8") as f:
        try:
            dados = json.load(f)
            if not isinstance(dados, list):
                # caso o arquivo tenha um JSON válido mas não seja uma lista, corrigimos
                return []
            return dados
        except json.JSONDecodeError:
            return []


def salvar_todos_usuarios(usuarios: list):
    with open(USUARIOS_PATH, "w", encoding="utf-8") as f:
        json.dump(usuarios, f, ensure_ascii=False, indent=4)


def salvar_usuario(nome: str, email: str, idade: int):
    usuarios = carregar_usuarios()
    usuarios.append({"nome": nome, "email": email, "idade": idade})
    salvar_todos_usuarios(usuarios)


# ---------- ROTAS ----------

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """Página inicial"""
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/formulario", response_class=HTMLResponse)
async def formulario(request: Request):
    """Exibe o formulário para novo usuário (GET)"""
    return templates.TemplateResponse("formulario.html", {"request": request})


@app.post("/enviar")
async def receber_dados(
    nome: str = Form(...),
    email: str = Form(...),
    idade: int = Form(...)
):
    """Recebe os dados do formulário e salva (POST)"""
    salvar_usuario(nome, email, idade)
    # redirect para a lista evita reenvio de formulário ao recarregar
    return RedirectResponse(url="/usuarios", status_code=303)


@app.get("/usuarios", response_class=HTMLResponse)
async def listar_usuarios(request: Request):
    """Lista os usuários (GET)"""
    usuarios = carregar_usuarios()
    return templates.TemplateResponse("usuarios.html", {"request": request, "usuarios": usuarios})


# --- EDITAR ---

@app.get("/usuario/{idx}/editar", response_class=HTMLResponse)
async def editar_form(request: Request, idx: int):
    """Mostra o formulário com os dados do usuário para edição (GET)"""
    usuarios = carregar_usuarios()
    if idx < 0 or idx >= len(usuarios):
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    usuario = usuarios[idx]
    return templates.TemplateResponse("editar_usuario.html", {"request": request, "usuario": usuario, "idx": idx})


@app.post("/usuario/{idx}/editar")
async def editar_salvar(
    idx: int,
    nome: str = Form(...),
    email: str = Form(...),
    idade: int = Form(...)
):
    """Salva as alterações do usuário (POST)"""
    usuarios = carregar_usuarios()
    if idx < 0 or idx >= len(usuarios):
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    usuarios[idx] = {"nome": nome, "email": email, "idade": idade}
    salvar_todos_usuarios(usuarios)
    return RedirectResponse(url="/usuarios", status_code=303)


# --- DELETAR ---

@app.post("/usuario/{idx}/deletar")
async def usuario_deletar(idx: int):
    """Remove um usuário (POST)"""
    usuarios = carregar_usuarios()
    if idx < 0 or idx >= len(usuarios):
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    usuarios.pop(idx)
    salvar_todos_usuarios(usuarios)
    return RedirectResponse(url="/usuarios", status_code=303)
