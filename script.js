let currentScore = 70; 
let currentIdx = 0;

const scenarios = [
    {
        t: "Awal Ramadhan: Muhammadiyah Hisab, NU Rukyatul Hilal. Warga mulai berdebat di masjid.",
        a: ["Saling klaim paling benar", "Ajak saling hormat & ijtihad sah", "Ikuti selera Bapak pribadi"],
        correct: 1,
        icon: "🌙", desc: "HILAL & HISAB"
    },
    {
        t: "Tarawih: Ada warga ingin 11 rakaat, ada yang ingin 23 rakaat. Masjid cuma satu.",
        a: ["Fasilitasi keduanya secara damai", "Hanya 11 rakaat biar cepat", "Tutup masjid biar rukun"],
        correct: 0,
        icon: "🕌", desc: "SHALAT TARAWIH"
    },
    {
        t: "Tahlilan: Warga NU kenduri doa, warga Muhammadiyah kurang terbiasa.",
        a: ["Sindir bid'ah", "Hadir menghormati tanpa menghakimi", "Boikot tetangga"],
        correct: 1,
        icon: "🕯️", desc: "KENDURI DOA"
    },
    {
        t: "Shalat Subuh: Imam pakai Qunut, makmum Muhammadiyah ragu.",
        a: ["Tetap makmum & hargai Imam", "Cari masjid lain", "Salahkan Imam"],
        correct: 0,
        icon: "🙏", desc: "QUNUT SUBUH"
    },
    {
        t: "Zakat Fitrah: Panitia beda pendapat Beras (NU) atau Uang (Muhammadiyah).",
        a: ["Hanya beras", "Hanya uang", "Sediakan kedua opsi"],
        correct: 2,
        icon: "🌾", desc: "ZAKAT FITRAH"
    },
    {
        t: "Lebaran: Terjadi perbedaan hari raya. Kampung terasa kaku.",
        a: ["Saling bantu persiapan Ied", "Rayakan diam-diam", "Suruh mengalah"],
        correct: 0,
        icon: "🤝", desc: "IDUL FITRI"
    },
    {
        t: "Maulid Nabi: Warga NU ingin perayaan meriah, warga Muhammadiyah kurang terbiasa.",
        a: ["Gunakan momen perkuat ukhuwah", "Larang acara", "Buat acara tandingan"],
        correct: 0,
        icon: "🎉", desc: "MAULID NABI"
    },
    {
        t: "Dana Masjid: Debat beli bedug (NU) atau bangun klinik (Muhammadiyah).",
        a: ["Beli bedug", "Musyawarah kemaslahatan", "Bagi dua saja"],
        correct: 1,
        icon: "🥁", desc: "BEDUG VS KLINIK"
    },
    {
        t: "Anak Sekolah: Anak Madrasah (NU) & Muhammadiyah saling ejek kurikulum.",
        a: ["Biarkan saja", "Gelar lomba hafalan Quran bersama", "Pisahkan pergaulan mereka"],
        correct: 1,
        icon: "🎒", desc: "ANAK SEKOLAH"
    },
    {
        t: "Bansos: MDMC (Muhammadiyah) & Lazisnu (NU) mau bantu bencana tapi saingan posko.",
        a: ["Bentuk posko bersama 'Umat Islam'", "Cari foto paling banyak", "Bantu sendiri-sendiri"],
        correct: 0,
        icon: "📦", desc: "BANTUAN SOSIAL"
    },
    {
        t: "Kotak Amal: Muhammadiyah ingin dana beasiswa, NU ingin renovasi makam tokoh.",
        a: ["Prioritaskan renovasi saja", "Bagi alokasi dana secara proporsional", "Debat sampai kotak ditarik"],
        correct: 1,
        icon: "💰", desc: "KOTAK AMAL"
    },
    {
        t: "Gaya Dakwah: Ustadz baru sering menyindir amalan warga di mimbar masjid.",
        a: ["Biarkan bebas bicara", "RT beri teguran halus agar dakwah sejuk", "Minta warga boikot"],
        correct: 1,
        icon: "🎤", desc: "MIMBAR DAKWAH"
    },
    {
        t: "Pemilihan RT: Warga pecah antara kandidat Muhammadiyah dan NU.",
        a: ["Tekankan kualitas kerja, bukan organisasi", "RT lama memihak salah satu", "Batalkan pemilihan"],
        correct: 0,
        icon: "🗳️", desc: "PEMILIHAN RT"
    },
    {
        t: "Kerja Bakti: Jadwal bentrok dengan acara pengajian besar warga.",
        a: ["Batalkan kerja bakti", "RT atur ulang jadwal agar keduanya jalan", "Paksa warga pilih satu"],
        correct: 1,
        icon: "🧹", desc: "KERJA BAKTI"
    },
    {
        t: "Speaker Masjid: Debat volume suara dzikir yang dianggap terlalu keras.",
        a: ["Matikan total speaker", "Musyawarah batasan volume yang nyaman", "Biarkan sampai lapor polisi"],
        correct: 1,
        icon: "📢", desc: "SPEAKER MASJID"
    }
];

function updateUI() {
    if(currentIdx < scenarios.length) {
        const s = scenarios[currentIdx];
        document.getElementById("photo-icon").innerText = s.icon;
        document.getElementById("photo-desc").innerText = s.desc;
        
        document.getElementById("q-text").innerText = `Kasus ${currentIdx + 1}: ${s.t}`;
        document.getElementById("btn0").innerText = "A. " + s.a[0];
        document.getElementById("btn1").innerText = "B. " + s.a[1];
        document.getElementById("btn2").innerText = "C. " + s.a[2];
        document.getElementById("prog-fill").style.width = ((currentIdx + 1) / scenarios.length * 100) + "%";
        document.getElementById("score-val").innerText = currentScore;
    } else {
        showResult();
    }
}

function handleChoice(p) {
    if(p === scenarios[currentIdx].correct) { 
        currentScore += 10; 
        alert("✅ Masya Allah! Adem tenan."); 
    } else { 
        currentScore -= 10; 
        alert("⚠️ Wah, warga mulai tegang Pak RT."); 
    }
    currentScore = Math.max(0, currentScore);
    currentIdx++; 
    updateUI();
}

function showResult() {
    document.getElementById("play-screen").style.display = "none";
    document.getElementById("header-game").style.display = "none";
    document.getElementById("prog-cont").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    
    let rank = ""; 
    let msg = "";
    
    if(currentScore >= 180) { 
        rank = "MUJAHID UKHUWAH 🏆"; 
        msg = "Luar biasa! Bapak adalah RT Pemersatu Bangsa!"; 
    } else if(currentScore >= 120) { 
        rank = "PEMIMPIN MODERAT 🥈"; 
        msg = "Bagus Pak, kampung tetap rukun dan kondusif."; 
    } else { 
        rank = "PERLU TABAYYUN ☕"; 
        msg = "Ayo Pak, lebih sering ajak warga ngopi bareng."; 
    }
    
    document.getElementById("rank-val").innerText = rank;
    document.getElementById("msg-val").innerText = msg;
}

// Jalankan fungsi pertama kali
updateUI();