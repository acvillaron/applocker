import { type } from "os";

export const MENU_OS = '1) Sistema Operativo.';
export const MENU_APP_LOCKER = '2) Control App Locker.';
export const MENU_BYPASS = '3) Técnica Bypass.';
export const MENU_SALIR = '4) Salir de la Herramienta.';

export const Wizard = [
    {
        type: 'list',
        name: 'option',
        message: 'Seleccione/Escoja una opción',
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
        message: '¿Deseas añadir una nueva pregunta o filtro, en caso afirmativo, digite YES',
    }
];

export const SOQuestion = [
    {
        type: 'checkbox',
        name: 'os',
        message: '¿Qué sistema operativo le gustaria analizar?',
        choices: [
            'Windows 7 Professional',
            'Windows 7 Enterprise / Ultimate',
            'Windows 8 Enterprise',
            'Windows 10 Home',
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
        message: '¿Deseas añadir una nueva pregunta o filtro, en caso afirmativo, digite YES'
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