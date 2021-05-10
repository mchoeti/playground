#include <iostream>

using namespace std;

class Person {

    public:
        string name;
        int age;
        string gender;

        void printInfo () {
            cout << "The name is: " << name << endl ;
            cout << "The age is: " << age << endl ;
            cout << "The gender is: " << gender<< endl ;
        }
};

int main()
{
    cout << "Hello world!" << endl;

    Person christian = { "Chris", 33, "MALE"};
    Person doris = { "Dorella", 22, "FeMale"};

    //cout << christian.name;
    christian.printInfo();
    cout << "------------------------" << endl;
     cout << "------------------------" << endl;
    doris.printInfo();
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
