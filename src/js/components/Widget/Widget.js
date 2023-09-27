import './Widget.css';
import { validateCardNumber } from '../../utils';

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../../img/', false, /\.(gif|jpe?g|svg)$/));

class Widget {
    constructor() {
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        
        this.createImages();
        this.createInputForm();
        this.addValidators();

        document.body.appendChild(this.widget);
    }

    createImages() {
        this.images = [];
        for (let image of images) {
            let imageName = image.match(/-[^0-9]*\./g)[0].slice(1, -1);
            let imgElement = document.createElement('div');
            imgElement.classList.add('widget__img');
            imgElement.classList.add(imageName);
            imgElement.classList.add('disabled');
            // imgElement.src = image;
            this.images.push(imgElement);
            this.widget.appendChild(imgElement);
        }
    }

    createInputForm() {
        this.form = document.createElement('form');
        this.input = document.createElement('input');
        this.button = document.createElement('button');
        this.button.type = 'submit';
        this.button.textContent = 'Check';
        this.form.classList.add('widget__form');
        this.form.appendChild(this.input);
        this.form.appendChild(this.button);
        this.widget.appendChild(this.form);
    }

    addValidators() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = this.input.value;
            const validationResult = validateCardNumber(input);
        });

        this.input.addEventListener('input', (e) => {
            const input = this.input.value;
            const validationResult = validateCardNumber(input);
        });
    }
}

export default Widget;