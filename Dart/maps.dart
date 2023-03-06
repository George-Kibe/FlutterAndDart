void main(){
  //maps are key value pairs
  var toppings = {"John":"pepperoni", "Mary":"Cheese", "Anne":"Pineapple"};
  print(toppings);
  print(toppings["Anne"]);
  print(toppings.keys);
  print(toppings.values);
  print(toppings.length);
  print(toppings.isEmpty);
  //add something
  toppings["Timothy"] = "Sausage";
  print(toppings);
  //add many
  toppings.addAll({"George":"Berbacue", "Alex":"Fish"});
  print(toppings);
  //remove
  toppings.remove("Alex");
  //remove everything
  toppings.clear();
  print(toppings);
}