document.addEventListener("DOMContentLoaded", () => {
    
    // 1. BARRA DE PROGRESSO DE LEITURA
    const progressBar = document.getElementById("progress-bar");
    window.addEventListener("scroll", () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
    });

    // 2. ALTERNADOR DE TEMA (COM LABELS INVERTIDAS PARA PRETO/AZUL PADRÃO)
    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        if (currentTheme === "light") {
            document.body.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌓 Modo Claro";
        } else {
            document.body.setAttribute("data-theme", "light");
            themeToggleBtn.textContent = "☀️ Modo Escuro";
        }
    });

    // 3. MENU ATIVO CONFORME SCROLL
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section-scroll");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const headerHeight = 110;
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

    // 4. CALCULO ARITMÉTICO DO SIMULADOR
    const btnCalcular = document.getElementById("btn-calcular");
    const resultadoSimulador = document.getElementById("resultado-simulador");

    btnCalcular.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll(".risco-check");
        let scoreRisco = 0;

        checkboxes.forEach(box => {
            if (box.checked) {
                scoreRisco += parseInt(box.value);
            }
        });

        resultadoSimulador.classList.remove("hide");
        resultadoSimulador.className = "result-box"; 

        if (scoreRisco === 0) {
            resultadoSimulador.classList.add("sucesso");
            resultadoSimulador.textContent = "Risco Mínimo (0%): Elementos seguros analisados.";
        } else if (scoreRisco <= 40) {
            resultadoSimulador.classList.add("alerta-baixo");
            resultadoSimulador.textContent = `Risco Moderado (${scoreRisco}%): Recomenda-se checar canais de imprensa oficiais.`;
        } else {
            resultadoSimulador.classList.add("alerta-alto");
            resultadoSimulador.textContent = `Risco Crítico (${scoreRisco}%): Alta probabilidade de manipulação digital por IA!`;
        }
    });

    // 5. VALIDÃO DO QUIZ ANTI-DESINFORMAÇÃO
    const quizForm = document.getElementById("quiz-form");
    const quizResultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const ans1 = quizForm.elements["q1"].value;
        const ans2 = quizForm.elements["q2"].value;
        const ans3 = quizForm.elements["q3"].value;
        const ans4 = quizForm.elements["q4"].value;
        
        let acertos = 0;
        if (ans1 === "certo") acertos += 1;
        if (ans2 === "certo") acertos += 1;
        if (ans3 === "certo") acertos += 1;
        if (ans4 === "certo") acertos += 1;

        quizResultBox.classList.remove("hide");
        quizResultBox.className = "result-box sucesso";
        
        if (acertos === 4) {
            quizResultBox.textContent = `Excelente! Você gabaritou (${acertos}/4). Nível mestre em Cidadania Digital!`;
        } else if (acertos >= 2) {
            quizResultBox.textContent = `Bom trabalho! Você acertou ${acertos} de 4 questões. Atente-se aos detalhes técnicos.`;
        } else {
            quizResultBox.textContent = `Você acertou ${acertos} de 4 questões. Leia nosso guia de análise facial e áudio para melhorar.`;
        }
        quizResultBox.scrollIntoView({ behavior: 'smooth' });
    });

    // 6. FORMULÁRIO DE DENÚNCIA COM COLOÇÃO DE FEEDBACK
    const denunciaForm = document.getElementById("denuncia-form");
    const denunciaResultBox = document.getElementById("denuncia-result");

    denunciaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const linkValido = document.getElementById("midia-url").value;

        denunciaResultBox.classList.remove("hide");
        denunciaResultBox.className = "result-box alerta-baixo";
        denunciaResultBox.textContent = `Aviso: Mídia registrada (${linkValido}). Encaminhado ao banco de checagem da comunidade escolar.`;

        denunciaForm.reset();
        denunciaResultBox.scrollIntoView({ behavior: 'smooth' });
    });
});
