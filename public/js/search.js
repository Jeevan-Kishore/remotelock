const input = document.getElementById('name');
input.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    window.searchHandler();
  }
});

window.getDeviceData = async () => {
  const query = document.getElementById('name').value;
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
  const data = await window.getDeviceData();
  if (data.error || !data.length) {
    const errorMessage = `<div class='d-flex justify-content-center'>
                             <h4 class='text-warning'>No locks found!</h4>
                           </div>`;
    document.getElementById('device-result').innerHTML = errorMessage;
    return false;
  }
  const generatedHTML = data.map((item) => {
    const listItems = Object.keys(item)
      .map((key) => `<li class="list-group-item">${key}: ${item[key]}</li>`)
      .join('');
    return `<ul class="list-group col list-group-content">${listItems}</ul>`;
  });
  document.getElementById('device-result').innerHTML = generatedHTML.join('');
  return true;
};

window.clearHandler = () => {
  const inputField = document.getElementById('name');
  inputField.value = '';
  document.getElementById('device-result').innerHTML = '';
  inputField.focus();
};
