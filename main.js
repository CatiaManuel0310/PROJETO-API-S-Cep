const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo]
            console.log(campo)
        }
        
    }
}

cep.addEventListener("blur", (e) =>{
    let search = cep.value.replace("-", "")
   const options = {
    method: 'GET',
    mode:  'cors',
    Cache:  'default'
   }

fetch(`https://viacep.com.br/ws/${search}/json/`, options)
 .then(response =>{response.json()
    .then( data => showData(data))
    })

 .catch(e => console.log(   'Deu Erro: ' + e, message))
})

/*

function checkImput(){
  const cepValue = cep.value;
  if (cepValue == ''){
    setErrorFor(cep, "O Cep é obrigatório.");
  }
}

const formGroups = form.querySelectorAll('form-group');
const formIsValid =[...formGroups].every((formGroup)=> {
  return(formGroup.className = "form-group success");
})
 if(formIsValid){

 }


function setErrorFor(input, message){
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  //formGroup.className = 'form-group error'
}




let listas = ["cep", "logradouro", "bairro", "localidade", "ddd", "uf", "ibge"];

function addnovaNewCep(cep, logradouro, bairro){
    this.cep = cep;
    this.logradouro = logradouro;
   this.bairro = bairro;
   users.push(this);
   return ("cep" + "logradouro" + "bairro")
}
*/



function addNewCep(cep, logradouro, bairro, localidade, ddd, uf, ibge){
  var input = document.querySelector("#cep");
let input1= document.querySelector("#logradouro");
let input2= document.querySelector("#bairro");
  var input3= document.querySelector( '#localidade');
 let input4= document.querySelector( '#ddd');
 let input5 = document.querySelector( '#uf');
  let input6= document.querySelector( '#ibge');
  

  let listCep = document.querySelector( '#listCep');

  let newTask = input.value;
  console.log(newTask);

  let listItem = document.createElement( 'li');
  listItem.textContent = newTask;

  listCep.appendChild(listItem);

  input.value="";

}

f







