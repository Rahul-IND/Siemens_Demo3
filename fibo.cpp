#include <iostream>
using namespace std;
int fibo(int n){
    if(n == 1 || n == 2){
        return 1;
    }
    else return fibo(n - 1) + fibo (n - 2);
}
int main(){
    int n;
    cout << "Enter number of terms you want for the fibonacci series: ";
    cin >> n;
    for(int i = 1; i <= n; i++){
        cout << fibo(i) << " ";
    }
    cout << endl;
    return 0;
}