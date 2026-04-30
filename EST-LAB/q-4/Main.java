import com.example.entity.Student;

public class Main {
    public static void main(String[] args) {

        Student s = new Student();
        s.setId(1);
        s.setName("Bhavya");
        s.setEmail("bhavya@gmail.com");
        s.setCourse("CSE");

        System.out.println("Student Created");
        System.out.println(s.getName());
    }
}
