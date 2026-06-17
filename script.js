document.addEventListener("DOMContentLoaded", () => {
   
    // --- 1. Alternador de Tema Cyber (Neon Cyan vs Neon Pink) ---
    const themeToggleBtn = document.getElementById("theme-toggle");
   
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
       
        if (currentTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggleBtn.textContent = "🌓 Interface Ciano";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Interface Rosa";
        }
    });

    // --- 2. Validador de Respostas do Quiz ---
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const q1 = document.querySelector('input[name="q1"]:checked').value;
        const q2 = document.querySelector('input[name="q2"]:checked').value;
       
        let acertos = 0;
        if (q1 === "correto") acertos++;
        if (q2 === "correto") acertos++;

        quizResult.classList.remove("hidden");
       
        if (acertos === 2) {
            quizResult.style.background = "#059669";
            quizResult.innerHTML = `🥇 Diagnóstico Concluído: Sistema 100% Protegido! Você acertou todas as questões.`;
        } else {
            quizResult.style.background = "#dc2626";
            quizResult.innerHTML = `🧐 Alerta de Sistema: Você acertou ${acertos}/2. Analise os sinais nos cards tridimensionais e tente novamente.`;
        }
    });

    // --- 3. Envio de Relatório Comunitário ---
    const reportForm = document.getElementById("report-form");
    reportForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("🚨 Alerta enviado à rede! Obrigado por fortalecer nossa cidadania digital.");
        reportForm.reset();
    });
});

// --- 4. Controle do Simulador Detetive IA ---
function verificarCaso(escolhaUsuario) {
    const feedback = document.getElementById("simulador-feedback");
    feedback.classList.remove("hidden");

    if (escolhaUsuario === 'fake') {
        feedback.style.background = "#059669";
        feedback.innerHTML = "🎯 Fusão de Dados Correta! Bordas piscando e pânico artificial sem links oficiais são evidências matemáticas de desinformação por IA.";
    } else {
        feedback.style.background = "#dc2626";
        feedback.innerHTML = "❌ Erro de Detecção! Você foi enganado pela IA. Preste atenção nas falhas de renderização antes de validar uma mídia.";
    }
}
