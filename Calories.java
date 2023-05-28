package David;

public class Calories {
    public static void main(String[] args) {
        final float PI = 3.14F;
        int caloriesRate = 40;
        System.out.println(calculateCaloriesDifference(28, 24, PI, caloriesRate));
    }

    public static double calculateCaloriesDifference(int a, int b, float pi, int calories) {
        return pi * (a * a - b * b) * calories / 4;
    }
}
