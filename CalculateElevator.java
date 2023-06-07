package HomeWork;
public class CalculateElevator {
    public static void main(String[] args) {
        // 1. 1+(50-1)=50
        // 2. 50+(50-1)=99
        // 3. 99+(50-1)=148
        // 4. 148+(50-1)=197(нужен ещё один подъём)
        // 5. 197+(50-1)=246 (УРА!!!)

        double N = 50;
        double M = 1;
        System.out.println(calculate(N, M));

    }
    public static double calculate(double N, double M) {
        return (M + 5 * (N - M)) / (N - M);
    }
}
