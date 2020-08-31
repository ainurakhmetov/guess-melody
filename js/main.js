import welcomeElement from './welcome';
// import arrows from './arrows';
// import failTime from './fail-time';

function main() {
  const mainElement = document.querySelector(`.main`);
  // const app = document.querySelector(`.app`);
  window.addEventListener(`load`, function () {
    mainElement.appendChild(welcomeElement);
    // app.appendChild(arrows);
  });
}
// const keyCodes = {
//   leftArrow: 37,
//   rightArrow: 39,
// };
//

main();
