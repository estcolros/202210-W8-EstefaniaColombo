export abstract class Component {
    protected template!: string;
    private element!: Element | null;

    render() {
        return this.element;
    }

    protected innRender(selector: string) {
        try {
            this.element = this.selectElement(selector);
            this.element.innerHTML += this.template;
        } catch (error) {
            this.element = null;
        }

        return this.element;
    }
    protected outRender(selector: string) {
        try {
            this.element = this.selectElement(selector);
            this.element.outerHTML = this.template;
        } catch (error) {
            this.element = null;
        }
        return this.element;
    }

    private selectElement(selector: string) {
        const error = new Error('Invalid selector');
        if (!selector) throw error;
        const e = document.querySelector(selector);
        if (e === null) throw error;
        return e;
    }

    protected cleanHtml(selector: string) {
        const htmlElement = document.querySelectorAll(selector);
        if (htmlElement === null) return;
        htmlElement.forEach((item) => (item.innerHTML = ''));
        return htmlElement;
    }
}
