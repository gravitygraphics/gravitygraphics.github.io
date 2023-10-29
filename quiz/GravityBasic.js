// GravityGraphics Master Control Program
// import { classTerminal, initTerminal } from './plugins/terminal/js/terminal.js';



// // LOADS AND WAITS FOR CUSTOM FONT TO FINISH LOADING
// const customFont = new fontfamily('II40', 'url(https://gravitygraphics.github.io/fonts/II40.ttf)');
// customFont.load().then((font) => {
  // // Font has finished downloading
  // document.fonts.add(font);

  // // Now you can apply the font to elements on your page
  // document.body.style.fontFamily = 'II40';

  // // Any other code that relies on the font being available can be executed here
// });

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(start, 500);
});

function start() {
	// THIS IS A PLACE HOLDER FUNCTION. DONT DELETE
}


// const GravityGraphics = {
	// currentValue: 0,
  
	// setValue(value) {
		// this.currentValue = value;
		// console.log(this.currentValue);
	// },
 
	// core: {
		// 'plus': (currentVal, addend) => currentVal + addend,
		// 'minus': (currentVal, subtrahend) => currentVal - subtrahend
	// },

	// plugins: {},    

	// press(buttonName, param) {
		// const func = this.core[buttonName] || this.plugins[buttonName];
		// this.setValue(func(this.currentValue, param));
	// },

	// register(plugin) {
		// const { name, exec } = plugin;
		// this.plugins[name] = exec;
	// }
// };

// // Our Plugin
// const DrawGridPlugin = { 
  // name: 'drawgrid',
  // exec: function(currentVal, context) {
    // for (i=0; i < context.canvas.clientWidth; i+=10) {
		// // gridline (i, 0, i, 400, "white");
		// context.beginPath();
		// context.moveTo(i, 0);
		// context.lineTo(i, 400);
		// context.strokeStyle = "#333";
		// context.stroke();
	// }
	// for (j=0; j < context.canvas.clientHeight; j+=10) {
		// context.beginPath();
		// context.moveTo(0, j);
		// context.lineTo(600, j);
		// context.strokeStyle = "#333";
		// context.stroke();
	// }
	// return;
  // }
// };

// GravityGraphics.register(DrawGridPlugin);
  

// // Using the calculator
// betaCalc.setValue(3);      // => 3
// betaCalc.press('plus', 2); // => 5
// betaCalc.press('squared'); // => 25
// betaCalc.press('squared'); // => 625

var controller = new AbortController();
var signal = controller.signal;

window.localStorage["previousKeyListenerExist"] = "false";

function reset() {
	cursor_x = 0;
	cursor_y = 0;
	home = 0;
}

// function abort_promise() {
	// console.log("Aborted!");
	// print_buffer = "";
	// controller.abort();
	// controller = new AbortController();
	// signal = controller.signal;
	// is_input = false;
	// prompt = "";
// }

async function system_input(input_prompt=false) {
	if (input_prompt == false) {
		input_prompt = prompt_default;
	}
	var promise = await input_promise(input_prompt, terminal_color, signal);
	alert("command:" + command_line + "\nprocessing command...");
	
	// PROCESS COMMAND LINE HERE
	// ProcessCommandLine();
	
	prompt = "";
	command_line = "";
}

async function input(str="") {
	prompt = str;
	var promise = await input_promise(str, terminal_input_color, signal);
	// alert("user_input:" + command_line + "\nprocessing user input...");
	var return_command_line = command_line;
	command_line = "";
	return return_command_line
}

function input_promise(str, color="", signal, newline = false) {
	return new Promise((resolve) => {
		is_input = true;
		animateprint(str, newline);
		// animateprint(input_prompt);
		
		document.getElementById("gravitygraphics").focus();
		
		// THIS IS TO PREVENT ADDING MULTIPLE LISTENERS WHEN WE RERUN THE INPUT CODE BECAUSE THERE IS NO EFFECTIVE WAY TO CANCEL THE LISTENERS FROM OUTSIDE
		if (window.localStorage["previousKeyListenerExist"] == "false") {
			window.localStorage["previousKeyListenerExist"] = "true";
			document.addEventListener('keydown', onKeydown);
			document.addEventListener('keypress', onKeypress);
		}
		
		async function onKeydown(e) {
			if (e.keyCode === 13) {
				e.preventDefault();
				
				document.removeEventListener('keydown', onKeydown);
				document.removeEventListener('keypress', onKeypress,{once: true});
				window.localStorage["previousKeyListenerExist"] = "false"
				
				erasecursor(cursor_x, cursor_y);
				cursor_x  = 0;
				cursor_y ++;
				// console.log("cursor_y:" + cursor_y  + " row_max:" + row_max);
				if (cursor_y > row_max) {
					scrollUp();
					cursor_y = row_max;
				}
				//drawprompt(cursor_x, cursor_y);
				// console.log("cursor_y:" + cursor_y);
				//drawcursor(cursor_x, cursor_y);
				is_input = false; // USE THIS TO DISABLE CURSOR (IF IS INPUT = TRUE, CURSOR WILL BLINK ELSE IT WONT)
				resolve();
			}
			else if (e.keyCode === 8) {
				// e.preventDefault();
				command_line = command_line.substring(0, command_line.length - 1);
				erasecursor(cursor_x, cursor_y);
				cursor_x --;
				// console.log ("command_line:" + command_line + " cursor_x:"+ cursor_x)
				if ((cursor_x < 0) && (command_line.length > 0)) {
					cursor_x = col_max - 1;
					cursor_y--;
					// console.log ("command_line.length:" + command_line.length + " cursor_x:"+ cursor_x);
				}
				else if (cursor_x < prompt.length) {
					cursor_x = prompt.length;
				}
			}
		}
	
		async function onKeypress(e) {
			var charCode = e.which || e.keyCode;
			// e.preventDefault();
			command_line = command_line + String.fromCharCode(charCode);
			// console.log(String.fromCharCode(charCode));
			erasecursor(cursor_x, cursor_y);
			drawcursor(cursor_x + 1, cursor_y);
			printchar(String.fromCharCode(charCode), cursor_x, cursor_y, color);
		}
	});
}

function delay(seconds=0.05) {
  return new Promise((resolve) => setTimeout(resolve, seconds*1000));
}
	
var Color16= [];
Color16[0]= "#000000";
Color16[1]= "#8e1664";
Color16[2]= "#0f42e3";
Color16[3]= "#d428fe";
Color16[4]= "#007b0e";
Color16[5]= "#868c64";
Color16[6]= "#00a3ff";
Color16[7]= "#a5b7ff";
Color16[8]= "#7c4800";
Color16[9]= "#f26300";
Color16[10]= "#8e79a5";
Color16[11]= "#ff8de7";
Color16[12]= "#2ad600";
Color16[13]= "#dcd400";
Color16[14]= "#4aff85";
Color16[15]= "#ffffff";

var ColorNames= [];
ColorNames[0]= "black";
ColorNames[1]= "grey";
ColorNames[2]= "lime";
ColorNames[3]= "green";
ColorNames[4]= "red";
ColorNames[5]= "pink";

ColorNames[6]= "cyan";
ColorNames[7]= "olive";
ColorNames[8]= "purple";
ColorNames[9]= "magenta";

ColorNames[10]= "lightblue";
ColorNames[11]= "blue";
ColorNames[12]= "brown";
ColorNames[13]= "orange";
ColorNames[14]= "yellow";
ColorNames[15]= "white";

// var ColorNames2= [];
// ColorNames[0]= "black";
// ColorNames[1]= "purple";
// ColorNames[2]= "blue";
// ColorNames[3]= "magenta";
// ColorNames[4]= "green";
// ColorNames[5]= "olive";
// ColorNames[6]= "cyan";
// ColorNames[7]= "red";
// ColorNames[8]= "brown";
// ColorNames[9]= "orange";
// ColorNames[10]= "grey";
// ColorNames[11]= "pink";
// ColorNames[12]= "lime";
// ColorNames[13]= "yellow";
// ColorNames[14]= "turquoise";
// ColorNames[15]= "white";

var mode = "mx";
var fullscreenmode = false;

var size = 10;
var gravitygraphics = "";
var gravitygraphicscontext = "";
var terminal = "";

var terminal_fontfamily = "II40";
var terminal_font = "12px C64";
var terminal_font = "16px II40";
var terminal_color = "#009c00"; //green
var terminal_default_color = "#009c00"; //green
var terminal_input_color = "#009ce8"; //blue

var intervalID = null;

var line_height = 20;

var cursor_width = 16;
var cursor_height = 18;
var cursor_blink_counter = 1;
var cursor_x = 0;
var cursor_y = 0;
var cursor_hide = true;

var col_max = 50;
var row_max = 19;

var text_width = 0;
var text_padding_top = 4;

var print_buffer = "";
var is_input = false;
var command_line = "";

var prompt_default = "]";
var prompt = "";

intervalID = setInterval(blinkcursor, 300);	

var gravitygraphics = document.createElement('canvas');
var gravitygraphicscontext = gravitygraphics.getContext("2d");
var gravityterminal = document.createElement('canvas');
var gravityterminalcontext = gravityterminal.getContext("2d");
var gravitymix = document.createElement('canvas');
var gravitymixcontext = gravitymix.getContext("2d");
var gravityfullscreen = document.createElement('canvas');
var gravityfullscreencontext = gravityfullscreen.getContext("2d");

function eventSetupCanvas() {}
function eventBltImage(mode) {}
function eventClear(layername) {}

document.addEventListener('DOMContentLoaded', (e) => {
	onLoad();
});

async function onLoad() {
    // console.log(`Document is ready!`);
	setupcanvas();
	
	// terminal = new classTerminal();
	// terminal.canvas = gravitygraphics;
	// initTerminal(terminal);
	// terminal.ctx = gravitygraphicscontext;
	// console.log("1:" + terminal.ctx);
	// terminal.print("Hello World");
	// terminal.print("You are welcome Moles.");
	// terminal.input("Do you want to play a game Prof. Falken?");
	
	
	// //drawgrid();
	// // // setInterval(terminal.cursor.blink(),300);
	// // textbar(0, 21, 50, 1, 'blue');
	// // dot(10,10, "red");
	// //word("hi", 20, 20, "white")
	// // printchar("w", 49, 0, "white")
	// //word("xxxxhi", 0, cursor_height, "white")
	// print("Hello World");
	// print("You are welcome Moles.");
	// var ret_command = await input("Do you want to play a game Prof. Falken?", "(y/n)?");
	// //var ret_command = await input("Do you want to play a game Prof. Falken?", "(y/n)?");
	// //alert("returned command:" + ret_command);
	// print("Let's play a game of chess.");
	// // ret_command = await system_input("]");
	// //alert("returned command:" + ret_command);
}

function drawgrid() {
	for (var i=0; i < gravitygraphics.width; i+=10) {
		// gridline (i, 0, i, 400, "white");
		gravitygraphicscontext.beginPath();
		gravitygraphicscontext.moveTo(i, 0);
		gravitygraphicscontext.lineTo(i, 440);
		gravitygraphicscontext.strokeStyle = "#333";
		gravitygraphicscontext.stroke();
	}
	for (var j=0; j < gravitygraphics.height; j+=10) {
		gravitygraphicscontext.beginPath();
		gravitygraphicscontext.moveTo(0, j);
		gravitygraphicscontext.lineTo(600, j);
		gravitygraphicscontext.strokeStyle = "#333";
		gravitygraphicscontext.stroke();
	}
}

function debugcanvas(width=600, height=440) {
	mode = "debug"
	gravitygraphics.width  = width/2;
	gravitygraphics.height = height/2;
	gravitygraphics.style.left = "0";
	gravitygraphics.style.top = "0";
	gravityterminal.width  = width/2;
	gravityterminal.height = height/2;
	gravityterminal.style.left = "300px";
	gravityterminal.style.top = "0";
	gravitymix.width  = width/2;
	gravitymix.height = height/2;
	gravitymix.style.left = "0";
	gravitymix.style.top = "200px";
	gravityhelper.hidden = false;
	gravityhelper.width  = width/2;
	gravityhelper.height = height/2;
	gravityhelper.style.left = "320px";
	gravityhelper.style.top = "220px";
	gravityhelper.style.backgroundColor = "red";
	gravityhelpermain.width  = width/2;
	gravityhelpermain.height = height/2;
	gravityhelpermain.style.left = "150px";
	gravityhelpermain.style.top = "120px";
	gravityhelpermain.style.backgroundColor = "yellow";
}	

function setupcanvas(width=600, height=440) {
	var div = document.getElementById("gravityscreen");
	div.style.width  = width+"px";
	div.style.height = height+"px";
	
	gravitygraphics.id     = "gravitygraphics";
	gravitygraphics.width  = width;
	gravitygraphics.height = height;
	gravitygraphics.style.zIndex   = 1;
	gravityterminal.style.position = "absolute";
	gravitygraphics.style.left = "0";
	gravitygraphics.style.top = "0";
	gravitygraphics.style.backgroundColor = "#000";
	//gravitygraphics.style.border   = "1px solid blue";
	
	gravityterminal.id   = "gravityterminal";
	gravityterminal.width  = width;
	gravityterminal.height = height;
	gravityterminal.style.zIndex   = 2;
	gravityterminal.style.position = "absolute";
	gravityterminal.style.left = "0";
	gravityterminal.style.top = "0";
	gravityterminal.style.backgroundColor = "#000";
	//gravityterminal.style.border   = "1px solid green";
	
	gravitymix.id   = "gravitymix";
	gravitymix.width  = width;
	gravitymix.height = height;
	gravitymix.style.zIndex   = 999;
	gravitymix.style.position = "absolute";
	gravitymix.style.left = "0";
	gravitymix.style.top = "0";
	gravitymix.style.backgroundColor = "#000";
	
	gravityfullscreen.id   = "gravityfullscreen";
	gravityfullscreen.style.width  = "100%";
	gravityfullscreen.style.height = "calc(100vh - 64px)";
	gravityfullscreen.style.zIndex   = 10000;
	gravityfullscreen.style.position = "absolute";
	gravityfullscreen.style.left = "0";
	gravityfullscreen.style.top = "0";
	gravityfullscreen.style.backgroundColor = "#000";
	
	div.appendChild(gravitygraphics)
	div.appendChild(gravityterminal)
	div.appendChild(gravitymix)
	div.appendChild(gravityfullscreen)
	
	// SETUP TERMINAL
	gravitygraphicscontext.font = terminal_font;
	
	var metrics = gravitygraphicscontext.measureText("W");
	text_width = Math.ceil(metrics.width);
	
	// INIT FULLSCREEN WHICH IS OFF BY default
	fullscreenOFF();
	
	eventSetupCanvas();
}

function fullscreen() {
	fullscreenON();
}

function fullscreenON() {
	fullscreenmode = true;
	gravityfullscreen.style.display = 'block';
	gravitygraphics.style.left = "-600";
	gravityterminal.style.left = "-600";
	gravitymix.style.left = "-600";
	
	fullscreenUPDATE();
	
	// Handle window resize to adjust the fullscreen canvas size
	window.addEventListener('resize', () => {
		fullscreenUPDATE();
	});
}

function fullscreenOFF() {
	fullscreenmode = false;
	gravityfullscreen.style.display = 'none';
	gravitygraphics.style.left = "0";
	gravityterminal.style.left = "0";
	gravitymix.style.left = "0";
	
	// Handle window resize to adjust the fullscreen canvas size
	window.removeEventListener('resize', fullscreenUPDATE);
}

function fullscreenUPDATE() {
	// Initialize fullscreen canvas size
	gravityfullscreen.width = window.outerWidth;
	gravityfullscreen.height = window.innerHeight;
	// alert("window.innerWidth:" + window.innerWidth);
	// Function to copy the source canvas to the fullscreen canvas
	gravityfullscreencontext.clearRect(0, 0, gravityfullscreen.width, gravityfullscreen.height);
	gravityfullscreencontext.drawImage(gravitymix, 0, 0, gravityfullscreen.width, gravityfullscreen.height);
}


function TR() {
	tr();
}

function GR() {
	gr();
}

function GR2() {
	gr2();
}

function tr() {
	mode = "tr";
	//gravityterminal.style.display = "block";
	//gravitygraphics.style.display = "none";
	showcursor();
}

function gr2() {
	mode = "gr2";
	row_max = 21;
	//gravitygraphics.style.display = "block";
	//gravityterminal.style.display = "none";
	gravitygraphics.height = 440;
	hidecursor();
}

function mx() {
	mode = "mx";
	row_max = 21;
	//gravitygraphics.style.display = "block";
	//gravityterminal.style.display = "none";
	gravitygraphics.height = 440;
	hidecursor();
}

function gr() {
	mode = "gr";
	row_max = 3;
	// gravitymixcontext.style.display = "none";
	// gravitymixcontext.stlye.backgroundColor = cyan;
	// gravitymixcontext.stlye.border = "2px solid blue";
	gravitygraphics.height = 360;
	drawgrid();
}

function background(color="#204c06") {
	rect(0,0,gravitygraphics.width / size, gravitygraphics.height / size, color);
}

function word(str='', x=0, y=0, color="blue", textAlign="left", fontsize = 26, fontfamily = terminal_fontfamily, fontunit="px") {
	var font = `"` + fontsize + fontunit + " " + fontfamily + `"`;
	gravitygraphicscontext.beginPath();
	gravitygraphicscontext.textAlign = textAlign;
	gravitygraphicscontext.font = font;
	
	var metrics = gravitygraphicscontext.measureText("W");
	var text_width = Math.ceil(metrics.width);
	gravitygraphicscontext.fillStyle = color;
	gravitygraphicscontext.fillText(str, x * size, y * size); 
	refresh();
}

function putText(str, x="center", y="center", color=random(1,15), fontsize = 26, fontfamily = terminal_fontfamily, fontunit="px", hAlign = "center", vAlign = "", pallete=Color16) {
	text(str, x, y, color, fontsize, fontfamily, fontunit, hAlign, vAlign, pallete);
}

function text(str, x="center", y="center", color=random(1,15), fontsize = 26, fontfamily = terminal_fontfamily, fontunit="px", hAlign = "center", vAlign = "", pallete=Color16) {
	gravitygraphicscontext.beginPath();
	
	// TRANSLATION
	if (vAlign == "center") vAlign = "middle"; // SYNONYM FOR MIDDLE IS CENTER
	
	if (vAlign == "") vAlign = "";
	if (hAlign == "") hAlign = "center";

	gravitygraphicscontext.font = `"` + fontsize + fontunit + " " + fontfamily + `"`;
	gravitygraphicscontext.fillStyle = getColor(color, pallete);
	
	if (x == "center") {
		x = Math.floor((gravitygraphics.width/size)/2);
		hAlign = "center";
	}
	else if (x == "left") {
		x = 0;
		hAlign = "left";
	}
	else if (x == "right") {
		x = (gravitygraphics.width/size);
		hAlign = "right";
	}
	else if (x == 0) {
		hAlign = "left";
	}
	else {
		hAlign = "left";
	}
	
	if (y == "center") {
		y = Math.floor((gravitygraphics.height/size)/2);
		vAlign = "middle";
	}
	else if (y == "top") {
		y = 0;
		vAlign = "top";
	}
	else if (y == "bottom") {
		y = (gravitygraphics.height/size);
		vAlign = "bottom";
	}
	else if (y == 0) {
		vAlign = "top";
	}
	else {
		vAlign = "top";
	}
	
	// console.log(size);
	// console.log(x);
	// console.log(hAlign);
	gravitygraphicscontext.textAlign = hAlign;
	gravitygraphicscontext.textBaseline = vAlign;
	gravitygraphicscontext.fillText(str, x * size, y * size); 
	refresh();
}



function hidecursor() {
	cursor_hide = true;
}

function showcursor() {
	cursor_hide = false;
}

function blinkcursor() {
	if ((cursor_hide == true)) {
		// DO NOTHING
	}
	else {
		// BLINK CURSOR
		var flag = cursor_blink_counter % 3;
		switch (flag) {
			case 1 :
				drawcursor(cursor_x, cursor_y)
				cursor_blink_counter++;
				break;
			case 2 :
				drawcursor(cursor_x, cursor_y)
				cursor_blink_counter++;
				break;
			default:
				erasecursor(cursor_x, cursor_y);
				cursor_blink_counter= 1;
				break;
		}
	}
}


function drawcursor(x=0, y=0) {
	// DONT USE RECT BECAUSE RECT IS RESERVED FOR GR() MODE
	gravityterminalcontext.beginPath();
	gravityterminalcontext.rect(x * text_width, (y * line_height) + text_padding_top, cursor_width, cursor_height);
	gravityterminalcontext.fillStyle = "green";
	gravityterminalcontext.fill();
	refresh();
}

function erasecursor(x=0, y=0) {
	// DONT USE RECT BECAUSE RECT IS RESERVED FOR GR() MODE
	// rect(x * text_width, (y * line_height) + text_padding_top, cursor_width, cursor_height, "black", "size", 1)
	gravityterminalcontext.beginPath();
	gravityterminalcontext.clearRect(x * text_width, (y * line_height) + text_padding_top, cursor_width, cursor_height);
	gravityterminalcontext.fillStyle = "black";
	gravityterminalcontext.fill();
	refresh();
}

async function println(str, align="left", animate=true, color="green") {
	// var character = String.fromCharCode(charCode);
	// word(str, 0, 0, "white", "left", "16px II40");
	
	if (color == "default") {
		color = terminal_default_color;
	}
	else if (color == "random") {
		color = getRandomColor();
	}
	
	terminal_color = color;
	
	if (animate) {
		await animateprint(str);
	}
	else {
		gravityterminalcontext.beginPath();
		gravityterminalcontext.textAlign = textAlign;
		gravityterminalcontext.font = font;
		
		var metrics = gravityterminalcontext.measureText("W");
		var text_width = Math.ceil(metrics.width);
		gravityterminalcontext.fillStyle = color;
		gravityterminalcontext.fillText(str, (x * text_width), (y * line_height) + line_height);
	}
	// console.log(str);
}	

async function print(str, align="left", animate=true, color="green") {
	println(str, align, animate, color);
}

function performWordWrapIfNecessary() { // IF IS SPILL OVER GOTO NEXT LINE
	// Split the string into words using whitespace as the delimiter
	var words = print_buffer.split(/\s+/);

	// Check if there are words to process
	if (words.length > 0) {
		// Get the next word (the first word in the array)
		var nextWord = words[0];

		// Remove the word from the array (if you want to process the next word in the future)
		words = words.slice(1);

		// console.log("Next word: " + nextWord);
	} else {
		// console.log("No more words in the string.");
	}
	
	if (cursor_x + nextWord.length > col_max) {
		erasecursor(cursor_x, cursor_y);
		cursor_x = 0;
		cursor_y++;
		if (cursor_y > row_max) {
			scrollUp();
			cursor_y = row_max;
		}
	}
}

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	
	var c = color.substring(1);
	var rgb = parseInt(c, 16);
	var r = (rgb >> 16) & 0xff;
	var g = (rgb >>  8) & 0xff;
	var b = (rgb >>  0) & 0xff;

	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	if (luma < 40) {
		color = getRandomColor();
	}
	return color;
}

function changeColorIfIndicated() { // IF IS SPILL OVER GOTO NEXT LINE
	// Split the string into words using whitespace as the delimiter
	var words = print_buffer.split(/\s+/);

	// Check if there are words to process
	if (words.length > 0) {
		// Get the next word (the first word in the array)
		var nextWord = words[0];

		// Remove the word from the array (if you want to process the next word in the future)
		slicedArray = words.slice(1);
		
		

		// console.log("Next word: " + nextWord);
		
		if (nextWord == "<default>") {
			terminal_color = terminal_default_color;
			words[0].replace(/<default>/g, "");
		}
		else if (nextWord == "<white>") {
			terminal_color = "white";
			words[0] = "";
		}
		else if (nextWord == "<purple>") {
			terminal_color = "purple";
		}
		else if (nextWord == "<random>") {
			terminal_color = getRandomColor();
		}
		else if (nextWord == "</white>") {
			terminal_color = terminal_default_color;
		}
		else if (nextWord == "</purple>") {
			terminal_color = terminal_default_color;
		}
		
		print_buffer.replace(/<white>/g, "");
		
	} else {
		// console.log("No more words in the string.");
	}
}

async function animateprint(str, addnewline=true) {
	if (addnewline == true) {
		print_buffer += str+"\n";
	}
	else {
		print_buffer += str;
	}
	while (print_buffer.length > 0) {
		// IF IS SPILL OVER GOTO NEXT LINE
		performWordWrapIfNecessary();
		// DETECT COLOR TAGS AND CHANGE COLORS
		// changeColorIfIndicated();
		
		var output_char = print_buffer.substring(0,1);
		print_buffer = print_buffer.slice(1, print_buffer.length);
		// PRINT CHAR
		// console.log("output_char:" + output_char);
		if (output_char == "\n") {
			//console.log("buffer printEnter----------cursor.x:" + terminal_instance.cursor.x);
			//terminal_instance.text.printEnter(false);
			// console.log("erasing cursor " + cursor_x + ", "+ cursor_y);
			erasecursor(cursor_x, cursor_y);
			cursor_x = 0;
			cursor_y++;
			if (cursor_y > row_max) {
				scrollUp();
				cursor_y = row_max;
			}
		}
		else {
			//console.log("buffer printChar----------cursor.x:" + terminal_instance.cursor.x);
			erasecursor(cursor_x, cursor_y);
			drawcursor(cursor_x + 1, cursor_y);
			printchar(output_char, cursor_x, cursor_y, terminal_color); // "#a7d9cc" <-- lightgreen
		}
		await delay(0);
	}
	
	//drawprompt(input_prompt, cursor_x, cursor_y);
	// alert("cursor_x:" +  cursor_x);
	//document.addEventListener('keydown', onKeydown);
	//document.addEventListener('keypress', onKeypress);
}

async function printchar(str='', x=null, y=null, color="#C0C0C0", textAlign="left", font=terminal_font) {
	// console.log(font);
	if (x == null) x = cursor_x;
	if (y == null) y = cursor_y;
	gravityterminalcontext.beginPath();
	gravityterminalcontext.textAlign = textAlign;
	gravityterminalcontext.font = font;
	
	var metrics = gravityterminalcontext.measureText("W");
	var text_width = Math.ceil(metrics.width);
	gravityterminalcontext.fillStyle = color;
	gravityterminalcontext.fillText(str, (x * text_width), (y * line_height) + line_height);
	cursor_x++;
	if (cursor_x > col_max) {
		cursor_x = 0;
		cursor_y++;
	}
	if (cursor_y > row_max) {
		scrollUp();
		cursor_y = row_max;
	}
	showcursor();
	refresh();
}

async function printstr(str='', x=0, y=0, color="#C0C0C0", textAlign="left", font=terminal_font) {
	//console.log(font);
	gravityterminalcontext.beginPath();
	gravityterminalcontext.textAlign = textAlign;
	gravityterminalcontext.font = font;
	
	var metrics = gravityterminalcontext.measureText("W");
	var text_width = Math.ceil(metrics.width);
	gravityterminalcontext.fillStyle = color;
	if (x == "center") {
		// console.log("col_max/2:" + (col_max / 2) + " str.length:" + Math.floor(str.length /2));
		// console.log("result X:" + (Math.floor(col_max / 2) - Math.floor(str.length /2)));
		gravityterminalcontext.fillText(str, (Math.floor((gravitygraphics.width / 2) / text_width) - Math.floor(str.length /2)) * text_width, (y * line_height) + line_height);
	}
	else {
		gravityterminalcontext.fillText(str, (x * text_width), (y * line_height) + line_height);
	}
	cursor_y++;
	if (cursor_y > row_max) {
		scrollUp();
		cursor_y = row_max;
	}
	await delay(1);
}

async function drawprompt(str=false, x=0, y=0, color="#C0C0C0") {
	if (str != false) { // IF FALSE DONT SET PROMPT
		prompt = str;
		// console.log("prompt:" + prompt);
		// alert("Str:" + str + " , set prompt:" + prompt +  prompt.length);
		printchar(prompt, x, y, color);
		cursor_x  = prompt.length;
	}
}

function scrollUp() {
	// gravitygraphicscontext.drawImage(gravitygraphics, 0 + ruler_margin, 0 + ruler_margin);
	var imageData = gravityterminalcontext.getImageData(0, 0, gravityterminalcontext.canvas.width, gravityterminalcontext.canvas.height);
	gravityterminalcontext.putImageData(imageData, 0, - line_height);
	textbar(0, row_max, col_max, 1, "blue");
}

function textbar(x1=0, y1=0, x2=49, y2=1, color='white') {
	gravityterminalcontext.beginPath();
	gravityterminalcontext.clearRect(x1 * cursor_width, y1 * (line_height), x2 * cursor_width, y2 * (line_height + text_padding_top));
	// console.log(x1 * cursor_width + ", " + y1 * cursor_height + ", " + x2 * cursor_width + ", " + y2 * line_height);
	gravityterminalcontext.fillStyle = color;
	gravityterminalcontext.fill();
}

function clear(layername="graphics") {
	if (layername == "graphics") {
		gravitygraphicscontext.clearRect(0, 0, gravitygraphics.width, gravitygraphics.height);
	} 
	else if (layername == "mix") {
		gravitymixcontext.clearRect(0, 0, gravitymix.width, gravitymix.height);
	}

	eventClear(layername);
}

async function home() {
	gravityterminalcontext.clearRect(0, 0, gravityterminal.width, gravityterminal.height);
	//console.log(gravityterminal.width + "x" +  gravityterminal.height);
	cursor_x = 0;
	cursor_y = 0;
	await delay(1);
}

function reset() {
	print_buffer = "";
	prompt = "";
	is_input = false;
	command_line = "";
	clear();
	home();
}

function refresh() {
	clear("mix");
	clear("helpermain");
	bltimage();
}

function bltimage() {
	// ruler_margin = 0;
	//context.drawImage(canvas, 0 + ruler_margin, 0 + ruler_margin);
	if (mode == "gr") {
		gravitymixcontext.drawImage(gravitygraphics, 0, 0);
		gravitymixcontext.drawImage(gravityterminal, 0, 360);
		eventBltImage(mode);
	}
	else if (mode == "debug") {
		gravitymixcontext.drawImage(gravitygraphics, 0, 0);
		gravitymixcontext.drawImage(gravityterminal, 0, 0);
		eventBltImage(mode);
	}
	else if (mode == "tr") {
		gravitymixcontext.drawImage(gravityterminal, 0, 0);
	}
	else if (mode == "mx") {
		gravitymixcontext.drawImage(gravitygraphics, 0, 0);
		gravitymixcontext.drawImage(gravityterminal, 0, 0);
		eventBltImage(mode);
	}
	else { // tr() mode
		gravitymixcontext.drawImage(gravityterminal, 0, 0);
	}
	
	if (fullscreenmode = true) {
		fullscreenUPDATE();
	}
}

function SetFocus() {
	document.getElementById("gravitygraphics").focus();
}

function plotRandomDots(amount, pallete=Color16) {
	for (i=0; i < 200; i++) {
		dot(random(0,59), random(0,39), random(0,15), pallete);
	}
}

function displayColorNames() {
	for (row=0; row<4; row++) {
		for (i=0; i< 4; i++) {
			var x_pos = i * 15
			rect(x_pos, 4.5 * row, x_pos+15, 4.5 * (row + 1), ColorNames[i + (row * 4)])
			word(ColorNames[i + (row * 4)], x_pos + 3, (4.5 * row) + 3, color="white", textAlign="left", font="20px Arial")
		    if ((row == 3) && ((i == 2) || (i == 3))) {
				word(ColorNames[i + (row * 4)], x_pos + 3, (4.5 * row) + 3, color="#ccc", textAlign="left", font="20px Arial")
			}
		}
	}
}

function displayColors1x16() {
	for (i=0; i< 16; i++) {
		var x_pos = i * 3
		rect(0,x_pos,60,x_pos+3, Color16[i])
	}
}

function displayColors6x2() {
	for (i=0; i< 8; i++) {
		var x_pos = i * 7.5
		rect(x_pos, 0, x_pos+7.5, 7.5, Color16[i])
		word(i, x_pos + 3, 4.5, color="white", textAlign="left", font="20px Arial")
	}

	for (i=0; i< 8; i++) {
		var x_pos = i * 7.5
		rect(x_pos, 7.5, x_pos+7.5, 15, Color16[i+8])
		word(i+8, x_pos + 3, 7.5 + 4.5, color="white", textAlign="left", font="20px Arial")
	}

	word(7+8, (7 * 7.5) + 3, 7.5 + 4.5, color="#ccc", textAlign="left", font="20px Arial")
}

function getColor(color, pallete=Color16) {
	if (typeof color === 'string' || color instanceof String) {
		return color
	}
	else if (pallete == Color16) {
		if (color > 15) {
			color = random(0, 15);
		}
		return pallete[color];
	}
}

function random(min=0, max=999) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function plot(x=0, y=0, color='lime', pallete=Color16, custom_gridsize=null) {
	dot(x, y, color, pallete, custom_gridsize);
}


function dot(x=0, y=0, color='lime', pallete=Color16, custom_gridsize=null) {
	if (custom_gridsize == null) custom_gridsize = size;
	gravitygraphicscontext.beginPath();
	gravitygraphicscontext.fillStyle = getColor(color, pallete);
	gravitygraphicscontext.fillRect((x* custom_gridsize), (y * custom_gridsize), custom_gridsize, custom_gridsize);
	refresh();
}

// function line2(x1=0, y1=0, x2=600, y2=600, color='black') {
	// gravitygraphicscontext.beginPath();
	// gravitygraphicscontext.moveTo(x1, y1);
	// gravitygraphicscontext.lineTo(x2, y2);
	// gravitygraphicscontext.strokeStyle = color;
	// gravitygraphicscontext.lineWidth = width;
	// gravitygraphicscontext.stroke();
// }

function rect(x1=0, y1=0, x2=600, y2=600, color='red', option="coord", custom_gridsize=null) {
	if (custom_gridsize == null) custom_gridsize = size;
	gravitygraphicscontext.beginPath();
	if (option == "coord") {
		gravitygraphicscontext.rect(x1 * custom_gridsize, y1 * custom_gridsize, (x2-x1) * custom_gridsize, (y2-y1) * custom_gridsize);
	}
	else if (option == "size") {
		gravitygraphicscontext.rect(x1 * custom_gridsize, y1 * custom_gridsize, x2 * custom_gridsize, y2* custom_gridsize);
	}
	
	gravitygraphicscontext.fillStyle = color;
	gravitygraphicscontext.fill();
}

function clearrect(x1=0, y1=0, x2=600, y2=600, color='red', option="coord", custom_gridsize=null) {
	if (custom_gridsize == null) custom_gridsize = size;
	gravityterminalcontext.beginPath();
	if (option == "coord") {
		gravityterminalcontext.clearRect(x1 * custom_gridsize, y1 * custom_gridsize, (x2-x1) * custom_gridsize, (y2-y1) * custom_gridsize);
	}
	else if (option == "size") {
		gravityterminalcontext.clearRect(x1 * custom_gridsize, y1 * custom_gridsize, x2 * custom_gridsize, y2* custom_gridsize);
	}
	
	gravityterminalcontext.fill();
}

function line(x1=0, y1=0, x2=30, y2=40, color='purple') {
    let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;    // Calculate line deltas
    dx = x2 - x1;
    dy = y2 - y1;    // Create a positive copy of deltas (makes iterating easier)
    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);    // Calculate error intervals for both axis
    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;    // The line is X-axis dominant
    if (dy1 <= dx1) {        // Line is drawn left to right
        if (dx >= 0) {
            x = x1; y = y1; xe = x2;
        } else { // Line is drawn right to left (swap ends)
            x = x2; y = y2; xe = x1;
        }        dot(x, y, color); // Draw first pixel        // Rasterize the line
        for (i = 0; x < xe; i++) {
            x = x + 1;            // Deal with octants...
            if (px < 0) {
                px = px + 2 * dy1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + 1;
                } else {
                    y = y - 1;
                }
                px = px + 2 * (dy1 - dx1);
            }            // Draw pixel from line span at
            // currently rasterized position
            dot(x, y, color);
        }    } else { // The line is Y-axis dominant        // Line is drawn bottom to top
        if (dy >= 0) {
            x = x1; y = y1; ye = y2;
        } else { // Line is drawn top to bottom
            x = x2; y = y2; ye = y1;
        }        dot(x, y, color); // Draw first pixel        // Rasterize the line
        for (i = 0; y < ye; i++) {
            y = y + 1;            // Deal with octants...
            if (py <= 0) {
                py = py + 2 * dx1;
            } else {
                if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                    x = x + 1;
                } else {
                    x = x - 1;
                }
                py = py + 2 * (dx1 - dy1);
            }            // Draw pixel from line span at
            // currently rasterized position
            dot(x, y, color);
        }
    }
}


