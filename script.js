document.getElementById('wedding-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Остановить отправку формы
  const name = document.getElementById('name').value;
  const guests = document.getElementById('guests').value;
  const alcohol = document.getElementById('alcohol').value;

  // Отправка данных на сервер
  console.log({ name, guests, alcohol });

  // Сообщение "Спасибо"
  document.getElementById('thank-you').style.display = 'block';
  document.getElementById('wedding-form').style.display = 'none';
});