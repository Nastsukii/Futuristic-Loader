document.addEventListener("DOMContentLoaded", function () {
    const $i = document.querySelector('i');
    let progress = 0;
  
    function incrementProgress() {
        progress++;
        $i.innerText = `${progress}%`;
  
        if (progress < 100) {
            setTimeout(incrementProgress, 100); // Ajuste o tempo conforme necessário
        }
    }
  
    setTimeout(incrementProgress, 10);
  });