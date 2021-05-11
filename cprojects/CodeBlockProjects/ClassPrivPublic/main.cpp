#include <iostream>

using namespace std;

class Person {

// new private
    private:
    // am besten sollte man ALLE Variablen privat halten
        int height;
        //string name;
        int age;
        string gender;

    protected:
        string name;

    public:
        // using constructors
        Person ( string n, int a , string g ) {
            name = n ;
            age = a;
            gender = g;

            // aber man kann eben die heigt so definieren
            height = 1000;
        }

        void printInfo () {
            cout << "The name is: " << name << endl ;
            cout << "The age is: " << age << endl ;
            cout << "The gender is: " << gender<< endl ;
            cout << "The height is: " << height<< endl ;
        }

        // Eigentlich sollte man für alle piv variablen eine eigene Funktion haben.
        void setHeight(int h) {
            if (h > 0 ) {
                height = h ;
            }
            else {
                height = 0;
            }
        }
};

// every Employee is a person :-)
class Employee : public Person {

    public:
        int salary;
        Employee (string n , int a , string g, int s): Person(n,a,g){
            salary = s;
        }
        void printSalary() {
        cout << "Das Gehalt von " << name << " ist : " << salary;
        }
};

int main()
{
    cout << "Hello world!" << endl;

    Person christian  = Person ( "Chris", 33, "MALE" );
    christian.setHeight(182);

    Person doris = Person ( "Dorella", 22, "FeMale" );
    doris.setHeight(170);

    //cout << christian.name;
    christian.printInfo();
    cout << "------------------------" << endl;
    cout << "------------------------" << endl;
    doris.printInfo();
    cout << "------------------------" << endl;
    cout << "------------------------" << endl;
    cout << "Now the employee " << endl;
    Employee alexis  = Employee("Alexander" , 40 , "Male", 2100);
    alexis.setHeight(199);
    alexis.printInfo();
    alexis.printSalary();

    return 0;
}
