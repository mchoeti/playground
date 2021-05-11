#include <iostream>

using namespace std;

class Person {

    public:
        string name;
        int age;
        string gender;

        // using constructors
        Person ( string n, int a , string g ) {
            name = n ;
            age = a;
            gender = g;
        }

        // oder eben was anderes
        Person ( ) {
            name = "Default name please give more information" ;
            age = 99;
            gender = "Default , please give more information";
        }

        void printInfo () {
            cout << "The name is: " << name << endl ;
            cout << "The age is: " << age << endl ;
            cout << "The gender is: " << gender<< endl ;
        }
};

int main()
{
    cout << "Hello world!" << endl;

    // crazy
    //Person christian = { "Chris", 33, "MALE"};
    //Person doris = { "Dorella", 22, "FeMale"};
    // so machen wir es richtig :-)
    Person christian  = Person ( "Chris", 33, "MALE" );
    Person doris = Person ( "Dorella", 22, "FeMale" );
    Person someone = Person ();


    //cout << christian.name;
    christian.printInfo();
    cout << "------------------------" << endl;
    cout << "------------------------" << endl;
    doris.printInfo();
    cout << "------------------------" << endl;
    cout << "------------------------" << endl;
    someone.printInfo();
    return 0;
}

/*
struct  Person {
    string name;
    int age;
    string gender;
};

void printPersonInfo (Person p) {
    cout << "The name is: " << p.name << endl ;
    cout << "The age is: " << p.age << endl ;
    cout << "The gender is: " << p.gender<< endl ;
}

*/
