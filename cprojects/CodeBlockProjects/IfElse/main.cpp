#include <iostream>

using namespace std;

int main()
{

    int number =  0 ;
    cout << "PLease input a number" << endl;
    cin >> number ;

    if(number< 10) {
        cout << " Your number is less tan 10! "<< endl;
    }
    else if ( number >=  10 && number < 15) {
        cout << " Your number is bigger than 10 bit smaller than 15 "<< endl;
    }
    else {
        cout << " Your number is bigger oder equal 15"<< endl;
    }

   // cout << "Hello world!" << endl;
    return 0;
}
