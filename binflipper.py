# Enter your code here. Read input from STDIN. Print output to STDOUT

t = int(raw_input())

def Flipping_bits(t):
    i = 0
    
    while i < t:
        flipstr = ""
        num = int(raw_input())
        binstr = bin(num)[2:].zfill(32)
        for b in binstr:
            #print b
            if b == '0':
                flipstr += '1'
            else:
                flipstr += '0'
            #flipstr += b
        print int(flipstr, 2)
        i = i + 1


Flipping_bits(t)