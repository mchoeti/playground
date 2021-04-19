#include <iostream>

using namespace std;
void test() {
    cout << "Testing Testing" <<endl;
}

int returnsFive() {
return 5;
}

int multiply(int a, int b) {
 return a*b;
}

string createGreeting (string name) {
return "Greetings: " + name;
}

int main()
{
    cout << "Hello world!" << endl;
    test();
    test();
    cout << returnsFive();
        test();
    test();
    cout << multiply(5,3);
    test();
    test();
    //Mal UserInput verwenden
    string name;
    cout << "What is your name? " << endl ;
    cin >> name ;
    cout << createGreeting(name);
    test();
    test();
    // Alternative wäre
    string greetingString = createGreeting (name);
    cout << greetingString;

    return 0;

}
