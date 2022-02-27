
package server;

@Runtime(server);
class ServerProvider{

    success( data:object, code:int=200){
        return {data,code};
    }

    error(message:string, code:int=500){
        return {message,code};
    }
}