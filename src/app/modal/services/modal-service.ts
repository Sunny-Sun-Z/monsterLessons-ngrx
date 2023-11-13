import { ComponentFactoryResolver, INJECTOR, Injectable, Injector, TemplateRef, createComponent } from "@angular/core";

@Injectable()
export class ModalService {
    constructor(private injector: Injector, private resolver : ComponentFactoryResolver){}
    open(content: TemplateRef<any>, options? : {size?:string, title?: string}){
        const contentViewRef = content.createEmbeddedView(null);
        //const modalComponent = createComponent([contentViewRef.rootNodes]);
    }
}