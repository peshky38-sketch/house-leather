class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next = next_node


class SingleLinkedList:
    def __init__(self):
        self.start = None
        self.last = None

    def append(self, value):
        new_node = Node(value)
        if self.start is None:
            self.start = new_node
            self.last = new_node
        else:
            self.last.next = new_node
            self.last = new_node

    def print_all_nodes(self):
        current_node = self.start
        if current_node is None:
            print("Our list is empty")
            return

        while current_node is not None:
            print(current_node.value, end=" -> ")
            current_node = current_node.next
        print("None")


if __name__ == "__main__":
    my_list = SingleLinkedList()
    my_list.append(45)
    my_list.append(99)
    my_list.append(134)
    my_list.print_all_nodes()
