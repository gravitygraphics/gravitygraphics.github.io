var _0x28b0c2=_0x4251;!function(){for(var e=_0x4251,n=_0x23fd();;)try{if(273919==+parseInt(e(269))+-parseInt(e(313))/2*(parseInt(e(309))/3)+-parseInt(e(343))/4*(-parseInt(e(349))/5)+-parseInt(e(332))/6+parseInt(e(310))/7*(-parseInt(e(282))/8)+-parseInt(e(281))/9*(parseInt(e(305))/10)+-parseInt(e(279))/11*(-parseInt(e(276))/12))break;n.push(n.shift())}catch(e){n.push(n.shift())}}();var LessonName="",CanvasIFrameLoaded=!1,LessonIFrameLoaded=!1,CodeToBeInjected="",intervalID=null;function readTextFile(e){var t=_0x28b0c2,o=new XMLHttpRequest;o[t(290)](t(300),e,!1),o[t(288)]=function(){var e,n=t;4===o[n(284)]&&(200!==o[n(346)]&&0!=o.status||(e=o[n(312)],document[n(304)](n(311)).innerHTML=e))},o[t(320)](null)}function setFocusThickboxIframe(){var e=_0x28b0c2;document[e(304)](e(325))[e(270)][e(289)]()}function CanvasLoaded(){CanvasIFrameLoaded=!0}function LessonLoaded(){LessonIFrameLoaded=!0}function _0x4251(e,n){var t=_0x23fd();return(_0x4251=function(e,n){return t[e-=269]})(e,n)}function ReloadCanvas(){var e=_0x28b0c2;CanvasIFrameLoaded=!1,document[e(304)]("iframecanvas")[e(338)]+=""}function LessonOnChange(){LessonIFrameLoaded=!1,ReloadCanvas(),intervalID=setInterval(GetLessonCode,100)}function WaitForCanvasReadyToInjectProgram(){CanvasIFrameLoaded&&(clearInterval(intervalID),injectJS(CodeToBeInjected))}function GetLessonCode(){var e=_0x28b0c2;console[e(316)](e(340)+CanvasIFrameLoaded+e(345)+LessonIFrameLoaded),CanvasIFrameLoaded&&LessonIFrameLoaded&&(document[e(304)](e(335))[e(270)][e(326)](),clearInterval(intervalID))}function injectJS(e){var n=_0x28b0c2;if(""==e)return!1;var t=window[n(314)][n(297)][n(328)][n(322)](n(286))[0],o=document[n(272)](n(319));return o[n(337)]=n(327)+e+n(351),t[n(339)](o),setTimeout(setFocusThickboxIframe,100),!1}function setLessonName(e){LessonName=e}function LoadYourCode(e,n){var t=_0x28b0c2;LessonName=n,void 0===window[t(348)][LessonName]?document[t(304)](e)[t(336)]="":document.getElementById(e)[t(336)]=window.localStorage[LessonName]}function SaveYourCode(){var e=_0x28b0c2,n=document.getElementById("TextAreaYourCode")[e(336)];window[e(348)][LessonName]=n}function RunYourCodeInTextArea(e,n){var t=_0x28b0c2;document[t(304)](t(325)).contentWindow[t(306)]();t=document[t(301)](e)[0][t(336)];window.localStorage[LessonName]=t,CodeToBeInjected=t,ReloadCanvas(),intervalID=setInterval(WaitForCanvasReadyToInjectProgram,100)}function RunExampleCodeInTextArea(e){var n=_0x28b0c2;document.getElementById(n(325))[n(270)][n(306)]();n=document[n(301)](e)[0][n(336)];CodeToBeInjected=n,ReloadCanvas(),intervalID=setInterval(WaitForCanvasReadyToInjectProgram,100)}function RunCode(e){injectJS(e)}function InsertLessonExampleCode(e){var n=_0x28b0c2;document[n(304)]("TextAreaExampleCode")[n(336)]=e}function InsertExerciseAnswer(e){var n=_0x28b0c2;document.getElementById(n(299)).value=e}function HideHelper(){var e=_0x28b0c2;document[e(304)]("iframecanvas")[e(270)][e(285)](),document[e(304)](e(323))[e(337)]="Show Helper"}function _0x23fd(){var e=["head","selectionEnd","onreadystatechange","focus","open","SOLUTION CODE","false","shiftKey","attr","length","RUN EXAMPLE CODE","myiframecanvas","visibility","TextAreaExampleCode","GET","querySelectorAll","startsWith","addEventListener","getElementById","755990ovTiyW","reset","keyCode","val","1211841ZeKdlB","1154209DHJnzc","lessons","responseText","2LmQggE","frames","selectionStart","log","visible","RUN SOLUTION CODE","script","send","ToggleHelper","getElementsByTagName","buttonHelper","ShowHelper","iframecanvas","SendLessonCode","clear();async function asyncfunc() {\n","document","substr","buttonExampleCode","white","1854330URPpnc","EXAMPLE CODE","hidden","iframelessons","value","innerHTML","src","appendChild","checking status: CanvasIFrameLoaded:","execCommand","keydown","1981652HPoCIw","join"," LessonIFrameLoaded:","status","Hide Helper","localStorage","5XyXPLJ","Show Helper","\nrefresh();\n}\n asyncfunc();","style","296133FFBdKX","contentWindow","ExampleCodeTitle","createElement","DOMContentLoaded","blur","black","640428SVcogB","insertText","textarea","121TrCiUa","color","27UQeIUS","8GuDvRP","SHOW SOLUTION CODE","readyState","HideHelper"];return(_0x23fd=function(){return e})()}function ShowHelper(){var e=_0x28b0c2;document[e(304)](e(325))[e(270)][e(324)](),document[e(304)](e(323))[e(337)]=e(347)}function ToggleHelper(){var e=_0x28b0c2;document[e(304)]("buttonHelper")[e(337)]==e(347)?document[e(304)]("buttonHelper")[e(337)]=e(350):document[e(304)]("buttonHelper")[e(337)]=e(347),document[e(304)](e(325))[e(270)][e(321)]()}function HideHelperButton(){var e=_0x28b0c2;document[e(304)](e(323))[e(352)].visibility=e(334)}function ShowHelperButton(){var e=_0x28b0c2;document[e(304)](e(323))[e(352)][e(298)]=e(317)}function HideSolution(){var e=_0x28b0c2;document[e(304)]("buttonExampleCode").innerHTML=e(283),document.getElementById(e(271))[e(337)]=e(291),document.getElementById("TextAreaExampleCode").style.color=e(331)}function ShowSolution(){var e=_0x28b0c2;document.getElementById("buttonExampleCode").innerHTML=e(318),document[e(304)](e(299))[e(352)][e(280)]=e(275)}function ShowExample(){var e=_0x28b0c2;document[e(304)](e(330))[e(337)]="RUN EXAMPLE CODE",document[e(304)](e(271))[e(337)]=e(333),document[e(304)]("TextAreaExampleCode")[e(352)].color=e(275)}function buttonExampleCodeClicked(e){var n=_0x28b0c2;document[n(304)]("buttonExampleCode")[n(337)]==n(283)?ShowSolution():document[n(304)]("buttonExampleCode")[n(337)]!=n(318)&&document[n(304)](n(330))[n(337)]!=n(296)||RunExampleCodeInTextArea(e)}document[_0x28b0c2(303)](_0x28b0c2(273),e=>{intervalID=setInterval(GetLessonCode,100)}),$(function(){var i=_0x28b0c2;$("textarea")[i(294)]("spellcheck",i(292));var u=!0;$(i(278))[i(342)](function(e){var n=i;if(27==e[n(307)])return u=!u,!1;if(13===e.keyCode&&u&&this[n(315)]==this[n(287)]){for(var t=this[n(315)],o=$(this).val();0<t&&"\n"!=o[t-1];)t--;for(var a=t;" "==o[t]||"\t"==o[t];)t++;if(a<t)return document.execCommand(n(277),!1,"\n"+o.substr(a,t-a)),this[n(274)](),this[n(289)](),!1}if(9===e[n(307)]&&u){if(this[n(315)]==this[n(287)])e[n(293)]?(o=this[n(336)],0<this.selectionStart&&"\t"==o[this.selectionStart-1]&&document[n(341)]("delete")):document.execCommand(n(277),!1,"\t");else{for(var r=this[n(315)],s=this[n(287)],o=$(this)[n(308)]();0<r&&"\n"!=o[r-1];)r--;for(;0<s&&"\n"!=o[s-1]&&s<o.length;)s++;for(var c=o[n(329)](r,s-r).split("\n"),d=0;d<c[n(295)];d++)d==c.length-1&&0==c[d][n(295)]||(e.shiftKey?c[d][n(302)]("\t")?c[d]=c[d][n(329)](1):c[d].startsWith("    ")&&(c[d]=c[d].substr(4)):c[d]="\t"+c[d]);c=c[n(344)]("\n"),this.value=o[n(329)](0,r)+c+o[n(329)](s),this.selectionStart=r,this.selectionEnd=r+c[n(295)]}return!1}return u=!0}),document.getElementById(i(325))[i(289)]()});