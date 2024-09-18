#!/usr/bin/env node

import inquirer from 'inquirer';
import {getBypasses, getAppLockerResults, getControls} from './services/queries.mjs'
import {database} from './database.mjs';
import { 
    Wizard,
    SOQuestion, 
    nextQuestion,
    AppLockerControl,
    AppLockerBypass,
    nextOrLeaveQuestion,
    MENU_SALIR,
    MENU_OS,
    MENU_BYPASS,
    MENU_APP_LOCKER
} from './wizzard.mjs';
import {buildtextWithOutSpaces, initialize} from './banner.mjs';
import dotenv from 'dotenv';
dotenv.config();
const answers = {
    os:null,
    control:null,
    bypass:null,
}

const OS = async () => {
    const {os, control, bypass} = answers;
    if(os || control || bypass) Wizard.at(0).message = 'Elija la siguiente pregunta (opcional)'
    const responseWizard =await inquirer.prompt(Wizard);
    if(responseWizard.option.includes(MENU_SALIR)){
        return database.end();
    }
    await RunQuesions(responseWizard.option)
}

const RunQuesions = async (option) => {
    const getControlsAppLocker = await getControls();
    const getBypassesOptions = await getBypasses();
    switch (option) {
        case MENU_OS:
            const responseOS =await inquirer.prompt(SOQuestion);
            answers.os = responseOS;
            break;
        case MENU_APP_LOCKER:
            AppLockerControl.at(0).choices=Array.from(getControlsAppLocker);
            const responseBinary =await inquirer.prompt(AppLockerControl);
            answers.control = responseBinary;
            break;
        case MENU_BYPASS:
            AppLockerBypass.at(0).choices = [...getBypassesOptions];
            const responseType =await inquirer.prompt(AppLockerBypass);
            answers.bypass=responseType;
            break;
        default:

            break;
    }
    const responseContinue = await inquirer.prompt(nextQuestion);
    if(responseContinue.continue){
        OS();
    }else{
        const results = await getAppLockerResults(answers.os,answers.control, answers.bypass);

        if(!results || results?.length === 0){
            console.log('\x1b[36m%s\x1b[0m', 'NO SE HAN ENCONTRADO BYPASSES :(, INTENTE OTRA BÚSQUEDA');
        }

        if(answers.os?.os?.length && !answers.control && !answers.bypass){
            const controls = new Map();
            results.map((element)=>{
                if(controls.has(element.controlapplocker)){
                    const sos = controls.get(element.controlapplocker);
                    if(!sos['Sistema Operativo'].includes(element.sistemaoperativo)){
                        controls.set(element.controlapplocker,{
                            ['Control App Locker']: element.controlapplocker,
                            ['Sistema Operativo']:`${element.sistemaoperativo}, ${sos['Sistema Operativo']}`
                        });
                    }

                }else{
                    controls.set(element.controlapplocker,{
                        ['Control App Locker']: element.controlapplocker,
                        ['Sistema Operativo']:`${element.sistemaoperativo}`
                    });
                }
            });
            console.table([...controls.values()]);
        }else{
            results.forEach((element,index) => {
                buildtextWithOutSpaces(`INDEX (${index})`, { color: 'yellow'});
                buildtextWithOutSpaces(`SO: ${removeAccents(element.sistemaoperativo)}`, { color: 'white'});
                buildtextWithOutSpaces(`Control App Locker: ${removeAccents(element.controlapplocker)}`, {color: 'white'});
                buildtextWithOutSpaces(`Objetivo del control: ${removeAccents(element.objetivocontrol)}`, {color: 'white'});
                buildtextWithOutSpaces(`Tecnica de Bypass: ${removeAccents(element.tecnicabypass)}`, {color: 'white'});
                buildtextWithOutSpaces(`Descripción del bypass: ${removeAccents(element.descripcionbypass)}`, {color: 'white'});
                buildtextWithOutSpaces(` `, {color: 'white'});
            });
        }

        inquirer.prompt(nextOrLeaveQuestion).then((response) => {
            if(response.next){clearConsole(); OS()}
            else {
                database.end();
            }
        });
    }
}

const removeAccents = (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

const clearConsole = () => {
    answers['os']=null;
    answers['bypass']=null;
    answers['control']=null;
    process.stdout.write('\x1Bc');
    initialize();
};

OS();