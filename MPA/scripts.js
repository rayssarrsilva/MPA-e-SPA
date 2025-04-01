// Script para links dinâmicos na página inicial
function initHomePage() {
    // Detectar se há promoções ativas
    const temPromocoes = true; // Isso seria determinado dinamicamente
    
    if (temPromocoes) {
        // Criar banner de promoção dinamicamente
        const hero = document.querySelector('.hero');
        if (hero) {
            const promoBanner = document.createElement('div');
            promoBanner.className = 'promo-banner';
            promoBanner.innerHTML = '<p>Promoção especial! <a href="mpa-example-produtos.html?promocao=true">Clique aqui</a> para ver todos os produtos em oferta.</p>';
            hero.appendChild(promoBanner);
        }
    }
}

// Script para gerenciar o filtro de produtos
function initProductsPage() {
    const aplicarFiltroBtn = document.getElementById('aplicar-filtro');
    if (aplicarFiltroBtn) {
        aplicarFiltroBtn.addEventListener('click', function() {
            const categoria = document.getElementById('categoria-filtro').value;
            if (categoria) {
                window.location.href = `mpa-example-produtos.html?categoria=${categoria}`;
            } else {
                window.location.href = 'mpa-example-produtos.html';
            }
        });
    }
    
    // Script para carregar produtos baseado na URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    
    if (categoria) {
        const categoriaFiltro = document.getElementById('categoria-filtro');
        if (categoriaFiltro) {
            categoriaFiltro.value = categoria;
        }
        // Aqui normalmente teríamos uma chamada ao servidor para buscar produtos filtrados
        console.log(`Carregando produtos da categoria: ${categoria}`);
    }
}

// Iniciar scripts quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar qual página está carregada e iniciar os scripts apropriados
    if (document.querySelector('.hero')) {
        // Estamos na página inicial
        initHomePage();
    }
    
    if (document.querySelector('.produtos-lista')) {
        // Estamos na página de produtos
        initProductsPage();
    }
});
