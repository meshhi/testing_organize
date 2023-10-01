import './Widget.css';
import { validateCardNumber, determinePaySystem } from '../../utils';

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../../img/', false, /\.(gif|jpe?g|svg)$/));

class Widget {
    constructor(parentElement) {
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        
        this.createImages();
        this.createInputForm();
        this.addValidators();

        parentElement.appendChild(this.widget);
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
        this.input.classList.add('widget__form_input');
        this.button = document.createElement('button');
        this.button.classList.add('widget__form_button');
        this.button.type = 'submit';
        this.button.textContent = 'Check';
        this.form.classList.add('widget__form');
        this.form.appendChild(this.input);
        this.form.appendChild(this.button);
        this.widget.appendChild(this.form);
    }

    checkCardNumber = (e) => {
        e.preventDefault();
        this.images.forEach(image => {
            if (!image.classList.contains('disabled')) {
                image.classList.toggle('disabled')
            }
        })
        const cardNumber = this.input.value;
        if (cardNumber.length > 16) {
            this.input.value = cardNumber.slice(0, 16);
            return
        }
        const validationResult = validateCardNumber(cardNumber);
        if (validationResult) {
            this.images.forEach(image => {
                if (image.classList.contains(determinePaySystem(cardNumber)) && image.classList.contains('disabled')) {
                    image.classList.toggle('disabled')
                }
            })
        }
    }

    addValidators() {
        this.form.addEventListener('submit', this.checkCardNumber);
        this.input.addEventListener('input', this.checkCardNumber);
    }
}

export default Widget;