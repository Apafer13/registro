document.addEventListener('DOMContentLoaded', ()=>{
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let email = document.getElementById('email')
let pass1 = document.getElementById('password1')
let pass2 = document.getElementById('password2')
let checkbox = document.getElementById('terminos')
let form = document.getElementById('form')


nombre.addEventListener('input',()=>{
    if(!nombre.checkValidity()){
        nombre.classList.add('is-invalid')
        nombre.classList.remove('is-valid')
    } else{
        nombre.classList.add('is-valid')
        nombre.classList.remove('is-invalid')
    }
})
apellido.addEventListener("input",()=>{
    if(!apellido.checkValidity()){
        apellido.classList.add('is-invalid')
        apellido.classList.remove('is-valid')
    } else{
        apellido.classList.add('is-valid')
        apellido.classList.remove('is-invalid')
    }
})
email.addEventListener("input",()=>{
    if(!email.checkValidity()){
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    } else{
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }
})
pass1.addEventListener("input",()=>{
    if(!pass1.checkValidity()){
        pass1.classList.add('is-invalid')
        pass1.classList.remove('is-valid')
    } else{
        pass1.classList.add('is-valid')
        pass1.classList.remove('is-invalid')
    }
})
pass2.addEventListener("input",()=>{
    if(!pass2.checkValidity()){
        pass2.classList.add('is-invalid')
        pass2.classList.remove('is-valid')
    } else{
        pass2.classList.add('is-valid')
        pass2.classList.remove('is-invalid')
    }
})
form.addEventListener('submit', (event)=>{
    if(!form.checkValidity()){
        event.preventDefault()
    }
    if (password1.value !== password2.value) {
        event.preventDefault();
        pass2.setCustomValidity(alert('Las contraseñas no son iguales'));
      }
    if (!checkbox.checked) {
        event.preventDefault();
        if(!checkbox.checkValidity()){
            checkbox.classList.add('is-invalid')
            checkbox.classList.remove('is-valid')
        }else{
            checkbox.classList.remove('is-invalid')
            checkbox.classList.add('is-valid')
            
        }
      
    }
if(!pass1.checkValidity()){
        pass1.classList.add('is-invalid')
        pass1.classList.remove('is-valid')
    } else{
        pass1.classList.add('is-valid')
        pass1.classList.remove('is-invalid')
    }
    if(!pass2.checkValidity()){
        pass2.classList.add('is-invalid')
        pass2.classList.remove('is-valid')
    } else{
        pass2.classList.add('is-valid')
        pass2.classList.remove('is-invalid')
    }
    validaciones()

})    
})

function validaciones(){
    
    if(!nombre.checkValidity()){
        nombre.classList.add('is-invalid')
        nombre.classList.remove('is-valid')
    } else{
        nombre.classList.add('is-valid')
        nombre.classList.remove('is-invalid')
    }
    if(!apellido.checkValidity()){
        apellido.classList.add('is-invalid')
        apellido.classList.remove('is-valid')
    } else{
        apellido.classList.add('is-valid')
        apellido.classList.remove('is-invalid')
    }
    if(!email.checkValidity()){
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    } else{
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }



}