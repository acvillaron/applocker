import cfonts from 'cfonts'

cfonts.say('JAIR|TOOL', {
	font: '3d',              // define the font face
	align: 'center',              // define text alignment
	colors: ['red','yellow'],         // define all colors
	// background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	// letterSpacing: 1,           // define letter spacing
	// lineHeight: 1,              // define the line height
	spaceless: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	// gradient: 'gray,white',            // define your two gradient colors
	// independentGradient: false, // define if you want to recalculate the gradient for each new line
	// transitionGradient: false,  // define if this is a transition between colors directly
	rawMode: false,             // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
	env: 'node'                 // define the environment cfonts is being executed in
});


cfonts.say("Autor",{
    font: 'console',
    align: 'left',              // define text alignment
	colors: ['red'],         // define all colors
	background: 'transparent', 
    spaceless:true
     // define the background color, you can also use `backgroundColor` here as key
})

cfonts.say('Jair', {
	font: 'console',              // define the font face
	align: 'left',              // define text alignment
	colors: ['white'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	// letterSpacing: 1,           // define letter spacing
	// lineHeight: 1,              // define the line height
	spaceless: true,                // define if the output text should have empty lines on top and on the bottom
	// maxLength: '0',             // define how many character can be on one line
	// gradient: 'gray,white',            // define your two gradient colors
	// independentGradient: false, // define if you want to recalculate the gradient for each new line
	// transitionGradient: false,  // define if this is a transition between colors directly
	// rawMode: false,             // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
	env: 'node'                 // define the environment cfonts is being executed in
});

cfonts.say("----------------",{
    font: 'console',
    align: 'left',              // define text alignment
	colors: ['red'],         // define all colors
	background: 'transparent', 
     // define the background color, you can also use `backgroundColor` here as key
})

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
