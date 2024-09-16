import { type } from "os";

export const MENU_OS = '1) Sistema Operativo.';
export const MENU_APP_LOCKER = '2) Control App Locker.';
export const MENU_BYPASS = '3) Tecnica Bypass a indagar (avanzado).';
export const MENU_SALIR = '4) Salir de la herramienta';

export const Wizard = [
    {
        type: 'list',
        name: 'option',
        message: 'Selecciona una primera pregunta o filtro',
        choices: [
            MENU_OS,
            MENU_APP_LOCKER,
            MENU_BYPASS,
            MENU_SALIR
        ]
    }
];

export const WizardNextQuestion = [
    {
        type: 'confirm',
        name: 'nextFilter',
        default: false,
        message: '¿Deseas añadir una nueva pregunta o filtro, en caso en caso afirmativo, digite YES',
    }
];

export const SOQuestion = [
    {
        type: 'checkbox',
        name: 'OS',
        message: '¿Qué sistema operativo le gustaria analizar?',
        choices: [
            'Windows 7 Enterprise / Ultimate',
            'Windows 8 Enterprise',
            'Windows 10 Enterprise / Education',
            'Windows 11 Enterprise / Education'
        ]
    }
];

export const AppLockerControl = [
    {
        type: 'list',
        name: 'control',
        message: '¿Que control de App Locker quiere seleccionar?',
        choices: []
    }
];

export const AppLockerBypass = [
    {
        type: 'list',
        name: 'bypasses',
        message: '¿Tiene en mente un bypass en especifico (uso avanzado)?',
        choices: []
    }
];

export const nextQuestion = [
    {
        type: 'confirm',
        name: 'continue',
        default: false,
        message: '¿Deseas añadir una nueva pregunta o filtro, en caso en caso afirmativo, digite YES'
    }
];

export const nextOrLeaveQuestion = [
    {
        type: 'confirm',
        name: 'next',
        default: false,
        message: '¿Quieres realizar una nueva búsqueda?',
    }
];

/**
 * OPENAPI QUESTIONS
*/

export const openAPIQuestion = [
    {
        type: 'input',
        name: 'ia',
        message: ' ¿Te gustaría obtener información adicional básica (guia) sobre alguna fila de la tabla?, si la respuesta es SÍ, por favor digite el número de la fila, en caso contrario digite la letra S',
    }
];