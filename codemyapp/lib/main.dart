import 'package:flutter/material.dart';

void main() {
  runApp(const MyWidget());
   
}

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Center(
            child: Text("Test Codemy"),
          ),
          backgroundColor: Color.fromARGB(199, 11, 9, 131),
        ),
      body: Container(
        color: Colors.blue[500],
        width: 200.0,
        height: 200,
        alignment: Alignment.center,
        padding: const EdgeInsets.all(20),
        margin: const EdgeInsets.all(20),
        child: const Text("Just Testing some Random text"),
      ),
      backgroundColor: Colors.deepPurple[100],
      ),
      );
    }
}