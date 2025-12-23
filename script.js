// script.js - Timeline inicia en noviembre 2025, barras continuas solapadas, cabecera fija

const tasks = [
    {id: 1, name: "Proyecto SDS Implementación ERP Oracle Fusion", start: "2025-11-28", end: "2027-01-20", phase: true},
    {id: 50, name: "2. Fase Diseño (Enfoque)", start: "2026-01-13", end: "2026-04-15", phase: true},
    {id: 51, name: "Entendimiento modelo funcional ERP Cloud (Workshops)", start: "2026-01-13", end: "2026-01-26", phaseId: 50},
    {id: 69, name: "Diligenciamiento de cuestionarios modelo funcional ERP Cloud", start: "2026-01-14", end: "2026-01-30", phaseId: 50},
    {id: 84, name: "Validación de modelo integral ERP Cloud (sesiones requeridas)", start: "2026-01-20", end: "2026-02-06", phaseId: 50},
    {id: 94, name: "Validación requerimientos del Pliego (Anexo técnico)", start: "2026-02-09", end: "2026-02-20", phaseId: 50},
    {id: 95, name: "Revisión de reportes estandar y necesidades de información", start: "2026-02-23", end: "2026-03-12", phaseId: 50},
    {id: 110, name: "Validación de integraciones entre ERP Cloud y otros sistemas", start: "2026-02-09", end: "2026-02-24", phaseId: 50},
    {id: 113, name: "Levantamiento de escenarios funcionales", start: "2026-02-23", end: "2026-03-06", phaseId: 50},
    {id: 128, name: "Definición de brechas", start: "2026-03-09", end: "2026-03-19", phaseId: 50},
    {id: 132, name: "Construcción matriz de seguridad", start: "2026-02-23", end: "2026-02-25", phaseId: 50},
    {id: 147, name: "Construcción de diseño funcional", start: "2026-03-20", end: "2026-04-01", phaseId: 50},
    {id: 167, name: "Presentación modelo funcional ERP Cloud al equipo", start: "2026-04-06", end: "2026-04-15", phaseId: 50},
    {id: 170, name: "Entregables", start: "2026-04-15", end: "2026-04-15", phaseId: 50},
    {id: 179, name: "3. Fase Configuración y Pruebas", start: "2026-03-31", end: "2026-10-28", phase: true},
    {id: 180, name: "Gestión de datos para test", start: "2026-03-31", end: "2026-06-25", phaseId: 179},
    {id: 188, name: "Configuración estandar", start: "2026-04-09", end: "2026-06-02", phaseId: 179},
    {id: 204, name: "Configuración y validación de escenarios", start: "2026-04-24", end: "2026-06-18", phaseId: 179},
    {id: 219, name: "Desarrollo de personalizaciones", start: "2026-06-03", end: "2026-08-06", phaseId: 179},
    {id: 225, name: "Desarrollo de Integraciones", start: "2026-06-03", end: "2026-08-06", phaseId: 179},
    {id: 231, name: "Desarrollo de reportes", start: "2026-06-03", end: "2026-08-06", phaseId: 179},
    {id: 237, name: "Pruebas", start: "2026-07-16", end: "2026-10-28", phaseId: 179},
    {id: 250, name: "Entregables", start: "2026-10-28", end: "2026-10-28", phaseId: 179},
    {id: 259, name: "4. Fase CutOver (Transición)", start: "2026-10-23", end: "2026-12-21", phase: true},
    {id: 260, name: "Preparación", start: "2026-10-29", end: "2026-11-24", phaseId: 259},
    {id: 273, name: "Capacitación", start: "2026-10-29", end: "2026-12-15", phaseId: 259},
    {id: 280, name: "Definir modelo de soporte", start: "2026-11-03", end: "2026-12-15", phaseId: 259},
    {id: 286, name: "Datos Cuestionarios", start: "2026-10-29", end: "2026-11-12", phaseId: 259},
    {id: 289, name: "Configuración Productivo", start: "2026-11-13", end: "2026-12-11", phaseId: 259},
    {id: 295, name: "Seguridades", start: "2026-11-13", end: "2026-11-26", phaseId: 259},
    {id: 305, name: "Gestión de datos para producción", start: "2026-10-23", end: "2026-12-21", phaseId: 259},
    {id: 313, name: "Programación", start: "2026-12-07", end: "2026-12-09", phaseId: 259},
    {id: 317, name: "Aprobación Salida en Vivo", start: "2026-12-10", end: "2026-12-18", phaseId: 259},
    {id: 321, name: "Entregables", start: "2026-12-18", end: "2026-12-18", phaseId: 259},
    {id: 328, name: "5. Fase Salida en vivo y Estabilizacion", start: "2026-12-21", end: "2027-01-20", phase: true},
    {id: 329, name: "Salida en vivo", start: "2026-12-21", end: "2026-12-28", phaseId: 328},
    {id: 333, name: "Transacciones controladas", start: "2026-12-29", end: "2027-01-20", phaseId: 328},
    {id: 340, name: "Entregables", start: "2027-01-20", end: "2027-01-20", phaseId: 328}
];

// 🔧 CORRECCIÓN: fecha en hora local (noviembre = mes 10)
const startDate = new Date(2025, 10, 1);
const endDate = new Date("2027-02-01");

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
        barContainer.style.pointerEvents = "auto";
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

           const start = new Date(task.start).toLocaleDateString('es-CO');
const end = new Date(task.end).toLocaleDateString('es-CO');

const durationDays = (new Date(task.end) - new Date(task.start)) / (1000 * 60 * 60 * 24);

if (durationDays <= 1) {
    bar.classList.add("milestone");
}

bar.title = `${task.name}
Inicio: ${start}
Fin: ${end}`;

            barContainer.appendChild(bar);
        }

        return row;
    }

    tasks.forEach(task => table.appendChild(createTaskRow(task)));

    // Colapsar fases al inicio
    tasks.filter(t => t.phase && t.id !== 1).forEach(phase => {
        collapsedPhases.add(phase.id);
        document.querySelectorAll(`tr[data-phase-id="${phase.id}"]`).forEach(r => {
            if (!r.querySelector('.phase')) r.style.display = "none";
        });
    });
});