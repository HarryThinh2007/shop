const nameInput = document.getElementById("sign-up-name")
const email = document.getElementById("sign-up-email")
const password = document.getElementById("sign-up-pass")
const signupInfo  = document.getElementById("button-sign-up")


const nameSignIn = document.getElementById("sign-in-name")
const emailSignIn = document.getElementById("sign-in-email")
const passwordSignIn = document.getElementById("sign-in-pass")
const signinInfo = document.getElementById("button-sign-in")

// SIGN UP
signupInfo.addEventListener("click", function() {
    const nameValue = nameInput.value
    const passValue = password.value
    const mailValue = email.value
    let vietThuong = /[a-z]/g
    let vietHoa = /[A-Z]/g
    let chuSo = /[0-9]/g
    if (nameInput.value.trim().length == 0 || email.value.trim().length == 0 || password.value.trim().length == 0){
        alert("Không được để trống!")
    }
    else if(password.value.trim().length < 8){
        alert("Mật khẩu phải có ít nhất 8 kí tự!")
    }
    else if(!password.value.trim().match(vietThuong)){
        alert("Mật khẩu phải có ít nhất 1 kí tự viết thường!")
    }
    else if(!password.value.trim().match(vietHoa)){
        alert("Mật khẩu phải có ít nhất 1 kí tự viết in hoa!")
    }
    else if(!password.value.trim().match(chuSo)){
        alert("Mật khẩu phải có ít nhất 1 kí tự chữ số!")
    }
    else{
        localStorage.setItem("data",JSON.stringify({
            name: nameValue,
            email: mailValue,
            password: passValue,
        }))
    }
})

// SIGN IN
signinInfo.addEventListener("click",function() {
    const passValueSI = passwordSignIn.value
    const mailValueSI = emailSignIn.value
    const user = JSON.parse(localStorage.getItem("data"))
    if (passValueSI.trim().length == 0 || mailValueSI.trim().length == 0){
        alert("Không được để trống!")
        passwordSignIn.value = ""
    }
    else if (mailValueSI != user.email){
        alert("Email bạn nhập không kết nối với tài khoản nào.")
        passwordSignIn.value = ""
    }
    else if (passValueSI != user.password){
        alert("Mật khẩu bạn đã nhập không chính xác.")
        passwordSignIn.value = ""
    }
    else {
        alert("SUCCESS")
        passwordSignIn.value = ""
    }
    passwordSignIn.value = ""

})