function _0x55aa(){var t=["in_array","parseInput","433584KCqDUK","2633898isApdx","77HMsdzt","print","57vEwYkB","log","line","3103920nVjzPI","10epIRvh","I don't recognize '","read","2112YeXzLi","2937612IRPqgF","getRoom","inventory","getPosition","println","init","19033lOsTVd","clearInput","actions","235389HULrpv","title","clear","room items:","room data:","room","text","debug","speak","getInventory","46790myfuJn","setPosition","sound","trim","zone"];return(_0x55aa=function(){return t})()}function _0x2eac(t,n){var r=_0x55aa();return(_0x2eac=function(t,n){return r[t-=373]})(t,n)}!function(){for(var t=_0x2eac,n=_0x55aa();;)try{if(570629==+parseInt(t(379))+parseInt(t(389))/2*(parseInt(t(400))/3)+-parseInt(t(408))/4+-parseInt(t(404))/5*(parseInt(t(397))/6)+-parseInt(t(376))/7*(parseInt(t(407))/8)+parseInt(t(396))/9+parseInt(t(403))/10*(parseInt(t(398))/11))break;n.push(n.shift())}catch(t){n.push(n.shift())}}();var System=function(){var o=_0x2eac;this[o(375)]=function(){var t=o;this[t(381)](),player[t(390)](0,2)},this[o(406)]=function(){var t=o;return terminal.line[t(385)][t(392)]()},this.print=function(t){var n=o;terminal[n(399)](t),terminal[n(391)][n(387)](t)},this[o(374)]=function(t){terminal[o(399)](t+"\n")},this.clear=function(){this[o(377)]()},this[o(377)]=function(){var t=o;terminal[t(402)][t(385)]=""},this[o(395)]=function(){var t=o,n=this[t(406)]().split(" "),r=(r=n.splice(0,1))[0],e=player[t(373)]();world[t(409)](e[t(393)],e[t(384)])[t(378)](r,n)||i(e,r,n)||player[t(378)](r,n)||a(r,n)||system[t(378)](r,n)||(system[t(399)](t(405)+r+"'."),terminal[t(391)].beep([[500,.1]])),this[t(377)]()};var i=function(t,n,r){for(var e=o,i=world.getItems(t[e(393)],t[e(384)]),a=0;a<i.length;a++)if(i[a][e(378)](n,r))return!0;return!1},a=function(t,n){for(var r=o,e=player.getInventory(),i=0;i<e.length;i++)if(e[i][r(378)](t,n))return!0;return!1};this.title=function(t){document[o(380)]=t},this[o(394)]=function(t,n){for(var r=0;r<n.length;r++)if(n[r]===t)return!0;return!1},this[o(378)]=function(t,n){var r=o;if(t==r(386)){if(n[0]==r(410))return console[r(401)](player[r(388)]()),!0;if("room"==n[0]){n=player[r(373)]();return console.log(r(383),world.getRoom(n[r(393)],n[r(384)])),console[r(401)](r(382),world.getItems(n[r(393)],n[r(384)])),!0}}return!1}},system=new System;