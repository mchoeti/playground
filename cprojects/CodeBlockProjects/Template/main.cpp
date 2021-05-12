#include <iostream>

using namespace std;

// Der Konvertiert Double in Int oder wie auch immer.

template <class T>
// T ist halt ein Std Werd

class MathTools {
    public:
     T multiply ( T a , T b ) {
        return a * b;
     }
     T divide ( T a , T b ) {
        return a / b;
     }
     T add ( T a , T b ) {
        return a + b;
     }
     T sub ( T a , T b ) {
        return a - b;
     }


};

// simplere Namen verwenden anstelle von typedef ...  vewenden wir dann halt IntTools
typedef MathTools<int> IntTools;
typedef MathTools<double> DoubleTools;

int main()
{
    cout << "Hello world!" << endl;
    // gleich mal den Typ anwenden
    IntTools IntMathTools;
    DoubleTools DoubleMathTools;

    cout << IntMathTools.add(3,2)<< endl;
    cout << DoubleMathTools.add(3.3,2.2)<< endl;
    cout << "----------------" << endl;
    cout << DoubleMathTools.sub(3.3,2.2)<< endl;

    return 0;
}
