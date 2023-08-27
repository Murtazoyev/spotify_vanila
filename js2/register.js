let doc = document

function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, 400);

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, 200);
}

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, 100);

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);

}

function ocultar_login_sign_up() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 500);

}






let formReg = doc.querySelector('.cont_form_sign_up')
let regpass = doc.querySelector('.reg-pass')
let acpReg = doc.querySelector('.reg-pass-return')
let regName = doc.querySelector('.reg-name')
let reg_email = doc.querySelector('.reg-email')
let reg_img = doc.querySelector('#reg-img')

function registration(event) {
  event.preventDefault()

  if (regpass.value === acpReg.value) {
    event.preventDefault()

    fetch('http://localhost:2442/users', {
      method: 'POST',
      body: JSON.stringify(
        {
          name: regName.value,
          password: regpass.value,
          email: reg_email.value,
          img: reg_img.getAttribute('src'),
          liked: [],
          friends: [],
          recently_listened_to: []
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    window.open('./index.html')
    window.close()
  } else alert('Пароли не совпадают попробуйте еще раз')

}
formReg.addEventListener('submit', registration)


let uploadButton = doc.getElementById('reg-img')
let chosenImage = doc.getElementById('reg-img')
let fileName = doc.getElementById('file-name')
uploadButton.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    chosenImage.setAttribute('src', reader.result)
  }
}


let log_email = doc.querySelector('.log_email')
let log_pass = doc.querySelector('.log_pass')
let log_form = doc.querySelector('.cont_form_login')

function login() {
  event.preventDefault()
  fetch('http://localhost:2442/users')
    .then(data => data.json())
    .then(json => {
      for (let item of json) {
        if (item.email == log_email.value && item.password == log_pass.value) {
          fetch('http://localhost:2552/users', {
            method: 'POST',
            body: JSON.stringify(
              {
                name: item.name,
                password: item.password,
                email: item.email,
                img: item.img,
                liked: item.liked,
                friends: item.friends,
                recently_listened_to: item.recently_listened_to,
              }
            ),
            headers: {
              'Content-Type': 'application/json'
            },
          })
          window.open('./index.html')
          window.close()
        }
      }
    })
}

log_form.addEventListener('submit', login)