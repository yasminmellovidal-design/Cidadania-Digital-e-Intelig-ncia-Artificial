document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CONTROLE DE ACESSIBILIDADE (TEMA ESCURO) ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        if (currentTheme === "dark") {
            document.body.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌓 Modo Escuro";
        } else {
            document.body.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });

    // --- 2. FILTRO DINÂMICO DE MÍDIAS (ABAS INTERATIVAS) ---
    const tabButtons = document.querySelectorAll(".btn-tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove classe ativa de todos os botões
            tabButtons.forEach(btn => btn.classList.remove("active"));
            // Esconde todos os conteúdos
            tabContents.forEach(content => content.classList.add("hide"));

            // Ativa o botão clicado
            button.classList.add("active");
            // Mostra o conteúdo correspondente
            const targetId = `tab-${button.getAttribute("data-target")}`;
            document.getElementById(targetId).classList.remove("hide");
        });
    });

    // --- 3. SIMULADOR DE RISCO (CÁLCULO MATEMÁTICO VIA VARIÁVEIS) ---
    const btnCalcular = document.getElementById("btn-calcular");
    const resultadoSimulador = document.getElementById("resultado-simulador");

    btnCalcular.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll(".risco-check");
        let totalRisco = 0;

        // Processa as informações marcadas pelo usuário antes de exibir
        checkboxes.forEach(box => {
            if (box.checked) {
                totalRisco += parseInt(box.value);
            }
        });

        resultadoSimulador.classList.remove("hide");
        resultadoSimulador.className = "result-box"; // Limpa estados anteriores

        if (totalRisco === 0) {
            resultadoSimulador.textContent = "Risco Mínimo (0%): A notícia apresenta características seguras, mas continue checando fontes oficiais.";
            resultadoSimulador.style.border = "2px solid var(--success-color)";
        } else if (totalRisco <= 40) {
            resultadoSimulador.textContent = `Risco Moderado (${totalRisco}%): Atenção! Recomenda-se pesquisar o assunto antes de repassar.`;
            resultadoSimulador.style.border = "2px solid var(--accent-color)";
        } else {
            resultadoSimulador.textContent = `Risco Altíssimo (${totalRisco}%): Alerta de Fraude provável! Elementos típicos de desinformação por IA detectados. Não compartilhe!`;
            resultadoSimulador.style.border = "2px solid #e53e3e"; // Alerta vermelho
        }
    });

    // --- 4. PROCESSAMENTO E VALIDAÇÃO DO QUIZ ---
    const quizForm = document.getElementById("quiz-form");
    const resultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const ans1 = quizForm.elements["q1"].value;
        const ans2 = quizForm.elements["q2"].value;
        const ans3 = quizForm.elements["q3"].value;
        const ans4 = quizForm.elements["q4"].value;
        
        let scoreCounter = 0;
        if (ans1 === "certo") scoreCounter += 1;
        if (ans2 === "certo") scoreCounter += 1;
        if (ans3 === "certo") scoreCounter += 1;
        if (ans4 === "certo") scoreCounter += 1;

        resultBox.classList.remove("hide");
        resultBox.classList.add("sucesso");
        
        if (scoreCounter === 4) {
            resultBox.textContent = `Excelente! Você acertou todas as ${scoreCounter} questões. Nível exemplar de Cidadania Digital!`;
        } else if (scoreCounter >= 2) {
            resultBox.textContent = `Bom desempenho! Você acertou ${scoreCounter} de 4 questões. Fique de olho nos sinais de fraude.`;
        } else {
            resultBox.textContent = `Você acertou ${scoreCounter} de 4 questões. Revise o nosso guia prático para se proteger melhor.`;
        }
        resultBox.scrollIntoView({ behavior: 'smooth' });
    });

    // --- 5. CANAL DE DENÚNCIAS (COLETA E FEEDBACK DINÂMICO) ---
    const denunciaForm = document.getElementById("denuncia-form");
    const denunciaResult = document.getElementById("denuncia-result");

    denunciaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Coleta simulada das informações inseridas no formulário
        const linkInformado = document.getElementById("midia-url").value;
        
        denunciaResult.classList.remove("hide");
        denunciaResult.textContent = `Obrigado! Seu relato sobre a URL (${linkInformado}) foi armazenado com sucesso no ecossistema comunitário para análise técnica de nossos moderadores acadêmicos.`;
        
        denunciaForm.reset(); // Limpa os campos do formulário após o envio
        denunciaResult.scrollIntoView({ behavior: 'smooth' });
    });
});
