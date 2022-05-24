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
    // eslint-disable-next-line
    return await (await fetch(`/getItemByName/${query}`)).json();
  }
  return [];
};

window.searchHandler = async () => {
  const data = await window.getDeviceData();
  const generatedHTML = data.map((item) => {
    const listItems = Object.keys(item)
      .map((key) => `<li>${key}: ${item[key]}</li>`)
      .join('');
    return `<ul>${listItems}</ul>`;
  });
  document.getElementById('device-result').innerHTML = generatedHTML;
};

window.clearHandler = () => {
  document.getElementById('device-result').innerHTML = '';
};
