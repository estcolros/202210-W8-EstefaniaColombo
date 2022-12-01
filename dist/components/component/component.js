export class Component {
    template;
    element;
    render() {
        return this.element;
    }
    innRender(selector) {
        try {
            this.element = this.selectElement(selector);
            this.element.innerHTML += this.template;
        }
        catch (error) {
            this.element = null;
        }
        return this.element;
    }
    outRender(selector) {
        try {
            this.element = this.selectElement(selector);
            this.element.outerHTML = this.template;
        }
        catch (error) {
            this.element = null;
        }
        return this.element;
    }
    selectElement(selector) {
        const error = new Error('Invalid selector');
        if (!selector)
            throw error;
        const e = document.querySelector(selector);
        if (e === null)
            throw error;
        return e;
    }
    cleanHtml(selector) {
        const htmlElement = document.querySelectorAll(selector);
        if (htmlElement === null)
            return;
        htmlElement.forEach((item) => (item.innerHTML = ''));
        return htmlElement;
    }
}
