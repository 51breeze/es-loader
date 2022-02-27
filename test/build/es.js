"use strict";
(self["webpackChunkes_loader"] = self["webpackChunkes_loader"] || []).push([["es"],[
/* 0 */
/*!***************************!*\
  !*** ./test/src/Index.es ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var D_workspace_es_loader_test_src_Person_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/src/Person.es */ 1);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 4);
/*0.4599161532152547*/


var _private=Symbol("private");
function Index(){

}
var members = {};
members.start={m:3,d:3,value:function start(){
	var person = new D_workspace_es_loader_test_src_Person_es__WEBPACK_IMPORTED_MODULE_0__["default"]();
	person.start();
}};
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__["default"].creator(0,Index,{
	'id':1,
	'ns':'',
	'name':'Index',
	'private':_private,
	'members':members
}, false);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Index);
/*externals code*/;
(function(){
	var Index = D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__["default"].require(0);
	const index = new Index();
	index.start();
}());
if(false){}

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./test/src/Person.es ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_workspace_es_loader_test_src_Home_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/src/Home.es */ 2);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 4);
/* harmony import */ var D_workspace_es_loader_test_index_d_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/index.d.es */ 5);
/*0.7679269316990744*/



var _private=Symbol("private");
function Person(){
	document.addEventListener('DEVELOPMENT_HOT_UPDATE',function(e){
		if(D_workspace_es_loader_test_index_d_es__WEBPACK_IMPORTED_MODULE_2__["default"].getQualifiedClassName(e.moduleClass) === D_workspace_es_loader_test_index_d_es__WEBPACK_IMPORTED_MODULE_2__["default"].getQualifiedClassName(D_workspace_es_loader_test_src_Home_es__WEBPACK_IMPORTED_MODULE_0__["default"])){
			e.stopImmediatePropagation();
			const newClass = e.moduleClass;
			const home = new newClass();
			home.start();
		}
	});
}
var members = {};
members.start={m:3,d:3,value:function start(){
	console.log("===Person==9999=======66666===66666=");
	console.log('/user/index');
	const home = new D_workspace_es_loader_test_src_Home_es__WEBPACK_IMPORTED_MODULE_0__["default"]();
	home.start();
}};
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__["default"].creator(1,Person,{
	'id':1,
	'ns':'',
	'name':'Person',
	'private':_private,
	'members':members
}, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Person);
if(false){}

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./test/src/Home.es ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_workspace_es_loader_test_src_ui_Component_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/src/ui/Component.es */ 3);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 4);
/*0.4238151150433518*/


var _private=Symbol("private");
function Home(){
	D_workspace_es_loader_test_src_ui_Component_es__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
}
var members = {};
members.start={m:3,d:3,value:function start(){
	console.log("===Home==99999999999=");
}};
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__["default"].creator(3,Home,{
	'id':1,
	'ns':'',
	'name':'Home',
	'private':_private,
	'inherit':D_workspace_es_loader_test_src_ui_Component_es__WEBPACK_IMPORTED_MODULE_0__["default"],
	'members':members
}, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
if(false){}

/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./test/src/ui/Component.es ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 4);
/*0.880606685544743*/

var _private=Symbol("private");
function Component(){

}
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(4,Component,{
	'id':1,
	'ns':'ui',
	'name':'Component',
	'private':_private
}, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
if(false){}

/***/ }),
/* 4 */
/*!******************************************************!*\
  !*** ../easescript2/lib/globals/index.d.es?id=Class ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * EaseScript
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
*/

var __MODULES__=[];
var key=Symbol("privateClassKey");
var Class={
    'key':key,
    'modules':__MODULES__,
    'require':function(id){
        return __MODULES__[id];
    },
    'creator':function(id,moduleClass,description){
        if( description ){
            if( description.inherit ){
                Object.defineProperty(moduleClass,'prototype',{value:Object.create(description.inherit.prototype)});
            }
            if( description.methods ){
                Object.defineProperties(moduleClass,description.methods);
            }
            if( description.members ){
                Object.defineProperties(moduleClass.prototype,description.members);
            }
            Object.defineProperty(moduleClass,key,{value:description});
            Object.defineProperty(moduleClass,'name',{value:description.name});
            Object.defineProperty(moduleClass,'toString',{value:function toString(){
                var name = description.ns ? description.ns+'.'+description.name : description.name;
                var id = description.id;
                if(id === 3){
                    return '[Enum '+name+']';
                }else if(id ===2){
                    return '[Interface '+name+']';
                }else {
                    return '[Class '+name+']';
                }
            }});
        }
        Object.defineProperty(moduleClass.prototype,'constructor',{value:moduleClass});
        if( id >= 0 ){
            __MODULES__[id] = moduleClass;
        }
    },
    'getClassByName':function(name){
        var len = __MODULES__.length;
        var index = 0;
        for(;index<len;index++){
            var classModule = __MODULES__[index];
            var description = classModule[key];
            if( description ){
                var key = description.ns ? description.ns+'.'+description.name : description.name;
                if( key === name){
                    return classModule;
                }
            }
        }
        return null;
    }
};

Class.CONSTANT ={
    MODIFIER_PUBLIC:3,
    MODIFIER_PROTECTED:2,
    MODIFIER_PRIVATE:1,
    MODULE_CLASS:1,
    MODULE_INTERFACE:2,
    MODULE_ENUM:3,
    PROPERTY_VAR:1,
    PROPERTY_CONST:2,
    PROPERTY_FUN:3,
    PROPERTY_ACCESSOR:4,
    PROPERTY_ENUM_KEY:5,
    PROPERTY_ENUM_VALUE:6,
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Class);

/***/ }),
/* 5 */
/*!*************************!*\
  !*** ./test/index.d.es ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 4);
/* harmony import */ var D_workspace_es_javascript_types_web_d_es_id_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../es-javascript/types/web.d.es?id=EventDispatcher */ 6);


/*
 * EaseScript
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
 */

function System(){
    throw new SyntaxError('System is not constructor.');
};
System.getIterator=function getIterator(object){
    if( !object )return null;
    if( object[Symbol.iterator] ){
        return object[Symbol.iterator]();
    }
    var type = typeof object;
    if( type==="object" || type ==="boolean" || type ==="number" || object.length === void 0 ){
        throw new TypeError("object is not iterator");
    }
    return (function(object){ 
        return{
            index:0,
            next:function next(){
                if (this.index < object.length) {
                    return {value:object[this.index++],done:false};
                }
                return {value:undefined,done:true};
            }
        };
    })(object);
}

System.awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

System.generator = function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

System.is=function is(left,right){
    if(!left || !right || typeof left !== "object")return false;
    var rId = right[D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key] ? right[D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key].id : null;
    var description =  left.constructor ? left.constructor[D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key] : null;
    if( rId === 0 && description && description.id === 1 ){
        return (function check(description,id){
            if( !description )return false;
            var imps = description.imps;
            var inherit = description.inherit;
            if( inherit === right )return true;
            if( imps ){
                for(var i=0;i<imps.length;i++){
                    if( imps[i] === right || check( imps[i][D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key], 0 ) )return true;
                }
            }
            if( inherit && inherit[ D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ].id === id){
                return check( inherit[D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key], 0);
            }
            return false;
        })(description,1);
    }
    return left instanceof right;
}

System.isClass=function isClass(classObject){
    if( !classObject || !classObject.constructor)return false;
    var desc = classObject[ D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
    return desc && desc.id === 1 || (typeof classObject === "function" && classObject.constructor !== Function);
}

System.isInterface=function isInterface(classObject){
    var desc = classObject && classObject[ D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
    return desc && desc.id === 2;
}

System.isEnum=function isEnum(classObject){
    var desc = classObject && classObject[ D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
    return desc && desc.id === 3;
}

System.isFunction=function isFunction(target){
   return target && target.constructor === Function;
}

System.isArray=function isArray(object){
    return Array.isArray(object); 
}

System.toArray=function toArray(object){
    if( Array.isArray(object) ){
        return object;
    }
    var arr = [];
    for(var key in object){
        if( Object.prototype.hasOwnProperty.call(object,key) ){
            arr.push(object[key]);
        } 
    }
    return arr;
}

var __EventDispatcher = null;
System.getEventDispatcher=function getEventDispatcher(){
    if( __EventDispatcher === null ){
        __EventDispatcher = new D_workspace_es_javascript_types_web_d_es_id_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"](window);
    }
    return __EventDispatcher;
}

/**
 * 根据指定的类名获取类的对象
 * @param name
 * @returns {Object}
 */
 System.getDefinitionByName = function getDefinitionByName(name){
     var module = D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].getClassByName(name);
     if( module ){
         return module;
     }
     throw new TypeError('"' + name + '" is not defined.');
 };
 
 System.hasClass = function hasClass(name){
     return !!D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].getClassByName(name);
 };
 
 /**
  * 返回类的完全限定类名
  * @param value 需要完全限定类名称的对象。
  * 可以将任何类型、对象实例、原始类型和类对象
  * @returns {string}
  */
 System.getQualifiedClassName = function getQualifiedClassName( target ){
     if( target == null )throw new ReferenceError( 'target is null or undefined' );
     if( target===System )return 'System';
     if( typeof target === "function" && target.prototype){
         var desc = target && target[ D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
         if( desc ){
            return desc.ns ? desc.ns+'.'+desc.name : desc.name;
         }
         var str = target.toString();
         str = str.substr(0, str.indexOf('(') );
         return str.substr(str.lastIndexOf(' ')+1);
     }
     throw new ReferenceError( 'target is not Class' );
 };
 
 /**
  * 返回对象的完全限定类名
  * @param value 需要完全限定类名称的对象。
  * 可以将任何类型、对象实例、原始类型和类对象
  * @returns {string}
  */
 System.getQualifiedObjectName = function getQualifiedObjectName( target ){
     if( target == null || typeof target !== "object"){
         throw new ReferenceError( 'target is not object or is null' );
     }
     return System.getQualifiedClassName( Object.getPrototypeOf( target ).constructor );
 };
 /**
  * 获取指定实例对象的超类名称
  * @param value
  * @returns {string}
  */
 System.getQualifiedSuperClassName =function getQualifiedSuperClassName(target){
     if( target == null )throw new ReferenceError( 'target is null or undefined' );
     var classname = System.getQualifiedClassName( Object.getPrototypeOf( target ).constructor );
     var module = D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].getClassByName(classname);
     if( module ){
         return System.getQualifiedClassName( module.inherit || Object );
     }
     return null;
 };
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(2,System,{
	'id':1,
	'global':true,
	'dynamic':false,
	'name':'System'
}, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (System);

/***/ }),
/* 6 */
/*!**********************************************************!*\
  !*** ../es-javascript/types/web.d.es?id=EventDispatcher ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 4);
/* harmony import */ var D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../es-javascript/types/web.d.es?id=Event */ 7);


/*
 * EaseScript
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
 */

var __KEY__ = Symbol('EventDispatcher');
function EventDispatcher( target ){
    if( !(this instanceof EventDispatcher) ){
        return new EventDispatcher( target );
    }
    var init = {
        proxy:target,
        isEvent:false,
        events:{}
    };
    if( target ){
        if( typeof target !== 'object'){
            throw new Error('target is not object');
        }
        init.isEvent = target instanceof EventDispatcher;  
    }
    Object.defineProperty(this,__KEY__,{value:init});
}

EventDispatcher.prototype=Object.create( Object.prototype,{
    "constructor":{value:EventDispatcher}
});

/**
 * 判断是否有指定类型的侦听器
 * @param type
 * @param listener
 * @returns {boolean}
 */
EventDispatcher.prototype.hasEventListener=function hasEventListener( type , listener ){
    var target =  this[ __KEY__ ];
    if( target.isEvent ){
        return target.proxy.hasEventListener(type, listener);
    }
    var events = target.events[type];
    var len = events && events.length >> 0;
    if( len > 0 && listener === void 0 )return true;
    while(len>0 && events[--len] ){
        if( events[len].callback === listener ){
            return true;
        }  
    }
    return false;
};

/**
 * 添加侦听器
 * @param type
 * @param listener
 * @param priority
 * @returns {EventDispatcher}
 */
EventDispatcher.prototype.addEventListener=function addEventListener(type,callback,useCapture,priority,reference){
    if( typeof type !== 'string' )throw new TypeError('Invalid event type');
    if( typeof callback !== 'function' )throw new TypeError('Invalid callback function');
    var target =  this[ __KEY__ ];
    if( target.isEvent ){
        target.proxy.addEventListener(type,callback,useCapture,priority,reference||this);
        return this;
    }
    var listener = new Listener(type,callback,useCapture,priority,reference,this);
    var events = target.events[ type ] || ( target.events[ type ]=[] );
    if( events.length < 1 && target.proxy ){
        listener.proxyHandle = $dispatchEvent;
        listener.proxyTarget = target.proxy;
        listener.proxyType = [type];
        if( Object.prototype.hasOwnProperty.call(D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].fix.hooks,type) ){
            D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].fix.hooks[ type ].call(target, listener, listener.proxyHandle);
        }else {
            type = D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].type(type);
            try {
                if(target.proxy.addEventListener){
                    target.proxy.addEventListener(type, listener.proxyHandle, listener.useCapture);
                }else{
                    listener.proxyHandle=function (e) {
                        $dispatchEvent(e, target.proxy);
                    }
                    target.proxy.attachEvent(type, listener.proxyHandle);
                }
            }catch (e) {}
        }
    }
    events.push( listener );
    if( events.length > 1 ) events.sort(function(a,b){
        return a.priority=== b.priority ? 0 : (a.priority < b.priority ? 1 : -1);
    });
    return this;
};

/**
 * 移除指定类型的侦听器
 * @param type
 * @param listener
 * @returns {boolean}
 */
EventDispatcher.prototype.removeEventListener=function removeEventListener(type,listener){
    var target =  this[ __KEY__ ];
    if(target.isEvent){
        return target.proxy.removeEventListener(type,listener);
    }
    var events = target.events[ type ];
    var len = events && events.length >> 0;
    var ret = len;
    if( len<1 ){
        return false;
    }
    while (len > 0){
        --len;
        if ( !listener || events[len].callback === listener ){
            var result = events.splice(len, 1);
            if( result[0] && target.proxyHandle ){
                var types = result[0].proxyType;
                var num = types.length;
                while ( num > 0 ){
                    $removeListener(result[0].proxyTarget, types[ --num ], result[0].proxyHandle);
                }
            }
        }
    }
    return events.length !== ret;
};

/**
 * 调度指定事件
 * @param event
 * @returns {boolean}
 */
EventDispatcher.prototype.dispatchEvent=function dispatchEvent( event ){
    if( !(event instanceof D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"]) )throw new TypeError('Invalid event');
    var target =  this[ __KEY__ ];
    if( target.isEvent ){
        return target.proxy.dispatchEvent(event);
    }
    event.target = event.currentTarget=this;
    return $dispatchEvent( event );
};


function $removeListener(target, type , handle ){
    var eventType= D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].type( type );
    if( target.removeEventListener ){
        target.removeEventListener(eventType,handle,false);
        target.removeEventListener(eventType,handle,true);
    }else if( target.detachEvent ){
        target.detachEvent(eventType,handle);
    }
}

/**
 * 调度指定侦听项
 * @param event
 * @param listeners
 * @returns {boolean}
 */
function $dispatchEvent(e, currentTarget){
    if( !(e instanceof D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"]) ){
        e = D_workspace_es_javascript_types_web_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].create( e );
        if(currentTarget)e.currentTarget = currentTarget;
    }
    if( !e || !e.currentTarget )throw new Error('Invalid event target');
    var target = e.currentTarget;
    var events = target[ __KEY__ ] && target[ __KEY__ ].events[ e.type ];
    if( !events || events.length < 1 )return true;
    events = events.slice(0);
    var length= 0,listener,thisArg,count=events.length;
    while( length < count ){
        listener = events[ length++ ];
        thisArg = listener.reference || listener.dispatcher;
        listener.callback.call( thisArg , e );
        if( e.immediatePropagationStopped===true ){
           return false;
        }
    }
    return true;
}

/**
 * 事件侦听器
 * @param type
 * @param callback
 * @param priority
 * @param capture
 * @param currentTarget
 * @param target
 * @constructor
 */
function Listener(type,callback,useCapture,priority,reference,dispatcher){
    this.type=type;
    this.callback=callback;
    this.useCapture=!!useCapture;
    this.priority=priority>>0;
    this.reference=reference || null;
    this.dispatcher=dispatcher;
}

Object.defineProperty(Listener.prototype,"constructor",{value:Listener});
Listener.prototype.useCapture=false;
Listener.prototype.dispatcher=null;
Listener.prototype.reference=null;
Listener.prototype.priority=0;
Listener.prototype.callback=null;
Listener.prototype.type=null;
Listener.prototype.proxyHandle = null;
Listener.prototype.proxyTarget = null;
Listener.prototype.proxyType = null;
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(5,EventDispatcher,{
	'id':1,
	'global':true,
	'dynamic':false,
	'name':'EventDispatcher'
}, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDispatcher);

/***/ }),
/* 7 */
/*!************************************************!*\
  !*** ../es-javascript/types/web.d.es?id=Event ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 4);

/*
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
 */

function Event( type, bubbles, cancelable ){
    if( !type || typeof type !=="string" )throw new TypeError('event type is not string');
    this.type = type;
    this.bubbles = !(bubbles===false);
    this.cancelable = !(cancelable===false);
}

Event.SUBMIT='submit';
Event.RESIZE='resize';
Event.SELECT='fetch';
Event.UNLOAD='unload';
Event.LOAD='load';
Event.LOAD_START='loadstart';
Event.PROGRESS='progress';
Event.RESET='reset';
Event.FOCUS='focus';
Event.BLUR='blur';
Event.ERROR='error';
Event.COPY='copy';
Event.BEFORECOPY='beforecopy';
Event.CUT='cut';
Event.BEFORECUT='beforecut';
Event.PASTE='paste';
Event.BEFOREPASTE='beforepaste';
Event.SELECTSTART='selectstart';
Event.READY='ready';
Event.SCROLL='scroll';
Event.INITIALIZE_COMPLETED = "initializeCompleted";
Event.ANIMATION_START="animationstart";
Event.ANIMATION_END="animationend";
Event.ANIMATION_ITERATION="animationiteration";
Event.TRANSITION_END="transitionend";

/**
 * 事件原型
 * @type {Object}
 */
Event.prototype = Object.create( Object.prototype,{
    "constructor":{value:Event},
    "toString":function toString(){
        return '[object Event]';
    },
    "valueOf":function valueOf(){
        return '[object Event]';
    }
});

Event.prototype.bubbles = true;
Event.prototype.cancelable = true;
Event.prototype.currentTarget = null;
Event.prototype.target = null;
Event.prototype.defaultPrevented = false;
Event.prototype.originalEvent = null;
Event.prototype.type = null;
Event.prototype.propagationStopped = false;
Event.prototype.immediatePropagationStopped = false;
Event.prototype.altkey = false;
Event.prototype.button = false;
Event.prototype.ctrlKey = false;
Event.prototype.shiftKey = false;
Event.prototype.metaKey = false;

/**
 * 阻止事件的默认行为
 */
Event.prototype.preventDefault = function preventDefault(){
    if( this.cancelable===true ){
        this.defaultPrevented = true;
        if ( this.originalEvent ){
            if( this.originalEvent.preventDefault ){
                this.originalEvent.preventDefault();
            }else{
                this.originalEvent.returnValue = false;
            }
        }
    }
};

/**
 * 阻止向上冒泡事件
 */
Event.prototype.stopPropagation = function stopPropagation(){
    if( this.originalEvent ){
        this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() :  this.originalEvent.cancelBubble=true;
    }
    this.propagationStopped = true;
};

/**
 *  阻止向上冒泡事件，并停止执行当前事件类型的所有侦听器
 */
Event.prototype.stopImmediatePropagation = function stopImmediatePropagation(){
    if( this.originalEvent && this.originalEvent.stopImmediatePropagation )this.originalEvent.stopImmediatePropagation();
    this.stopPropagation();
    this.immediatePropagationStopped = true;
};

/**
 * map event name
 * @internal Event.fix;
 */
Event.fix={
    map:{},
    hooks:{},
    prefix:'',
    cssprefix:'',
    cssevent:{},
    eventname:{
        'DOMContentLoaded':true
    }
};
Event.fix.map[ Event.READY ]='DOMContentLoaded';
Event.fix.cssevent[ Event.ANIMATION_START ]     ="AnimationStart";
Event.fix.cssevent[ Event.ANIMATION_END ]       ="AnimationEnd";
Event.fix.cssevent[ Event.ANIMATION_ITERATION ] ="AnimationIteration";
Event.fix.cssevent[ Event.TRANSITION_END ]      ="TransitionEnd";

/**
 * 获取统一的事件名
 * @param type
 * @param flag
 * @returns {*}
 * @internal Event.type;
 */
Event.type = function type( eventType, flag ){
    if( typeof eventType !== "string" )return eventType;
    if( flag===true ){
        eventType= Event.fix.prefix==='on' ? eventType.replace(/^on/i,'') : eventType;
        var lower =  eventType.toLowerCase();
        if( Event.fix.cssprefix && lower.substr(0, Event.fix.cssprefix.length )===Event.fix.cssprefix ){
            return lower.substr(Event.fix.cssprefix.length);
        }
        for(var prop in Event.fix.map){
            if( Event.fix.map[prop].toLowerCase() === lower ){
                return prop;
            }
        }
        return eventType;
    }
    if( Event.fix.cssevent[ eventType ] ){
        return Event.fix.cssprefix ? Event.fix.cssprefix+Event.fix.cssevent[ eventType ] : eventType;
    }
    if( Event.fix.eventname[ eventType ]===true )return eventType;
    return Event.fix.map[ eventType ] ? Event.fix.map[ eventType ] : Event.fix.prefix+eventType.toLowerCase();
};

var eventModules=[];
Event.registerEvent = function registerEvent( callback ){
    eventModules.push( callback );
};

/*
 * 根据原型事件创建一个Event
 * @param event
 * @returns {Event}
 * @internal Event.create;
 */
Event.create = function create( originalEvent ){
    originalEvent=originalEvent ? originalEvent : (typeof window === "object" ? window.event : null);
    var event=null;
    var i=0;
    if( !originalEvent )throw new TypeError('Invalid event');
    var type = originalEvent.type;
    var target = originalEvent.srcElement || originalEvent.target;
    target = target && target.nodeType===3 ? target.parentNode : target;
    var currentTarget =  originalEvent.currentTarget || target;
    if( typeof type !== "string" )throw new TypeError('Invalid event type');
    if( !(originalEvent instanceof Event) ){
        type = Event.type(type, true);
        while (i < eventModules.length && !(event = eventModules[i++](type, target, originalEvent)));
    }else{
        event = originalEvent;
    }
    if( !(event instanceof Event) )event = new Event( type );
    event.type=type;
    event.target=target;
    event.currentTarget = currentTarget;
    event.bubbles = originalEvent.bubbles !== false;
    event.cancelable = originalEvent.cancelable !== false;
    event.originalEvent = originalEvent;
    event.timeStamp = originalEvent.timeStamp;
    event.relatedTarget= originalEvent.relatedTarget;
    event.altkey= !!originalEvent.altkey;
    event.button= originalEvent.button;
    event.ctrlKey= !!originalEvent.ctrlKey;
    event.shiftKey= !!originalEvent.shiftKey;
    event.metaKey= !!originalEvent.metaKey;
    if( originalEvent.animationName ){
        event.animationName = originalEvent.animationName;
        event.elapsedTime   = originalEvent.elapsedTime;
        event.eventPhase   = originalEvent.eventPhase;
        event.isTrusted   = originalEvent.isTrusted;
    }
    return event;
};

Event.fix.hooks[ Event.READY ]=function (listener, dispatcher){
    var target=this;
    var doc = this.contentWindow ?  this.contentWindow.document : this.ownerDocument || this.document || this;
    var win=  doc && doc.nodeType===9 ? doc.defaultView || doc.parentWindow : window;
    if( !(win || doc) )return;
    var id = null;
    var has = false;
    var handle=function(event){
        if( !event ){
            switch ( doc.readyState ){
                case 'loaded'   :
                case 'complete' :
                case '4'        :
                    event= new Event( Event.READY );
                    break;
            }
        }
        if( event && has===false){
            has = true;
            if(id){
                window.clearInterval(id);
                id = null;
            }
            event = event instanceof Event ? event : Event.create( event );
            event.currentTarget = target;
            event.target = target;
            dispatcher( event );
        }
    }
    var type = Event.type(Event.READY);
    doc.addEventListener ? doc.addEventListener( type, handle) : doc.attachEvent(type, handle);
    id = window.setInterval(handle,50);
    return true;
}
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(6,Event,{
	'id':1,
	'global':true,
	'dynamic':true,
	'name':'Event'
}, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);

/***/ })
]]);