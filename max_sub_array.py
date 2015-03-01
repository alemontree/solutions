T = int(raw_input())

def max_subarray(Ar):
    max_neg = max(Ar)
    if max_neg <= 0:
        return max_neg

    max_so_far = max_ending_here = 0
    for x in Ar:
        max_ending_here = max(0, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far


def max_pos(Ar):
    if max(Ar) < 0:
        return max(Ar)
    return sum(x for x in Ar if x > 0)

    
for a in range(T):
    ar_size = int(raw_input())
    Ar = map(int, raw_input().split())
    print max_subarray(Ar), max_pos(Ar)