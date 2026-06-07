from typing import List, Sequence, TypeVar

ItemType = TypeVar("ItemType")


def remove_duplicates(values: Sequence[ItemType]) -> List[ItemType]:
    """
    Remove duplicate values from a sequence, preserving the order of the first occurrence of each value.

    SOLUTION
 
    1. The function current realization includes nested loops. The external loop 
    iterate over the given list and has the time complexity O(n). The inner loop
    iterate over the list of unique items which in the worst case can includes all
    the items of the given array. So the time complexity of the function is O(n^2).
    The function creates new array to store uniq items so the space complexity is O(n).
 
    2. Time Complexity:  O(n^2)
       Space Complexity: O(n)
 
    3. Since a set preserve order of items by adding we can use transformations
    from an array to a set and then from a set to an array. Each transformation
    has the time complexity O(n) so, the refactored function will have the time
    complexity O(n). Using the transformation through a set will require additional
    array, so the space complexity will remain at O(n).
    
    4. Optimal Time Complexity: O(n)
    """

    return list(dict.fromkeys(values))
