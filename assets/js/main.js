var slideIndex = 1;
var slides = [...document.getElementsByClassName("mySlider")];
var dots = [...document.getElementsByClassName("dot")];
const loginBtn = document.querySelector(".login");
const signUpBtn = document.querySelector(".register");
const modal = document.getElementById("modal");
const modalLogin = document.querySelector(".login-container");
const modalLoginExit = document.querySelector(".login-exit");
const modalSignUpExit = document.querySelector(".signup-exit");
const modalSignUp = document.querySelector(".signup-container");
const changeFromSignUpToLogin = document.querySelector(
  ".option-form-top__btn.sign-up"
);
const changeFromLoginToSignUp = document.querySelector(
  ".option-form-top__btn.login"
);

const homeMusicContainer = document.querySelector(".home-music");
const playMusicContainer = document.querySelector(".play-music");
const playMusicBtn = document.querySelector(".play-music-btn");
const homeMusicBtn = document.querySelector(".home-music-btn");

const audio = document.querySelector("#audio");
const prevBtn = document.querySelector("#prevBtn");
const playBtn = document.querySelector("#playBtn");
const nextBtn = document.querySelector("#nextBtn");
const randomBtn = document.querySelector("#randomBtn");
const loopBtn = document.querySelector("#loopBtn");
const downloadBtn = document.querySelector("#downloadBtn");

const playlistSong = document.querySelector(".playlist-playing-song");
const currentSongName = document.querySelector(".playing-song__name");
const cdThumb = document.querySelector(".cd-thumb");
const youtubeCurrentSong = document.querySelector(
  ".current-song-details__youtube"
);
const youtubeLyrics = document.querySelector(".current-song-details__lyrics");

const progressTime = document.querySelector("#progress-time-song");
const progressTimeValue = document.querySelector(".song-handle-time__value");

const progressVolume = document.querySelector("#progress-volume-song");
const progressVolumeValue = document.querySelector(
  ".song-handle-volume__value"
);
// Song Playing Beside
const playingSongBeside = document.querySelector(".current-song-beside");
const playingCdThumbBeside = document.querySelector(".cd-thumb-beside");
const playingSongBesideName = document.querySelector(
  ".current-song-beside-name"
);
//
const imgAlbumItem = document.querySelectorAll(
  ".ablum-item__icon-overlay__box__btn"
);
const rankBtn = document.querySelector(".ranklist-title__box-icon");
const headerLogo = document.querySelector(".header-logo");

let flag = 1;
// Ngăn chặn hành vi scroll khi nhấn space
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});
// Thêm chức năng bật tắt khi nhấn nút esc, space
document.onkeyup = (e) => {
  if (e.keyCode === 32) {
    if (flag === 0) {
      audio.pause();
      flag = 1;
    } else {
      audio.play();
      flag = 0;
    }
  }
  if (e.keyCode === 27) {
    modal.style.display = "none";
  }
};

const MUSIC_STORAGE_KEY = "MUSIC_PLAYER";
const app = {
  currentIndex: 0,
  isRandom: false,
  isRepeat: false,
  isPlaying: false,
  config: JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Cưới Thôi",
      singer: "Masew,TAP,B-Ray",
      mp3: "./assets/music-mp3/CuoiThoi.mp3",
      youtube: "_8ldAdQd9WU",
      image: "./assets/music-img/CuoiThoi.jpg",
      lyrics: `My babe, my babe <br>
            Làm sao cho anh đến đây và hỏi cưới em mới hay<br>
            Yeah-eh-eh<br>
            My babe, my babe<br>
            Mẹ anh bảo rằng chẳng thích em nên anh cứ mãi phân vân<br>
            Giống như bao cô thôi mà<br>
            Tìm mãi mới gặp được anh mà<br>
            Chúng ta quen nhau lâu rồi<br>
            Cũng đã ôm hôn nhau luôn rồi<br>
            Giống như bao lời anh hứa<br>
            Giấu mọi người làm chi nữa<br>
            Người giả vờ không quen em để em phải đau buồn hơn<br>
            Cưới em đi anh ơi<br>
            Giờ em chẳng muốn lôi thôi<br>
            Để khi 2 vạch mới cưới, khôn như anh quê em đầy<br>
            Cưới em đi anh ơi<br>
            Về nhà rồi chúng ta chơi<br>
            Vì em thương em mới thế<br>
            Anh có ra sao vẫn mê<br>
            Cưới đi thôi anh ơi<br>
            Yeah-eh<br>
            Oh-oh-oh<br>
            Ta cưới nhau thôi anh ơi<br>
            Yeah-eh<br>
            Oh-uhm-uhm<br>
            Người ơi người đâu gặp gỡ làm chi<br>
            Khi nào kiệu đỏ được rước nàng đi<br>
            Song gia chú bác bạn dì<br>
            Góp mặt chung vui vào ngày hoan hỉ<br>
            Con gái là con gái rượu<br>
            Đây là phi vụ cả trăm ngàn tỉ<br>
            Sính lễ cũng chẳng có gì<br>
            Một chai rượu mận, một tấn vàng y<br>
            Em ơi em ơi mình cưới nhau đi<br>
            Kể từ cái ngày sét đánh không chết, thì anh đã kết lấy em về nhà<br>
            Chốt sổ vậy luôn cho bớt cồng kềnh<br>
            Ngày mà em va vào cuộc đời anh<br>
            Phá tan cô đơn và đã không đền<br>
            Là em đã nợ cả đời cả kiếp, nợ thằng cu tí<br>
            Mình cưới nhau đi<br>
            My babe, my babe<br>
            Mẹ anh bảo rằng chẳng thích em nên anh cứ mãi phân vân<br>
            Yeah-eh-eh<br>
            My babe, my babe<br>
            Kệ ai mặc ai có nói cũng chẳng quan tâm thế cho nhanh<br>
            Giờ tính sao?<br>
            Uh-oh-oh-oh<br>`,
    },
    {
      name: "Những Ngày",
      singer: "Dick,Tuyết",
      mp3: "./assets/music-mp3/NhungNgay.mp3",
      youtube: "8BTfgwE27CY",
      image: "./assets/music-img/NhungNgay.jpg",
      lyrics: `
            Và... Anh muốn nói em nghe vài lần<br>
            Những ngày mình có được nhau là những ngày bình yên cuộc sống ngoài đời<br>
            Ngoài trời có hạt sương cõi lòng em là chăn gối<br>
            Anh nắm bàn tay em lấy nụ hôn là ranh giới<br>
            Chờ anh nhé hãy cùng nhau làm tách cà phê vào sáng nay<br>
            Giọt nắng chiếu dưới những tán cây nhìn đường chân trời dưới áng mây<br>
            Em bảo mấy ngày ta yêu anh bảo không tính bằng vài câu đối<br>
            Là lá thu rơi xào xạc chặng đường cùng nhau ở ngoài con phố<br>
            Nắng hạ. Vương trên cành lá và hương hoa<br>
            Anh còn lưu chút kỷ niệm mới tưởng chừng là hôm qua<br>
            Nhưng quá khứ là chuyện cũ hãy quên đi đừng chạm vào<br>
            Thứ duy nhất mà anh giữ lại là những nét bút còn sạm màu<br>
            Anh lại muốn được cùng em hai ta lang thang trên đoạn dốc<br>
            Anh vội vã tìm một nhành hoa nhẹ nhàng cài lên trên lọn tóc<br>
            Vở tình này là thanh khiết không cần nói đã bắt gặp<br>
            Anh chẳng cho em một giấc mơ xin em đừng đếm để trở thành ác mộng<br>

            Đoạn Tuyết :<br>
            Cùng băng qua bao tháng năm ngã nghiêng<br>
            Vượt chông chênh, ta mãi luôn ở bên <br>
            Kề vai nhau mơ giấc mơ bình yên <br>
            Say cơn mê, nghe gió ru tim mình <br>
            Đón chiếc hôn em đông đầy <br>
            Hãy đến với em cho đêm tàn <br>
            Rót đắm say cho lan tràn <br>
            Ngát màu yêu mang vào tim <br>

            Ver 2 :<br>
            Anh lại ghé qua nơi đây những ngàybuổi chiếu phim cát sét<br>
            Không tiếng sóng vỗ rì rào chỉ ngoài nước ngoài gác bếp<br>
            Anh nhìn vào đêm thâu nơi thắp lên ngọn lửa tình <br>
            Anh chợt thấy cảnh nắng hạ đã có em ở giữa mình<br>
            Và em là người khiến cho nỗi nhớ được cải thiện<br>
            Yêu là thời khắc để niềm tin được trải nghiệm<br>
            Xa nhau là khoảng trống như có đêm mà thiếu ngày<br>
            Đêm nay sao đến trễ em nhìn anh nhíu mày<br>
            Mình có ngày hò hẹn trong khát vọng hoài lạc bước<br>
            Ngày tháng 10 vùng ngoại ô đọng lá vàng vài hạt nước<br>
            Ngoài trời thì gió mưa liệu có sức trên từng ngày<br>
            Chỉ cần em nhắn điểm hẹn anh không ngại vết sừng này<br>
            Anh yêu cả bầu trời yêu cánh đồng và cỏ lau<br>
            Anh yêu những ngày nắng đoạn đường vắng ở ngõ sau<br>
            Liệu câu hỏi được đặt ra giữa biết bao phong ba tình<br>
            Anh im lặng nhẹ nhàngvà tặng cho em một bông hoa quỳnh<br>
            Hát :  <br>
            Người về đây trăm ngàn mong chờ <br>
            Và hồn em phiêu diêu cùng gió<br>
            Gọi mùa yêu mơ màng câu thề<br>
            Đời xô nghiêng mãi mãi ko rời<br>

            Đón chiếc hôn em đong đầy<br>
            Hãy đến với em cho đêm tàn <br>
            Rót đắm say cho lan tràn<br>
            Ngát màu yêu mang vào tim<br>

            Nghe ngân nga trong tim lời ca về anh, nhớ thương bao đêm anh ơi có hay<br>
            Mong ta mãi ở bên người ơi, chớ ghé qua như cơn gió buồn<br>
            Nghe bâng khuâng trong tim niềm yêu, chờ mây bay cho tan cơn mưa chiều nhớ nhung<br>
            Mơ nắng mãi ấm trong đời, mang anh yêu đến, ru lòng ngát say<br>

            Đón chiếc hôn em đong đầy<br>
            Hãy đến với em cho đêm tàn <br>
            Rót đắm say cho lan tràn<br>
            Ngát màu yêu mang vào tim<br>
            `,
    },
    {
      name: "Tháng 10 Cho Em",
      singer: "Tofu, 1nG",
      mp3: "./assets/music-mp3/Thang10ChoEm.mp3",
      youtube: "g3Xu-sx9CEc",
      image: "./assets/music-img/Thang10ChoEm.jpg",
      lyrics: "Không xác định",
    },
    {
      name: "Có Hạt Sương Trên Mắt Em",
      singer: "Dick,NHA,Xám",
      mp3: "./assets/music-mp3/CoHatSuongTrenMatEm.mp3",
      youtube: "tCEdzGldeaA",
      image: "./assets/music-img/CoHatSuongTrenMatEm.jpg",
      lyrics: "Không xác định",
    },
    {
      name: "Anh Biết",
      singer: "Xám, D.Blue",
      mp3: "./assets/music-mp3/AnhBiet.mp3",
      youtube: "OufLTUWAEWc",
      image: "./assets/music-img/AnhBiet.jpg",
      lyrics: "Không xác định",
    },
    {
      name: "Muốn Được Cùng Em",
      singer: "Freaky, Quỳnh Gai, CM1X",
      mp3: "./assets/music-mp3/MuonDuocCungEm.mp3",
      youtube: "BZYp-6D0SDY",
      image: "./assets/music-img/MuonDuocCungEm.jpg",
      lyrics: "Không xác định",
    },
    {
      name: "Ghé Qua",
      singer: "Tofu, Dick, PC",
      mp3: "./assets/music-mp3/GheQua.mp3",
      youtube: "zEWSSod0zTY",
      image: "./assets/music-img/GheQua.jpg",
      lyrics: "Không xác định",
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
            <li class="playlist-playing-song-item ${
              index === this.currentIndex ? "active" : ""
            }" data-index=${index}>
                <img src="${song.image}" alt="Avatar_Song"
                    class="playlist-playing-song-item__img">
                <div class="playlist-playing-song-item-details">
                    <div class="playlist-playing-song-item-details__name">
                        Tên bài hát: <span>${song.name}</span>
                    </div>
                    <div class="playlist-playing-song-item-details__singer">
                        Tên ca sĩ: <span>${song.singer}</span>
                    </div>
                    <div class="playlist-playing-song-item-details__author">
                        Người sáng tác: <span>${song.singer}</span>
                    </div>
                </div>
            </li> `;
    });
    playlistSong.innerHTML = htmls.join("");
  },
  loadCurrentSong: function () {
    currentSongName.innerHTML = `<span>Bài hát đang được chạy:</span>${
      this.songs[this.currentIndex].name
    }`;
    cdThumb.style.backgroundImage = `url(${
      this.songs[this.currentIndex].image
    })`;
    audio.src = this.songs[this.currentIndex].mp3;
    youtubeCurrentSong.src = `https://www.youtube.com/embed/${
      this.songs[this.currentIndex].youtube
    }`;
    youtubeLyrics.innerHTML = `Lyrics: </br> ${
      this.songs[this.currentIndex].lyrics
    }`;
    playingSongBesideName.innerHTML = `${this.songs[this.currentIndex].name}`;
    playingCdThumbBeside.style.backgroundImage = `url(${
      this.songs[this.currentIndex].image
    })`;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  handleEvents: function () {
    // _this = this;
    // Xử lí đĩa nhạc quay quay
    // const cdWidth = cdThumb.offsetWidth;
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();
    // Xử lí đĩa nhạc Song Beside xoay
    // const cdSongBesideWidth = playingCdThumbBeside.offsetWidth;
    const cdThumbSongBesideAnimate = playingCdThumbBeside.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
    cdThumbSongBesideAnimate.pause();
    // Xử lí khi nhấn nút play
    playBtn.addEventListener("click", () => {
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    });
    // Khi xong được play
    audio.onplay = () => {
      this.isPlaying = true;
      playBtn.classList.remove("ti-control-play");
      playBtn.classList.add("ti-control-pause");
      playingSongBeside.style.display = "flex";
      cdThumbAnimate.play();
      cdThumbSongBesideAnimate.play();
    };
    audio.onpause = () => {
      this.isPlaying = false;
      playBtn.classList.add("ti-control-play");
      playBtn.classList.remove("ti-control-pause");
      cdThumbAnimate.pause();
      cdThumbSongBesideAnimate.pause();
      playingSongBeside.style.display = "none";
    };

    // Xử lí khi thời gian thay đổi
    audio.ontimeupdate = () => {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime - minutes * 60);

        progressTime.value = progressPercent;
        progressTimeValue.innerHTML = `0${minutes}:${
          seconds >= 10 ? seconds : "0" + seconds
        }`;
      }
    };
    // Xử lí khi tua music
    progressTime.oninput = (e) => {
      const seekTime = (e.target.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    };
    // Xử lí khi thay đổi âm lượng
    progressVolume.oninput = (e) => {
      const seekVolume = e.target.value;
      progressVolume.value = seekVolume;
      progressVolumeValue.innerHTML = `${seekVolume}%`;
      audio.volume = seekVolume / 100;
      console.log(seekVolume);
    };
    // Xử lí khi end song thì auto next
    audio.onended = () => {
      if (this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };
    // Khi nhấn nút next song
    nextBtn.addEventListener("click", () => {
      if (this.isRandom) {
        this.playRandomSong();
      } else {
        this.nextSong();
      }
      this.render();
      this.scrolltoCurrentSong();
      audio.play();
    });
    // Khi nhấn nút prev song
    prevBtn.addEventListener("click", () => {
      if (this.isRandom) {
        this.playRandomSong();
      } else {
        this.prevSong();
      }
      this.render();
      this.scrolltoCurrentSong();
      audio.play();
    });
    // Khi nhấn nút Random
    randomBtn.addEventListener("click", () => {
      this.isRandom = !this.isRandom;
      this.setConfig("isRandom", this.isRandom);
      randomBtn.classList.toggle("active", this.isRandom);
    });
    // Khi nhấn nút Repeat
    loopBtn.addEventListener("click", () => {
      this.isRepeat = !this.isRepeat;
      this.setConfig("isRepeat", this.isRepeat);
      loopBtn.classList.toggle("active", this.isRepeat);
    });
    // Khi nhấn nút download
    downloadBtn.addEventListener("click", {});

    // Xử lí khi click vào 1 song cụ thể
    playlistSong.onclick = (e) => {
      const songNode = e.target.closest(
        ".playlist-playing-song-item:not(.active)"
      );
      if (songNode && !e.target.closest(".option")) {
        this.currentIndex = Number(songNode.dataset.index);
        this.loadCurrentSong();
        this.render();
        audio.play();
      }
      if (e.target.closest(".option")) {
        console.log(123123);
      }
    };
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex == this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  scrolltoCurrentSong: function () {
    setTimeout(() => {
      document
        .querySelector(".playlist-playing-song-item.active")
        .scrollIntoView({
          behavior: "smooth",
          block: this.currentIndex < 3 ? "center" : "nearest",
        });
    }, 300);
  },
  start: function () {
    //Load state Config
    this.loadConfig();
    //Render Playlist Song
    this.render();
    //Load CurrentSong
    this.loadCurrentSong();
    //Xử lý event
    this.handleEvents();
    // Hiển thị trạng thái config button đã lưu
    randomBtn.classList.toggle("active", this.isRandom);
    loopBtn.classList.toggle("active", this.isRepeat);
  },
};
app.start();

// Modal
function showModalSignUp() {
  modal.style.display = "flex";
  modalSignUp.style.display = "block";
  modalLogin.style.display = "none";
}
function showModalLogin() {
  modal.style.display = "flex";
  modalLogin.style.display = "block";
  modalSignUp.style.display = "none";
}
function closeModal() {
  modal.style.display = "none";
  modalLogin.style.display = "none";
  modalSignUp.style.display = "none";
}
// Slide Button
function openPlayMusic() {
  homeMusicContainer.style.display = "none";
  playMusicContainer.style.display = "flex";
}
function openHomeMusic() {
  homeMusicContainer.style.display = "flex";
  playMusicContainer.style.display = "none";
}

loginBtn.addEventListener("click", showModalLogin);
signUpBtn.addEventListener("click", showModalSignUp);

changeFromSignUpToLogin.addEventListener("click", showModalLogin);
changeFromLoginToSignUp.addEventListener("click", showModalSignUp);

modalLoginExit.addEventListener("click", closeModal);
modalSignUpExit.addEventListener("click", closeModal);

modal.addEventListener("click", closeModal);
modalLogin.addEventListener("click", (e) => e.stopPropagation());
modalSignUp.addEventListener("click", (e) => e.stopPropagation());

playMusicBtn.addEventListener("click", openPlayMusic);
homeMusicBtn.addEventListener("click", openHomeMusic);

imgAlbumItem.forEach((element) => {
  element.addEventListener("dblclick", openPlayMusic);
});
rankBtn.addEventListener("click", openPlayMusic);
headerLogo.addEventListener("click", openHomeMusic);

// Slider
// Next/previous controls
// autoShowSlides()
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 1) {
    slideIndex = slides.length - 2;
  }
  if (slideIndex > slides.length - 2) {
    slideIndex = 1;
  }
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  slides.forEach((element) => {
    element.style.display = "none";
    element.classList.remove("center", "left", "right");
  });
  dots.forEach((element) => {
    element.classList.remove("active");
  });
  dots[n - 1].classList.add("active");

  slides[n].classList.add("center");
  slides[n].style.display = "block";

  slides[n - 1].classList.add("left");
  slides[n - 1].style.display = "block";

  slides[n + 1].classList.add("right");
  slides[n + 1].style.display = "block";
}
//   function autoShowSlides(){
//         slideIndex++;
//         if(slideIndex<1){
//             slideIndex=slides.length-2
//         }
//         if(slideIndex>slides.length-2){
//             slideIndex=1;
//         }
//         showSlides(slideIndex);
//         setTimeout(autoShowSlides,5000);
//     }
const nextSliderBtn = document.querySelector(".btn-next");

function autoShowSlides() {
  nextSliderBtn.click();
}
setInterval(autoShowSlides, 10000);
