#include <iostream>

using namespace std;

typedef double height;

namespace awesomeNamespace {

    void greeting () {
        std::cout << "Greetings from Awesome Namespace!" << endl;
    }

}

int main()
{
    height chrisHeight = 185.5;

    cout << "Whats uppppppppppp!" << endl;
    cout << chrisHeight << endl;
    awesomeNamespace::greeting();
    return 0;
}
