from ..week2 import hamming,min_skew
import unittest



class week2_test(unittest.TestCase):

    def test_hamming(self):
        self.assertEquals(hamming("AAA", "AAA"),0)
        self.assertEquals(hamming("ATA","TAT"),3)
        self.assertEquals(hamming("GCG","GGG"),1)

    def test_min_skew():
        s1 = "ACCG"
        s2 = "ACCC"
        s3 = "CCGGGT"
        s4 = "CCGGCCGG"
        s5 = "TAAAGACTGCCGAGAGGCCAACACGAGTGCTAGAACGAGGGGCGTAAACGCGGGTCCGAT"
        s6 = "GATACACTTCCCGAGTAGGTACTG"
        s7 = "CATTCCAGTACTTCGATGATGGCGTGAAGA"
        print(min_skew(s1))
        print(min_skew(s2))
        print(min_skew(s3))
        print(min_skew(s4))
        print(min_skew(s5))
        print(min_skew(s6))
        print(min_skew(s7))


if __name__ == '__main__':
    unittest.main()
