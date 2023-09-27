import './Widget.css';

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
        document.body.appendChild(this.widget);
    }

    createImages() {
        for (let image of images) {
            let imageName = image.match(/-[^0-9]*\./g)[0].slice(1, -1);
            let imgElement = document.createElement('div');
            imgElement.classList.add('widget__img');
            imgElement.classList.add(imageName);
            imgElement.classList.add('disabled');
            // imgElement.src = image;
            this.widget.appendChild(imgElement);
        }
    }

    createInputForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let button = document.createElement('button');
        button.textContent = 'Submit';
        form.classList.add('widget__form');
        form.appendChild(input);
        form.appendChild(button);
        this.widget.appendChild(form);
    }
}

export default Widget;