package{
    declare System{
        //getEventDispatcher():EventDispatcher;
        static getDefinitionByName(name:string):Class;
        static hasClass(name:string):boolean;
        static getQualifiedClassName( target:Class ):string;
        static getQualifiedObjectName( target:object ):string;
        static getQualifiedSuperclassName(target:object):string;
    }
}