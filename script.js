// script.js - Actualizado con nuevos nombres, fechas, % avance y % esperado (resto igual)

const tasks = [
    {id: 1, name: "Proyecto SDS Implementación ERP Oracle Fusion", start: "2025-11-28", end: "2027-02-25", phase: true, progress: 9, expected: 10},
    {id: 50, name: "Fase 1: Inicial – Preparación y Formalización", start: "2025-11-28", end: "2026-02-04", phase: true, progress: 100, expected: 100},
    {id: 51, name: "Preliminar", start: "2025-11-28", end: "2025-11-28", phaseId: 50, progress: 100, expected: 100},
    {id: 65, name: "Sesión de Kickoff", start: "2025-11-28", end: "2025-12-10", phaseId: 50, progress: 100, expected: 100},
    {id: 70, name: "Construcción de plan de trabajo", start: "2025-12-12", end: "2026-01-08", phaseId: 50, progress: 100, expected: 100},
    {id: 87, name: "Entregables", start: "2025-12-15", end: "2026-02-04", phaseId: 50, progress: 100, expected: 100},
    {id: 179, name: "Fase 2: Planeación y Diseño – Estructuración Estratégica y Técnica", start: "2026-01-13", end: "2026-05-06", phase: true, progress: 16, expected: 21},
    {id: 180, name: "Entendimiento modelo funcional ERP Cloud (Workshops)", start: "2026-01-13", end: "2026-02-03", phaseId: 179, progress: 100, expected: 100},
    {id: 181, name: "Diligenciamiento de cuestionarios modelo funcional ERP Cloud", start: "2026-02-05", end: "2026-02-19", phaseId: 179, progress: 72, expected: 100},
    {id: 182, name: "Validación de modelo integral ERP Cloud (sesiones requeridas)", start: "2026-02-20", end: "2026-02-26", phaseId: 179, progress: 11, expected: 0},
    {id: 183, name: "Validación requerimientos (Anexo técnico)", start: "2026-02-26", end: "2026-03-11", phaseId: 179, progress: 0, expected: 0},
    {id: 184, name: "Revisión de reportes estandar y necesidades de información", start: "2026-03-12", end: "2026-03-20", phaseId: 179, progress: 0, expected: 0},
    {id: 185, name: "Validación de integraciones entre ERP Cloud y otros sistemas", start: "2026-02-27", end: "2026-03-12", phaseId: 179, progress: 0, expected: 0},
    {id: 186, name: "Levantamiento de escenarios funcionales", start: "2026-03-12", end: "2026-03-25", phaseId: 179, progress: 0, expected: 0},
    {id: 187, name: "Definición de brechas", start: "2026-03-26", end: "2026-04-08", phaseId: 179, progress: 0, expected: 0},
    {id: 188, name: "Construcción matriz de seguridad", start: "2026-03-12", end: "2026-03-16", phaseId: 179, progress: 0, expected: 0},
    {id: 189, name: "Construcción de diseño funcional", start: "2026-04-09", end: "2026-04-20", phaseId: 179, progress: 0, expected: 0},
    {id: 190, name: "Presentación modelo funcional ERP Cloud al equipo", start: "2026-04-21", end: "2026-04-30", phaseId: 179, progress: 0, expected: 0},
    {id: 191, name: "Entregables", start: "2026-05-04", end: "2026-05-06", phaseId: 179, progress: 0, expected: 0},
    {id: 259, name: "Fase 3: Implementación – Configuración y Desarrollo", start: "2026-04-22", end: "2026-09-04", phase: true, progress: 0, expected: 0},
    {id: 260, name: "Gestión de datos para test", start: "2026-04-22", end: "2026-07-16", phaseId: 259, progress: 0, expected: 0},
    {id: 261, name: "Configuración estandar", start: "2026-04-29", end: "2026-07-02", phaseId: 259, progress: 0, expected: 0},
    {id: 262, name: "Configuración y validación de escenarios", start: "2026-05-15", end: "2026-07-09", phaseId: 259, progress: 0, expected: 0},
    {id: 263, name: "Desarrollo de personalizaciones", start: "2026-06-02", end: "2026-08-05", phaseId: 259, progress: 0, expected: 0},
    {id: 264, name: "Desarrollo de Integraciones", start: "2026-07-03", end: "2026-09-04", phaseId: 259, progress: 0, expected: 0},
    {id: 265, name: "Desarrollo de reportes", start: "2026-07-03", end: "2026-09-04", phaseId: 259, progress: 0, expected: 0},
    {id: 266, name: "Pruebas unitarias (funcionales)", start: "2026-07-15", end: "2026-09-01", phaseId: 259, progress: 0, expected: 0},
    {id: 267, name: "Entregables", start: "2026-09-02", end: "2026-09-04", phaseId: 259, progress: 0, expected: 0},
    {id: 328, name: "Fase 4: Pruebas Integrales – Validación del sistema", start: "2026-09-02", end: "2026-10-30", phase: true, progress: 0, expected: 0},
    {id: 329, name: "Pruebas integrales (horizontales)", start: "2026-09-02", end: "2026-09-24", phaseId: 328, progress: 0, expected: 0},
    {id: 330, name: "Pruebas UAT", start: "2026-09-25", end: "2026-10-27", phaseId: 328, progress: 0, expected: 0},
    {id: 331, name: "Entregables", start: "2026-10-28", end: "2026-10-30", phaseId: 328, progress: 0, expected: 0},
    {id: 332, name: "Fase 5: Salida a Producción, Soporte y Cierre – Activación,Estabilización y Transferencia", start: "2026-11-03", end: "2027-02-25", phase: true, progress: 0, expected: 0},
    {id: 333, name: "Axentria HCM - Apoyo a pruebas UAT", start: "2026-11-05", end: "2026-11-11", phaseId: 332, progress: 0, expected: 0},
    {id: 334, name: "Preparación", start: "2026-11-03", end: "2026-11-26", phaseId: 332, progress: 0, expected: 0},
    {id: 335, name: "Capacitación", start: "2026-11-03", end: "2026-12-17", phaseId: 332, progress: 0, expected: 0},
    {id: 336, name: "Definir modelo de soporte", start: "2026-11-03", end: "2026-12-17", phaseId: 332, progress: 0, expected: 0},
    {id: 337, name: "Datos Cuestionarios", start: "2026-11-03", end: "2026-11-17", phaseId: 332, progress: 0, expected: 0},
    {id: 338, name: "Configuración Productivo", start: "2026-11-03", end: "2026-11-30", phaseId: 332, progress: 0, expected: 0},
    {id: 339, name: "Seguridades", start: "2026-11-18", end: "2026-11-30", phaseId: 332, progress: 0, expected: 0},
    {id: 340, name: "Gestión de datos para producción", start: "2026-11-03", end: "2026-12-30", phaseId: 332, progress: 0, expected: 0},
    {id: 341, name: "Programación", start: "2026-11-05", end: "2026-12-07", phaseId: 332, progress: 0, expected: 0},
    {id: 342, name: "Aprobación Salida en Vivo", start: "2026-12-09", end: "2026-12-17", phaseId: 332, progress: 0, expected: 0},
    {id: 343, name: "Salida en vivo", start: "2026-12-18", end: "2027-02-08", phaseId: 332, progress: 0, expected: 0},
    {id: 344, name: "Transacciones controladas", start: "2027-02-02", end: "2027-02-22", phaseId: 332, progress: 0, expected: 0},
    {id: 345, name: "Entregables", start: "2027-02-23", end: "2027-02-25", phaseId: 332, progress: 0, expected: 0}
];

// Timeline inicia en noviembre 2025
const startDate = new Date("2025-10-01");
const endDate = new Date("2027-03-01"); // Margen para febrero 2027

function generateTimelineHeaders() {
    let current = new Date(startDate);
    const headers = [];
    while (current <= endDate) {
        const year = current.getFullYear();
        const month = current.toLocaleString('es-ES', { month: 'short' });
        headers.push({year, month, date: new Date(current)});
        current.setMonth(current.getMonth() + 1);
    }
    return headers;
}

function calculateBar(task) {
    const taskStart = new Date(task.start);
    const taskEnd = new Date(task.end);
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const daysFromStart = (taskStart - startDate) / (1000 * 60 * 60 * 24);
    const durationDays = (taskEnd - taskStart) / (1000 * 60 * 60 * 24) + 1;

    const leftPercent = (daysFromStart / totalDays) * 100;
    const widthPercent = (durationDays / totalDays) * 100;

    return {leftPercent, widthPercent};
}

function getPhaseColors(task) {
    let vibrant = '#455a64';
    let pastel = '#b0bec5';

    const phaseId = task.phase ? task.id : (task.phaseId || 1);

    if (phaseId === 1) {
        vibrant = '#455a64'; pastel = '#cfd8dc';
    } else if (phaseId === 50) {
        vibrant = '#1976d2'; pastel = '#bbdefb';
    } else if (phaseId === 179) {
        vibrant = '#388e3c'; pastel = '#c8e6c9';
    } else if (phaseId === 259) {
        vibrant = '#f57c00'; pastel = '#ffe0b2';
    } else if (phaseId === 328) {
        vibrant = '#7b1fa2'; pastel = '#e1bee7';
    }

    return {vibrant, pastel};
}

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("gantt-table");
    const months = generateTimelineHeaders();
    const collapsedPhases = new Set();

    // Cabecera
    const headerRow = document.createElement("tr");
    const emptyTh = document.createElement("th");
    emptyTh.className = "task-name";
    emptyTh.textContent = "Tarea";
    headerRow.appendChild(emptyTh);

    months.forEach(m => {
        const th = document.createElement("th");
        th.className = "month-header timeline-header";
        th.textContent = `${m.month} ${m.year}`;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    function createTaskRow(task) {
        const row = document.createElement("tr");
        row.dataset.phaseId = task.phaseId || task.id;

        if (task.phaseId && collapsedPhases.has(task.phaseId)) {
            row.style.display = "none";
        }

        const {vibrant, pastel} = getPhaseColors(task);

        const taskNameBg = pastel;
        const timelineBg = pastel + '44';

        const nameTd = document.createElement("td");
        nameTd.className = "task-name";
        if (task.phase) nameTd.classList.add("phase");
        nameTd.style.backgroundColor = taskNameBg;

        if (task.phase) {
            const toggle = document.createElement("span");
            toggle.className = "toggle-indicator";
            toggle.textContent = collapsedPhases.has(task.id) ? "▶" : "▼";
            toggle.style.backgroundColor = pastel + 'CC';
            toggle.style.color = vibrant;
            toggle.style.cursor = "pointer";

            toggle.onclick = (e) => {
                e.stopPropagation();
                const isCollapsed = collapsedPhases.has(task.id);
                if (isCollapsed) {
                    collapsedPhases.delete(task.id);
                    toggle.textContent = "▼";
                } else {
                    collapsedPhases.add(task.id);
                    toggle.textContent = "▶";
                }
                document.querySelectorAll(`tr[data-phase-id="${task.id}"]`).forEach(r => {
                    if (r !== row) r.style.display = isCollapsed ? "" : "none";
                });
            };
            nameTd.appendChild(toggle);
        }

        nameTd.appendChild(document.createTextNode(task.name));
        row.appendChild(nameTd);

        // Celdas individuales para meses
        months.forEach(() => {
            const td = document.createElement("td");
            td.className = "timeline-cell";
            td.style.backgroundColor = timelineBg;
            row.appendChild(td);
        });

        // Contenedor para barra solapada
        const barContainer = document.createElement("div");
        barContainer.style.position = "absolute";
        barContainer.style.top = "0";
        barContainer.style.left = "380px";
        barContainer.style.width = "calc(100% - 380px)";
        barContainer.style.height = "50px";
        barContainer.style.pointerEvents = "none";
        row.style.position = "relative";
        row.appendChild(barContainer);

        if (task.start && task.end) {
            const {leftPercent, widthPercent} = calculateBar(task);

            const bar = document.createElement("div");
            bar.className = "gantt-bar";

            if (task.phase) {
                bar.classList.add("phase");
            }

            bar.style.background = vibrant;
            bar.style.borderColor = vibrant;
            bar.style.left = `${leftPercent}%`;
            bar.style.width = `${widthPercent}%`;

            const durationDays = (new Date(task.end) - new Date(task.start)) / (1000 * 60 * 60 * 24);
            if (durationDays <= 1) {
                bar.classList.add("milestone");
                bar.title = `${task.name} - ${task.start}`;
            } else {
                bar.title = `${task.start} → ${task.end}`;
            }

            barContainer.appendChild(bar);
        }

        return row;
    }

    tasks.forEach(task => table.appendChild(createTaskRow(task)));

    // Colapsar fases al inicio (excepto proyecto general)
    tasks.filter(t => t.phase && t.id !== 1).forEach(phase => {
        collapsedPhases.add(phase.id);
        document.querySelectorAll(`tr[data-phase-id="${phase.id}"]`).forEach(r => {
            if (!r.querySelector('.phase')) r.style.display = "none";
        });
    });
});