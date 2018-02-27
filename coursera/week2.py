



def hamming(p ,q):
    """
    assume equal length strings
    return the number of mismatches or hamming distance
    """
    hd=0
    for p_char, q_char in zip(p,q):
        if( p_char!= q_char):
            hd+=1
    return hd


def min_skew(s):
    """
    input: DNA string
    return: positin in DNA string ßof min skew -- 0 indexed.
    skew defined if see C decrement skew if see G increment skew
    """
    list_skew = []
    list_skew.append(0)
    current_skew = 0
    min_val = 0  # assumes min is 0, this is not necessarily true
    min_val_pos = []
    pos = 1

    for char in s:
        if (char == "C"):
            current_skew -= 1
        elif (char == "G"):
            current_skew += 1

        list_skew.append(current_skew)
        # print("current_skew:",current_skew," min_val:",min_val )
        if (current_skew < min_val):
            min_val_pos = []
            min_val_pos.append(pos)
            min_val = current_skew
        elif (current_skew == min_val):
            min_val_pos.append(pos)
        pos += 1