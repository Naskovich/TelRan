package HomeWork;

import java.util.Random;

public class SecondsWorkday {
    public static void main(String[] args) {
        Random number = new Random();
        int numberFinal = number.nextInt(0, 28801);
        if (numberFinal == 1)
            System.out.println("Before the end of the workday 1 seconds remaining \n");
        else
            System.out.println("Before the end of the workday " + numberFinal + " seconds remaining \n");
        int minutesInAnHour = 60;
        int secondsInAnMinute = 60;
        int numberFinalInHours = numberFinal / minutesInAnHour / secondsInAnMinute;

        if (numberFinalInHours > 1)
            System.out.println("Before the end of the workday " + numberFinalInHours + " hours remaining");
        else if (numberFinalInHours > 0.5)
            System.out.println("Before the end of the workday more than 1 hour remaining");
        else
            System.out.println("Before the end of the workday less than 1 hour remaining");
    }
}