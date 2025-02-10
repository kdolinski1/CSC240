// Create a class Hex which takes a number as an argument.

// Adding a hex object to a number (by using valueOf) generates a number, but calling toString or toJSON will show its hexadecimal value starting with "0x". To make hex objects comparable you have to provide a method equals.

// Example:

// Hex FF = new Hex(255);
// FF.toString() == "0xFF"
// FF.valueOf() + 1 == 256
// FF.equals(new Hex(255)) == true
// Also create two methods, plus and minus which will add or subtract a number or Hex object and return a new Hex object.

// Hex a = new Hex(10);
// Hex b = new Hex(5);
// a.plus(b).toJSON() == "0xF";
// a.plus(2).toJSON() == "0xC";
// Also, create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers:

// Hex.parse("0xFF") == 255
// Hex.parse("FF") == 255
// Note: If you define both valueOf and toString, "Hex value:" + new Hex(255) may not behave as expected!

public class Hex {
    private final int value;

    public Hex(int value) {
        this.value = value;
    }

    public int valueOf() {
        return value;
    }

    public String toJSON() {
        return toString();
    }

    @Override
    public String toString() {
        return "0x" + Integer.toHexString(value).toUpperCase();
    }

    public Hex plus(Hex other) {
        return new Hex(this.value + other.value);
    }

    public Hex minus(Hex other) {
        return new Hex(this.value - other.value);
    }

    public Hex plus(int number) {
        return new Hex(this.value + number);
    }

    public Hex minus(int number) {
        return new Hex(this.value - number);
    }

    public static int parse(String string) {
        return Integer.parseInt(string.replaceFirst("^0x", ""), 16);
    }

    @Override
    public boolean equals(Object other) {
        return other instanceof Hex && this.value == ((Hex) other).value;
    }
}