function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../../img/', false, /\.(gif|jpe?g|svg)$/));

class Widget {
    constructor() {
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        for (let image of images) {
            let imgElement = document.createElement('img');
            imgElement.classList.add('widget__img');
            imgElement.src = image;
            this.widget.appendChild(imgElement);
        }

        document.body.appendChild(this.widget);

        console.log(images)
    }
}

export default Widget;