document.addEventListener('DOMContentLoaded', () => {
  const codeEditor = document.getElementById('codeEditor');
  const preview = document.getElementById('preview');
  const runButton = document.querySelector('.btn-run');
  const clearButton = document.createElement('button');
  const downloadButton = document.createElement('button');
  const sidebarLinks = document.querySelectorAll('.sidebar a');

  // Set initial message in the code editor
  codeEditor.value = "<!-- Let's code and have fun -->";

  // Function to update live preview
  function updatePreview() {
      preview.innerHTML = codeEditor.value;
  }

  // Event listener for "Run" button
  runButton.addEventListener('click', updatePreview);

  // Add a "Clear" button dynamically
  clearButton.textContent = 'Clear';
  clearButton.className = 'btn btn-secondary mt-2';
  clearButton.addEventListener('click', () => {
      codeEditor.value = '';
      preview.innerHTML = '';
  });
  runButton.insertAdjacentElement('afterend', clearButton);

  // Add a "Download" button dynamically
  downloadButton.textContent = 'Download Code';
  downloadButton.className = 'btn btn-success mt-2 ms-2';
  downloadButton.addEventListener('click', () => {
      const blob = new Blob([codeEditor.value], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'code.html';
      link.click();
  });
  clearButton.insertAdjacentElement('afterend', downloadButton);

  // Add functionality to sidebar links
  sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const message = `You clicked on ${link.textContent}`;
          preview.innerHTML = `<p>${message}</p>`;
      });
  });

  // Bootstrap tooltips for buttons
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
