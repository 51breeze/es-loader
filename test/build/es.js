"use strict";
(self["webpackChunkes_loader"] = self["webpackChunkes_loader"] || []).push([["es"],[
/* 0 */
/*!***************************!*\
  !*** ./test/src/Index.es ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var D_tools_es_loader_test_src_Person_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/src/Person.es */ 1);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);


function Index(){}
const members = {
    start:{
        m:3,
        d:3,
        value:function start(){
            var person = new D_tools_es_loader_test_src_Person_es__WEBPACK_IMPORTED_MODULE_0__["default"]();
            person.start();
        }
    }
}
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__["default"].creator(1,Index,{
    id:1,
    name:"Index",
    members:members
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Index);
const index = new Index();
index.start();

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./test/src/Person.es ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/Reflect.d.es?id=Reflect */ 2);
/* harmony import */ var D_tools_es_loader_test_index_d_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/index.d.es */ 4);
/* harmony import */ var D_tools_es_loader_test_src_Home_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/src/Home.es */ 7);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);
/* harmony import */ var D_tools_es_loader_test_src_server_User_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/src/server/User.es */ 9);





function Person(){
    D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_0__["default"].call(Person,document,"addEventListener",['DEVELOPMENT_HOT_UPDATE',(e)=>{
        if(D_tools_es_loader_test_index_d_es__WEBPACK_IMPORTED_MODULE_1__["default"].getQualifiedClassName(D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_0__["default"].get(Person,e,"moduleClass")) === D_tools_es_loader_test_index_d_es__WEBPACK_IMPORTED_MODULE_1__["default"].getQualifiedClassName(D_tools_es_loader_test_src_Home_es__WEBPACK_IMPORTED_MODULE_2__["default"])){
            D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_0__["default"].call(Person,e,"stopImmediatePropagation",[]);
            const newClass = D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_0__["default"].get(Person,e,"moduleClass");
            const home = new newClass();
            home.start();
        }
    }]);
}
const members = {
    start:{
        m:3,
        d:3,
        value:function start(){
            console.log("===Person==9999=======66666===66666=");
            console.log("/user/index");
            const home = new D_tools_es_loader_test_src_Home_es__WEBPACK_IMPORTED_MODULE_2__["default"]();
            home.start();
        }
    }
}
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_3__["default"].creator(2,Person,{
    id:1,
    name:"Person",
    members:members
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Person);

/***/ }),
/* 2 */
/*!********************************************************************!*\
  !*** ./node_modules/easescript/lib/typing/Reflect.d.es?id=Reflect ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);

/*
 * EaseScript
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
 */

const _Reflect = (function(_Reflect){
    const _construct = _Reflect ? _Reflect.construct : function construct(theClass, args, newTarget){
        if( !isFun(theClass) ){
            throw new TypeError('is not class or function');
        }
        switch ( args.length ){
            case 0 :
                return new theClass();
            case 1 :
                return new theClass(args[0]);
            case 2 :
                return new theClass(args[0], args[1]);
            case 3 :
                return new theClass(args[0], args[1], args[2]);
            case 4 :
                return new theClass(args[0], args[1], args[2],args[3]);
            case 5 :
                return new theClass(args[0], args[1], args[2],args[3],args[4]);
            case 6 :
                return new theClass(args[0], args[1], args[2],args[3],args[4],args[5]);
            case 7 :
                return new theClass(args[0], args[1], args[2],args[3],args[4],args[5],args[6]);
            case 8 :
                return new theClass(args[0], args[1], args[2],args[3],args[4],args[5],args[6],args[7]);
            default :
                var items = [];
                for(var i=0;i<args.length;i++)items.push(i);
                return Function('f,a', 'return new f(a[' + items.join('],a[') + ']);')(theClass, args);
        }
    };

    const _apply = _Reflect ? _Reflect.apply : function apply(target, thisArgument, argumentsList){
        if( typeof target !== "function" ){
            throw new TypeError('is not function');
        }
        thisArgument = thisArgument === target ? undefined : thisArgument;
        if (argumentsList != null) {
            return target.apply(thisArgument === target ? undefined : thisArgument, argumentsList);
        }
        if (thisArgument != null) {
            return target.call(thisArgument);
        }
        return target();
    };

    const hasOwn = Object.prototype.hasOwnProperty;
    function isFun(target){
        return target && target.constructor === Function
    }

    function isClass(objClass){
        if( !objClass || !objClass.constructor)return false;
        var desc = objClass[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
        if( !desc )return isFun(objClass);
        return desc && desc.id === Reflect.MODULE_CLASS;
    }

    function inContext(context,objClass){
        if(!context)return false;
        if(context===objClass)return true;
        const obj = context[D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key];
        return obj ? inContext(obj.inherit, objClass) : false;
    }

    function Reflect(){ 
        throw new SyntaxError('Reflect is not constructor.');
    }

    Reflect.MODIFIER_PUBLIC = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODIFIER_PUBLIC;
    Reflect.MODIFIER_PROTECTED = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODIFIER_PROTECTED;
    Reflect.MODIFIER_PRIVATE = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODIFIER_PRIVATE;
    Reflect.MEMBERS_ACCESSOR = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.PROPERTY_ACCESSOR;
    Reflect.MEMBERS_PROPERTY = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.PROPERTY_VAR;
    Reflect.MEMBERS_READONLY = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.PROPERTY_CONST;
    Reflect.MEMBERS_METHODS = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.PROPERTY_FUN;
    Reflect.MEMBERS_ENUM_KEY = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.PROPERTY_ENUM_KEY;
    Reflect.MEMBERS_ENUM_VALUE = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.PROPERTY_ENUM_VALUE;
    Reflect.MODULE_CLASS = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODULE_CLASS;
    Reflect.MODULE_INTERFACE = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODULE_INTERFACE;
    Reflect.MODULE_ENUM = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODULE_ENUM;

    Reflect.apply=function apply(target, thisArgument, argumentsList ){
        if( !isFun(target) ){
            throw new TypeError('target is not function');
        }
        if( !Array.isArray(argumentsList) ){
            argumentsList = argumentsList !== void 0 ? [argumentsList] : [];
        }
        return _apply(target, thisArgument, argumentsList);
    };

    Reflect.call=function call(scope,target,propertyKey,argumentsList,thisArgument){
        if( target == null )throw new ReferenceError('target is null or undefined');
        if( propertyKey==null ){
            return Reflect.apply(target, thisArgument, argumentsList);
        }
        return Reflect.apply( Reflect.get(scope,target,propertyKey), thisArgument||target, argumentsList);    
    };

    Reflect.construct=function construct(target, args, newTarget){
        if( !isClass(target) )throw new TypeError('target is not instantiable object.');
        return _construct(target, args || [], newTarget);
    };

    Reflect.deleteProperty=function deleteProperty(target, propertyKey){
        if( !target || propertyKey==null )return false;
        if( propertyKey==="__proto__")return false;
        if( isClass(target) || isClass(target.constructor) ){
            return false;
        }
        if( propertyKey in target ){
            return (delete target[propertyKey]);
        }
        return false;
    };

    Reflect.has=function has(target, propertyKey){
        if( propertyKey==null || target == null )return false;
        if( propertyKey==="__proto__")return false;
        if( isClass(target) || isClass(target.constructor) ) {
            return false;
        }
        return propertyKey in target;
    };


    Reflect.get=function get(scope,target,propertyKey,receiver){
        if( propertyKey===null ||  propertyKey === void 0)return target;
        if( propertyKey === '__proto__' )return null;
        if( target == null )throw new ReferenceError('target is null or undefined');

        const desc = Reflect.getDescriptor(target, propertyKey);
        if( !desc ){
            return null;
        }

        receiver = !receiver && typeof target ==="object" ? target : null;
        if(typeof receiver !=="object" ){
            throw new ReferenceError(`Assignment receiver can only is an object.`);
        }

        let result = null;
        if( !desc.class ){
            if(desc.get){
                result = desc.get.call(receiver);
            }else{
                result = desc.value;
            }
        }else if( !desc.isMember ){
            throw new ReferenceError(`target.${propertyKey} is not exists`);
        }else if( (desc.modifier === Reflect.MODIFIER_PRIVATE && desc.class !== scope) || (desc.modifier === Reflect.MODIFIER_PROTECTED && !inContext(scope, desc.class)) ){
            throw new ReferenceError(`target.${propertyKey} inaccessible`);
        }else{
            if( desc.type === Reflect.MEMBERS_ACCESSOR ){
                if( !desc.get ){
                    throw new ReferenceError(`target.${propertyKey} getter is not exists.`);
                }else{
                    result = desc.get.call(receiver);
                }
            }else if( desc.type === Reflect.MEMBERS_METHODS ){
                result = desc.method;
            }else{
                result = desc.value;
            }
        }
        
        return result === void 0 ? null : result;
    };

    Reflect.set=function(scope,target,propertyKey,value,receiver){
        if( target == null || propertyKey===null ||  propertyKey === void 0 ){
            throw new ReferenceError('target or propertyKey is null or undefined');
        }

        if( propertyKey === '__proto__' )return null;
        const desc = Reflect.getDescriptor(target, propertyKey);

        if( !desc ){
            const objClass = Reflect.getDescriptor(target);
            if(objClass){
                if( objClass.dynamic ){
                    return target[propertyKey] = value; 
                }else{
                    throw new ReferenceError(`target.${propertyKey} is not exists.`);
                }
            }else{
                return target[propertyKey] = value;
            }
        }

        receiver = !receiver && typeof target ==="object" ? target : null;
        if(typeof receiver !=="object" ){
            throw new ReferenceError(`Assignment receiver can only is an object.`);
        }

        if( !desc.class ){
            if( (desc.get && !desc.set) || !desc.writable ){
                throw new ReferenceError(`target.${propertyKey} is readonly.`);
            }else if(desc.set){
                desc.set.call(receiver,value);
            }else{
                target[propertyKey] = value;
            }
        }else if( !desc.isMember ){
            throw new ReferenceError(`target.${propertyKey} is not exists`);
        }else if( (desc.modifier === Reflect.MODIFIER_PRIVATE && desc.class !== scope) || (desc.modifier === Reflect.MODIFIER_PROTECTED && !inContext(scope, desc.class)) ){
            throw new ReferenceError(`target.${propertyKey} inaccessible`);
        }else{
            if( desc.type === Reflect.MEMBERS_ACCESSOR ){
                if( !desc.set ){
                    throw new ReferenceError(`target.${propertyKey} setter is not exists.`);
                }else{
                    desc.set.call(receiver, value);
                }
            }else if( desc.type === Reflect.MEMBERS_METHODS || !desc.writable ){
                throw new ReferenceError(`target.${propertyKey} is readonly.`);
            }else{
                let object = target;
                if( desc.modifier === Reflect.MODIFIER_PRIVATE ){
                    object = target[desc.privateKey];
                }
                if( object ){
                    object[propertyKey] = value;
                }
            }
        }
        return value;
    };

    Reflect.incre=function incre(scope,target,propertyKey,flag){
        const val = Reflect.get(scope,target,propertyKey);
        const result = val+1;
        Reflect.set(scope,target, propertyKey, result);
        return flag === true ? val : result;
    }

    Reflect.decre= function decre(scope,target, propertyKey,flag){
        const val = Reflect.get(scope,target, propertyKey);
        const result = val-1;
        Reflect.set(scope,target, propertyKey,result);
        return flag === true ? val : result;
    }

    Reflect.getDescriptor=function getDescriptor(target,name){

        if(target===null||target === void 0)return false;
        target = Object(target);
        let objClass = target;
        let description = target[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
        let isStatic = true;
        if( !description && target.constructor ){
            isStatic = false;
            objClass = target.constructor;
            description = target.constructor[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ]
        }

        if( !description ){
            let result = null;
            if( name ){
                try{
                    result = Object.getOwnPropertyDescriptor(target, name);
                    if( !result && name in target){
                        const configurable = hasOwn.call(target, name);
                        result = {
                            value:target[name],
                            writable:configurable,
                            configurable:configurable,
                            enumerable:configurable
                        }
                    }
                }catch(e){}
            }
            return result;
        }

        if( !name ){
            let d = description;
            return {
                'isModule':true,
                'type':d.id,
                'class':objClass,
                'className':d.name,
                'namespace':d.ns || null,
                'dynamic':!!d.dynamic,
                'isStatic':!!d.static,
                'privateKey':d.private || null,
                'implements':d.imps || null,
                'members':d.members || null,
                'methods':d.methods || null,
                'inherit':d.inherit || null,
            };
        }

        const privateScope = objClass;
        while( objClass && (description = objClass[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ]) ){
            let dataset = isStatic ? description.methods : description.members;
            if( dataset && hasOwn.call(dataset,name) ){
                const desc = dataset[name];
                const modifier = desc.m & Reflect.MODIFIER_PUBLIC;
                const item = {
                    'isMember':true,
                    'type':desc.d,
                    'class':objClass,
                    'isStatic':isStatic,
                    'privateKey':null,
                    'modifier':modifier,
                    'enumerable':false,
                    'writable':false,
                    'configurable':false
                };

                if( desc.d === Reflect.MEMBERS_ACCESSOR ){
                    item.label = 'accessor';
                    item.set = null;
                    item.get = null;
                    if(desc.set){
                        item.writable = true;
                        item.set = desc.set;
                    }
                    if(desc.get){
                        item.enumerable = true;
                        item.get = desc.get;
                    }
                }else if( desc.d === Reflect.MEMBERS_METHODS ){
                    item.label = 'method';
                    item.method = desc.value;
                }else{
                    item.label = 'property';
                    item.writable = Reflect.MEMBERS_READONLY !== desc.d;
                    item.enumerable = true;
                    item.value = desc.value || null;
                    if( isStatic ){
                        item.value = target[name] || null;
                    }else{
                        if( item.modifier === Reflect.MODIFIER_PRIVATE ){
                            const objPrivate = target[ description.private ];
                            item.dataset = objPrivate;
                            if(objPrivate && name in objPrivate){
                                item.value = objPrivate[name] || null;
                            }
                        }else{
                            item.value = target[name] || null;
                        }
                    }
                }

                if( item.modifier === Reflect.MODIFIER_PRIVATE ){
                    item.privateKey = description.private;
                    if( privateScope !== objClass ){
                        continue;
                    }
                }
                
                return item;
            }
            objClass = description.inherit;
        }

        return null;
    };

    return Reflect;

}(Reflect));
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(8,_Reflect,{
    id:1,
    name:"Reflect"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Reflect);

/***/ }),
/* 3 */
/*!******************************************************************!*\
  !*** ./node_modules/easescript/lib/typing/globals.d.es?id=Class ***!
  \******************************************************************/
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

const __MODULES__=[];
const privateKey=Symbol("privateKey");
const _proto = Object.prototype;
const merge = (obj, target, isInstance)=>{
    if(!obj || !target || _proto===obj || obj===Object || obj===Function)return;
    const keys = Object.getOwnPropertyNames(obj);
    if( keys ){
        keys.forEach( key=>{
            if(key==='constructor' || key==='prototype' || key==='__proto__')return;
            if(!(key in target)){
                const desc = Reflect.getOwnPropertyDescriptor(obj, key);
                if(desc){
                    if(!isInstance){
                        desc.configurable = false;
                        desc.enumerable = false;
                    }
                    Object.defineProperty(target,key,desc);
                }
            }
        });
    }
    merge(Reflect.getPrototypeOf(obj), target, isInstance);
}

const Class={
    key:privateKey,
    modules:__MODULES__,
    require:function(id){
        return __MODULES__[id];
    },
    callSuper(moduleClass, target, args=[]){
        if(!moduleClass)return;
        const description = moduleClass[privateKey];
        const _extends = description.extends && Array.isArray(description.extends) ? description.extends.slice(0) : false;
        if(_extends && _extends.length > 0){
            _extends.forEach( (classTarget)=>{
                if(typeof classTarget ==='function'){
                    const newObject = Reflect.construct(classTarget, args, moduleClass);
                    merge(newObject, target, true);
                }else if(typeof classTarget ==='object'){
                    merge(newObject, target, true);
                }
            });
        }
    },
    callSuperMethod(moduleClass, methodName, target, kind='method', args=[]){
        if(!moduleClass)return;
        let description = moduleClass[privateKey];
        let parent = null;
        if( description.inherit ){
            parent = description.inherit[privateKey];
        }

        if(parent && parent.members){
            const desc = parent.members[methodName];
            if(desc && Class.CONSTANT.MODIFIER_PRIVATE !== (desc.m & Class.CONSTANT.MODIFIER_PUBLIC) ){
                if( desc.d === Class.CONSTANT.PROPERTY_ACCESSOR ){
                    if(desc.set && kind==='setter'){
                        return desc.set.apply(target, args);
                    }else if(desc.get && kind==='getter'){
                        return desc.get.call(target);
                    }
                }else if( desc.d === Class.CONSTANT.PROPERTY_FUN){
                    return desc.value.apply(target, args);
                }
            }
        }

        const _extends = description.extends && Array.isArray(description.extends) ? description.extends.slice(0) : false;
        if(_extends && _extends.length > 0){
            const getDesc = (obj)=>{
                if( !obj )return null;
                const desc = Reflect.getOwnPropertyDescriptor(obj, methodName);
                if(desc)return desc;
                if(_proto===obj || obj===Object || obj===Function)return;
                return getDesc( Reflect.getPrototypeOf(obj) );
            }
            for(let i=0; i<_extends.length;i++){
                const objectClass =_extends[i];
                const desc = typeof objectClass === "function" ? getDesc(objectClass.prototype) : getDesc(objectClass);
                if( desc ){
                    if(desc.set && kind==='setter'){
                        return desc.set.apply(target, args);
                    }else if(desc.get && kind==='getter'){
                        return desc.get.call(target);
                    }else if(typeof desc.value ==='function'){
                        return desc.value.apply(target, args);
                    }
                }
            }
        }
    },
    creator:function(id, moduleClass, description){
        if( description ){
            const _extends = description.extends && Array.isArray(description.extends) ? description.extends.slice(0) : false;
            if( description.inherit ){
                Object.defineProperty(moduleClass,'prototype',{value:Object.create(description.inherit.prototype)});
            }else if(_extends && _extends.length>0 ){
                const inheritObject = _extends.shift();
                if(typeof inheritObject ==='function'){
                    Object.defineProperty(moduleClass,'prototype',{value:Object.create(inheritObject.prototype)});
                }
                merge(inheritObject, moduleClass);
            }
            if( description.methods ){
                Object.defineProperties(moduleClass,description.methods);
            }
            if( description.members ){
                Object.defineProperties(moduleClass.prototype,description.members);
            }

            if(_extends && _extends.length>0){
                _extends.forEach( (object)=>{
                    merge(object, moduleClass);
                    merge(object.prototype, moduleClass.prototype);
                });
            }

            Object.defineProperty(moduleClass,privateKey,{value:description});
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
            
            if( moduleClass.prototype && !Object.prototype.hasOwnProperty.call(moduleClass.prototype,'toString') ){
                Object.defineProperty(moduleClass.prototype,'toString',{
                    configurable:false,
                    value:function toString(){
                    var name = description.ns ? description.ns+'.'+description.name : description.name;
                    return '[object '+name+']';
                }});
            }
        }
        Object.defineProperty(moduleClass.prototype,'constructor',{value:moduleClass});
        if( id >= 0 ){
            __MODULES__[id] = moduleClass;
        }
        return moduleClass;
    },
    getDescriptor(moduleClass){
        return moduleClass[privateKey];
    },
    getClassByName:function(name){
        var len = __MODULES__.length;
        var index = 0;
        for(;index<len;index++){
            var classModule = __MODULES__[index];
            if(classModule){
                var description = classModule[privateKey];
                if( description ){
                    var key = description.ns ? description.ns+'.'+description.name : description.name;
                    if( key === name){
                        return classModule;
                    }
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
/* 4 */
/*!*************************!*\
  !*** ./test/index.d.es ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=EventDispatcher */ 5);


/*
 * EaseScript
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
 */
const hasOwn = Object.prototype.hasOwnProperty;
function System(){
    throw new SyntaxError('System is not constructor.');
};
System.getIterator=function getIterator(object){
    if( !object )return null;
    if( object[Symbol.iterator] ){
        return object[Symbol.iterator]();
    }
    const type = typeof object;
    if( type==="object" || type ==="boolean" || type ==="number" || object.length === void 0 ){
        throw new TypeError("object is not iterator");
    }
    return (function(object){ 
        return{
            index:0,
            next:function next(){
                if (this.index < object.length) {
                    return {index:this.index,value:object[this.index++],done:false};
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
    const rId = right[D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key] ? right[D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key].id : null;
    const description =  left.constructor ? left.constructor[D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key] : null;
    if( rId === 0 && description && description.id === 1 ){
        return (function check(description,id){
            if( !description )return false;
            var imps = description.imps;
            var inherit = description.inherit;
            if( inherit === right )return true;
            if( imps ){
                for(var i=0;i<imps.length;i++){
                    if( imps[i] === right || check( imps[i][D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key], 0 ) )return true;
                }
            }
            if( inherit && inherit[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ].id === id){
                return check( inherit[D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key], 0);
            }
            return false;
        })(description,1);
    }
    return left instanceof right;
}

System.isClass=function isClass(classObject){
    if( !classObject || !classObject.constructor)return false;
    const desc = classObject[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
    return desc && desc.id === D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODULE_CLASS;
}

System.isInterface=function isInterface(classObject){
    const desc = classObject && classObject[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
    return desc && desc.id === D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANT.MODULE_INTERFACE;
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
    if(object && typeof object ==='object' && object[Symbol.iterator] && System.isClass(object)){
        const iterable = object[Symbol.iterator]();
        iterable.rewind();
        let result = null;
        const arr = [];
        while( (result = iterable.next()) && !result.done ){
            arr.push( result.value );
        }
        return arr;
    }
    return Array.from( object );
}

System.forEach=function forEach(object, callback){
    if( !object )return;
    const type = typeof object;
    if( type ==='number'){
        for(let i=0; i<object;i++){
            callback(i, i, object);
        }
    }else if( type ==='string'){
        for(let i=0; i<object.length;i++){
            callback(object[i], i, object);
        }
    }else if( Array.isArray(object) || object instanceof Map ){
        object.forEach( callback );
    }else if( type ==="object" ){
        if(object[Symbol.iterator] && System.isClass(object)){
            var iterable = object[Symbol.iterator]();
            iterable.rewind();
            var result = null;
            var index = 0;
            while( (result = iterable.next()) && !result.done ){
                callback(result.value, result.key || index, object);
                index++;
            }
        }else if( Object.prototype.toString.call(object) === '[object Object]' ){
            for(let name in object){
                callback(object[name], name, object);
            }
        }else{
            Array.from( object ).forEach( callback );
        }  
    }
}

var __EventDispatcher = null;
System.getEventDispatcher=function getEventDispatcher(){
    if( __EventDispatcher === null ){
        __EventDispatcher = new D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"](window);
    }
    return __EventDispatcher;
}

/**
 * 根据指定的类名获取类的对象
 * @param name
 * @returns {Object}
 */
 System.getDefinitionByName = function getDefinitionByName(name){
     const module = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].getClassByName(name);
     if( module ){
         return module;
     }
     throw new TypeError('"' + name + '" is not defined.');
 };
 
 System.hasClass = function hasClass(name){
     return !!D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].getClassByName(name);
 };

 System.firstUpperCase=function firstUpperCase(value){
    if(!value)return value;
    value = String(value);
    return value.substring(0,1).toUpperCase()+value.substring(1);
 }

 System.firstLowerCase=function firstLowerCase(value){
    if(!value)return value;
    value = String(value);
    return value.substring(0,1).toLowerCase()+value.substring(1);
 }

 const globalConfig = Object.create(null);
 System.setConfig=function setConfig(key, value){
    key = String(key);
    const segments = key.split('.').map( seg=>seg.trim() ).filter( seg=>!!seg );
    if( !segments.length ){
        throw new Error(`The '${key}' key-name invalid. in System.setConfig`)
    }
    let name = null;
    let object = globalConfig;
    key = segments.pop();
    while( name = segments.shift() ){
        if( !hasOwn.call(object,name) ){
            object = object[name] = {};
        }else{
            object = object[name];
        }
    }
    object[key] = value;
 }

 System.getConfig=function getConfig(key){
    key = String(key);
    const segments = key.split('.').map( seg=>seg.trim() ).filter( seg=>!!seg );
    if( !segments.length ){
        throw new Error(`The '${key}' key-name invalid. in System.getConfig`)
    }
    let name = null;
    let object = globalConfig;
    key = segments.pop();
    while( name = segments.shift() ){
        if( !hasOwn.call(object,name) ){
           return null;
        }else{
            object = object[name];
        }
    }
    return hasOwn.call(object,key) ? object[key] : null;
 }

 System.createHttpRoute=function createHttpRoute(url, params, flag=false){
    params = params || {};
    url = String(url).trim();
    url = url.replace(/(^|\/)<([^\>\?]+)(\?)?>/g, function(a,b,c,d){
        let key = c;
        let value = null;
        let prefix = b ? b : '';
        if( hasOwn.call(params,key) ){
            value = params[key];
            if(flag){
                params[key]=null;
                delete params[key];
            }
        }else if( hasOwn.call(params,key) || hasOwn.call(params,key=key.toLowerCase()) ){
            value = params[key];
            if(flag){
                params[key]=null;
                delete params[key];
            }
        }
        if( d && d.charCodeAt(0) === 63 ){
            if( value !== null ){
                return prefix+value;
            }else{
                return '';
            }
        }
        if( value === null ){
            throw new Error(`Missing params '${key}' or the value of params cannot for null.`);
        }else{
            return prefix+value;
        }
    });
    return url.replace(/\/$/,'');
 }

 var HTTP_REQUEST = null;
 System.createHttpRequest=function(HttpFactor, route, rawConfig){
    rawConfig = rawConfig || {};
    let data  = rawConfig.data;
    let _params = route.param || route.params || rawConfig.param || rawConfig.params
    let params = _params && typeof _params ==='object' ? Object.assign({}, _params) : {};
    let url = route;
    let method = rawConfig.method || rawConfig.methods;
    if( typeof route ==='object' ){
        if(route.default && typeof route.default ==='object'){
            params = Object.assign(route.default, params);
        }
        url = System.createHttpRoute(route.url, params, true);
        if( route.allowMethod && route.allowMethod !== '*'){
            let allowMethod = route.allowMethod;
            if( !Array.isArray(allowMethod) ) {
                allowMethod = [allowMethod];
            }
            if( !allowMethod.includes('*') ){
                if( method ){
                    if(!allowMethod.includes(method) ){
                        throw new Error(`Http request is not allowed '${method}' methods. available methods for ${allowMethod.join(',')} on the '${url}' url`);
                    }
                }else if( !method ){
                    if( data && allowMethod.includes('post') ){
                        method = 'post';
                    }else{
                        method = allowMethod[0];
                    }
                }
            }
        }
    }

    if( !data && String(method).toLowerCase() ==='post' ){
        data = params;
        params = void 0;
    }

    let request = HTTP_REQUEST;
    let config = Object.create(null);
    if( rawConfig.options && typeof rawConfig.options ==='object' ){
        config = Object.assign(config, rawConfig.options);
    }

    config = Object.assign(config,{
        url:url,
        method:method,
        params:params,
        data:data
    });

    if( !request ){
        const initConfig = Object.assign(
            Object.create(null),
            System.getConfig('http.request')
        );
        request = HTTP_REQUEST = HttpFactor.create(initConfig);
        System.invokeHook('httpRequestCreated', request);
    }

    System.invokeHook('httpRequestSendBefore', request, config);
    return request.request(config);
}

const globalInvokes = Object.create(null);
const invokeRecords = {};
System.invokeHook=function invokeHook(type, ...args){
    const items = globalInvokes[type];
    const len = items && items.length;
    if( !hasOwn.call(invokeRecords, type) ){
        invokeRecords[type] = {type, items:[], called:[]};
    }
    const records = invokeRecords[type];
    if( !records.items.some( arr=>{
        if(arr.length !== args.length)return false;
        return args.every( (item,index)=>arr[index]===item );
    })){
        records.items.push(args);
    }
    return len > 0 ? _invokeHook(items, args, records) : args[0];
}

function _invokeHook(items, args, records){
    let len = items && items.length;
    let result = args[0];
    if( len > 0 ){
        let i = 0;
        let ctx = {
            stop:false,
            previous:null
        };
        args = args.slice(1);
        for(;i<len;i++){
            const [invoke] = items[i];
            if(!records.called.includes(invoke) ){
                records.called.push(invoke);
                result = invoke.call(ctx, result, ...args);
                if( ctx.stop ){
                    return result;
                }
                ctx.previous = result;
            }
        }
    }
    return result;
}

System.registerHook=function registerHook(type, processer, priority){
    if( typeof processer !== 'function' ){
        throw new Error(`System.registerInvoke processer must is Function`);
    }else{

        if( typeof priority !== "number" || isNaN(priority) ){
            priority = 0;
        }

        if( !hasOwn.call(globalInvokes, type) ){
            globalInvokes[type] = [];
        }

        const items = globalInvokes[type];
        items.push( [processer,priority] );
        if( items.length > 1 ){
            items.sort( (a, b)=>{
                if( a[1] == b[1] )return 0;
                return a[1] > b[1] ? -1 : 1;
            });
        }

        if( hasOwn.call(invokeRecords, type) ){
            const records = invokeRecords[type];
            records.items.forEach( args=>{
                _invokeHook(items, args, records)
            });
        }
    }
}

System.hasRegisterHook=function hasRegisterHook(type, processer){
    if( hasOwn.call(globalInvokes, type) ){
        const items = globalInvokes[type];
        if(processer){
            return items.some(item=>item[0] === processer);
        }
        return true;
    }
    return false;
}

const globalProvides = Object.create(null);
System.registerProvide=function registerProvide(name, value, prefix='global'){
    if( name && typeof name === "string" ){
        const key = prefix+':'+name;
        if( hasOwn.call(globalProvides, key) ){
            throw new Error(`Provider arguments the '${name}' already exists.`);
        }else{
            globalProvides[key] = value;
        }
    }else{
        throw new Error(`Provider arguments the name is not a string.`);
    }
}

System.getProvide=function getProvide(name, prefix='global'){
    if( name && typeof name === "string" ){
        const key = prefix+':'+name;
        if( hasOwn.call(globalProvides, key) ){
            return globalProvides[key];
        }else{
           return null;
        }
    }else{
        throw new Error(`Provider arguments the name is not a string.`);
    }
}
 
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
        const desc = target && target[ D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].key ];
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
     const classname = System.getQualifiedClassName( Object.getPrototypeOf( target ).constructor );
     const module = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].getClassByName(classname);
     if( module ){
         return System.getQualifiedClassName( module.inherit || Object );
     }
     return null;
 };

 (function(System){
    const env = {
        'BROWSER_IE': 'IE',
        'BROWSER_FIREFOX': 'FIREFOX',
        'BROWSER_CHROME': 'CHROME',
        'BROWSER_OPERA': 'OPERA',
        'BROWSER_SAFARI': 'SAFARI',
        'BROWSER_MOZILLA': 'MOZILLA',
        'NODE_JS': 'NODE_JS',
        'IS_CLIENT': false,
    };
    var _platform = [];
    if (typeof navigator !== "undefined"){
        let ua = navigator.userAgent.toLowerCase();
        let s;
        (s = ua.match(/msie ([\d.]+)/)) ? _platform = [env.BROWSER_IE, parseFloat(s[1])] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? _platform = [env.BROWSER_FIREFOX, parseFloat(s[1])] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? _platform = [env.BROWSER_CHROME, parseFloat(s[1])] :
        (s = ua.match(/opera.([\d.]+)/)) ? _platform = [env.BROWSER_OPERA, parseFloat(s[1])] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? _platform = [env.BROWSER_SAFARI, parseFloat(s[1])] :
        (s = ua.match(/^mozilla\/([\d.]+)/)) ? _platform = [env.BROWSER_MOZILLA, parseFloat(s[1])] : null;
        env.IS_CLIENT = true;
    }else{
        if(typeof process !== 'undefined' && process.versions){
            _platform = [env.NODE_JS, process.versions.node];
        }else{
            _platform = ['OTHER', 0];
        }
    }

    /**
     * 获取当前运行平台
     * @returns {*}
     */
    env.platform = function platform(name, version){
        if ( typeof name === "string" ){
            name = name.toUpperCase();
            if( version > 0 )return name == _platform[0] && env.version( version );
            return name == _platform[0];
        }
        return _platform[0];
    };

    env.setPlatform=function setPlatform(name, version, isClient=false){
        _platform=[name,version];
        if(isClient){
            env.IS_CLIENT = true;
        }
    }

    /**
     * 判断是否为指定的浏览器
     * @param type
     * @returns {string|null}
     */
    env.version = function version(value, expr) {
        var result = _platform[1];
        if (value == null)return result;
        value = parseFloat(value);
        switch (expr) {
            case '=' :
                return result == value;
            case '!=' :
                return result != value;
            case '>' :
                return result > value;
            case '>=' :
                return result >= value;
            case '<=' :
                return result <= value;
            case '<' :
                return result < value;
            default:
                return result <= value;
        }
    };
    System.env = env;
}(System));


(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        System.setImmediate = global.setImmediate;
        System.clearImmediate = global.clearImmediate;
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    System.setImmediate = setImmediate;
    System.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof __webpack_require__.g === "undefined" ? undefined : __webpack_require__.g : self));
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(3,System,{
    id:1,
    name:"System"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (System);

/***/ }),
/* 5 */
/*!****************************************************************************!*\
  !*** ./node_modules/easescript/lib/typing/globals.d.es?id=EventDispatcher ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Event */ 6);


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

    if( !Object.prototype.hasOwnProperty.call(this,__KEY__) ){
        Object.defineProperty(this,__KEY__,{value:{events:{},isEvent:false,proxy:null}});
    }

    if( target ){
        if( typeof target !== 'object'){
            throw new Error('target is not object');
        }
        const data = this[__KEY__];
        data.isEvent = target instanceof EventDispatcher;
        data.proxy = target;
    }
}

EventDispatcher.prototype.constructor = EventDispatcher;

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
    if( !events )return false;
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
        if( Object.prototype.hasOwnProperty.call(D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].fix.hooks,type) ){
            D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].fix.hooks[ type ].call(this, listener, listener.proxyHandle);
        }else {
            type = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].type(type);
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
    if(!events)return;
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
    if( !(event instanceof D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"]) )throw new TypeError('Invalid event');
    var target =  this[ __KEY__ ];
    if( target.isEvent ){
        return target.proxy.dispatchEvent(event);
    }
    event.target = event.currentTarget=this;
    return $dispatchEvent( event );
};


function $removeListener(target, type , handle ){
    var eventType= D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].type( type );
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
    if( !(e instanceof D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"]) ){
        e = D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Event__WEBPACK_IMPORTED_MODULE_1__["default"].create( e );
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
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(5,EventDispatcher,{
    id:1,
    name:"EventDispatcher"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDispatcher);

/***/ }),
/* 6 */
/*!******************************************************************!*\
  !*** ./node_modules/easescript/lib/typing/globals.d.es?id=Event ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);

/*
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
 */
function ESEvent( type, bubbles, cancelable ){
    if( !type || typeof type !=="string" )throw new TypeError('event type is not string');
    this.type = type;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
}

ESEvent.SUBMIT='submit';
ESEvent.RESIZE='resize';
ESEvent.SELECT='fetch';
ESEvent.UNLOAD='unload';
ESEvent.LOAD='load';
ESEvent.LOAD_START='loadstart';
ESEvent.PROGRESS='progress';
ESEvent.RESET='reset';
ESEvent.FOCUS='focus';
ESEvent.BLUR='blur';
ESEvent.ERROR='error';
ESEvent.COPY='copy';
ESEvent.BEFORECOPY='beforecopy';
ESEvent.CUT='cut';
ESEvent.BEFORECUT='beforecut';
ESEvent.PASTE='paste';
ESEvent.BEFOREPASTE='beforepaste';
ESEvent.SELECTSTART='selectstart';
ESEvent.READY='ready';
ESEvent.SCROLL='scroll';
ESEvent.INITIALIZE_COMPLETED = "initializeCompleted";
ESEvent.ANIMATION_START="animationstart";
ESEvent.ANIMATION_END="animationend";
ESEvent.ANIMATION_ITERATION="animationiteration";
ESEvent.TRANSITION_END="transitionend";

ESEvent.isEvent=function isEvent( obj ){
    if( obj ){
        return obj instanceof ESEvent || obj instanceof Event;
    }
    return false;
}

/**
 * 事件原型
 * @type {Object}
 */
ESEvent.prototype = Object.create( Object.prototype,{
    "constructor":{value:ESEvent}
});

ESEvent.prototype.bubbles = true;
ESEvent.prototype.cancelable = true;
ESEvent.prototype.currentTarget = null;
ESEvent.prototype.target = null;
ESEvent.prototype.defaultPrevented = false;
ESEvent.prototype.originalEvent = null;
ESEvent.prototype.type = null;
ESEvent.prototype.propagationStopped = false;
ESEvent.prototype.immediatePropagationStopped = false;
ESEvent.prototype.altkey = false;
ESEvent.prototype.button = false;
ESEvent.prototype.ctrlKey = false;
ESEvent.prototype.shiftKey = false;
ESEvent.prototype.metaKey = false;

/**
 * 阻止事件的默认行为
 */
ESEvent.prototype.preventDefault = function preventDefault(){
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
ESEvent.prototype.stopPropagation = function stopPropagation(){
    if( this.originalEvent ){
        this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() :  this.originalEvent.cancelBubble=true;
    }
    this.propagationStopped = true;
};

/**
 *  阻止向上冒泡事件，并停止执行当前事件类型的所有侦听器
 */
ESEvent.prototype.stopImmediatePropagation = function stopImmediatePropagation(){
    if( this.originalEvent && this.originalEvent.stopImmediatePropagation )this.originalEvent.stopImmediatePropagation();
    this.stopPropagation();
    this.immediatePropagationStopped = true;
};

/**
 * map event name
 * @internal ESEvent.fix;
 */
ESEvent.fix={
    map:{},
    hooks:{},
    prefix:'',
    cssprefix:'',
    cssevent:{},
    eventname:{
        'DOMContentLoaded':true
    }
};
ESEvent.fix.map[ ESEvent.READY ]='DOMContentLoaded';
ESEvent.fix.cssevent[ ESEvent.ANIMATION_START ]     ="AnimationStart";
ESEvent.fix.cssevent[ ESEvent.ANIMATION_END ]       ="AnimationEnd";
ESEvent.fix.cssevent[ ESEvent.ANIMATION_ITERATION ] ="AnimationIteration";
ESEvent.fix.cssevent[ ESEvent.TRANSITION_END ]      ="TransitionEnd";

/**
 * 获取统一的事件名
 * @param type
 * @param flag
 * @returns {*}
 * @internal ESEvent.type;
 */
ESEvent.type = function type( eventType, flag ){
    if( typeof eventType !== "string" )return eventType;
    if( flag===true ){
        eventType= ESEvent.fix.prefix==='on' ? eventType.replace(/^on/i,'') : eventType;
        var lower =  eventType.toLowerCase();
        if( ESEvent.fix.cssprefix && lower.substr(0, ESEvent.fix.cssprefix.length )===ESEvent.fix.cssprefix ){
            return lower.substr(ESEvent.fix.cssprefix.length);
        }
        for(var prop in ESEvent.fix.map){
            if( ESEvent.fix.map[prop].toLowerCase() === lower ){
                return prop;
            }
        }
        return eventType;
    }
    if( ESEvent.fix.cssevent[ eventType ] ){
        return ESEvent.fix.cssprefix ? ESEvent.fix.cssprefix+ESEvent.fix.cssevent[ eventType ] : eventType;
    }
    if( ESEvent.fix.eventname[ eventType ]===true )return eventType;
    return ESEvent.fix.map[ eventType ] ? ESEvent.fix.map[ eventType ] : ESEvent.fix.prefix+eventType.toLowerCase();
};

var eventModules=[];
ESEvent.registerEvent = function registerEvent( callback ){
    eventModules.push( callback );
};

/*
 * 根据原型事件创建一个ESEvent
 * @param event
 * @returns {ESEvent}
 * @internal ESEvent.create;
 */
ESEvent.create = function create( originalEvent ){
    if( !originalEvent || !ESEvent.isEvent(originalEvent) )throw new TypeError('Invalid originalEvent.');
    var event=null;
    var i=0;
    var type = originalEvent.type;
    var target = originalEvent.srcElement || originalEvent.target;
    target = target && target.nodeType===3 ? target.parentNode : target;
    var currentTarget =  originalEvent.currentTarget || target;
    if( typeof type !== "string" )throw new TypeError('Invalid event type');
    if( !(originalEvent instanceof ESEvent) ){
        type = ESEvent.type(type, true);
        while (i < eventModules.length && !(event = eventModules[i++](type, target, originalEvent)));
    }else{
        event = originalEvent;
    }
    if( !(event instanceof ESEvent) )event = new ESEvent( type );
    event.type=type;
    event.target=target;
    event.currentTarget = currentTarget;
    event.bubbles = originalEvent.bubbles;
    event.cancelable = originalEvent.cancelable;
    event.originalEvent = originalEvent;
    event.timeStamp = originalEvent.timeStamp;
    event.relatedTarget= originalEvent.relatedTarget;
    event.altkey= !!originalEvent.altkey;
    event.button= originalEvent.button;
    event.ctrlKey= !!originalEvent.ctrlKey;
    event.shiftKey= !!originalEvent.shiftKey;
    event.metaKey= !!originalEvent.metaKey;
    event.defaultPrevented= originalEvent.defaultPrevented;
    event.eventPhase= originalEvent.eventPhase;
    event.composed= originalEvent.composed;
    event.isTrusted= originalEvent.isTrusted;
    if( originalEvent.animationName ){
        event.animationName = originalEvent.animationName;
        event.elapsedTime   = originalEvent.elapsedTime;
        event.eventPhase   = originalEvent.eventPhase;
        event.isTrusted   = originalEvent.isTrusted;
    }
    return event;
};

ESEvent.fix.hooks[ ESEvent.READY ]=function (listener, dispatcher){
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
                    event= new ESEvent( ESEvent.READY );
                    break;
            }
        }
        if( event && has===false){
            has = true;
            if(id){
                window.clearInterval(id);
                id = null;
            }
            event = event instanceof ESEvent ? event : ESEvent.create( event );
            event.currentTarget = target;
            event.target = target;
            dispatcher( event );
        }
    }
    var type = ESEvent.type(ESEvent.READY);
    doc.addEventListener ? doc.addEventListener( type, handle) : doc.attachEvent(type, handle);
    id = window.setInterval(handle,50);
    return true;
}
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(6,ESEvent,{
    id:1,
    name:"Event",
    dynamic:true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ESEvent);

/***/ }),
/* 7 */
/*!**************************!*\
  !*** ./test/src/Home.es ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_test_src_ui_Component_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/src/ui/Component.es */ 8);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/Reflect.d.es?id=Reflect */ 2);



function Home(){
    return D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_2__["default"].apply(function(){
        D_tools_es_loader_test_src_ui_Component_es__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
        return this;
    },D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_2__["default"].construct(D_tools_es_loader_test_src_ui_Component_es__WEBPACK_IMPORTED_MODULE_0__["default"],arguments,Home));
}
const members = {
    start:{
        m:3,
        d:3,
        value:function start(){
            console.log("===Home==99999999999=");
        }
    }
}
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__["default"].creator(4,Home,{
    id:1,
    name:"Home",
    inherit:D_tools_es_loader_test_src_ui_Component_es__WEBPACK_IMPORTED_MODULE_0__["default"],
    members:members
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./test/src/ui/Component.es ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);

function Component(){}
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(10,Component,{
    id:1,
    ns:"ui",
    name:"Component"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),
/* 9 */
/*!*********************************!*\
  !*** ./test/src/server/User.es ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var D_tools_es_loader_test_src_server_ServerProvider_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/src/server/ServerProvider.es */ 10);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/Reflect.d.es?id=Reflect */ 2);



function User(){
    return D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_2__["default"].apply(function(){
        D_tools_es_loader_test_src_server_ServerProvider_es__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this,arguments);
        return this;
    },D_tools_es_loader_node_modules_easescript_lib_typing_Reflect_d_es_id_Reflect__WEBPACK_IMPORTED_MODULE_2__["default"].construct(D_tools_es_loader_test_src_server_ServerProvider_es__WEBPACK_IMPORTED_MODULE_0__["default"],arguments,User));
}
const members = {
    index:{
        m:3,
        d:3,
        value:function index(){
            this.success([1,6666,9999,99999,66666666]);
        }
    }
}
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_1__["default"].creator(7,User,{
    id:1,
    ns:"server",
    name:"User",
    inherit:D_tools_es_loader_test_src_server_ServerProvider_es__WEBPACK_IMPORTED_MODULE_0__["default"],
    members:members
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),
/* 10 */
/*!*******************************************!*\
  !*** ./test/src/server/ServerProvider.es ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/easescript/lib/typing/globals.d.es?id=Class */ 3);

function ServerProvider(){}
const members = {
    success:{
        m:3,
        d:3,
        value:function success(data,code=200){
            return {
                data:data,
                code:code
            }
        }
    },
    error:{
        m:3,
        d:3,
        value:function error(message,code=500){
            return {
                message:message,
                code:code
            }
        }
    }
}
D_tools_es_loader_node_modules_easescript_lib_typing_globals_d_es_id_Class__WEBPACK_IMPORTED_MODULE_0__["default"].creator(9,ServerProvider,{
    id:1,
    ns:"server",
    name:"ServerProvider",
    members:members
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerProvider);

/***/ })
]]);