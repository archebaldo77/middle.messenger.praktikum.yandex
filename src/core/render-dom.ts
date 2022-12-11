import Component from './component';

export default function renderDOM(component: Component<AnyProps>) {
  const root = document.querySelector('#app');

  root!.innerHTML = '';
  root!.appendChild(component.getContent());
}
