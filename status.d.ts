/**
 * @author Rodolfo Aguirre Garcia <aguirreg.rodolfo@gmail.com>
 */

// Manage the Status
export interface StatusOptions {
	invert?:boolean;
	interval?:number;
	pattern?:string;
	bottom?:boolean;
}
export function start( options:StatusOptions ):void;

export function stop():void;

export function setPattern( pattern:string, indentation?:number );

export function cellCount():number;

// Manage Items
export interface StatusItemOptions {
	name?:string;
	max?:number;
	precision?:number;
	steps?:string[];
	custom?:() => string;
}
export interface StatusItem {
	name:string;
	max:number;
	precision:number;
	steps?:string[];
	custom?:() => string;

	count:number;

	doneStep( status:boolean, message?:string, indentation?:number ):void;
	render( style:"step" | "custom" | "percentage" | "time" | "bar" | "default" | "count" ):string;

	inc():void;
	dec():void;
}

export function addItem( name:string, options:StatusItemOptions ):StatusItem;

export function removeItem( statusItem:StatusItem );
export function removeItem( name:string );

export function removeAll();


// Visuals
export function toString():string;

export function clean():void;

export interface StatusConsole {
	log( message?:any, ...optionalParams:any[] ):void;
	info( message?:any, ...optionalParams:any[] ):void;
	error( message?:any, ...optionalParams:any[] ):void;
	warn( message?:any, ...optionalParams:any[] ):void;
}
export function console():StatusConsole;

export function stamp( pattern:string ):void;
