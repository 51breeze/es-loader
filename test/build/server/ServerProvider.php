<?php
namespace server;
require_once('es/core/String.php');
require_once('es/core/Number.php');
require_once('es/core/Object.php');
/**
* @class ServerProvider
*/
class ServerProvider{

	/**
	* @method success
	*/
	public function success($data,int $code=200){
		return (object)['data'=>$data,'code'=>$code];
	}

	/**
	* @method error
	*/
	public function error(string $message,int $code=500){
		return (object)['message'=>$message,'code'=>$code];
	}
}