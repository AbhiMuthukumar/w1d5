module.exports = {
  myFunction: function(nativeFn){
    console.log(`Im executing the function from the module that imprted me!`)
    nativeFn();
  },
  sayHello: function(){
    console.log("Hello World !! Im the sayHello function from exportStuff.")
  }
}