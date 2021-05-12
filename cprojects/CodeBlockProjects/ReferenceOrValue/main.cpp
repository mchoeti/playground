#include <iostream>

using namespace std;

void increase (int&a) {
    a++;
    cout << "number after increment in function is now: " << a << endl;
}

int main()
{
    // aufpassen es wird nur eine Kopie erstellt wenn er zählen soll
    // muss man dan das & Zeichen hinzufügen
    // wir geben also eine Referenz auf den Value
    int testNumber = 7;
    increase(testNumber);

    cout << "Number after the function is now: " << testNumber << endl;


    return 0;
}
