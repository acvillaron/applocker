import cfonts from 'cfonts'

export function initialize(){
	cfonts.say("Bypass applocker",{
		font: 'chrome',
		spaceless:true,
		colors: ['white'], 
		background: 'red',
	});
	
	console.log('\x1b[36m%s\x1b[0m', 'AUTOR');  //cyan
	console.log('\x1b[36m%s\x1b[0m', 'Jair Enrique Ramos Marrugo.');  //cyan
	
	cfonts.say("----------------",{
		font: 'console',
		align: 'left',              // define text alignment
		spaceless: true,
		colors: ['red'],         // define all colors
		background: 'transparent', 
		 // define the background color, you can also use `backgroundColor` here as key
	})
}


export const buildtext = (text,config) => {
	cfonts.say(text,{
		font: 'console',
		align: 'left',    
		colors: [config?.color || 'cyan'], 
		background: 'transparent', 
	});
} 

export const buildtextWithOutSpaces = (text,config) => {
	cfonts.say(text,{
		font: 'console',
		spaceless:true,
		align: 'left',    
		colors: [config?.color || 'cyan'], 
		background: 'transparent',
		lineHeight: '0' 
	});
} 

initialize();
