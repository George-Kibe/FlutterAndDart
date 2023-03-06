void main(List<String> args) {
  //functions
  myFunc(String name1, {name2:"friends"}){
    return "Hello $name1 and $name2";
  }
  var thing = myFunc("George", name2:'Alex');
  print(thing);
}