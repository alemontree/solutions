

def find_factors(n):
    res = []
    for i in range(1, (n/2+1)):
        if n%i == 0:
            res.append(i)

    res.append(n)
    print "\n{} has {} factors:".format(n, len(res))

    print str(res)[1:-1]
    if len(res) == 2:
        print "{} is a prime number!".format(n)

try:
    n = int(raw_input("Please enter a positive integer: \n"))
    if isinstance(n, int):
            find_factors(n)
except:
    print "That is not a positive integer! Please try again."