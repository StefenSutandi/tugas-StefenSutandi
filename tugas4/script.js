// Fungsi untuk memuat data dari API
function fetchData() {
    fetch('https://script.google.com/d/1lOtJmSjQXz_Anrc5qC1WjT2nTOy9Ub3girWJvMMsIY3FILBXJ0k2s707/edit?usp=sharing')
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
    container.innerHTML = '<h2>Responses:</h2>';
    
    // Membuat daftar untuk menampilkan data
    var list = document.createElement('ul');
  
    // Loop melalui data dan membuat entri untuk setiap respons
    data.forEach(response => {
      var listItem = document.createElement('li');
      listItem.textContent = 'Timestamp: ' + response.Timestamp + ', Email: ' + response.Email + ', Can Attend: ' + response.CanAttend;
      // Anda dapat menambahkan informasi lain sesuai kebutuhan
      list.appendChild(listItem);
    });
  
    container.appendChild(list);
  }
  
  // Memuat data saat halaman dimuat
  window.onload = function() {
    fetchData();
  };
  