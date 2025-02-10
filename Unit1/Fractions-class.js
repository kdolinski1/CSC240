// You are provided with a skeleton of the class 'Fraction', which accepts two arguments (numerator, denominator).

// EXAMPLE:

// Fraction fraction1 = new Fraction(4, 5);
// Your task is to make this class string representable, and addable while keeping the result in the minimum representation possible.

// EXAMPLE:

// System.out.println(fraction1.add(new Fraction(1, 8)));
// // Outputs: 37/40
// NB: DON'T use the built_in class 'fractions.Fraction'

// Enjoy!

public class Fraction implements Comparable<Fraction>
{
    private final long top;
    private final long bottom;

    public Fraction(long numerator, long denominator) {
        top = numerator;
        bottom = denominator;
    }
    @Override
    public int hashCode() { return 17 * Long.hashCode(top) + Long.hashCode(bottom); }    
    @Override
    public boolean equals(Object o) { return compareTo((Fraction)o) == 0; }    
    @Override
    public int compareTo(Fraction f2){ return Long.compare(top * f2.bottom, f2.top * bottom); }
    
    @Override
    public String toString() {
        return top + "/" + bottom;
    }
    private static long common(long a, long b) {
        while (b != 0) {
            long num = b;
            b = a % b;
            a = num;
        }
        return Math.abs(a);
    }
    public Fraction add(Fraction f2) {
        long newNumerator = this.top * f2.bottom + f2.top * this.bottom;
        long newDenominator = this.bottom * f2.bottom;
        long common = common(newNumerator, newDenominator);
        return new Fraction(newNumerator / common, newDenominator / common);
    }