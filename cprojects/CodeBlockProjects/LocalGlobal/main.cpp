#include <iostream>

using namespace std;
// convinient but dangerous
int globalNumber = 1902;

void printHello() {
    // local variable
    string helloString = "hello";
    cout << helloString << "globalNumber:  " << globalNumber<< endl;
}

void test() {
int a = 10;
cout << "test " << a;
}


int main()
{
    printHello();
    test();
    // damit auch in der Main verfügbar
    // cout<<globalNumber
    return 0;
}
