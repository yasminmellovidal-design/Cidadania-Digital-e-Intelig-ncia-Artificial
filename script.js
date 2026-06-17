/**
 * Garante a inicialização segura dos scripts apenas após o 
 * carregamento completo da estrutura DOM da árvore HTML.
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // FUNCIONALIDADE 1: CONTROLE DE ACESSIBILIDADE (TEMA ESCURO)
    // ==========================================
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        // Armazena o estado atual da propriedade customizada
        const currentTheme = document.body.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.body.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌓 Modo Escuro";
        } else {
            document.body.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });

    // ==========================================
    // FUNCIONALIDADE 2: PROCESSAMENTO E VALIDAÇÃO DO QUIZ
    // ==========================================
    const quizForm = document.getElementById("quiz-form");
    const resultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        // Bloqueia a submissão padrão que recarregaria a página no navegador
        event.preventDefault();

        // Declaração de variáveis locais para o processamento das informações
        const ans1 = quizForm.elements["q1"].value;
        const ans2 = quizForm.elements["q2"].value;
        const ans3 = quizForm.elements["q3"].value;
        const ans4 = quizForm.elements["q4"].value;
        
        let scoreCounter = 0;

        // Validação condicional das respostas selecionadas pelo usuário
        if (ans1 === "certo") scoreCounter += 1;
        if (ans2 === "certo") scoreCounter += 1;
        if (ans3 === "certo") scoreCounter += 1;
        if (ans4 === "certo") scoreCounter += 1;

        // Atualização e exibição dinâmica da interface com base no contador
        resultBox.classList.remove("hide");
        resultBox.classList.add("sucesso");
        
        // Estrutura lógica para formatação da mensagem personalizada final
        if (scoreCounter === 4) {
            resultBox.textContent = `Excelente! Você acertou todas as ${scoreCounter} questões. Você possui um nível exemplar de Cidadania Digital!`;
        } else if (scoreCounter >= 2) {
            resultBox.textContent = `Bom desempenho! Você acertou ${scoreCounter} de 4 questões. Continue atento aos sinais de mídias falsas.`;
        } else {
            resultBox.textContent = `Você acertou apenas ${scoreCounter} de 4 questões. Recomendamos revisar as orientações do nosso guia para se proteger melhor!`;
        }

        // Move a tela suavemente até a caixa de resultados
        resultBox.scrollIntoView({ behavior: 'smooth' });
    });
});
