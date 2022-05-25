const checkString = (str) => /^[A-Za-z0-9\s]*$/.test(str);

const input = document.getElementById('name');
const errorTarget = document.getElementById('input-container__error');
const resultsTarget = document.getElementById('device-result');

input.addEventListener('keyup', (event) => {
  const query = event.target.value;
  errorTarget.innerText = '';
  event.preventDefault();
  if (!checkString(query)) {
    errorTarget.innerText = 'Invalid input entered';
    return false;
  }
  if (event.key === 'Enter') {
    window.searchHandler();
    return true;
  }
  return true;
});

window.getDeviceData = async (query) => {
  if (query) {
    try {
      // eslint-disable-next-line
      return await (await fetch(`/getItemByName/${query}`)).json();
    } catch (e) {
      return { error: 'Something went wrong.' };
    }
  }
  return [];
};

window.searchHandler = async () => {
  const query = input.value;
  if (!checkString(query)) return false;
  const data = await window.getDeviceData(query);
  if (data.error || !data.length) {
    const errorMessage = `<div class='d-flex justify-content-center'>
                             <h4 class='text-warning'>No locks found!</h4>
                           </div>`;
    resultsTarget.innerHTML = errorMessage;
    return false;
  }
  const generatedHTML = data.map((item) => {
    const listItems = Object.keys(item)
      .map((key) => `<li class="list-group-item">${key}: ${item[key]}</li>`)
      .join('');
    return `<ul class="list-group col list-group-content">${listItems}</ul>`;
  });
  resultsTarget.innerHTML = generatedHTML.join('');
  return true;
};

window.clearHandler = () => {
  const inputField = document.getElementById('name');
  inputField.value = '';
  errorTarget.innerHTML = '';
  resultsTarget.innerHTML = '';
  inputField.focus();
  return true;
};
