document.addEventListener("DOMContentLoaded", function () {
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const wadahHari = document.getElementById("hari-kalender");
  const tampilanBulanTahun = document.getElementById("bulan-tahun");
  const tombolSebelumnya = document.getElementById("sebelumnya");
  const tombolBerikutnya = document.getElementById("berikutnya");
  let tanggalSekarang = new Date();

  function renderKalender(tanggal) {
    const tahun = tanggal.getFullYear();
    const bulan = tanggal.getMonth();

    tampilanBulanTahun.textContent = `${namaBulan[bulan]} ${tahun}`;

    wadahHari.innerHTML = "";

    const hariPertama = new Date(tahun, bulan, 1).getDay();
    const tanggalTerakhir = new Date(tahun, bulan + 1, 0).getDate();

    for (let i = 0; i < hariPertama; i++) {
      const selKosong = document.createElement("div");
      wadahHari.appendChild(selKosong);
    }

    for (let i = 1; i <= tanggalTerakhir; i++) {
      const selHari = document.createElement("div");
      selHari.textContent = i;
      selHari.classList.add("angka");
      wadahHari.appendChild(selHari);
    }
  }

  tombolSebelumnya.addEventListener("click", function () {
    tanggalSekarang.setMonth(tanggalSekarang.getMonth() - 1);
    renderKalender(tanggalSekarang);
  });

  tombolBerikutnya.addEventListener("click", function () {
    tanggalSekarang.setMonth(tanggalSekarang.getMonth() + 1);
    renderKalender(tanggalSekarang);
  });

  renderKalender(tanggalSekarang);
});
