import 'dart:io';
void main(List<String> args) {
  //user input type conversion
  print("Enter a Number");
  //Get User input
  var num1 = stdin.readLineSync();
  var num2 = int.parse(num1 ?? "o") +10;
  print("$num1 + 10 = $num2");
}