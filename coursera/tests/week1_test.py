import unittest

from ..week1 import reverse_complement
from ..week1 import count
from ..week1 import most_frequent_kmer

class week1_test(unittest.TestCase):

    def test_reverse_complement(self):
        self.assertTrue(reverse_complement("AC")=="TG")

    def test_count(self):
        self.assertTrue(count("TCGAAAATCGA", "TCGA")==2)

    def test_most_frequent_kmer(self):
        most_freq = most_frequent_kmer("TACAAATAC",3)
        self.assertEquals(most_freq,"TAC")

if __name__ == '__main__':
    unittest.main()
