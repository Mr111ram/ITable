import { CoreComponent } from "../../core/CoreComponent";
import { createTable } from "./table.template";

export class Table extends CoreComponent{
	static className = 'itable-table';
	
	toHTML(){
		return createTable();
	}
} 