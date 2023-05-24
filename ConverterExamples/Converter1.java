package ConverterExamples;

public class Converter1 {
    public static void main(String[] args) {

        double temperature = 20.5;


        System.out.println("t = " +
                new CelsiusConverter().getConvertedValue(temperature));

        System.out.println("t = " +
                new KelvinConverter().getConvertedValue(temperature));

        System.out.println("t = " +
                new FahrenheitConverter().getConvertedValue(temperature));

    }

}