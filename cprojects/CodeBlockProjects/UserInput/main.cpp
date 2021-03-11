#include <iostream>
#include <string>
using namespace std;

int main()
{

    /* Game plan
    1.) Get user NAme
    2-) Say Hello World to Username
    */

    //string name = "SATOSCHI ";
    string name = "";
    cout << "What is your name? " << endl ;
    // damit wird aber nur ein WOrt miotgenommen
    // cin >> name ;
    // besser
    getline(cin,name);
    cout << "Hello world! " << name << endl;

    int age  = 0 ;
    cout << "How old are you? " << endl ;
    cin >> age;
    cout << "Oh you are " << age << " years old" << endl ;

    return 0;
}
