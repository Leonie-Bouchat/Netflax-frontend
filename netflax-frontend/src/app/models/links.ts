export class Links {
    public title : string;
    public url? : string;
    public children? : Links[];
    public isVisible? : boolean;

    constructor(title : string, url? : string, children? : Links[], isVisible? : boolean){
        this.title = title;
        this.url = url;
        this.isVisible = isVisible;
        if (children === undefined)
            children = [];
        this.children = children;
}}
