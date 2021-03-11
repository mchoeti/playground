#include <iostream>

using namespace std;

int main()
{

// Integers
    int test = 5;
    int b = 10;
    int c = test * b ;

// Boolean
    bool d = true; // = 1
    bool e = false; // = 0

    bool k =  d&&e;
    bool f =  d || e;

// Aufpassen int nimmt nur ganze Nummern
    int simple = 1.9;
    float zahlen = 0.9;

// Auch beim Casten
    double h = 0.3;
    double j = 0.8;
    int result = h+j;  // naja das wird nur 1 sein, wegen dem INT


    // endl means end line
    cout << "Hello world! " << c  << " oder so " << k << endl;
    cout << "Oder nur Bool und diesmal ist der Wert wahr: " << f << endl;
    cout << "Nur Int Wert: " << simple << endl;
    cout << "Floating Wert: " << zahlen << endl;
    cout << "Aufpassen Casting: " << result << endl;
    return 0;
}
