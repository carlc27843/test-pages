
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1;u="object"===typeof window;v="function"===typeof importScripts;ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ca=!u&&!ba&&!v;var w="",da,ea,x,fa,ha;
if(ba)w=v?require("path").dirname(w)+"/":__dirname+"/",da=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca)"undefined"!=typeof read&&(da=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
ea=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ja=e.print||console.log.bind(console),A=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var B;e.wasmBinary&&(B=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);
"object"!==typeof WebAssembly&&y("no native wasm support detected");var ka,la=!1;function assert(a,b){a||y("Assertion failed: "+b)}function ma(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c){var d={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var p=(n.length<<2)+1;q=C(p);D(n,E,q,p)}return q},array:function(n){var q=C(n.length);oa.set(n,q);return q}};a=ma(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),f[g]=m(c[g])):f[g]=c[g]}a.apply(null,f);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function F(a,b){return a?sa(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=C(b);D(a,oa,c,b);return c}var va,oa,E,wa,xa,G,ya,H,I;
function za(){var a=ka.buffer;va=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=wa=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=xa=new Uint16Array(a);e.HEAPU32=ya=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var J,Aa=[],Ba=[],Ca=[],Da=[],Ea=[];Ba.push({vc:function(){Fa()}});function Ga(){var a=e.preRun.shift();Aa.unshift(a)}var K=0,Ha=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function y(a){if(e.onAbort)e.onAbort(a);A(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ia(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ja(){return Ia("data:application/octet-stream;base64,")}var M="test.wasm";if(!Ja()){var Ka=M;M=e.locateFile?e.locateFile(Ka,w):w+Ka}
function La(){var a=M;try{if(a==M&&B)return new Uint8Array(B);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}
function Ma(){if(!B&&(u||v)){if("function"===typeof fetch&&!Ia("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return La()});if(ea)return new Promise(function(a,b){ea(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.vc;"number"===typeof c?void 0===b.fc?J.get(c)():J.get(c)(b.fc):c(void 0===b.fc?null:b.fc)}}}var Oa=[null,[],[]],Pa={},Qa=0;function Ra(){for(var a=N.length-1;0<=a;--a)Sa(a);N=[];Ta=[]}var Ta=[];function Ua(){if(Qa&&Va.dc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Nc.apply(null,b.Bc)}}var N=[];function Sa(a){var b=N[a];b.target.removeEventListener(b.Xb,b.tc,b.Yb);N.splice(a,1)}
function O(a){function b(d){++Qa;Va=a;Ua();a.$b(d);Ua();--Qa}if(a.Zb)a.tc=b,a.target.addEventListener(a.Xb,b,a.Yb),N.push(a),Wa||(Da.push(Ra),Wa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Xb==a.Xb&&Sa(c--)}var Wa,Va,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?F(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function eb(a,b,c,d,f,h){Xa||(Xa=Q(164));a={target:P(a),dc:!0,Xb:h,Zb:d,$b:function(g){var m=Xa,n=m>>2;G[n]=g.location;G[n+1]=g.ctrlKey;G[n+2]=g.shiftKey;G[n+3]=g.altKey;G[n+4]=g.metaKey;G[n+5]=g.repeat;G[n+6]=g.charCode;G[n+7]=g.keyCode;G[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);J.get(d)(f,m,b)&&g.preventDefault()},Yb:c};O(a)}
function fb(a,b,c){a>>=2;G[a]=b.screenX;G[a+1]=b.screenY;G[a+2]=b.clientX;G[a+3]=b.clientY;G[a+4]=b.ctrlKey;G[a+5]=b.shiftKey;G[a+6]=b.altKey;G[a+7]=b.metaKey;wa[2*a+16]=b.button;wa[2*a+17]=b.buttons;G[a+9]=b.movementX;G[a+10]=b.movementY;c=db(c);G[a+11]=b.clientX-c.left;G[a+12]=b.clientY-c.top}function R(a,b,c,d,f,h){Ya||(Ya=Q(64));a=P(a);O({target:a,dc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Xb:h,Zb:d,$b:function(g){g=g||event;fb(Ya,g,a);J.get(d)(f,Ya,b)&&g.preventDefault()},Yb:c})}
function gb(a,b,c,d,f){Za||(Za=Q(260));O({target:a,Xb:f,Zb:d,$b:function(h){h=h||event;var g=Za,m=document.pointerLockElement||document.ic||document.kc||document.jc;G[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);J.get(d)(20,g,b)&&h.preventDefault()},Yb:c})}function hb(a,b,c,d,f){O({target:a,Xb:f,Zb:d,$b:function(h){h=h||event;J.get(d)(38,0,b)&&h.preventDefault()},Yb:c})}
function ib(a,b,c,d){$a||($a=Q(36));a=P(a);O({target:a,Xb:"resize",Zb:d,$b:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=$a;G[g>>2]=f.detail;G[g+4>>2]=h.clientWidth;G[g+8>>2]=h.clientHeight;G[g+12>>2]=innerWidth;G[g+16>>2]=innerHeight;G[g+20>>2]=outerWidth;G[g+24>>2]=outerHeight;G[g+28>>2]=pageXOffset;G[g+32>>2]=pageYOffset;J.get(d)(10,g,b)&&f.preventDefault()}}},Yb:c})}
function jb(a,b,c,d,f,h){ab||(ab=Q(1684));a=P(a);O({target:a,dc:"touchstart"==h||"touchend"==h,Xb:h,Zb:d,$b:function(g){for(var m={},n=g.touches,q=0;q<n.length;++q){var p=n[q];m[p.identifier]=p}n=g.changedTouches;for(q=0;q<n.length;++q)p=n[q],p.xc=1,m[p.identifier]=p;n=g.targetTouches;for(q=0;q<n.length;++q)m[n[q].identifier].zc=1;n=ab;p=n>>2;G[p+1]=g.ctrlKey;G[p+2]=g.shiftKey;G[p+3]=g.altKey;G[p+4]=g.metaKey;p+=5;var nb=db(a),ob=0;for(q in m){var z=m[q];G[p]=z.identifier;G[p+1]=z.screenX;G[p+2]=
z.screenY;G[p+3]=z.clientX;G[p+4]=z.clientY;G[p+5]=z.pageX;G[p+6]=z.pageY;G[p+7]=z.xc;G[p+8]=z.zc;G[p+9]=z.clientX-nb.left;G[p+10]=z.clientY-nb.top;p+=13;if(31<++ob)break}G[n>>2]=ob;J.get(d)(f,n,b)&&g.preventDefault()},Yb:c})}function kb(a,b,c,d,f,h){a={target:P(a),Xb:h,Zb:d,$b:function(g){g=g||event;J.get(d)(f,0,b)&&g.preventDefault()},Yb:c};O(a)}
function lb(a,b,c,d){bb||(bb=Q(96));O({target:a,dc:!0,Xb:"wheel",Zb:d,$b:function(f){f=f||event;var h=bb;fb(h,f,a);I[h+64>>3]=f.deltaX;I[h+72>>3]=f.deltaY;I[h+80>>3]=f.deltaZ;G[h+88>>2]=f.deltaMode;J.get(d)(9,h,b)&&f.preventDefault()},Yb:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function rb(a){a.Ic=a.getExtension("WEBGL_multi_draw")}
var sb=1,tb=[],S=[],ub=[],vb=[],wb=[],T=[],U=[],xb=[],V={},yb={};function W(a){zb||(zb=a)}function X(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}function Ab(a){a||(a=Bb);if(!a.wc){a.wc=!0;var b=a.ec;mb(b);pb(b);qb(b);b.Dc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var zb,Bb,Cb=["default","low-power","high-performance"];
function Db(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&X(d);h?(h.name=g,d[g]=h):W(1282);G[b+4*f>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else W(1281)}function Fb(a){var b=ta(a)+1,c=Q(b);D(a,E,c,b);return c}
function Gb(a,b,c,d,f){a-=5120;a=1==a?E:4==a?G:6==a?H:5==a||28922==a?ya:xa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Hb=new Float32Array(288),Ib=0;288>Ib;++Ib)Z[Ib]=Hb.subarray(0,Ib+1);
var Nb={ja:function(){return 0},Za:function(){return 0},$a:function(){},R:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},V:function(a,b,c){a=P(a);if(!a)return-4;a=db(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Va:function(a,b,c){E.copyWithin(a,b,b+c)},Ea:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+
100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);za();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},O:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},ca:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,
c,d){R(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ic||document.body.kc||document.body.jc))return-1;a=P(a);if(!a)return-4;gb(a,b,c,d,"pointerlockchange");gb(a,b,c,d,"mozpointerlockchange");gb(a,b,c,d,"webkitpointerlockchange");gb(a,b,c,d,"mspointerlockchange");
return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ic||document.body.kc||document.body.jc))return-1;a=P(a);if(!a)return-4;hb(a,b,c,d,"pointerlockerror");hb(a,b,c,d,"mozpointerlockerror");hb(a,b,c,d,"webkitpointerlockerror");hb(a,b,c,d,"mspointerlockerror");return 0},La:function(a,b,c,d){ib(a,b,c,d);return 0},Y:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){jb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){jb(a,b,c,d,24,
"touchmove");return 0},$:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},U:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d),0):-1},A:function(a,b){b>>=2;b={alpha:!!G[b],depth:!!G[b+1],stencil:!!G[b+2],antialias:!!G[b+3],premultipliedAlpha:!!G[b+4],preserveDrawingBuffer:!!G[b+5],powerPreference:Cb[G[b+6]],failIfMajorPerformanceCaveat:!!G[b+
7],yc:G[b+8],Hc:G[b+9],lc:G[b+10],uc:G[b+11],Jc:G[b+12],Kc:G[b+13]};a=P(a);if(!a||b.uc)b=0;else if(a=a.getContext("webgl",b)){var c=X(xb),d={Gc:c,attributes:b,version:b.yc,ec:a};a.canvas&&(a.canvas.Ac=d);xb[c]=d;("undefined"===typeof b.lc||b.lc)&&Ab(d);b=c}else b=0;return b},_a:function(a,b){a=xb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(Y);"OES_vertex_array_object"==b&&pb(Y);"WEBGL_draw_buffers"==b&&qb(Y);"WEBGL_multi_draw"==b&&rb(Y);return!!a.ec.getExtension(b)},
ya:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ib:function(a){Bb=xb[a];e.Cc=Y=Bb&&Bb.ec;return!a||Y?0:-5},ka:function(){return 0},Ya:function(a,b,c,d){a=Pa.Fc(a);b=Pa.Ec(a,b,c);G[d>>2]=b;return 0},Ua:function(){},Xa:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=G[b+8*h>>2],m=G[b+(8*h+4)>>2],n=0;n<m;n++){var q=E[g+n],p=Oa[a];0===q||10===q?((1===a?ja:A)(sa(p,0)),p.length=0):p.push(q)}f+=m}G[d>>2]=f;return 0},b:function(a){Y.activeTexture(a)},F:function(a,
b){Y.attachShader(S[a],U[b])},c:function(a,b){Y.bindBuffer(a,tb[b])},B:function(a,b){Y.bindFramebuffer(a,ub[b])},Da:function(a,b){Y.bindRenderbuffer(a,vb[b])},a:function(a,b){Y.bindTexture(a,wb[b])},M:function(a,b,c,d){Y.blendColor(a,b,c,d)},N:function(a,b){Y.blendEquationSeparate(a,b)},P:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},H:function(a,b,c,d){Y.bufferData(a,c?E.subarray(c,c+b):b,d)},m:function(a,b,c,d){Y.bufferSubData(a,b,E.subarray(d,d+c))},oa:function(a){Y.clear(a)},ra:function(a,b,
c,d){Y.clearColor(a,b,c,d)},qa:function(a){Y.clearDepth(a)},pa:function(a){Y.clearStencil(a)},s:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){Y.compileShader(U[a])},Aa:function(){var a=X(S),b=Y.createProgram();b.name=a;S[a]=b;return a},wa:function(a){var b=X(U);U[b]=Y.createShader(a);return b},J:function(a){Y.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=tb[d];f&&(Y.deleteBuffer(f),f.name=0,tb[d]=null)}},h:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>
2],f=ub[d];f&&(Y.deleteFramebuffer(f),f.name=0,ub[d]=null)}},w:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,V[a]=null):W(1281)}},S:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=vb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,vb[d]=null)}},r:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):W(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=wb[d];f&&(Y.deleteTexture(f),f.name=0,wb[d]=null)}},v:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},
d:function(a){Y.disable(a)},Q:function(a){Y.disableVertexAttribArray(a)},ab:function(a,b,c){Y.drawArrays(a,b,c)},bb:function(a,b,c,d){Y.drawElements(a,b,c,d)},e:function(a){Y.enable(a)},hb:function(a){Y.enableVertexAttribArray(a)},K:function(a){Y.frontFace(a)},I:function(a,b){Db(a,b,"createBuffer",tb)},Fa:function(a,b){Db(a,b,"createRenderbuffer",vb)},Ba:function(a,b){Db(a,b,"createTexture",wb)},sa:function(a,b){return Y.getAttribLocation(S[a],F(b))},f:function(a,b){Eb(a,b)},xa:function(a,b,c,d){a=
Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},E:function(a,b,c){if(c)if(a>=sb)W(1281);else{var d=V[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.hc;else if(35722==b){if(-1==d.ac){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.ac=0;b<f;++b)d.ac=Math.max(d.ac,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.ac}else if(35381==b){if(-1==d.bc)for(a=S[a],f=Y.getProgramParameter(a,
35382),b=d.bc=0;b<f;++b)d.bc=Math.max(d.bc,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.bc}else G[c>>2]=Y.getProgramParameter(S[a],b);else W(1282)}else W(1281)},ta:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},C:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),G[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(U[a]),G[c>>2]=a?a.length+1:0):G[c>>2]=Y.getShaderParameter(U[a],b):W(1281)},
Ka:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+Y.getParameter(7938)+")");break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;
default:return W(1280),0}return yb[a]=b},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=V[a]&&V[a].sc[b])&&0<=c&&c<a[0]?a[1]+c:-1},za:function(a){Y.linkProgram(S[a]);var b=S[a];a=V[a]={sc:{},hc:0,ac:-1,bc:-1};for(var c=a.sc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.hc=Math.max(a.hc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,
g);if(m){var n=X(T);c[g]=[h.size,n];T[n]=m;for(var q=1;q<h.size;++q)m=Y.getUniformLocation(b,g+"["+q+"]"),n=X(T),T[n]=m}}},L:function(a,b){Y.polygonOffset(a,b)},Ca:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},k:function(a,b,c,d){Y.scissor(a,b,c,d)},va:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?G[d+4*h>>2]:-1;f+=F(G[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},Ha:function(a,b,c){Y.stencilFunc(a,b,c)},z:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},t:function(a){Y.stencilMask(a)},
Ga:function(a,b,c){Y.stencilOp(a,b,c)},y:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},G:function(a,b,c,d,f,h,g,m,n){Y.texImage2D(a,b,c,d,f,h,g,m,n?Gb(m,g,d,f,n):null)},g:function(a,b,c){Y.texParameteri(a,b,c)},gb:function(a,b,c){if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=H.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)},D:function(a,b){Y.uniform1i(T[a],b)},fb:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>
2,c+8*b>>2);Y.uniform2fv(T[a],d)},eb:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)},db:function(a,b,c){if(72>=b){var d=Z[4*b-1],f=H;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)},cb:function(a,b,c,d){if(18>=b){var f=Z[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var m=
d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=H.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)},j:function(a){Y.useProgram(S[a])},ma:function(a,b){Y.vertexAttribDivisor(a,b)},na:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},i:function(a,b,c,d){Y.viewport(a,b,c,d)},Sa:function(){e.mc=
function(a){0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.mc)},Ra:function(){e.rc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.rc)},Qa:function(a){e.Lc=[];a=F(a);a=document.getElementById(a);e.nc=function(b){b.stopPropagation();b.preventDefault()};e.oc=function(b){b.stopPropagation();b.preventDefault()};e.pc=function(b){b.stopPropagation();b.preventDefault()};e.qc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;e.Mc=c;Kb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Lb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.nc,!1);a.addEventListener("dragleave",e.oc,!1);a.addEventListener("dragover",e.pc,!1);a.addEventListener("drop",e.qc,!1)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},
o:function(){document.getElementById("_sokol_app_input_element").focus()},Ta:function(a){a=F(a);e.cc=document.getElementById(a);e.cc||console.log("sokol_app.h: invalid target:"+a);e.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Pa:function(){window.removeEventListener("beforeunload",e.mc)},Oa:function(){window.removeEventListener("paste",e.rc)},Na:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.nc);a.removeEventListener("dragleave",
e.oc);a.removeEventListener("dragover",e.pc);a.removeEventListener("drop",e.qc)},x:function(){e.cc&&e.cc.requestPointerLock&&e.cc.requestPointerLock()},n:function(){document.getElementById("_sokol_app_input_element").blur()},Ma:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},jb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())na("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},la:function(){return navigator.userAgent.includes("Macintosh")?1:0},q:function(){return performance.now()}};
(function(){function a(f){e.asm=f.exports;ka=e.asm.kb;za();J=e.asm.Wb;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ha&&(clearInterval(Ha),Ha=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){A("failed to asynchronously prepare wasm: "+h);y(h)})}var d={a:Nb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return A("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||Ia("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){A("wasm streaming compile failed: "+h);A("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Fa=e.___wasm_call_ctors=function(){return(Fa=e.___wasm_call_ctors=e.asm.lb).apply(null,arguments)},Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.mb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.nb).apply(null,arguments)};
var Jb=e.__sapp_html5_get_ask_leave_site=function(){return(Jb=e.__sapp_html5_get_ask_leave_site=e.asm.ob).apply(null,arguments)},Kb=e.__sapp_emsc_begin_drop=function(){return(Kb=e.__sapp_emsc_begin_drop=e.asm.pb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.qb).apply(null,arguments)};var Lb=e.__sapp_emsc_end_drop=function(){return(Lb=e.__sapp_emsc_end_drop=e.asm.rb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.sb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.vb).apply(null,arguments)};
e.___em_js__sapp_js_add_beforeunload_listener=function(){return(e.___em_js__sapp_js_add_beforeunload_listener=e.asm.wb).apply(null,arguments)};e.___em_js__sapp_js_remove_beforeunload_listener=function(){return(e.___em_js__sapp_js_remove_beforeunload_listener=e.asm.xb).apply(null,arguments)};e.___em_js__sapp_js_add_clipboard_listener=function(){return(e.___em_js__sapp_js_add_clipboard_listener=e.asm.yb).apply(null,arguments)};
e.___em_js__sapp_js_remove_clipboard_listener=function(){return(e.___em_js__sapp_js_remove_clipboard_listener=e.asm.zb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Ab).apply(null,arguments)};e.___em_js__sapp_js_add_dragndrop_listeners=function(){return(e.___em_js__sapp_js_add_dragndrop_listeners=e.asm.Bb).apply(null,arguments)};
e.___em_js__sapp_js_dropped_file_size=function(){return(e.___em_js__sapp_js_dropped_file_size=e.asm.Cb).apply(null,arguments)};e.___em_js__sapp_js_fetch_dropped_file=function(){return(e.___em_js__sapp_js_fetch_dropped_file=e.asm.Db).apply(null,arguments)};e.___em_js__sapp_js_remove_dragndrop_listeners=function(){return(e.___em_js__sapp_js_remove_dragndrop_listeners=e.asm.Eb).apply(null,arguments)};
e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.Fb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.Gb).apply(null,arguments)};e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm.Hb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Ib).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Jb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Kb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Lb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.Mb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Nb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Ob).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.Pb).apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return(e.___em_js__sargs_js_parse_url=e.asm.Qb).apply(null,arguments)};
e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Rb).apply(null,arguments)};var Q=e._malloc=function(){return(Q=e._malloc=e.asm.Sb).apply(null,arguments)},pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.Tb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.Ub).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Vb).apply(null,arguments)},Ob;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Pb(){Ob||Qb();Ob||(L=Pb)};
function Qb(a){function b(){if(!Ob&&(Ob=!0,e.calledRun=!0,!la)){Na(Ba);Na(Ca);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Rb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));G[h>>2]=ua(aa);for(var g=1;g<f;g++)G[(h>>2)+g]=ua(c[g-1]);G[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);la=!0}t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),A("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ea.unshift(c);Na(Ea)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Na(Aa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Qb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Rb=!0;e.noInitialRun&&(Rb=!1);noExitRuntime=!0;Qb();
