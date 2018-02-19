

def count(DNA,kmer):
    '''
    :param DNA: string
    :param kmer: kmer string
    :return: numer of times kmer is in DNA
    '''
    count = 0

    for x in range(0,len(DNA)-len(kmer)+1):
        testMe = DNA[x:x+len(kmer)]
        #print (f"testMe:{testMe}")
        if(testMe==kmer):
            #print ("match!!!")
            count+=1
    return count

def most_frequent_kmer(DNA,k):
    """
    :param DNA: string of DNA
    :param k: length of kmer to search for
    :return: return most frequent kmer of length k in DNA
    """
    dict = {}
    for x in range(0,len(DNA)-k+1):
        processKmer = DNA[x:x+k]
        if processKmer in dict:
            dict[processKmer] = dict[processKmer]+1
        else:
            dict[processKmer] = 1
    #return highest key value
    #print("kmer dict:",dict)
    return max(dict.keys(), key=(lambda key:dict[key]))

def reverse_complement(DNA):
    """
    :param DNA:
    :return: reverse complement of DNA
    """
    listMe = list(DNA)
    complement_list = []
    for x in listMe:
        if(x=="A"):
            complement_list.append("T")
        elif(x=="T"):
            complement_list.append("A")
        elif(x=="C"):
            complement_list.append("G")
        elif(x=="G"):
            complement_list.append("C")
        else:
            print("error in reverse complement. Shoould have ATCG nucleotide. Note can see N or U or etc...")
    return ''.join(complement_list)