import Widget from "./components/Widget/Widget";

const start = () => {
  const container = document.createElement('div');
  container.classList.add('widget_container');
  document.body.appendChild(container);
  const widget = new Widget(container);
}

start();