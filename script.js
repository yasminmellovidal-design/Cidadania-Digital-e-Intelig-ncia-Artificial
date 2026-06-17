    // --- Funcionalidade 2: Validador do Quiz Anti-Desinformação ---
    const quizForm = document.getElementById("quiz-form");
    const resultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        // Evita o recarregamento padrão da página
        event.preventDefault();

        // Captura e armazenamento das 4 respostas usando variáveis
        const answerOne = quizForm.elements["q1"].value;
        const answerTwo = quizForm.elements["q2"].value;
        const answerThree = quizForm.elements["q3"].value;
        const answerFour = quizForm.elements["q4"].value;
        
        let score = 0;

        // Processamento das informações antes de exibir na tela
        if (answerOne === "certo") score += 1;
        if (answerTwo === "certo") score += 1;
        if (answerThree === "certo") score += 1;
        if (answerFour === "certo") score += 1;

        // Manipulação dinâmica do DOM para o resultado
        resultBox.classList.remove("hide");
        resultBox.classList.add("sucesso");
        
        // Mensagem personalizada com base na pontuação total (de 0 a 4)
        if (score === 4) {
            resultBox.textContent = `Perfeito! Você acertou ${score} de 4 questões. Você é um mestre da cidadania digital!`;
        } else if (score >= 2) {
            resultBox.textContent = `Bom trabalho! Você acertou ${score} de 4 questões. Fique atento aos detalhes para não ser enganado.`;
        } else {
            resultBox.textContent = `Você acertou apenas ${score} de 4 questões. Recomendamos ler o portal com mais atenção para se proteger!`;
        }
    });
