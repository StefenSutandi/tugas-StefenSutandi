// Fungsi untuk memuat data dari API
function fetchData() {
    fetch('https://script.google.com/macros/s/AKfycbzf4QH4MXqTkYg_Rmdhr3Xc3IKJ1G6p2NMm49WkQGLMMgbT6ZTPM5pCZ2y6yZHHVAT3/exec')
      .then(response => response.json())
      .then(data => {
        // Menampilkan data dalam elemen HTML
        displayData(data);
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Fungsi untuk menampilkan data dalam elemen HTML
  function displayData(data) {
    var container = document.getElementById('response-container');
    
    // Loop melalui data dan membuat kartu Bootstrap untuk setiap respons
    data.forEach(response => {
      var card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Response</h5>
            <p class="card-text">Timestamp: ${response.Timestamp}</p>
            <p class="card-text">Email: ${response.Email}</p>
            <p class="card-text">Can Attend: ${response["Can you attend?"]}</p>
            <!-- Anda dapat menambahkan data lainnya di sini -->
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Memuat data saat halaman dimuat
  window.onload = function() {
    fetchData();
  };
  