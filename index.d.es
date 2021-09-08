
declare interface Document{

  addEventListener(type:string, fn:(e:any)=>void );

}

declare const document:Document;
