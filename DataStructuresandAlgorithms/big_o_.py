# Adding every integer from 1 through n takes linear time: O(n).
def up_to_n(n):
    total = 0
    for value in range(1, n + 1):
        total += value
    return total


# The arithmetic-series formula takes constant time: O(1).
def up_to_n_constant(n):
    return n * (n + 1) // 2


if __name__ == "__main__":
    number = 50_000
    print(f"Linear result for {number}: {up_to_n(number)}")
    print(f"Constant-time result for {number}: {up_to_n_constant(number)}")
