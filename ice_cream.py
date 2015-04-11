
test_cases = int(raw_input())

def ice_cream_selector():
    dollars = int(raw_input())
    number_of_flavors = raw_input()
    i = 0
    flavors = list(map(int, raw_input().split()))
    res = finder(dollars, flavors)
    print res[0], res[1]
    
    
def finder(dollars, flavors):
    for idx, val in enumerate(flavors):
        for sub_idx, sub_val in enumerate(flavors[idx+1:], start=idx+1):
            if val + sub_val == dollars:
                return idx+1, sub_idx+1
        
     
i = 0   
while i < test_cases:
    ice_cream_selector()
    i += 1