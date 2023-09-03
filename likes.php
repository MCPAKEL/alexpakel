<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ambil data yang dikirimkan melalui permintaan POST
    $imageId = $_POST['imageId']; // Anda perlu mengirimkan ID gambar saat mengklik tombol "Like"
    $likesFile = 'likes.txt'; // Nama file untuk menyimpan jumlah like

    // Fungsi untuk mendapatkan jumlah like
    function getLikes($imageId) {
        global $likesFile;
        $likesData = json_decode(file_get_contents($likesFile), true);
        return isset($likesData[$imageId]) ? $likesData[$imageId] : 0;
    }

    // Fungsi untuk menambah like
    function addLike($imageId) {
        global $likesFile;
        $likesData = json_decode(file_get_contents($likesFile), true);
        if (!isset($likesData[$imageId])) {
            $likesData[$imageId] = 1;
        } else {
            $likesData[$imageId]++;
        }
        file_put_contents($likesFile, json_encode($likesData));
    }

    // Menambah like untuk gambar dengan ID yang diterima
    addLike($imageId);
    echo 'success';
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Ambil jumlah like untuk gambar dengan ID yang diterima
    $imageId = $_GET['imageId']; // Anda perlu mengirimkan ID gambar saat mengambil jumlah like
    $likes = getLikes($imageId);
    echo $likes;
}
?>
