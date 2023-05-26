const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imageSrc = button.previousElementSibling.previousElementSibling.src;
    navigator.clipboard.writeText(imageSrc)
      .then(() => {
        alert('URL copied!');
      })
      .catch(err => {
        console.error('Error copying URL:', err);
      });
  });
});
