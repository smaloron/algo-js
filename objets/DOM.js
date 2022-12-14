class HTMLTag {
    tagName;
    attributes;
    text;

    children = [];

    constructor(tagName, attributes = {}, text = "") {
        this.tagName = tagName;
        this.attributes = attributes;
        this.text = text;
    }

    addChild (element) {
        this.children.push(element);
        return this;
    }

    getAttributesListAsString () {
        let attrArray = [];
        for (let key in this.attributes) {
            attrArray.push(`${key}="${this.attributes[key]}"`)
        }
        if (attrArray.length > 0) {
            return " " + attrArray.join(" ");
        } else {
            return "";
        }

    }

    getChildrenContent () {
        let content = "";
        for (let child of this.children) {
            content += child.render();
        }
        return content;
    }

    render () {
        return `<${this.tagName}${this.getAttributesListAsString()}>${this.text} ${this.getChildrenContent()}</${this.tagName}>`;
    }
}

class AutoClosedHTMLTag extends HTMLTag {
    constructor(tagName, attributes) {
        super(tagName, attributes, "");
    }

    render () {
        return `<${this.tagName} ${this.getAttributesListAsString()} />`;
    }
}

class HTMLBr extends AutoClosedHTMLTag {
    constructor() {
        super("br", {}, "");
    }
}

const myTag = new HTMLTag("p", { id: "titre", class: "big" }, "Hello");

console.log(myTag.render());

const myClosedTag = new AutoClosedHTMLTag("img", { src: "photo.jpg", alt: "photo" });

console.log(myClosedTag.render());

const list = new HTMLTag("ul");
list.addChild(new HTMLTag("li", {}, "Java"))
    .addChild(new HTMLTag("li", {}, "Python"))
    .addChild(new HTMLTag("li", {}, "Scala"));

console.log(list.render());