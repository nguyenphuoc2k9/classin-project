from collections import deque
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True
def generate_primes():
    primes = []
    for num in range(1000, 10000):
        if is_prime(num):
            primes.append(num)
    return primes
def get_digits(num):
    return [int(digit) for digit in str(num)]
def create_graph():
    primes = generate_primes()
    graph = {}
    for prime in primes:
        graph[prime] = []
        digits = get_digits(prime)
        for i in range(4):
            for j in range(10):
                if j != digits[i] and (i != 0 or j != 0):
                    new_digits = digits[:]
                    new_digits[i] = j
                    new_prime = int("".join(map(str, new_digits)))
                    if new_prime in primes:
                        graph[prime].append(new_prime)
    return graph
def find_shortest_path(graph, A, B):
    visited = set()
    queue = deque([(A, [A])])
    while queue:
        current, path = queue.popleft()
        if current == B:
            return path
        visited.add(current)
        for neighbor in graph[current]:
            if neighbor not in visited:
                queue.append((neighbor, path + [neighbor]))
    return []
def find_transform_steps(A, B):
    if A == B or not is_prime(A) or not is_prime(B):
        return []
    graph = create_graph()
    path = find_shortest_path(graph, A, B)
    return path

steps = find_transform_steps(8179, 1733)
print(steps)