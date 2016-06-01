# have an nxn board
# a robot tries to get fron top left corner to bot right corner

# first we need to generate grid of size n


class Node(object):
    def __init__(self, visited = False, edges = []):
        self.visited = visited
        self.edges = edges


def grid(n):
    tot_squares = n*n
    container = {}
    for idx, value in enumerate(range(tot_squares)):
        # print idx, value
        if idx == 0:                     # top left corner
            edges = [1, n]
        elif idx == n-1:                 # top right corner
            edges = [idx+n]
        elif idx > 0 and idx < n-1:      # top row
            edges = [idx+1, idx+n]
        elif idx == n*(n-1):             # bot left corner
            edges = [idx+1]
        elif idx == (n*n)-1:             # bot right corner
            edges = []
        elif idx%n == 0:                 # left row
            edges = [idx+1, idx+n]
        elif idx%n == n-1:               # right row
            edges = [idx+n, idx-1]
        elif idx < n*n-1 and idx > n*(n-1): # bot bot row
            edges = [idx+1, idx-n]
        else:
            edges = [idx-1, idx+1, idx-n, idx+n]

        container[idx] = Node(False, edges)
        #print container[idx].edges
    return container
    


def traverse():
    board = grid(3)
    solution = []

    def helper(idx):

        setattr(board[idx], "visited", True)
        solution.append(idx)
        edges = getattr(board[idx], "edges")
        # if len(edges) == 0:
        #     return
        for edge in edges:
            # print edge
            #print edge

            if getattr(board[edge], "visited") == False:
                
                
                helper(edge)
        print solution
    helper(0)


traverse()



    
