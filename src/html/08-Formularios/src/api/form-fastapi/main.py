from fastapi import FastAPI, Form, Request  # Importa o framework FastAPI e classes para lidar com formulários e requisições
from fastapi.responses import HTMLResponse, JSONResponse  # Importa classes para respostas em HTML e JSON
from fastapi.staticfiles import StaticFiles  # Importa para servir arquivos estáticos
from fastapi.templating import Jinja2Templates  # Importa para renderizar templates HTML com Jinja2

app = FastAPI()  # Cria uma instância do aplicativo FastAPI

templates = Jinja2Templates(directory="templates")  # Define o diretório onde os templates HTML estão localizados

@app.get("/", response_class=HTMLResponse)  # Define uma rota GET para a raiz ("/") que retorna uma resposta HTML
async def home(request: Request):  # Função assíncrona que lida com a requisição
    return templates.TemplateResponse("index.html", {"request": request})  # Renderiza o template "index.html" e passa o objeto request

@app.get("/home.html", response_class=HTMLResponse)  # Define uma rota GET para "/home.html" que retorna uma resposta HTML
async def home(request: Request):  # Função assíncrona que lida com a requisição
    return templates.TemplateResponse("home.html", {"request": request})  # Renderiza o template "home.html" e passa o objeto request

@app.post("/validar", response_class=JSONResponse)  # Define uma rota POST para "/validar" que retorna uma resposta JSON
async def validar_senha(senha: str = Form(...)):  # Recebe o campo "senha" enviado via formulário
    senha_correta = "1234seguro"  # Define a senha correta para validação
    if senha == senha_correta:  # Verifica se a senha enviada é igual à senha correta
        return {"valido": True}  # Retorna um JSON indicando que a senha é válida
    return {"valido": False}  # Retorna um JSON indicando que a senha é inválida

@app.post("/enviar", response_class=HTMLResponse)  # Define uma rota POST para "/enviar" que retorna uma resposta HTML
async def processar_formulario(request: Request, nome: str = Form(...), idade: int = Form(...)):  
    # Recebe os campos "nome" e "idade" enviados via formulário
    mensagem = f"Olá, {nome}! Você tem {idade} anos."  # Cria uma mensagem personalizada com os dados recebidos
    return templates.TemplateResponse("home.html", {"request": request, "mensagem": mensagem})  
    # Renderiza o template "home.html" e passa a mensagem e o objeto request

@app.post("/validar-entrada-por-idade", response_class=HTMLResponse)  # Define uma rota POST para "/validar-entrada-por-idade"
async def validar_entrada_por_idade(request: Request, idade: int = Form(...)):  
    # Recebe o campo "idade" enviado via formulário
    if idade < 18:  # Verifica se a idade é menor que 18
        mensagem = "Você não tem idade suficiente para acessar esta página."  # Mensagem para menores de idade
    else:
        mensagem = "Você tem idade suficiente para acessar esta página."  # Mensagem para maiores de idade
    return templates.TemplateResponse("home.html", {"request": request, "mensagem": mensagem})  
    # Renderiza o template "home.html" e passa a mensagem e o objeto request

@app.get("/numeros-antes/{valor}", response_class=HTMLResponse)  # Define uma rota GET para "/numeros-antes/{valor}"
async def numeros_antes(request: Request, valor: int):  
    # Recebe o parâmetro "valor" da URL
    numeros = list(range(valor - 1, 0, -1))  # Gera uma lista de números decrescentes antes do valor
    return templates.TemplateResponse("home.html", {"request": request, "numeros": numeros})  
    # Renderiza o template "home.html" e passa a lista de números e o objeto request