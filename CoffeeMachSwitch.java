package HomeWork;

import java.util.Scanner;

public class CoffeeMachSwitch {

    public static void main(String[] args) {
        System.out.println("Please choose a drink: ");
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        switch (input) {
            case 1:
                System.out.println("Espresso");
                break;
            case 2:
                System.out.println("Americano");
                break;
            case 3:
                System.out.println("Cappuccino");
                break;
            case 4:
                System.out.println("Tea");
                break;

            default:
                System.out.println("Please select the correct drink number");
        }
    }
}

