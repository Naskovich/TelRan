package HW2JavaProPhone;

public class MainPhone {
    public static void main(String[] args) {

        Phone phone1 = new Phone();// Объект №1
        Phone phone2 = new Phone(); // Объект №2
        Phone phone3 = new Phone();// Объект №3

        phone1.number = "500664309";
        phone1.model = "Xiaomi";
        phone1.weight = 196;

        phone2.number = "500665308";
        phone2.model = "Nokia";
        phone2.weight = 178;

        phone3.number = "500664303";
        phone3.model = "Samsung";
        phone3.weight = 195;


        System.out.println(phone1.getNumber());
        System.out.println(phone1.model);
        System.out.println(phone1.weight);

        System.out.println(phone2.getNumber());
        System.out.println(phone2.model);
        System.out.println(phone2.weight);


        System.out.println(phone3.getNumber());
        System.out.println(phone3.model);
        System.out.println(phone3.weight);


        phone1.receiveCall("Mama");
        phone2.receiveCall("Sister");
        phone3.receiveCall("Sun");

    }
}

