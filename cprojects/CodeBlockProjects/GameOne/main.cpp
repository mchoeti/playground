#include <iostream>

using namespace std;

int main()
{
    cout << "Guess the number" << endl;

    /*
    1) Player 1 selects random number
    2) Player 2 guess the number
    3) Game tell Player2 if to high or to low
    4) And game counts number of attempts
    */

    int numberOfAttempts = 0 ;
    int theNumberToGuess = 0;
    int currentGuess = 0;

    cout << "Welcome to the game " << endl;
    cout << "Player 1 select a number" << endl;
    cin >>theNumberToGuess ;

    cout << "Player 2 guess the number" << endl;
    cin >> currentGuess ;

    while (true) {
        cout << "Player 2 guess the number" << endl;
        cin >> currentGuess ;

        if ( currentGuess > theNumberToGuess) {
            cout << "Your number is tooooo high" << endl;
            numberOfAttempts++;
            break;
        } else if ( currentGuess < theNumberToGuess) {
            cout << "Your number is to low" << endl;
            numberOfAttempts++;
        } else {
            cout << "Perfect you made it" << endl;
            cout << "You needed"<< numberOfAttempts << endl;
            break;
    };
};
    return 0;
}
