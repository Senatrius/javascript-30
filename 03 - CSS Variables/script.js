const inputs = document.querySelectorAll('.settings-block input');

function handleUpdate() {
  const unit = this.dataset.unit;

  document.documentElement.style.setProperty(`--${this.id}`, this.value + unit);
}

inputs.forEach(input => {
  input.addEventListener('input', handleUpdate);
})