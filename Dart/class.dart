void main(List<String> args) {
  //classes
  Person p1 = Person("George", "Male", 25);
  p1.showData();

}

class Person{
  String? name, sex;
  int? age;

  //constructors
  Person(String name, sex, int age){
    this.name = name;
    this.sex = sex;
    this.age = age;
  }
  //methods
    void showData(){
      print("Name = $name");
      print("Sex  = $sex");
      print("Age = $age");
    }
}