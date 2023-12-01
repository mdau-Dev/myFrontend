const wrapper= document.querySelector('.wrapper-form');
const loginForm= document.querySelector('.register-link');
const registerForm= document.querySelector('.login-link');
const btnLogin=document.querySelector('.btn-login');

loginForm.addEventListener('click',()=>{
    wrapper.classList.add('active');
}) 
registerForm.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-login');
})

function registerNew(){

   let form=document.querySelector('.formRegis');
   form.addEventListener("submit",e =>{
    e.preventDefault();

    let formData=new FormData(form);
    let data=Object.fromEntries(formData);
    let jsonData=JSON.stringify(data);
    

    console.log(jsonData);
    fetch('http://localhost:8084/student/v1/itsmdaucode/details/registration.php',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: jsonData
      })
      .then(res =>
          console.log(res)
      )
      .catch(error => console.log(error));
   }
   );
   wrapper.classList.remove('active-login');
}
   
  function collectData(){
    

    fetch("http://localhost:8084/student/v1/itsmdaucode/details/allmembers.php",{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    .then(res =>res.json)
    .then(data =>console.log(data))
    .catch(err =>console.log(err));
  }


  function submitForm(){
    let name=document.querySelector('fname').value;
    let email=document.getElementById('myemail').value;
    let password=document.getElementById('mypassword').value;
    console.log(name);

    fetch("http://localhost:8084/student/v1/itsmdaucode/details/registration",{
        method:'post',
        body:JSON.stringify({
            name,
            email,
            password
        }),
        headers:{
            'Content-Type' :'application/json'
        }
    })
    .then(res => res.json())
    .then(ponse =>console.log(ponse))
    .catch(error => console.log(error));
  }