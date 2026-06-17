document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. BARRA DE PROGRESSO DE LEITURA SUPERIOR
    // ==========================================
    const progressBar = document.getElementById("progress-bar");
    
    window.addEventListener("scroll", () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
    });

    // ==========================================
    // 2. ALTERNADOR DE TEMA (MODO CLARO / ESCURO)
    // ==========================================
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

    // ==========================================
    // 3. MENU DE NAVEGAÇÃO COMPLETO COM LINKS ATIVOS
    // ==========================================
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section-scroll");

    // Efeito visual de link ativo sincronizado com a rolagem
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const headerHeight = 100; // Margem de segurança fixa
            if (window.scrollY >= (sectionTop - headerHeight)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // ==========================================
    // 4. SIMULADOR DE RISCO (CÁLCULO DINÂMICO)
    // ==========================================
    const btnCalcular = document.getElementById("btn-calcular");
    const resultadoSimulador = document.getElementById("resultado-simulador");

    btnCalcular.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll(".risco-check");
        let totalRiskValue = 0;

        // Processamento aritmético dos dados locais marcados
        checkboxes.forEach(box => {
            if (box.checked) {
                totalRiskValue += parseInt(box.value);
            }
        });

        // Configuração estrutural do elemento DOM resultante
        resultadoSimulador.classList.remove("hide");
        resultadoSimulador.className = "result-box"; // Reset de classes de alerta anteriores

        if (totalRiskValue === 0) {
            resultadoSimulador.classList.add("sucesso");
            resultadoSimulador.textContent = "Risco Mínimo (0%): A informação segue padrões comuns de segurança. Contudo, mantenha o hábito de checar.";
        } else if (totalRiskValue <= 40) {
            resultadoSimulador.classList.add("alerta-baixo");
            resultadoSimulador.textContent = `Risco Moderado (${totalRiskValue}%): Atenção! Canais informais detectados. Recomenda-se pesquisar o assunto em portais oficiais.`;
        } else {
            resultadoSimulador.classList.add("alerta-alto");
            resultadoSimulador.textContent = `Risco Crítico (${totalRiskValue}%): Alto perigo de desinformação automatizada detectado. Recomendamos não compartilhar!`;
        }
    });

    // ==========================================
    // 5. VALIDADOR DO QUIZ ANTI-DESINFORMAÇÃO
    // ==========================================
    const quizForm = document.getElementById("quiz-form");
    const quizResultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const answerOne = quizForm.elements["q1"].value;
        const answerTwo = quizForm.elements["q2"].value;
        const answerThree = quizForm.elements["q3"].value;
        const answerFour = quizForm.elements["q4"].value;
        
        let correctAnswersCounter = 0;

        if (answerOne === "certo") correctAnswersCounter += 1;
        if (answerTwo === "certo") correctAnswersCounter += 1;
        if (answerThree === "certo") correctAnswersCounter += 1;
        if (answerFour === "certo") correctAnswersCounter += 1;

        quizResultBox.classList.remove("hide");
        quizResultBox.classList.add("sucesso");
        
        if (correctAnswersCounter === 4) {
            quizResultBox.textContent = `Excelente trabalho! Você gabaritou acertando ${correctAnswersCounter} de 4 questões. Seus conhecimentos em Cidadania Digital são exemplares!`;
        } else if (correctAnswersCounter >= 2) {
            quizResultBox.textContent = `Bom resultado! Você acertou ${correctAnswersCounter} de 4 questões. Continue atento aos sinais técnicos para não ser enganado por manipulações de IA.`;
        } else {
            quizResultBox.textContent = `Você acertou apenas ${correctAnswersCounter} de 4 questões. Recomendamos reler o nosso Guia Prático acima para reforçar sua segurança digital.`;
        }

        quizResultBox.scrollIntoView({ behavior: 'smooth' });
    });

    // ==========================================
    // 6. CENTRAL DE DENÚNCIAS COM FEEDBACK REAL
    // ==========================================
    const denunciaForm = document.getElementById("denuncia-form");
    const denunciaResultBox = document.getElementById("denuncia-result");

    denunciaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const linkDigitado = document.getElementById("midia-url").value;

        denunciaResultBox.classList.remove("hide");
        denunciaResultBox.classList.add("alerta-baixo");
        denunciaResultBox.textContent = `Sucesso! O link cadastrado (${linkDigitado}) foi registrado em nosso banco comunitário sob a hashtag do projeto. Agradecemos sua colaboração!`;

        denunciaForm.reset();
        denunciaResultBox.scrollIntoView({ behavior: 'smooth' });
    });
});
