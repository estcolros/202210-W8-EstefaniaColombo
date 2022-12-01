import { App } from './components/app/app.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new App();
        }
        catch (error) {
            console.log('Error: ', error);
        }
    });
})();
