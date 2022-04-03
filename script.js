window.onload = () => {
  const svg = document.querySelector('svg');
  console.log(svg);

  const input = document.querySelector('input');

  input.addEventListener('change', (ev) => {
    console.log(ev.target.value);
    svg.viewBox;

    const newHeight = Number(ev.target.value.replaceAll(/\D/g, ''));
    svg.height.baseVal.value = newHeight;
    svg.viewBox.baseVal.height = newHeight;
  });
}