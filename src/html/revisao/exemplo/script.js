/* ====================================
   REVISÃO COMPLETA - JAVASCRIPT
   Este arquivo demonstra todos os conceitos de JavaScript aprendidos
   ==================================== */

// 07-javascript-basico: Usando 'use strict' para modo estrito
'use strict';

/* ====================================
   07-javascript-basico: VARIÁVEIS E CONSTANTES
   ==================================== */

// Constantes para elementos do DOM
const btnVoltarTopo = document.getElementById('btnVoltarTopo');
const formContato = document.getElementById('formContato');
const mensagemTextarea = document.getElementById('mensagem');
const contadorCaracteres = document.getElementById('contadorCaracteres');

/* ====================================
   08-javascript-dom: MANIPULAÇÃO DO DOM
   ==================================== */

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM carregado com sucesso!');
    
    // Inicializa funcionalidades
    inicializarProgressBars();
    inicializarFormulario();
    inicializarScrollSuave();
    inicializarBotaoTopo();
    inicializarAnimacoes();
});

/* ====================================
   07-javascript-basico: FUNÇÕES
   ==================================== */

/**
 * Inicializa as barras de progresso com animação
 */
function inicializarProgressBars() {
    // 08-javascript-dom: Seleciona todos os elementos com a classe progress-bar
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // 07-javascript-basico: Loop para iterar sobre elementos
    progressBars.forEach(function(bar) {
        // Pega o valor de data-progress
        const progresso = bar.getAttribute('data-progress');
        
        // 07-javascript-basico: setTimeout para criar efeito de delay
        setTimeout(function() {
            // 08-javascript-dom: Manipula o estilo CSS
            bar.style.width = progresso + '%';
        }, 500);
    });
}

/**
 * 10-html5-avancado: Inicializa validação do formulário
 */
function inicializarFormulario() {
    // 08-javascript-dom: Event listener para o formulário
    formContato.addEventListener('submit', function(evento) {
        // 07-javascript-basico: Previne o comportamento padrão
        evento.preventDefault();
        
        // Verifica se o formulário é válido
        if (!formContato.checkValidity()) {
            // 08-javascript-dom: Adiciona classe do Bootstrap para mostrar validação
            formContato.classList.add('was-validated');
            return;
        }
        
        // 07-javascript-basico: Objeto com dados do formulário
        const dadosFormulario = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            assunto: document.getElementById('assunto').value,
            mensagem: mensagemTextarea.value,
            aceitoTermos: document.getElementById('aceitoTermos').checked
        };
        
        // 07-javascript-basico: Console.log para debug
        console.log('📧 Dados do formulário:', dadosFormulario);
        
        // Simula envio do formulário
        enviarFormulario(dadosFormulario);
    });
    
    // 08-javascript-dom: Contador de caracteres
    if (mensagemTextarea) {
        mensagemTextarea.addEventListener('input', function() {
            // 07-javascript-basico: Operações com strings
            const caracteresDigitados = this.value.length;
            const caracteresMaximos = this.getAttribute('maxlength');
            
            // 08-javascript-dom: Atualiza o texto do contador
            contadorCaracteres.textContent = `${caracteresDigitados}/${caracteresMaximos} caracteres`;
            
            // 07-javascript-basico: Estrutura condicional (if/else)
            if (caracteresDigitados > caracteresMaximos * 0.9) {
                contadorCaracteres.style.color = '#dc3545'; // Vermelho
            } else {
                contadorCaracteres.style.color = '#6c757d'; // Cinza
            }
        });
    }
}

/**
 * 07-javascript-basico: Função para simular envio do formulário
 * @param {Object} dados - Dados do formulário
 */
function enviarFormulario(dados) {
    // Mostra mensagem de sucesso
    mostrarNotificacao('Mensagem enviada com sucesso! 🎉', 'success');
    
    // 07-javascript-basico: setTimeout para resetar após 2 segundos
    setTimeout(function() {
        formContato.reset();
        formContato.classList.remove('was-validated');
        contadorCaracteres.textContent = '0/500 caracteres';
    }, 2000);
}

/**
 * 08-javascript-dom: Função para scroll suave nas âncoras
 */
function inicializarScrollSuave() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 07-javascript-basico: Pega o atributo href
            const targetId = this.getAttribute('href');
            
            // 08-javascript-dom: Seleciona o elemento alvo
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 08-javascript-dom: Scroll suave para o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fecha o menu mobile se estiver aberto
                const navCollapse = document.getElementById('navbarNav');
                if (navCollapse && navCollapse.classList.contains('show')) {
                    // 08-javascript-dom: Remove classe Bootstrap
                    navCollapse.classList.remove('show');
                }
            }
        });
    });
}

/**
 * 08-javascript-dom: Controla a visibilidade do botão "Voltar ao Topo"
 */
function inicializarBotaoTopo() {
    // 08-javascript-dom: Event listener para scroll
    window.addEventListener('scroll', function() {
        // 07-javascript-basico: Operador ternário
        const mostrar = window.pageYOffset > 300;
        
        if (mostrar) {
            btnVoltarTopo.classList.add('mostrar');
        } else {
            btnVoltarTopo.classList.remove('mostrar');
        }
    });
}

/**
 * Função para voltar ao topo da página
 */
function voltarAoTopo() {
    // 08-javascript-dom: Scroll suave para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * 08-javascript-dom: Adiciona animações aos elementos quando entram na viewport
 */
function inicializarAnimacoes() {
    // 08-javascript-dom: Intersection Observer API
    const observador = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // 08-javascript-dom: Adiciona classe de animação
                entry.target.classList.add('animado');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observa elementos que devem ser animados
    const elementosAnimados = document.querySelectorAll('.card-habilidade, .projeto-card');
    elementosAnimados.forEach(function(elemento) {
        observador.observe(elemento);
    });
}

/**
 * 07-javascript-basico: Função para mostrar mensagem
 * @param {string} mensagem - Texto da mensagem
 */
function mostrarMensagem(mensagem) {
    mostrarNotificacao(mensagem, 'info');
}

/**
 * 08-javascript-dom: Função para rolar até uma seção
 * @param {string} secaoId - ID da seção
 */
function scrollToSection(secaoId) {
    const secao = document.getElementById(secaoId);
    if (secao) {
        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * 07-javascript-basico: Função para ver detalhes do projeto
 * @param {string} nomeProjeto - Nome do projeto
 */
function verDetalhes(nomeProjeto) {
    // 07-javascript-basico: Template strings
    const mensagem = `Você clicou em: ${nomeProjeto}\n\nEste é um exemplo de interação JavaScript!`;
    mostrarNotificacao(mensagem, 'info');
}

/**
 * 08-javascript-dom: Cria e mostra notificação personalizada
 * @param {string} mensagem - Texto da notificação
 * @param {string} tipo - Tipo da notificação (success, error, info, warning)
 */
function mostrarNotificacao(mensagem, tipo = 'info') {
    // 08-javascript-dom: Cria elemento de notificação
    const notificacao = document.createElement('div');
    
    // 07-javascript-basico: Define classes baseado no tipo
    let classeBootstrap = 'alert-info';
    let icone = 'ℹ️';
    
    // 07-javascript-basico: Switch statement
    switch(tipo) {
        case 'success':
            classeBootstrap = 'alert-success';
            icone = '✅';
            break;
        case 'error':
            classeBootstrap = 'alert-danger';
            icone = '❌';
            break;
        case 'warning':
            classeBootstrap = 'alert-warning';
            icone = '⚠️';
            break;
        default:
            classeBootstrap = 'alert-info';
            icone = 'ℹ️';
    }
    
    // 08-javascript-dom: Define classes e conteúdo
    notificacao.className = `alert ${classeBootstrap} alert-dismissible fade show position-fixed`;
    notificacao.style.cssText = 'top: 80px; right: 20px; z-index: 9999; min-width: 300px; max-width: 500px;';
    notificacao.innerHTML = `
        ${icone} ${mensagem}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // 08-javascript-dom: Adiciona ao body
    document.body.appendChild(notificacao);
    
    // 07-javascript-basico: Remove após 5 segundos
    setTimeout(function() {
        // 08-javascript-dom: Adiciona classe para fade out
        notificacao.classList.remove('show');
        
        setTimeout(function() {
            // 08-javascript-dom: Remove do DOM
            if (notificacao.parentElement) {
                notificacao.parentElement.removeChild(notificacao);
            }
        }, 150);
    }, 5000);
}

/* ====================================
   07-javascript-basico: EXEMPLOS DE CONCEITOS
   ==================================== */

/**
 * Demonstra operações matemáticas básicas
 */
function exemploOperacoes() {
    // 07-javascript-basico: Variáveis e operações
    let a = 10;
    let b = 5;
    
    console.log('Soma:', a + b);        // 15
    console.log('Subtração:', a - b);   // 5
    console.log('Multiplicação:', a * b); // 50
    console.log('Divisão:', a / b);     // 2
    console.log('Módulo:', a % b);      // 0
}

/**
 * Demonstra estruturas de controle
 */
function exemploEstruturasControle() {
    // 07-javascript-basico: Array
    const habilidades = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'FastAPI'];
    
    console.log('=== Minhas Habilidades ===');
    
    // 07-javascript-basico: Loop for
    for (let i = 0; i < habilidades.length; i++) {
        console.log(`${i + 1}. ${habilidades[i]}`);
    }
    
    // 07-javascript-basico: forEach
    console.log('\n=== Com forEach ===');
    habilidades.forEach(function(habilidade, index) {
        console.log(`${index + 1}. ${habilidade}`);
    });
    
    // 07-javascript-basico: Filter
    console.log('\n=== Habilidades que contêm "a" ===');
    const filtradas = habilidades.filter(function(h) {
        return h.toLowerCase().includes('a');
    });
    console.log(filtradas);
}

/**
 * Demonstra manipulação de objetos
 */
function exemploObjetos() {
    // 07-javascript-basico: Objeto
    const desenvolvedor = {
        nome: 'João Silva',
        idade: 25,
        habilidades: ['HTML', 'CSS', 'JavaScript'],
        ativo: true,
        
        // 07-javascript-basico: Método do objeto
        apresentar: function() {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        },
        
        adicionarHabilidade: function(habilidade) {
            this.habilidades.push(habilidade);
        }
    };
    
    console.log(desenvolvedor.apresentar());
    console.log('Habilidades:', desenvolvedor.habilidades);
    
    desenvolvedor.adicionarHabilidade('Bootstrap');
    console.log('Novas habilidades:', desenvolvedor.habilidades);
}

/* ====================================
   08-javascript-dom: MANIPULAÇÃO AVANÇADA DO DOM
   ==================================== */

/**
 * Exemplo de criação dinâmica de elementos
 */
function exemploCriacaoElementos() {
    // 08-javascript-dom: Cria novo elemento
    const novoCard = document.createElement('div');
    novoCard.className = 'card';
    
    // 08-javascript-dom: Define HTML interno
    novoCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Novo Card</h5>
            <p class="card-text">Este card foi criado dinamicamente com JavaScript!</p>
        </div>
    `;
    
    console.log('Novo elemento criado:', novoCard);
}

/**
 * Exemplo de event listeners múltiplos
 */
function exemploEventListeners() {
    // 08-javascript-dom: Múltiplos eventos no mesmo elemento
    const botao = document.createElement('button');
    
    // Evento de clique
    botao.addEventListener('click', function() {
        console.log('Botão clicado!');
    });
    
    // Evento de mouse over
    botao.addEventListener('mouseenter', function() {
        console.log('Mouse sobre o botão');
    });
    
    // Evento de mouse out
    botao.addEventListener('mouseleave', function() {
        console.log('Mouse saiu do botão');
    });
}

// 07-javascript-basico: Log de inicialização
console.log('🚀 JavaScript carregado e pronto!');
console.log('📚 Este arquivo demonstra conceitos de:');
console.log('   - Variáveis e constantes');
console.log('   - Funções e parâmetros');
console.log('   - Manipulação do DOM');
console.log('   - Event listeners');
console.log('   - Estruturas de controle');
console.log('   - Objetos e arrays');
console.log('   - APIs do navegador');
