#include <iostream>

using namespace std;

int main()
{
    cout << "Hello world!" << endl;
    for(int i=0; i<7; ++i) {
        cout << "Current Number: " << i << endl;
    };

    //cout << "Really wild one" << endl;
    //while (true) {
    //    cout << "Really wild one" << endl;
    //};

    int counter = 497;
    while (counter < 1902) {
        cout << "Really wild one " << counter << endl;
        if ( counter > 500) {
            break;
        }
        counter++;
    };


    int numberOfCars = 3;
    int carMiles [] = {5, 10, 15};
    int totalMiles = 0;

    for ( int counter = 0 ; counter < numberOfCars ; counter++ ) {

        cout << " Adding "  << carMiles[counter] << " to totalMiles " << endl;
        totalMiles += carMiles[counter];
        cout << "Total Miles at the moment:  "  << totalMiles << endl;
    };

    cout << "Total Miles of all cars is " << totalMiles << endl;

    return 0;
}
