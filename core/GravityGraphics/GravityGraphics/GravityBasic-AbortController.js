var _0x1880f5=_0x2a14;function _0x2a14(r,o){var t=_0x340f();return(_0x2a14=function(r,o){return t[r-=309]})(r,o)}!function(){for(var r=_0x2a14,o=_0x340f();;)try{if(283492==-parseInt(r(371))*(-parseInt(r(399))/2)+-parseInt(r(398))/3+-parseInt(r(352))/4+parseInt(r(383))/5+-parseInt(r(392))/6+parseInt(r(353))/7*(-parseInt(r(328))/8)+parseInt(r(327))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const controller=new AbortController,signal=controller[_0x1880f5(382)];async function system_input(r=!1){var t=_0x1880f5;const o=await input_promise("",r=0==r?prompt:r);alert(t(342)+command_line+"\nprocessing command..."),command_line=prompt="",o[t(329)](r=>{var o=t;print_buffer="",r[o(321)]===o(310)?console[o(365)](o(360)):console.log("Promise Rejected")})}async function input(r="",o=!1){var t=_0x1880f5;const e=await input_promise(r,o,signal);o=command_line;return command_line=prompt="",e[t(329)](r=>{var o=t;print_buffer="",r[o(321)]===o(310)?console.log(o(360)):console.log(o(363))}),o}function abort_promise(){var r=_0x1880f5;controller[r(309)]()}function input_promise(r,o="",t){var i=_0x1880f5;return t[i(402)]?Promise[i(346)](new DOMException(i(369),"AbortError")):new Promise(t=>{var e=i;async function n(r){var o=e;13===r[o(395)]?(r.preventDefault(),document[o(373)](o(350),n),document[o(373)](o(374),a),erasecursor(cursor_x,cursor_y),cursor_x=0,row_max<++cursor_y&&(scrollUp(),cursor_y=row_max),is_input=!1,t()):8===r[o(395)]&&(r[o(330)](),command_line=command_line.substring(0,command_line[o(334)]-1),erasecursor(cursor_x,cursor_y),cursor_x--,console[o(365)](o(344)+command_line+o(380)+cursor_x),cursor_x<0&&0<command_line[o(334)]?(cursor_x=col_max-1,cursor_y--,console[o(365)](o(349)+command_line.length+" cursor_x:"+cursor_x)):cursor_x<prompt.length&&(cursor_x=prompt[o(334)]))}async function a(r){var o=e,t=r[o(358)]||r.keyCode;r[o(330)](),command_line+=String[o(355)](t),erasecursor(cursor_x,cursor_y),drawcursor(cursor_x+1,cursor_y),printchar(String[o(355)](t),cursor_x,cursor_y),col_max-1<++cursor_x&&(cursor_x=0,cursor_y++),row_max<cursor_y&&(scrollUp(),cursor_y=row_max)}is_input=!0,document.removeEventListener(e(350),n),document[e(373)](e(374),a),animateprint(r,o),document[e(372)](e(336)).focus(),document.addEventListener(e(350),n),document[e(323)](e(374),a)})}function delay(o=.05){return new Promise(r=>setTimeout(r,1e3*o))}var Color16=[];Color16[0]=_0x1880f5(393),Color16[1]=_0x1880f5(337),Color16[2]="#0f42e3",Color16[3]=_0x1880f5(368),Color16[4]="#007b0e",Color16[5]=_0x1880f5(367),Color16[6]=_0x1880f5(377),Color16[7]=_0x1880f5(389),Color16[8]="#7c4800",Color16[9]=_0x1880f5(375),Color16[10]=_0x1880f5(332),Color16[11]="#ff8de7",Color16[12]=_0x1880f5(343),Color16[13]=_0x1880f5(376),Color16[14]=_0x1880f5(403),Color16[15]="#ffffff";var ColorNames=[];function _0x340f(){var r=["slice","olive","floor","measureText","magenta","getContext","purple","name","left","addEventListener","canvas","fillStyle","strokeStyle","14220828KAhbIh","480TujGEO","catch","preventDefault","red","#8e79a5","fillText","length","textAlign","gravitycanvas","#8e1664","size","DOMContentLoaded","width","stroke","command:","#2ad600","command_line:","gravitycontainer","reject","fill","20px Arial","command_line.length:","keydown","white","1558976izFuOY","28623eXNlAK","getImageData","fromCharCode","lineTo","16px II40","which","focus","Promise Aborted","blue","brown","Promise Rejected","createElement","log","lime","#868c64","#d428fe","Aborted","beginPath","34YxJwyd","getElementById","removeEventListener","keypress","#f26300","#dcd400","#00a3ff","random","string"," cursor_x:","font","signal","1394990rOrcgL","#333","moveTo","#C0C0C0","orange","coord","#a5b7ff","green","putImageData","2480376EbZTyC","#000000","rect","keyCode","#ccc","black","1586760aCSIAT","106JfRwoQ","fillRect","Document is ready!","aborted","#4aff85","ceil","abort","AbortError","yellow","height","abs"];return(_0x340f=function(){return r})()}ColorNames[0]=_0x1880f5(397),ColorNames[1]="grey",ColorNames[2]=_0x1880f5(366),ColorNames[3]=_0x1880f5(390),ColorNames[4]=_0x1880f5(331),ColorNames[5]="pink",ColorNames[6]="cyan",ColorNames[7]=_0x1880f5(315),ColorNames[8]=_0x1880f5(320),ColorNames[9]=_0x1880f5(318),ColorNames[10]="lightblue",ColorNames[11]=_0x1880f5(361),ColorNames[12]=_0x1880f5(362),ColorNames[13]=_0x1880f5(387),ColorNames[14]=_0x1880f5(311),ColorNames[15]=_0x1880f5(351);var size=10,gravitycanvas="",gravitycontext="",terminal="",terminal_font=_0x1880f5(357),intervalID=null,line_height=20,cursor_width=16,cursor_height=18,cursor_blink_counter=1,cursor_x=0,cursor_y=0,col_max=50,row_max=21,text_width=0,text_padding_top=4,print_buffer="",is_input=!1,command_line="",prompt_default="]",prompt="";async function onLoad(){var r=_0x1880f5;console[r(365)](r(401))}function drawgrid(){for(var r=_0x1880f5,o=0;o<gravitycanvas[r(340)];o+=10)gravitycontext[r(370)](),gravitycontext[r(385)](o,0),gravitycontext.lineTo(o,400),gravitycontext[r(326)]=r(384),gravitycontext.stroke();for(var t=0;t<gravitycanvas[r(312)];t+=10)gravitycontext[r(370)](),gravitycontext.moveTo(0,t),gravitycontext[r(356)](600,t),gravitycontext[r(326)]=r(384),gravitycontext[r(341)]()}function setupcanvas(r=600,o=400){var t=_0x1880f5,e=document[t(372)](t(345));gravitycanvas.id=t(336),gravitycanvas[t(340)]=r,gravitycanvas.height=o,e.appendChild(gravitycanvas),gravitycontext[t(381)]=terminal_font;e=gravitycontext[t(317)]("W");text_width=Math[t(404)](e[t(340)])}function blinkcursor(){if(0!=is_input||""!=print_buffer)switch(cursor_blink_counter%3){case 1:case 2:drawcursor(cursor_x,cursor_y),cursor_blink_counter++;break;default:erasecursor(cursor_x,cursor_y),cursor_blink_counter=1}}function drawcursor(r=0,o=0){rect(r*text_width,o*line_height+text_padding_top,cursor_width,cursor_height,_0x1880f5(390),"size",1)}function erasecursor(r=0,o=0){var t=_0x1880f5;rect(r*text_width,o*line_height+text_padding_top,cursor_width,cursor_height,t(397),t(338),1)}function print(r){animateprint(r)}async function animateprint(r,o=!1){var t=_0x1880f5;for(print_buffer+=r+"\n";0<print_buffer[t(334)];){var e=print_buffer.substring(0,1);print_buffer=print_buffer[t(314)](1,print_buffer[t(334)]),"\n"==e?(erasecursor(cursor_x,cursor_y),cursor_x=0,cursor_y++):(erasecursor(cursor_x,cursor_y),drawcursor(cursor_x+1,cursor_y),printchar(e,cursor_x,cursor_y),col_max<++cursor_x&&(cursor_x=0,cursor_y++),row_max<cursor_y&&(cursor_y=row_max)),await delay(.05)}drawprompt(o,cursor_x,cursor_y)}function printchar(r="",o=0,t=0,e=_0x1880f5(386),n=_0x1880f5(322),a="16px II40"){var i=_0x1880f5;gravitycontext[i(370)](),gravitycontext[i(335)]=n,gravitycontext[i(381)]=a;a=gravitycontext.measureText("W"),a=Math[i(404)](a.width);gravitycontext[i(325)]=e,gravitycontext[i(333)](r,o*a,t*line_height+line_height)}function drawprompt(r=!1,o=0,t=0,e=_0x1880f5(386)){var n=_0x1880f5;0!=r&&(printchar(prompt=r,o,t,e),cursor_x=prompt[n(334)])}function scrollUp(){var r=_0x1880f5,o=gravitycontext[r(354)](0,0,gravitycontext[r(324)].width,gravitycontext.canvas[r(312)]);gravitycontext[r(391)](o,0,-line_height),textbar(0,21,50,1,"black")}function textbar(r=0,o=0,t=49,e=1,n=_0x1880f5(351)){var a=_0x1880f5;gravitycontext[a(370)](),gravitycontext.rect(r*cursor_width,o*cursor_height,t*cursor_width,e*line_height+text_padding_top),console[a(365)](r*cursor_width+", "+o*cursor_height+", "+t*cursor_width+", "+e*line_height),gravitycontext.fillStyle=n,gravitycontext[a(347)]()}function clear(){var r=_0x1880f5;gravitycontext.clearRect(0,0,gravitycanvas[r(340)],gravitycanvas[r(312)]),cursor_y=cursor_x=0}function SetFocus(){var r=_0x1880f5;document[r(372)](r(336))[r(359)]()}function plotRandomDots(r,o=Color16){for(i=0;i<200;i++)dot(random(0,59),random(0,39),random(0,15),o)}function displayColorNames(){var r=_0x1880f5;for(row=0;row<4;row++)for(i=0;i<4;i++){var o=15*i;rect(o,4.5*row,15+o,4.5*(row+1),ColorNames[i+4*row]),word(ColorNames[i+4*row],3+o,4.5*row+3,color="white",textAlign=r(322),font="20px Arial"),3!=row||2!=i&&3!=i||word(ColorNames[i+4*row],3+o,4.5*row+3,color=r(396),textAlign=r(322),font=r(348))}}function displayColors1x16(){for(i=0;i<16;i++){var r=3*i;rect(0,r,60,3+r,Color16[i])}}function displayColors6x2(){var r,o=_0x1880f5;for(i=0;i<8;i++)rect(r=7.5*i,0,r+7.5,7.5,Color16[i]),word(i,r+3,4.5,color=o(351),textAlign=o(322),font=o(348));for(i=0;i<8;i++)rect(r=7.5*i,7.5,r+7.5,15,Color16[i+8]),word(i+8,r+3,12,color=o(351),textAlign=o(322),font="20px Arial");word(15,55.5,12,color=o(396),textAlign="left",font="20px Arial")}function getColor(r,o=Color16){return typeof r===_0x1880f5(379)||r instanceof String?r:o[r=15<r?random(0,15):r]}function random(r=0,o=999){var t=_0x1880f5;return r=Math[t(404)](r),o=Math[t(316)](o),Math[t(316)](Math[t(378)]()*(o-r)+r)}function dot(r=0,o=0,t=_0x1880f5(366),e=Color16,n=null){var a=_0x1880f5;null==n&&(n=size),gravitycontext[a(370)](),gravitycontext[a(325)]=getColor(t,e),gravitycontext[a(400)](r*n,o*n,n,n)}function rect(r=0,o=0,t=600,e=600,n=_0x1880f5(331),a=_0x1880f5(388),i=null){var c=_0x1880f5;null==i&&(i=size),gravitycontext[c(370)](),a==c(388)?gravitycontext[c(394)](r*i,o*i,(t-r)*i,(e-o)*i):a==c(338)&&gravitycontext.rect(r*i,o*i,t*i,e*i),gravitycontext[c(325)]=n,gravitycontext[c(347)]()}function word(r="",o=0,t=0,e=_0x1880f5(361),n=_0x1880f5(322),a=_0x1880f5(357)){var i=_0x1880f5;gravitycontext[i(370)](),gravitycontext[i(335)]=n,gravitycontext.font=a;a=gravitycontext[i(317)]("W");Math[i(404)](a[i(340)]);gravitycontext[i(325)]=e,gravitycontext[i(333)](r,o*size,t*size)}function line(r=0,o=0,t=30,e=40,n=_0x1880f5(320)){var a=_0x1880f5;let i,c,s,_,l,u,x,f,m,v,d;if(s=t-r,_=e-o,l=Math[a(313)](s),u=Math[a(313)](_),x=2*u-l,f=2*l-u,u<=l)for(m=0<=s?(i=r,c=o,t):(i=t,c=e,r),dot(i,c,n),d=0;i<m;d++)i+=1,x<0?x+=2*u:(s<0&&_<0||0<s&&0<_?c+=1:c-=1,x+=2*(u-l)),dot(i,c,n);else for(v=0<=_?(i=r,c=o,e):(i=t,c=e,o),dot(i,c,n),d=0;c<v;d++)c+=1,f<=0?f+=2*l:(s<0&&_<0||0<s&&0<_?i+=1:i-=1,f+=2*(l-u)),dot(i,c,n)}intervalID=setInterval(blinkcursor,300),gravitycanvas=document[_0x1880f5(364)]("canvas"),gravitycontext=gravitycanvas[_0x1880f5(319)]("2d"),setupcanvas(),document.addEventListener(_0x1880f5(339),r=>{onLoad()});