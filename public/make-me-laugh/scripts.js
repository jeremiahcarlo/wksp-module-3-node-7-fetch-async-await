const handleSubmit = async event => {
  event.preventDefault();

  const data = {
    type: type.value
  };

  fetch('/make-me-laugh', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      const { joke } = data;
      document.getElementById('joke').innerHTML = joke;
    });
};