from typing import List, Sequence, TypeVar, Set

ItemType = TypeVar("ItemType")


def find_common_items(
    first_sequence: Sequence[ItemType], second_sequence: Sequence[ItemType]
) -> List[ItemType]:
    """
    Find common items between two arrays.

    SOLUTION
    
    1. The section of code that contribute to the time complexity is part where
    we are checking for every element of the first array including in the second array.
    It is handling by comparing each the first array element with each the second array
    element. And so the time complexity is O(n^2).
      To the space complexity contribute creating of set of the common item, which
    size in the worst case could be equal to size of the first or of the second array:.
    So, the space complexity is O(n).
 
    2. Time Complexity:  O(n^2)
      Space Complexity: O(n)
    
    3. To optimize time complexity we could convert one of the arrays in a set. Checking
    set includes an particular element time complexity wil be O(1), so checking for all
    list elements will be O(n). Converting array to set operation also will have the time
    complexity O(n). So the final time complexity after refactoring will be O(n).
    
    4. Optimal Time Complexity: O(n)
    """
    first_sequence_items_set: Set[ItemType] = set(first_sequence)
    result_set: Set[ItemType] = set()

    for item in second_sequence:
        if item in first_sequence_items_set:
            result_set.add(item)
    
    return list(result_set)
