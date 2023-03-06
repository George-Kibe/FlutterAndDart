void main(){
  //Lists
  var myList = [1,5,89,34,92];
  print(myList);
  //change an item
  myList[0] =56;
  print(myList);
  //create an empty list
  var emptyList = [];
  //Add items to a list
  emptyList.add(46);
  print(emptyList);
  //add multiple items
  emptyList.addAll([657,879,933,39,029,"fff"]);
  emptyList.insert(0,"To start");
  print(emptyList);
  //insert at specific position
  myList.insert(1,7);
  print(myList);
  myList.insertAll(1, [99,34,78,29]);
  //mixed list
  var mixedList = [45,90,45, true, 4,5,6,7,8,9,09,2,3,56,12,67,"George", [2,2,4.5]];
  print(mixedList);
  //remove
  mixedList.remove("George");
  mixedList.removeAt(2);
  mixedList.removeLast();
  mixedList.removeWhere((element) => false);
  mixedList.removeRange(4,5);
  print(mixedList);
}