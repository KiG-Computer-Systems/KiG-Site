function validateForm() {
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("Пожалуйста, заполните все поля.");
    return false;
  }
  alert("Сообщение отправлено!");
  return true;
}
