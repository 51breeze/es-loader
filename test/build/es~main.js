(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["es~main"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!******************************!*\
  !*** ./test/src/vue/Test.es ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/Component.d.es?id=Component */ 7);
/* harmony import */ var D_workspace_es_loader_test_src_vue_Person_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/src/vue/Person.es */ 13);
/* harmony import */ var element_ui_packages_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! element-ui/packages/select */ 15);
/* harmony import */ var element_ui_packages_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-ui/packages/option */ 72);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 9);
/*0.833055993058907*/





var _private=Symbol("private");
function Test(options){
	D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(this,options);
}
var members = {};
members.name={m:3,d:4,configurable:true,enumerable:true,get:function name(){
	return this.data('name');
},set:function name(value){
	this.data('name',value);
}};
members.render={m:3,d:3,value:function render(){
	var _this = this;
	console.log(element_ui_packages_select__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
		var createElement = this.$createElement;
	return createElement(D_workspace_es_loader_test_src_vue_Person_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{
			"props":{
			"name":this.name
			}
			}, [
			createElement(element_ui_packages_select__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{
				"props":{
				"value":this.data('name')
				},
				"on":{
				"change":function(e){
	return _this.data('name',e);
	}
				}
				}, [
				createElement(element_ui_packages_option__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{
					"attrs":{
					"label":"深圳",
					"value":"深圳"
					},
					"key":'深圳'
					})
			]),'=====default slot test=====999999999999999999999999999999999999999999'
		]);
}};
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].creator(0,Test,{
	'id':1,
	'ns':'vue',
	'name':'Test',
	'private':_private,
	'inherit':D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	'members':members
});
D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].makeComponent('Test', Test, {
	props:{
		name:{type:String}
	}
});
/* harmony default export */ __webpack_exports__["a"] = (Test);
if(false){}

/***/ }),
/* 7 */
/*!**************************************************************!*\
  !*** ../easescript2/lib/globals/Component.d.es?id=Component ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/web.es?id=Event */ 8);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 9);
/* harmony import */ var vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue/dist/vue.js */ 10);
/* harmony import */ var vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_workspace_easescript2_lib_globals_web_es_id_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../easescript2/lib/globals/web.es?id=EventDispatcher */ 11);
/* harmony import */ var D_workspace_easescript2_lib_globals_Component_d_es_id_ComponentEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../easescript2/lib/globals/Component.d.es?id=ComponentEvent */ 12);





var key = Symbol('private');
var baseOptions = {
    name:"web.components.Component",
    render(createElement){
        return this.render.call(this._self,createElement);
    },
    beforeCreate(){
        this.beforeCreate();
    },
    beforeMount(){
        this.beforeMount();
    },
    beforeUpdate(){
        this.beforeUpdate();
    },
    beforeDestroy(){
        this.beforeDestroy();
    },
    errorCaptured(){
        this.errorCaptured();
    },
    created(){
        this.created();
    },
    mounted(){
        this.mounted();
    },
    updated(){
        this.updated();
    },
    destroyed(){
        this.destroyed();
    },
    activated(){
        this.activated();
    },
    deactivated(){
        this.activated();
    }
};
function Component( options ){
    this[key] = {'options':options,'event':new D_workspace_easescript2_lib_globals_web_es_id_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]()};
    vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_2___default.a.call(this, options);
}
Component.prototype = Object.create( vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_2___default.a.prototype ); 
Component.prototype.constructor = Component;
Component.prototype.beforeCreate=function beforeCreate(){};
Component.prototype.created=function created(){};
Component.prototype.beforeMount=function beforeMount(){};
Component.prototype.mounted=function mounted(){};
Component.prototype.beforeUpdate=function beforeUpdate(){};
Component.prototype.updated=function updated(){};
Component.prototype.beforeDestroy=function beforeDestroy(){};
Component.prototype.destroyed=function destroyed(){};
Component.prototype.activated=function activated(){};
Component.prototype.errorCaptured=function errorCaptured(){};
Component.prototype.deactivated=function deactivated(){};
Component.prototype.render=function render(createElement){
    return createElement('div');
};
Component.prototype.data=function data(name,value){
    var data = this._data;
    var props = this._props;
    if( name ){
        if( value === void 0 ){
            return data[name] || props[name];
        }else{
            var old = data[name];
            if( old !== value ){
                data[name] = value;
                this.$forceUpdate();
            }
            return value;
        }
    }else{
        var _data = Object.assign({}, props);
        for(var key in data){
            if( data[key] !== void 0 ){
                _data[key] = data[key];
            }
        }
        return _data;
    }
};

Component.prototype.mount=function(element){
    this.$mount( element );
}

Component.prototype.slot=function(name){
    name = name || 'default';
    return this.$slots[name];
}

Component.prototype.addEventListener=function addEventListener(type, listener){
    this[key].event.addEventListener(type, listener);
}
Component.prototype.dispatchEvent=function dispatchEvent(event){
    return this[key].event.dispatchEvent(event);
}
Component.prototype.removeEventListener=function removeEventListener(type, listener){
    this[key].event.addEventListener(type, listener);
}
Component.prototype.hasEventListener=function hasEventListener(type, listener){
    this[key].event.hasEventListener(type, listener);
}

Component.makeComponent = (function(){
    var cid = ++vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_2___default.a.cid;
    function makeComponent(name, subClass, options){
        options = Object.assign({}, baseOptions, options );
        options.name = name;
        if( options.data ){
            var _data = options.data;
            options.data = function data(){
                return _data;
            }
        }

        var object = vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_2___default.a.extend(options);
        for( var name in object ){
            if( name !== 'prototype' && object.hasOwnProperty(name) ){
               subClass[name] = object[name];
            }
        }

        subClass.makeComponent = makeComponent;
    };
    return makeComponent;
})();
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].creator(3,Component,{
	'id':1,
	'global':true,
	'dynamic':false,
	'name':'Component'
});
/* harmony default export */ __webpack_exports__["a"] = (Component);

/***/ }),
/* 8 */
/*!**************************************************!*\
  !*** ../easescript2/lib/globals/web.es?id=Event ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 9);

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
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].creator(6,Event,{
	'id':1,
	'global':true,
	'dynamic':true,
	'name':'Event'
});
/* harmony default export */ __webpack_exports__["a"] = (Event);

/***/ }),
/* 9 */
/*!******************************************************!*\
  !*** ../easescript2/lib/globals/index.d.es?id=Class ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __MODULES__=[];
var key=Symbol("CLASS_KEY");
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
/* harmony default export */ __webpack_exports__["a"] = (Class);

/***/ }),
/* 10 */,
/* 11 */
/*!************************************************************!*\
  !*** ../easescript2/lib/globals/web.es?id=EventDispatcher ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 9);
/* harmony import */ var D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easescript2/lib/globals/web.es?id=Event */ 8);


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
        this[ __KEY__ ] = target[ __KEY__ ] || (target[ __KEY__ ]=init);
    }else{
        this[ __KEY__ ] = init;
    }
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
        if( Object.prototype.hasOwnProperty.call(D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fix.hooks,type) ){
            D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fix.hooks[ type ].call(target, listener, listener.proxyHandle);
        }else {
            type = D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].type(type);
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
    if( !(event instanceof D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) )throw new TypeError('Invalid event');
    var target =  this[ __KEY__ ];
    if( target.isEvent ){
        return target.proxy.dispatchEvent(event);
    }
    event.target = event.currentTarget=this;
    return $dispatchEvent( event );
};


function $removeListener(target, type , handle ){
    var eventType= D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].type( type );
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
    if( !(e instanceof D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) ){
        e = D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create( e );
        if(currentTarget)e.currentTarget = currentTarget;
    }
    if( !e || !e.currentTarget )throw new Error('Invalid event target');
    var target = e.currentTarget;
    var events = target[ __KEY__ ] && target[ __KEY__ ].events[ e.type ];
    console.log('==================dispatchEvent================' , e , events)
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
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].creator(5,EventDispatcher,{
	'id':1,
	'global':true,
	'dynamic':false,
	'name':'EventDispatcher'
});
/* harmony default export */ __webpack_exports__["a"] = (EventDispatcher);

/***/ }),
/* 12 */
/*!*******************************************************************!*\
  !*** ../easescript2/lib/globals/Component.d.es?id=ComponentEvent ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/web.es?id=Event */ 8);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 9);


var _private=Symbol("private");
function ComponentEvent(type,bubbles,cancelable){
	D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(this,type);
}
var methods = {};
methods.COMPONENT_BEFORE_CREATE={m:3,d:2,enumerable:true,value:'componentBeforeCreate'};
methods.COMPONENT_BEFORE_MOUNT={m:3,d:2,enumerable:true,value:'componentBeforeMount'};
methods.COMPONENT_BEFORE_UPDATE={m:3,d:2,enumerable:true,value:'componentBeforeUpdate'};
methods.COMPONENT_BEFORE_DESTROY={m:3,d:2,enumerable:true,value:'componentBeforeDestroy'};
methods.COMPONENT_ERROR_CAPTURED={m:3,d:2,enumerable:true,value:'componentErrorCaptured'};
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].creator(2,ComponentEvent,{
	'id':1,
	'ns':'web.components',
	'name':'ComponentEvent',
	'private':_private,
	'inherit':D_workspace_easescript2_lib_globals_web_es_id_Event__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	'methods':methods
});
/* unused harmony default export */ var _unused_webpack_default_export = (ComponentEvent);

/***/ }),
/* 13 */
/*!********************************!*\
  !*** ./test/src/vue/Person.es ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/Component.d.es?id=Component */ 7);
/* harmony import */ var D_workspace_es_loader_test_src_vue_PersonSkin_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/src/vue/PersonSkin.es */ 14);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 9);
/*0.01848919613987121*/



var _private=Symbol("private");
function Person(options){
	Object.defineProperty(this,_private,{value:{'__obj':null}});
	D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(this,options);
	this[_private].__obj=this;
}
var members = {};
members.__obj={m:1,d:1,configurable:true,writable:true,value:null};
members.name={m:3,d:4,configurable:true,enumerable:true,get:function name(){
	return this.data('name');
},set:function name(value){
	this.data('name',value);
}};
members.beforeUpdate={m:3,d:3,value:function beforeUpdate(){
	console.log("=====person==beforeUpdate=======",this.name);
}};
members.updated={m:3,d:3,value:function updated(){
	console.log("=====person==updated=======",this.name);
}};
members.mounted={m:3,d:3,value:function mounted(){
	var _this = this;
	console.log(this,"=====person==mounted=======",this[_private].__obj === this);
	setTimeout(function(){
		console.log("====person  setTimeout=======");
		_this.data('name','=====手动设置不再接收上级的值 66666=====');
	},1000);
}};
members.render={m:3,d:3,value:function render(){
		var createElement = this.$createElement;
	return createElement(D_workspace_es_loader_test_src_vue_PersonSkin_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{
			"props":{
			"name":this.name
			},
			"scopedSlots":{
			"foot":this.$scopedSlots['foot'] || (function(props){return [
				createElement('div',{
					"slot":'foot'
					}, ['the is PersonSkin child==========foot',props.props
				])
			]}).bind(this)
			}
			}, this.$slots['default']);
}};
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].creator(1,Person,{
	'id':1,
	'ns':'vue',
	'name':'Person',
	'private':_private,
	'inherit':D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	'members':members
});
D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].makeComponent('Person', Person, {
	props:{
		name:{type:String}
	},
	data:{
		__obj:null
	}
});
/* harmony default export */ __webpack_exports__["a"] = (Person);
if(false){}

/***/ }),
/* 14 */
/*!************************************!*\
  !*** ./test/src/vue/PersonSkin.es ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easescript2/lib/globals/Component.d.es?id=Component */ 7);
/* harmony import */ var D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easescript2/lib/globals/index.d.es?id=Class */ 9);
/*0.5806849325875951*/


var _private=Symbol("private");
function PersonSkin(options){
	Object.defineProperty(this,_private,{value:{'_name':null}});
	D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(this,options);
}
var members = {};
members.beforeCreate={m:3,d:3,value:function beforeCreate(){
	console.log(this,"=====PersonSkin==beforeCreate====");
}};
members.mounted={m:3,d:3,value:function mounted(){
	console.log(this,"===PersonSkin =mounted======",this.slot());
}};
members.name={m:3,d:4,configurable:true,enumerable:true,get:function name(){
	var t = this;
	return this[_private]._name || t.$props.name;
},set:function name(value){
	this[_private]._name=value;
}};
members._name={m:1,d:1,configurable:true,writable:true,value:null};
members.list={m:3,d:4,configurable:true,enumerable:true,get:function list(){
	return ['one','two','three','four','five'];
}};
members.render={m:3,d:3,value:function render(createElement){
	var name = this.name;
	var list = this.list;
	var createElement = this.$createElement;
	return createElement('div',null, [
		name ? createElement('div',null, ['1']) : 
		name ? createElement('div',null, ['2']) : 
		createElement('div',null, ['3']),
		createElement('div',null, ['3'])
	].concat(
		list.map((function(item){
			return createElement('div',null, [
					createElement('div',null, ['sssssssssss']),
					createElement('div',{
						"class":"ssss"
						}, [
						createElement('div',null, 
							(function(item){
								var _item = [];
								if( typeof item ==='number' ){
									item = Array.from({length:item}, function(v,i){return i;});
								}
								var Index=0;
								for(var _itemValueKey in item){
									var itemValue = item[_itemValueKey];
									_item.push(createElement('div',{
										"class":""
										}, [
										createElement('div',null, [itemValue])
									]));
									Index++;
								}
								return _item;
							}).call(this,item).concat([
							createElement('span',null, (this.$slots['default']||[]).concat([
								createElement('div',null, ['======slot========'])
							]))
						]))
					])
				]);
		}).bind(this)),
		[
		createElement('div',{
			"class":""
			}, [
			createElement('div',null, ['item =====PersonSkin====',name,'====='
			])
		])
	],
		(this.$scopedSlots['foot'] ? this.$scopedSlots['foot']({props:this.list}) : [
			createElement('div',{
				"slot":'foot'
				}, ['===============the is foot slot =============='])
		])));
}};
D_workspace_easescript2_lib_globals_index_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].creator(4,PersonSkin,{
	'id':1,
	'ns':'vue',
	'name':'PersonSkin',
	'private':_private,
	'inherit':D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	'members':members
});
D_workspace_easescript2_lib_globals_Component_d_es_id_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].makeComponent('PersonSkin', PersonSkin, {
	props:{
		name:{type:String}
	},
	data:{
		_name:null
	}
});
/* harmony default export */ __webpack_exports__["a"] = (PersonSkin);
if(false){}

/***/ })
]]);