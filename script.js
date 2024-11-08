const matrixContainer = document.getElementById('matrix-container');

function createMatrixLine() {
    const line = document.createElement('div');
    line.classList.add('matrix-code');
    line.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    line.style.animationDuration = `${Math.random() * 3 + 2}s`; // Velocidade aleatória

    line.textContent = `<div> { /* código */ } </div>`; // Código aleatório
    matrixContainer.appendChild(line);

    // Remover a linha após a animação
    setTimeout(() => {
        matrixContainer.removeChild(line);
    }, 5000);
}

// Criar linhas de código continuamente
setInterval(createMatrixLine, 500);
