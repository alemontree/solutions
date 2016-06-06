
def mult(base, counter):
    if counter <= 1:
        return base
    else:
        return base + mult(base, counter-1)
inp = map(int, raw_input().split())
print mult(inp[0], inp[1])