package HW2JavaProPhone;

public class Phone {
    String number;
    String model;
    int weight;


    public Phone() { // Конструктор по умолчанию
    }

    public Phone(String number, String model, int weight) { // Конструктор
        this.number = number;
        this.model = model;
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "Phone: " + "number " + number + ", model '" + model + '\'' + ", weight " + weight + ' ';
    }

    void receiveCall(String name) {
        System.out.println("Звонит " + name);
    }

    String getNumber() {
        return number;
    }
}




