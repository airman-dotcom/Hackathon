const email = document.getElementById('username')
const psw = document.getElementById('password')

const button = document.getElementById('btn')
button.addEventListener('click',async (e) =>{
    e.preventDefault()
function returnTemplate(method, body ){
  return   {
        method: method, // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }


}

   const obj = {



    email: email.value,
    psw: psw.value
   }
  const response =  await fetch('/sign-up', returnTemplate('POST', obj))
})