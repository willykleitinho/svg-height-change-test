window.onload = () => {
  const svg = document.querySelector('svg');
  const input = document.querySelector('input');
  input.value = svg.viewBox.baseVal.height;

  input.addEventListener('change', (ev) => {
    const newHeight = Number(ev.target.value);
    svg.viewBox.baseVal.height = newHeight;
  });
}