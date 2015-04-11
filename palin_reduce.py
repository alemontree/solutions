# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(raw_input())

def counter(upper, lower):
    i = 0
    while ord(upper) > ord(lower):
        upper = chr(ord(upper)-1)
        i = i + 1
    return i
#print counter("G", "A")

def palindrome_maker(word):
    word = list(word)
    mid = len(word)/2
    i = 1
    res = 0
    while i < len(word)/2 + 1:
        try:
            left = word[mid-i]
            if (len(word)%2 == 0):
                right = word[mid+i-1]
            else:
                right = word[mid+i]
                print i
            print left, word[mid], right
            i = i + 1
            
            #print "got here"
            #print ord(left), ord(right)
            if ord(left) > ord(right):
                res = res + counter(left, right)
                left = right
            else:
                res = res + counter(right, left)
                right = left
                
        except:
            return res
                
    return res

i = 0
while i < n:
    print palindrome_maker(raw_input())
    i = i + 1