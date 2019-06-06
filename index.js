function helloWorld(){
    // TODO melhorar esse codigo
    console.log("Hello World");
}
//FIXME verificar isso aqui
const saudacao = () => {
    var date = new Date()
    return date.getHours() <= 12? "Bom dia": date.getHours() <= 18? "Boa Tarde": "Boa Noite";
    
}
//Executando as funções
helloWorld();
//TAG 
console.log('A saudação do momento é ' + saudacao());