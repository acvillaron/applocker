import { database } from "../database.mjs";
import util from 'util'
const WHERE = 'WHERE';

const query = util.promisify(database.query).bind(database);
export const getBypasses = async () => {
    const bypasses = await query('SELECT distinct tecnicabypass FROM applockertool.applockerbypass;');
    if(bypasses) return bypasses.map(bypass => bypass.tecnicabypass)
    console.log('Something went wrong!!');
    return null; 
}

export const getControls = async () => {
    const controls = await query('SELECT distinct controlapplocker FROM applockertool.applockerbypass;');
    if(controls) return controls.map(control => control.controlapplocker)
    console.log('Something went wrong!!');
    return null; 
}

export const getAppLockerResults = async (system, control, bypasses) => {
    
    let sql = `SELECT sistemaoperativo, controlapplocker, objetivocontrol, tecnicabypass, descripcionbypass FROM applockertool.applockerbypass WHERE`;
    if(system?.os.length){
        sql=buildSqlOSAppLocker(system.os, sql);
    }
    if(control?.control){
        sql=buildSqlControl(control.control, sql);
    } 
    if(bypasses?.bypasses){
        sql=buildSqlBypasses(bypasses?.bypasses, sql);
    }   
    const typesDB = await query(sql);
    return typesDB; 
}

const buildSqlOSAppLocker = (OS, sql) => {
    isFirstInRow(sql)===true ? sql+= ' AND' : null;
    sql+= OS.map((os,index) => {
        if(index===0) return ` (sistemaoperativo LIKE '%${os}%'`
        return `OR sistemaoperativo LIKE '%${os}%'`
    }).join(" ")+')'
    return sql;
}

const buildSqlControl = (control, sql) => {
    isFirstInRow(sql) ? sql+= ' AND' : null;
    sql+=` controlapplocker = '${control}'`
    return sql;
}

const buildSqlBypasses = (bypasses, sql) => {
    isFirstInRow(sql) ? sql+= ' AND' : null;
    sql+=` tecnicabypass LIKE '%${bypasses}%'`
    return sql;
}

const isFirstInRow = (sql) => {
    return sql.indexOf(WHERE)+WHERE.length != sql.length
}