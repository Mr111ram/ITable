import { CoreComponent } from "../../core/CoreComponent";
import template from "./toolbar.template.pug";

export class Toolbar extends CoreComponent{
	static className = 'itable-toolbar';

	toHTML(){
		return template;
	}
}