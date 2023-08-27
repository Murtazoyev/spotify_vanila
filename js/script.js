let doc = document

const clientId = '44f2d95737104a19943990a814afccbd'
const clientSecret = '019c1564c55c4df5aa5397158b445107'

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

getToken().then(function (result) {
  const accessToken = result;
  const endpoint = "https://api.spotify.com/v1/recommendations";
  const artists = '53XhwfbYqKCa1cC15pYq2q';
  const danceability = encodeURIComponent('1.9');

  fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then((res) => res.json())
    .then((res) => {
    });
});

let first_arr = []

let set_btn = doc.querySelector('.setting-btn')
let block = doc.querySelector('.set-block-play')

set_btn.addEventListener('click', function sett() {
  block.classList.toggle('first-none')
})

block.addEventListener('mouseleave', function () {
  block.classList.add('first-none')
})


let close_or_open = doc.querySelector('.btn-point')
let aside_1 = doc.querySelector('.aside-1')
let img = doc.querySelector('.logo-block')
let as = doc.querySelector('.aside-top')
let aside_p = doc.querySelectorAll('.aside-link-left p')
let btn1 = doc.querySelector('.aside-btn-1')
let btn2 = doc.querySelector('.aside-btn-2')
let btn3 = doc.querySelector('.aside-btn-3')
let btn4 = doc.querySelector('.aside-btn-4')
let aside_link_left = doc.querySelectorAll('.aside-link-left')
let a_b = doc.querySelector('.aside-bottom')


let as_btn = doc.querySelector('.aside-btn p')
let as_img = doc.querySelector('.dddd')
let ff_gg = doc.querySelector('.aside-bottom-block')


close_or_open.addEventListener('click', function clop() {
  aside_1.classList.toggle('width')
  setTimeout(() => {
    img.classList.toggle('logo-two')
    for (let item of aside_p) {
      item.classList.toggle('none')
    }

    for (let i of aside_link_left) {
      i.classList.toggle('blld')
    }

    a_b.classList.toggle('none')
    as_btn.classList.toggle('none')
    as_img.classList.toggle('block')
    ff_gg.classList.toggle('pos')
  }, 100);

  as.classList.toggle('as')
  doc.querySelector('.btn-point').classList.toggle('bttt')
})

let btn_as_2 = doc.querySelector('.btn-poin')
let aside_2 = doc.querySelector('.aside-2')

btn_as_2.onclick = () => {
  aside_2.classList.toggle('aside-2-block')
  doc.querySelector('.btn-poin').classList.toggle('btttt')
  doc.querySelector('.fr-activ p').classList.toggle('block')
  doc.querySelector('.img-contact').classList.toggle('margin-right')
}





// function updateButtons() {
//   const backBtn = document.querySelector("#backButton");
//   if (window.history.length === 1) {
//     backBtn.style.display = "none";
//   } else {
//     backBtn.style.display = "";
//   }
// }

// window.onload = function() {
//   updateButtons();
//   window.addEventListener("popstate", function(e) {
//     updateButtons();
//   });
// };

// function goBack() {
//   window.history.back();
//   updateButtons();
// }
// function goForward() {
//   window.history.forward();
//   updateButtons()
// }

let bottom_father_block = doc.querySelector('.bottom-father-block')
let imageCol = document.querySelector(".music-img")
let audio = doc.querySelector('.audio')
let play_btn_item = doc.querySelector('.img-play')
let filter_music = []

getToken().then(function (result) {
  const accessToken = result;
  let extra_url = [
    {
      url: '37i9dQZF1DWXRqgorJj26U'
    },
    {
      url: '37i9dQZF1DXcBWIGoYBM5M'
    },
    {
      url: '37i9dQZF1DX0XUsuxWHRQd'
    },
    {
      url: '37i9dQZF1DX1lVhptIYRda'
    },
    {
      url: '37i9dQZF1DX10zKzsJ2jva'
    },
    {
      url: '37i9dQZF1DX4sWSpwq3LiO'
    },
    {
      url: '37i9dQZF1DX4SBhb3fqCJd'
    },
    {
      url: '37i9dQZEVXcSsFGTqn60Fe'
    }
  ]

  let ex_url = Math.floor(Math.random() * extra_url.length)
  let obj_url = []
  obj_url.push(extra_url[ex_url])
  for (let it_url of obj_url) {

    fetch(`https://api.spotify.com/v1/playlists/${it_url.url}?limit=100`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let fff = []

        for (let item of res.tracks.items) {
          let ff = []
          ff.push(item.track)
          for (let ite of ff) {
            if (ite.preview_url !== null) {
              filter_music.push(item)
            }
          }
        }


        let num = 0
        for (let inner of filter_music) {
          let it = []
          it.push(inner)

          for (let item of it) {
            item.liked = false
            let href_div = doc.createElement('div')
            let block_img = doc.createElement('div')
            let block_text = doc.createElement('div')
            let href_img = doc.createElement('img')
            let href_btn = doc.createElement('button')
            let img_btn = doc.createElement('img')
            let one_p = doc.createElement('p')
            let two_p = doc.createElement('p')
            let play_music = doc.querySelector('.play-music')
            let top_father_block = doc.querySelector('.top-father-block')


            href_div.classList.add('slide')
            href_div.classList.add('href-div')
            block_img.classList.add('block-img')
            block_text.classList.add('block-text')
            href_btn.classList.add('lime-btn')
            one_p.classList.add('one-p')
            two_p.classList.add('two-p')

            img_btn.src = './img/Play.png'
            let ff = []
            ff.push(item.track)




            for (let ite of ff) {


              for (let it of ite.artists) {
                two_p.innerHTML = it.name
              }

              let alb = []
              alb.push(ite.album)

              for (let it of alb) {
                let img = []
                img.push(it.images[0])
                for (let even of img) {
                  href_img.src = even.url
                }
              }

              one_p.innerHTML = ite.name

              let element = one_p;
              let textcon = element.textContent;
              let maxLength = 20;
              if (textcon.length > maxLength) {
                let shortText = textcon.slice(0, maxLength - 3) + '...';
                one_p.innerHTML = shortText;
              }

              let elemen = one_p;
              let textco = elemen.textContent;
              let maxLengt = 20;
              if (textco.length > maxLengt) {
                let shortText = textco.slice(0, maxLengt - 3) + '...';
                two_p.innerHTML = shortText;
              }
            }

            block_img.append(href_img)
            block_img.append(href_btn)
            href_btn.append(img_btn)
            block_text.append(one_p)
            block_text.append(two_p)
            href_div.append(block_img)
            href_div.append(block_text)
            bottom_father_block.append(href_div)

            href_btn.onclick = (event) => {
              event.stopPropagation();
              doc.querySelector('.play-music').classList.add('nonene')
              doc.querySelector('.top-father-block').classList.remove('nonene')
              doc.querySelector('.bottom-father-block').classList.remove('nonene')
              player.classList.remove('none')
              let ff = []
              ff.push(item.track)
              for (let ite of ff) {
                if (ite.preview_url == null) {
                  audio.src = './audio/sound_17968.mp3'
                } else audio.src = ite.preview_url

                for (let it of ite.artists) {
                  author.innerHTML = it.name
                }

                let alb = []
                alb.push(ite.album)

                for (let it of alb) {
                  let img = []
                  img.push(it.images[0])
                  for (let even of img) {
                    player_img.src = even.url
                    imageCol.src = even.url
                  }
                }

                player_name.innerHTML = ite.name
              }
              play()
            }




            href_div.onclick = () => {
              play_music.classList.remove('nonene')
              doc.querySelector('.zag1').classList.add('nonene')
              top_father_block.classList.add('nonene')
              bottom_father_block.classList.add('nonene')
              let ff = []
              ff.push(item.track)
              for (let ite of ff) {

                setInterval(() => {
                  let isPlay = player.classList.contains('play-y')
                  if (isPlay) {
                    play_btn_item.src = './img/Subtract.png'
                  } else {
                    play_btn_item.src = './img/Play.png'
                  }
                }, 100);


                play_btn_item.onclick = () => {
                  if (ite.preview_url != audio.src) {
                    audio.src = ite.preview_url
                  }
                  player.classList.remove('none')
                  let isPlay = player.classList.contains('play-y')
                  if (isPlay) {
                    pause()
                    play_btn_item.src = './img/Subtract.png'
                  } else {
                    play()
                    play_btn_item.src = './img/Play.png'
                  }

                  for (let it of ite.artists) {
                    author.innerHTML = it.name
                  }

                  let alb = []
                  alb.push(ite.album)

                  for (let it of alb) {
                    let img = []
                    img.push(it.images[0])
                    for (let even of img) {
                      player_img.src = even.url
                    }
                  }

                  player_name.innerHTML = ite.name
                }

                let alb = []
                alb.push(ite.album)

                for (let it of ite.artists) {
                  doc.querySelector('.name-music').innerHTML = it.name
                }

                for (let it of alb) {
                  let img = []
                  img.push(it.images[0])
                  for (let even of img) {
                    imageCol.src = even.url
                  }

                }
              }

              imageCol.onload = () => {
                const { R, G, B } = getAverageColor(imageCol, 4)
                document.querySelector('.play-music').style.background = `linear-gradient(180deg,rgb(${R}, ${G},${B})  5.09%, #121212 43.28%)`
                doc.querySelector('header').style.background = `rgb(${R}, ${G},${B})`
              }

            }

            let gt = doc.querySelector('.bottom-music')
            let box = doc.createElement('div')
            let src = doc.createElement('img')
            let box_left = doc.createElement('div')
            let box_txt = doc.createElement('div')
            let p = doc.createElement('p')
            let p2 = doc.createElement('p')
            let p3 = doc.createElement('p')
            let p4 = doc.createElement('p')
            let p5 = doc.createElement('p')
            let album = doc.createElement('div')
            let date_add = doc.createElement('div')
            let por = doc.createElement('p')
            let like = doc.createElement('img')

            p.classList.add('name-mus')
            por.classList.add('cifr')
            date_add.classList.add('data-add')
            album.classList.add('album')
            p2.classList.add('name-isp')
            p3.classList.add('name-isp2')
            p4.classList.add('name-isp3')
            p5.classList.add('name-isp4')
            box_txt.classList.add('ispol')
            box_left.classList.add('box-left')
            box.classList.add('blockke')
            box.classList.add('ok')
            like.classList.add('like-item')
            like.classList.add('like')
            src.classList.add('box_left-img')

            like.src = './img/iconlike.png'

            like.onclick = (event) => {
              event.stopPropagation();
              let ff = []
              ff.push(item)
              for (let ite of ff) {
                let src = ite.liked
                if (src == false) {
                  like.src = './img/Vectorheart.png'
                  ite.liked = true
                  const userId = 1;
                  const url = `http://localhost:2552/users/${userId}`;

                  fetch(url)
                    .then(response => response.json())
                    .then(user => {
                      // Изменяем массив liked в объекте пользователя

                      let obj_api = {
                        name: item.track.name,
                        music: item.track.preview_url,
                        artists: item.track.album.artists[0].name,
                        album: item.track.album.name,
                        src: item.track.album.images[0].url,
                        date: item.added_at,
                      }
                      user.liked.push(obj_api);
                      // Отправляем обновленный объект на сервер методом POST
                      fetch(url, {
                        method: 'PUT',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                      })
                        .then(response => response.json())
                        .then(data => {
                          console.log('User updated:', data);
                        })
                        .catch(error => {
                          console.error('Error updating user:', error);
                        });
                    })
                    .catch(error => {
                      console.error('Error getting user data:', error);
                    });

                } else if (src == true) {
                  like.src = './img/iconlike.png'
                  ite.liked = false
                  const userId = 1;
                  const url = `http://localhost:2552/users/${userId}`;

                  fetch(url)
                    .then(response => response.json())
                    .then(user => {
                      // Изменяем массив liked в объекте пользователя

                      // user.liked = user.liked.filter(track => track !== item.track);
                      for (let i of user.liked) {
                        user.liked = user.liked.slice(0, user.liked.indexOf(i)).concat(user.liked.slice(user.liked.indexOf(i) + 1));
                        break; // выходим из цикла
                      }
                      // Отправляем обновленный объект на сервер методом POST
                      fetch(url, {
                        method: 'PUT',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                      })
                        .then(response => response.json())
                        .then(data => {
                          console.log('User updated:', data);
                        })
                        .catch(error => {
                          console.error('Error updating user:', error);
                        });
                    })
                    .catch(error => {
                      console.error('Error getting user data:', error);

                    });
                }
              }
            }

            for (let ite of ff) {
              for (let it of ite.artists) {
                p2.textContent = it.name
              }
              let alb = []

              alb.push(ite.album)
              for (let it of alb) {
                let img = []
                img.push(it.images[0])
                for (let even of img) {
                  href_img.src = even.url
                }
              }
              p.textContent = ite.name

              for (let it of alb) {
                let img = []
                img.push(it.images[0])
                for (let even of img) {
                  src.src = even.url
                }
                p3.textContent = it.name
              }
            }



            let day = new Date(inner.added_at)
            let my_day = new Date()
            let day_min = my_day.getDay() - day.getDay()
            p4.textContent = `${day_min} day ago`
            por.innerHTML = `${num = num + 1}`

            gt.appendChild(box)
            box.append(box_left)
            box_left.append(por, src)
            box_left.appendChild(box_txt)
            box_txt.append(p, p2)
            box.append(album, date_add, like, p5)
            album.append(p3)
            date_add.append(p4)

            box.onclick = () => {
              let blocks = doc.querySelectorAll('.blockke')

              blocks.forEach((block) => {
                block.classList.remove('blockkee')
                // track.pause()
              })
              box.classList.add('blockkee')
              player.classList.remove('none')
              let ff = []
              ff.push(item.track)
              for (let ite of ff) {
                if (ite.preview_url == null) {
                  audio.src = './audio/sound_17968.mp3'
                } else audio.src = ite.preview_url

                for (let it of ite.artists) {
                  author.innerHTML = it.name
                }

                let alb = []
                alb.push(ite.album)

                for (let it of alb) {
                  let img = []
                  img.push(it.images[0])
                  for (let even of img) {
                    player_img.src = even.url
                    imageCol.src = even.url
                  }
                }

                player_name.innerHTML = ite.name

                play_btn_item.onclick = () => {
                  if (ite.preview_url != audio.src) {
                    audio.src = ite.preview_url
                  }
                  player.classList.remove('none')
                  let isPlay = player.classList.contains('play-y')
                  if (isPlay) {
                    pause()
                    play_btn_item.src = './img/Subtract.png'
                  } else {
                    play()
                    play_btn_item.src = './img/Play.png'
                  }

                  for (let it of ite.artists) {
                    author.innerHTML = it.name
                  }

                  let alb = []
                  alb.push(ite.album)

                  for (let it of alb) {
                    let img = []
                    img.push(it.images[0])
                    for (let even of img) {
                      player_img.src = even.url
                    }
                  }

                  player_name.innerHTML = ite.name
                }
              }
              play()
            }

          }

        }

        let btn_prev = doc.querySelector('.back-player')
        let next = doc.querySelector('.foward-player')
        let play_btn = doc.querySelector('.img-play-player')
        let progress = doc.querySelector('.player-nav-child')
        let progressContain = doc.querySelector('.player-nav')
        let player_img = doc.querySelector('.player-img')
        let player_name = doc.querySelector('.player-music-name')
        let author = doc.querySelector('.player-music-author')
        let player = doc.querySelector('.player')
        let random = doc.querySelector('.img-suttle')
        let repeat = doc.querySelector('.repeat-player')
        let player_like = doc.querySelector('.player-like')
        let like_btn = doc.createElement('img')
        audio.src = ''



        let songIndex = Math.floor(Math.random() * filter_music.length)

        function loadSongs(song) {
          fff.push(filter_music[song])
          for (let item of fff) {
            like_btn.classList.add('heart')
            like_btn.classList.add('like')
            like_btn.src = './img/iconlike.png'
            player_like.append(like_btn)
            item.liked = false
            let ff = []
            ff.push(item.track)
            for (let ite of ff) {
              audio.src = ite.preview_url

              for (let it of ite.artists) {
                author.innerHTML = it.name
              }

              let alb = []
              alb.push(ite.album)

              for (let it of alb) {
                let img = []
                img.push(it.images[0])
                for (let even of img) {
                  player_img.src = even.url
                }
              }

              player_name.innerHTML = ite.name

            }


            fetch('http://localhost:2552/users')
              .then(data => data.json())
              .then(json => {
                setInterval(() => {
                  for (let like_ite of json) {
                    for (let itt of like_ite.liked) {
                      if (audio.src == itt.preview_url) {
                        like_btn.src = './img/Vectorheart.png'
                      } else {
                        like_btn.src = './img/iconlike.png'
                        item.liked = false
                      }
                    }

                  }

                  like_btn.onclick = (event) => {
                    event.stopPropagation();
                    let src = item.liked
                    if (src == false) {
                      like_btn.src = './img/Vectorheart.png'
                      item.liked = true

                    } else if (src == true) {
                      like_btn.src = './img/iconlike.png'
                      item.liked = false
                    }

                  }
                }, 100);


              })

          }
        }

        loadSongs(songIndex)

        function play() {
          player.classList.add('play-y')
          audio.play()
          play_btn.src = './img/Subtract.png'
        }


        function pause() {
          player.classList.remove('play-y')
          audio.pause()
          play_btn.src = './img/Playefewfew.png'
        }

        play_btn.addEventListener('click', () => {
          let isPlay = player.classList.contains('play-y')

          if (isPlay) {
            pause()
          } else {
            play()
          }
        })

        function nextt() {
          songIndex++

          if (songIndex > filter_music.length - 1) {
            songIndex = 0
          }
          loadSongs(songIndex)
          play()
        }

        next.addEventListener('click', nextt)

        function backk() {
          songIndex--

          if (songIndex < 0) {
            songIndex = filter_music.length - 1
          }

          loadSongs(songIndex)
          play()

        }
        function ran() {
          let songIndex = Math.floor(Math.random() * filter_music.length)
          loadSongs(songIndex)
          play()

        }

        random.addEventListener('click', ran)

        btn_prev.addEventListener('click', backk)

        function updateProgress(e) {
          let { duration, currentTime } = e.srcElement
          let progressPercent = (currentTime / duration) * 100

          if (duration == NaN) {
            doc.querySelector('.dur').innerHTML = "0:00"
          }

          if (currentTime < 60) {
            doc.querySelector('.current').innerHTML = `0:${Math.floor(currentTime)}`
            doc.querySelector('.dur').innerHTML = `0:${Math.floor(duration)}`
          }

          if (currentTime < 10) {
            doc.querySelector('.current').innerHTML = `0:0${Math.floor(currentTime)}`
            doc.querySelector('.dur').innerHTML = `0:${Math.floor(duration)}`
          }

          progress.style.width = `${progressPercent}%`
        }

        audio.addEventListener('timeupdate', updateProgress)

        function setProccess(e) {
          let width = this.clientWidth
          let clickX = e.offsetX
          let duration = audio.duration

          audio.currentTime = (clickX / width) * duration
        }

        progressContain.addEventListener('click', setProccess)

        audio.addEventListener('ended', function () {
          setTimeout(() => {
            nextt()
          }, 1000)
        })

        function rep() {
          audio.addEventListener('ended', function () {
            setTimeout(() => {
              if (audio.loop == true) {
                audio.loop = false
              } else {
                audio.loop = true
              }

              play()
            }, 1000)
          })
        }

        repeat.addEventListener('click', rep)


        let volumes = doc.querySelector('.range')
        function setVolume(e) {
          let vol = e.target.value / 100
          audio.volume = vol
        }
        volumes.addEventListener('input', setVolume)

        const userId = 1;
        const url = `http://localhost:2552/users/${userId}`;

        // fetch(url)
        //   .then(response => response.json())
        //   .then(user => {
        //     // Изменяем массив liked в объекте пользователя
        //     for (let ite of filter_music) {
        //       let ff = []
        //       ff.push(ite.track)
        //       for (let url_mis of ff) {
        //         setInterval(() => {
        //         if (audio.src == url_mis.preview_url) {

        //           user.recently_listened_to.push(ite.track);
        //           for (let its_me of user.recently_listened_to) {
        //             if (audio.src == its_me) {
        //               // fetch(`http://localhost:2552/users/${url_mis.id}`, {
        //               //   method: 'DELETE'
        //               // })
        //               console.log('true');
        //             }
        //           }


        //           // Отправляем обновленный объект на сервер методом POST
        //           fetch(`http://localhost:2552/users/${userId}`, {
        //             method: 'PUT',
        //             headers: {
        //               'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(user)
        //           })
        //         }
        //         }, 100);


        //       }

        //     }

        //   })
      });
  }
});

let playlists = []
let track_random = []


let sec1 = doc.querySelector('.section-1')
let sec2 = doc.querySelector('.section-2')
let sec3 = doc.querySelector('.section-3')
let sec4 = doc.querySelector('.section-4')
let like = doc.querySelector('.liked-songs')
let logo_block = doc.querySelector('.logo-block')

btn2.classList.remove('aside-link-active')
btn3.classList.remove('aside-link-active')
btn4.classList.remove('aside-link-active')
btn1.classList.add('aside-link-active')
sec2.classList.add('none')
sec3.classList.add('none')
sec4.classList.add('none')
sec1.classList.remove('none')
doc.querySelector('.header').style.background = `linear-gradient(180deg, #393939 65%, transparent 100%)`

logo_block.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn1.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec3.classList.add('none')
  sec4.classList.add('none')
  sec1.classList.remove('none')
  doc.querySelector('.header').style.background = `linear-gradient(180deg, #393939 65%, transparent 100%)`
}

btn1.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn1.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec3.classList.add('none')
  sec4.classList.add('none')
  sec1.classList.remove('none')
  doc.querySelector('.header').style.background = `linear-gradient(180deg, #393939 65%, transparent 100%)`
}

btn2.onclick = () => {
  btn1.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn2.classList.add('aside-link-active')
  sec1.classList.add('none')
  sec3.classList.add('none')
  sec4.classList.add('none')
  sec2.classList.remove('none')
  doc.querySelector('.header').style.background = `linear-gradient(180deg, #393939 65%, transparent 100%)`
}

btn3.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn1.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn3.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec1.classList.add('none')
  sec4.classList.add('none')
  sec3.classList.remove('none')
  doc.querySelector('.header').style.background = `linear-gradient(180deg, #393939 65%, transparent 100%)`
}

like.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn1.classList.remove('aside-link-active')
  btn4.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec3.classList.add('none')
  sec1.classList.add('none')
  sec4.classList.remove('none')
  function getAverageColo(imageElement, ratio) {
    const canvas = document.createElement("canvas")

    let height = canvas.height = imageElement.naturalHeight
    let width = canvas.width = imageElement.naturalWidth

    const context = canvas.getContext("2d")
    context.drawImage(imageElement, 0, 0)

    let data, length
    let i = -4,
      count = 0

    try {
      data = context.getImageData(0, 0, width, height)
      length = data.data.length
    } catch (err) {
      return {
        r: 0,
        g: 0,
        b: 0
      }
    }
    let r, g, b
    r = g = b = -1000000

    while ((i += ratio * 4) < length) {
      ++count

      r += data.data[i]
      g += data.data[i + 1]
      b += data.data[i + 2]
    }

    r = ~~(r / count)
    g = ~~(g / count)
    b = ~~(b / count)

    return {
      r,
      g,
      b
    }
  }


  let imageCol2 = doc.querySelector('.two-img')
  let { r, g, b } = getAverageColo(imageCol2, 4)

  doc.querySelector('.two-play').style.background = `linear-gradient(180deg,rgb(${r}, ${g},${b})  20.09%, #121212 90.28%)`
  doc.querySelector('.header').style.background = `rgb(${r}, ${g},${b}`
}

btn4.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn1.classList.remove('aside-link-active')
  btn4.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec3.classList.add('none')
  sec1.classList.add('none')
  sec4.classList.remove('none')
  function getAverageColo(imageElement, ratio) {
    const canvas = document.createElement("canvas")

    let height = canvas.height = imageElement.naturalHeight
    let width = canvas.width = imageElement.naturalWidth

    const context = canvas.getContext("2d")
    context.drawImage(imageElement, 0, 0)

    let data, length
    let i = -4,
      count = 0

    try {
      data = context.getImageData(0, 0, width, height)
      length = data.data.length
    } catch (err) {
      return {
        r: 0,
        g: 0,
        b: 0
      }
    }
    let r, g, b
    r = g = b = -1000000

    while ((i += ratio * 4) < length) {
      ++count

      r += data.data[i]
      g += data.data[i + 1]
      b += data.data[i + 2]
    }

    r = ~~(r / count)
    g = ~~(g / count)
    b = ~~(b / count)

    return {
      r,
      g,
      b
    }
  }


  let imageCol2 = doc.querySelector('.two-img')
  let { r, g, b } = getAverageColo(imageCol2, 4)

  doc.querySelector('.two-play').style.background = `linear-gradient(180deg,rgb(${r}, ${g},${b})  20.09%, #121212 90.28%)`
  doc.querySelector('.header').style.background = `rgb(${r}, ${g},${b}`
}

let load_site = doc.querySelector('.load')

setTimeout(() => {
  load_site.style.display = 'none'
}, 2000);


function getAverageColor(imageElement, ratio) {
  const canvas = document.createElement("canvas")

  let height = canvas.height = imageElement.naturalHeight
  let width = canvas.width = imageElement.naturalWidth

  const context = canvas.getContext("2d")
  context.drawImage(imageElement, 0, 0)

  let data, length
  let i = -4,
    count = 0

  try {
    data = context.getImageData(0, 0, width, height)
    length = data.data.length
  } catch (err) {
    return {
      R: 0,
      G: 0,
      B: 0
    }
  }
  let R, G, B
  R = G = B = -1000000

  while ((i += ratio * 4) < length) {
    ++count

    R += data.data[i]
    G += data.data[i + 1]
    B += data.data[i + 2]
  }

  R = ~~(R / count)
  G = ~~(G / count)
  B = ~~(B / count)

  return {
    R,
    G,
    B
  }
}

let { R, G, B } = getAverageColor(imageCol, 4)

doc.querySelector('.play-music').style.background = `linear-gradient(180deg,rgb(${R}, ${G},${B})  5.09%, #121212 43.28%)`


let reg_form = doc.querySelector('.reg-sign-up')

let reg_btn1 = doc.querySelector('.register')
let reg_btn2 = doc.querySelectorAll('.login')

function reg_none_block() {
  window.open('./register.html')
  window.close()
}

reg_btn1.addEventListener('click', reg_none_block)

for (let i = 0; i < reg_btn2.length; i++) {
  reg_btn2[i].onclick = function () {
    window.open('./register.html')
    window.close()
  };
}

let user = doc.querySelector('.user-select')
let user_name = doc.querySelector('.user-name')
let user_img = doc.querySelector('.user-img')

fetch('http://localhost:2552/users')
  .then(data => data.json())
  .then(json => {
    if (json.length > 0) {
      doc.querySelector('.login').classList.add('none')
      doc.querySelector('.login1').classList.add('none')
      doc.querySelector('.login2').classList.add('none')
      user.classList.remove('none')
      reg_btn1.classList.add('none')
      for (let item of json) {
        doc.querySelector('.made-your-name').innerHTML = item.name
        user_name.innerHTML = item.name
        if (item.img != null) {
          user_img.src = item.img
        } else {
          user_img.src = './img/4092564_profile_about_mobile ui_user_icon.png'
        }
      }
    } else {
      doc.querySelector('.login').classList.remove('none')
      doc.querySelector('.login1').classList.remove('none')
      doc.querySelector('.login2').classList.remove('none')
      user.classList.add('none')
      reg_btn1.classList.remove('none')
      doc.querySelector('.made-your-name').innerHTML = "You"
    }
  })


let setting_user = doc.querySelector('.setting-user')

doc.querySelector('.user').addEventListener('click', function () {
  setting_user.classList.toggle('non')
})

setting_user.addEventListener('mouseleave', function () {
  setting_user.classList.add('non')
})


let exit_user = doc.querySelector('.exit-user')

exit_user.addEventListener('click', function () {
  fetch('http://localhost:2552/users')
    .then(response => response.json())
    .then(json => {
      for (let item of json) {
        fetch('http://localhost:2442/users')
          .then(response => response.json())
          .then(itemvalue => {
            for (let its_it of itemvalue) {
              if (its_it.name == item.name && its_it.email == item.email && its_it.password == item.password) {
                fetch('http://localhost:2442/users', {
                  method: 'POST',
                  body: JSON.stringify(
                    {
                      name: item.name,
                      password: item.password,
                      email: item.email,
                      img: item.img,
                      liked: item.liked,
                      friends: item.friends,
                      recently_listened_to: item.recently_listened_to
                    }
                  ),
                  headers: {
                    'Content-Type': 'application/json'
                  },
                })

                fetch(`http://localhost:2442/users/${its_it.id}`, {
                  method: "DELETE",
                });
              }
            }
            fetch(`http://localhost:2552/users/${item.id}`, {
              method: "DELETE",
            });

            window.open('./index.html')
            window.close()
          })



      }

    })
})

let not_found_like = doc.querySelector('.no-found-like')
let two_play = doc.querySelector(".two-play")
let btn_prev = doc.querySelector('.back-player')
let next = doc.querySelector('.foward-player')
let play_btn = doc.querySelector('.img-play-player')
let progress = doc.querySelector('.player-nav-child')
let progressContain = doc.querySelector('.player-nav')
let player_img = doc.querySelector('.player-img')
let player_name = doc.querySelector('.player-music-name')
let author = doc.querySelector('.player-music-author')
let player = doc.querySelector('.player')
let random = doc.querySelector('.img-suttle')
let repeat = doc.querySelector('.repeat-player')
let player_like = doc.querySelector('.player-like')
let like_btn = doc.createElement('img')


const url = `http://localhost:2552/users`;
let num = 0

fetch(url)
  .then(response => response.json())
  .then(json => {
    for (let inner of json) {
      for (let iner of inner.liked) {
        if (inner.liked.length > 0) {
          not_found_like.classList.add('none')
          two_play.classList.remove('nonene')
          sec4.classList.remove('hide')
          let gt = doc.querySelector('.bottom-mus')
          let box = doc.createElement('div')
          let src = doc.createElement('img')
          let box_left = doc.createElement('div')
          let box_txt = doc.createElement('div')
          let p = doc.createElement('p')
          let p2 = doc.createElement('p')
          let p3 = doc.createElement('p')
          let p4 = doc.createElement('p')
          let p5 = doc.createElement('p')
          let album = doc.createElement('div')
          let date_add = doc.createElement('div')
          let por = doc.createElement('p')
          let like = doc.createElement('img')

          p.classList.add('name-mus')
          por.classList.add('cifr')
          date_add.classList.add('data-add')
          album.classList.add('album')
          p2.classList.add('name-isp')
          p3.classList.add('name-isp2')
          p4.classList.add('name-isp3')
          p5.classList.add('name-isp4')
          box_txt.classList.add('ispol')
          box_left.classList.add('box-left')
          box.classList.add('blockke')
          box.classList.add('okk')
          like.classList.add('like-item')
          like.classList.add('like')
          src.classList.add('box_left-img')

          like.src = './img/Vectorheart.png'


          p.textContent = iner.name
          src.src = iner.src
          p2.textContent = iner.artists


          let day = new Date(iner.date)
          let my_day = new Date()
          let day_min = my_day.getDay() - day.getDay()
          p4.textContent = `${day_min} day ago`.replace(/-/gi, '')
          por.innerHTML = `${num = num + 1}`

          box.onclick = () => {
            let blocks = doc.querySelectorAll('.okk')

            blocks.forEach((block) => {
              block.classList.remove('blockkee')
              // track.pause()
            })
            box.classList.add('blockkee')
            player.classList.remove('none')
            audio.src = iner.music
            author.innerHTML = iner.artists


            player_img.src = iner.url
            imageCol.src = iner.url

            player_name.innerHTML = iner.name
            audio.play()
          }

          like.onclick = (event) => {
            event.stopPropagation();
            let src = iner.liked = true
            if (src == false) {
              like.src = './img/Vectorheart.png'
              iner.liked = true
              const userId = 1;
              const url = `http://localhost:2552/users/${userId}`;

              fetch(url)
                .then(response => response.json())
                .then(user => {
                  // Изменяем массив liked в объекте пользователя
                  user.liked.push(iner);
                  // Отправляем обновленный объект на сервер методом POST
                  fetch(url, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('User updated:', data);
                    })
                    .catch(error => {
                      console.error('Error updating user:', error);
                    });
                })
                .catch(error => {
                  console.error('Error getting user data:', error);
                });


            } else if (src == true) {
              like.src = './img/iconlike.png'
              iner.liked = false
              const userId = 1;
              const url = `http://localhost:2552/users/${userId}`;

              fetch(url)
                .then(response => response.json())
                .then(user => {
                  // Изменяем массив liked в объекте пользователя

                  // user.liked = user.liked.filter(track => track !== item.track);
                  for (let i of user.liked) {
                    user.liked = user.liked.slice(0, user.liked.indexOf(i)).concat(user.liked.slice(user.liked.indexOf(i) + 1));
                    break; // выходим из цикла
                  }
                  // Отправляем обновленный объект на сервер методом POST
                  fetch(url, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('User updated:', data);
                    })
                    .catch(error => {
                      console.error('Error updating user:', error);
                    });
                })
                .catch(error => {
                  console.error('Error getting user data:', error);

                });
            }
            console.log(iner);
          }


          box.append(box_left)
          box_left.append(por, src)
          box_left.appendChild(box_txt)
          box_txt.append(p, p2)
          box.append(album, date_add, like, p5)
          album.append(p3)
          date_add.append(p4)
          gt.appendChild(box)
        } else {
          not_found_like.classList.remove('none')
          two_play.classList.add('nonene')
        }
      }
    }
  })

let input_search = document.querySelector('.header-inp');

input_search.addEventListener('input', function () {
  let val = new RegExp(this.value, 'i');
  let ela = document.querySelectorAll(".href-div")
  if (val != "") {
    ela.forEach(function (item) {
      if (item.innerHTML.search(val) == -1) {
        item.classList.add('none')
      } else {
        item.classList.remove('none')
      }
    })
  } else {
    ela.forEach(function (item) {
      item.classList.remove('none')
    })
  }
})


input_search.addEventListener('input', function () {
  let val = new RegExp(this.value, 'i');
  let ela = document.querySelectorAll(".blockke")
  if (val != "") {
    ela.forEach(function (item) {
      if (item.innerHTML.search(val) == -1) {
        item.classList.add('none')
      } else {
        item.classList.remove('none')
      }
    })
  } else {
    ela.forEach(function (item) {
      item.classList.remove('none')
    })
  }
})

input_search.addEventListener('input', function () {
  let val = new RegExp(this.value, 'i');
  let ela = document.querySelectorAll(".okk")
  if (val != "") {
    ela.forEach(function (item) {
      if (item.innerHTML.search(val) == -1) {
        item.classList.add('none')
      } else {
        item.classList.remove('none')
      }
    })
  } else {
    ela.forEach(function (item) {
      item.classList.remove('none')
    })
  }
})

fetch('https://api.npoint.io/0324e919515857a90735/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

doc.querySelector('.btn-prev').onclick = () => {
  doc.querySelector('.play-music').classList.add('nonene')
  doc.querySelector('.top-father-block').classList.remove('nonene')
  doc.querySelector('.bottom-father-block').classList.remove('nonene')
  btn2.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn1.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec3.classList.add('none')
  sec4.classList.add('none')
  sec1.classList.remove('none')
  doc.querySelector('.header').style.background = `linear-gradient(180deg, #393939 65%, transparent 100%)`
}