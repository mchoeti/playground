#include <iostream>

using namespace std;

// mal a schnelle Funktion hinzufügen
void increment (int* ptr) {
(*ptr)++ ;
}

int main()
{
    cout << "Hello world!" << endl;

    int myAge = 37;
    cout << "My age is: " << myAge << endl;
    cout << "The adress od my Age is: " << &myAge << endl;

    // now the pointer displays the address
    int* ptr = &myAge;
    cout << "Pinter points to " << ptr << endl;
    // und damit fragt man den Wert des Pointers ab
    cout << "Pinter points to " << (*ptr) << endl;

    // dann adden wir mal ein jahr
    (*ptr)++ ;
    cout << "--------------------" << endl;
    cout << "My new age is: " << myAge << endl;

    // Verwenden der neuen Funktion
    increment(ptr);
    increment(ptr);
    cout << "--------------------" << endl;
    cout << "My new age is: " << myAge << endl;


    return 0;
}
