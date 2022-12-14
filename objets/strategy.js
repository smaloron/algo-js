class listOfStuff {
    constructor(items = [], strategy) {
        this.items = items;
        this.strategy = strategy;
    }

    render () {
        return this.strategy.render(this.items);
    }
}

class MarkDownStrategy {
    render (items) {
        return items.map(i => "- " + i).join("\n");
    }
}

class HtmlComboStrategy {
    render (items) {
        let options = items.map(i => `<option>${i}</option>`).join("");
        return `<select>${options}</select>`;
    }
}

const list = new listOfStuff([2, 6, 9], new MarkDownStrategy);
list.strategy = new HtmlComboStrategy;
console.log(list.render());