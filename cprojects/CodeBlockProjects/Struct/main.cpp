#include <iostream>

using namespace std;

struct  Person {
    string name;
    int age;
    string gender;
};

// a little bid of Nesting
struct Marriage {
    Person personA ;
    Person personB ;
    int ageOfMarrige;
    int numOfPeopleAtWedding;
};
// Function for Print information
void printPersonInfo (Person p) {
    cout << "The name is: " << p.name << endl ;
    cout << "The age is: " << p.age << endl ;
    cout << "The gender is: " << p.gender<< endl ;
}

void printMarriageInfo (Marriage m) {
    cout << m.personA.name << " married " << m.personB.name  << endl ;
    cout << " They are married for " << m.ageOfMarrige  << " years" << endl ;
    cout << " ........ and " << m.numOfPeopleAtWedding << "  people came to their wedding" << endl ;
}

int main()
{
    cout << "Hello world!" << endl;
    /* Person christian;
    christian.name = "Christian";
    christian.age = 33;
    christian.gender =  "male";
*/
    // Besser
    Person christian = { "Chris", 33, "MALE"};
    Person doris = {"Doris" ,31 , "FEMALE"};
    /* doris.name = "Doris";
    doris.age = 31;
    doris.gender =  "female";
    */

    // neue Person People und da gibts dann 2
    Person people [] = {christian, doris};
    /*
    printPersonInfo(people[1]);
    printPersonInfo(people[0]);
    */
    printPersonInfo(christian);
    printPersonInfo(doris);

    Marriage marriage = { christian , doris , 20 , 121};
    printMarriageInfo(marriage);


    return 0;
}
