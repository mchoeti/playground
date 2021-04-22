#include <iostream>

using namespace std;

int main()
{

    int numberOfCars = 10;
    int carMiles [] = {3,17,24};
    string carHersteller [] = { "BWM", "Audi", "Volvo"};
    cout << "Number of cars: " << numberOfCars << endl;

    // Einfach mal ein paar Array Elemente ausgeben
    cout << carMiles[0] << endl;
    cout << carMiles[1] << endl;
    cout << carMiles[2] << endl;

    cout << carHersteller[0] << endl;
    cout << carHersteller[1] << endl;
    cout << carHersteller[2] << endl;

    return 0;
}
