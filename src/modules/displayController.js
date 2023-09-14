export default class displayController {
  static loadHomepage() {
    const heading = document.createElement('h1');
    heading.textContent = 'hello';
    heading.classList.add('heading');
    document.body.appendChild(heading);
  }
}