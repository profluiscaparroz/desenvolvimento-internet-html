from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS para permitir acesso do HTML local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/receber")
async def receber(nome: str, idade: int):
    return {"mensagem": f"Olá {nome}, você tem {idade} anos."}
