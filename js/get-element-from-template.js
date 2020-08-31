export const getElementFromTemplate = (element) => {
  let newElement = document.createElement(`template`);
  newElement.innerHTML = element;
  return newElement.content.firstElementChild;
};
