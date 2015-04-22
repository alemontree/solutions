from collections import deque
from itertools import count

class Node(object):
    _ids = count()
    _ids_count = 0
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
        Node._ids_count += 1

    def traverse_preorder(self):
        print self.value
        if self.left:
            self.left.traverse_preorder()
        if self.right:        
            self.right.traverse_preorder()


    def traverse_inorder(self):
        
        if self.left:
            self.left.traverse_inorder()
        print self.value
        if self.right:        
            self.right.traverse_inorder()

    def traverse_postorder(self):
        
        if self.left:
            self.left.traverse_postorder()
        if self.right:        
            self.right.traverse_postorder()
        print self.value

    def count_nodes(self):
        count = 0
        if self.left:
            count = count + self.left.count_nodes()
        if self.right:        
            count = count + self.right.count_nodes()
        return 1 + count

    @classmethod
    def count_nodes_class(cls):
        return Node._ids_count



def count_nodes_pretty(node):      
    if not node:
        return 0;
    return 1 + count_nodes_pretty(node.left) + count_nodes_pretty(node.right)


#def traverse_breadth(self):




a = Node('A')
d = Node('D')
f = Node('F')
h = Node('H')


c = Node('C', a, d)
g = Node('G', f, h)
e = Node('E', c, g)

print "node count:", e.count_nodes()
print "node pretty count:", count_nodes_pretty(e)
print "Class method:", Node.count_nodes_class()

print "Pre order:"
e.traverse_preorder()
print "In order:"
e.traverse_inorder()
print "Post order:"
e.traverse_postorder()






   #    E
   #   / \  
   #  C   G
   #  /\  /\
   # A D  F H 


   # preorder

   # in order

   # postorder