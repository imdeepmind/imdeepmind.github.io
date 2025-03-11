---
sidebar_position: 7
---

# Bloom Filter

A **Bloom Filter** is a probabilistic data structure designed for efficient membership testing. It is highly space-efficient and is particularly useful in scenarios where false positives are acceptable but false negatives are not. In other words, it may incorrectly report that an element is in the set when it is not (false positive) but will never incorrectly report that an element is not in the set when it is (no false negatives).

<div style={{textAlign: 'center'}}>
   <img src="/img/bloom-filter.gif" alt="Bloom Filter" style={{width: '100%'}} />
</div>

1. **Probabilistic Nature**:
   - Can return **false positives**, but **no false negatives**.
2. **Space Efficiency**:
   - Consumes significantly less memory than traditional data structures like hash tables.
3. **Static Membership**:
   - Elements cannot be removed once added, as it could affect other elements.

## How a Bloom Filter Works

1. **Initialization**:

   - The Bloom filter uses a **bit array** of size `m`, initialized to all `0`s.
   - It employs **`k` hash functions**, each producing indices between `0` and `m-1`.

2. **Insertion**:

   - When an element is added to the filter:
     1. Compute `k` hash values for the element.
     2. Set the bits at the resulting indices in the bit array to `1`.

3. **Membership Testing**:
   - To check if an element is in the set:
     1. Compute `k` hash values for the element.
     2. Check the bits at the corresponding indices.
     3. If all bits are `1`, the element **might** be in the set (possible false positive).
     4. If any bit is `0`, the element is **definitely not** in the set.

### Insertion and Retrieval Example

**Bit Array (Initial State)**:  
We start with an empty bit array (size `m = 10`):

```
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

**Step 1: Insert Element "cat"**  
Suppose we have 3 hash functions (`k = 3`) producing indices for "cat":  
`hash1("cat") = 2`, `hash2("cat") = 5`, `hash3("cat") = 7`.

Set bits at positions 2, 5, and 7:

```
[0, 0, 1, 0, 0, 1, 0, 1, 0, 0]
```

**Step 2: Insert Element "dog"**  
`hash1("dog") = 1`, `hash2("dog") = 4`, `hash3("dog") = 6`.

Set bits at positions 1, 4, and 6:

```
[0, 1, 1, 0, 1, 1, 1, 1, 0, 0]
```

**Step 3: Check Membership of "cat"**  
Recompute hash values for "cat": 2, 5, 7.  
All these positions are set to `1`, so "cat" **might** be in the set.

**Step 4: Check Membership of "fish"**  
Suppose `hash1("fish") = 0`, `hash2("fish") = 3`, `hash3("fish") = 9`.  
Position 9 is `0`, so "fish" is **definitely not** in the set.

## Impact of Bitmap Size (`m`) and Number of Hash Functions (`k`)

1. **Bitmap Size (`m`)**:

   - A larger bit array reduces the probability of collisions, hence reducing false positives.
   - Smaller bit arrays increase the chances of hash collisions, leading to higher false positive rates.

2. **Number of Hash Functions (`k`)**:

   - If `k` is too small, fewer bits are set, increasing the chance of false negatives.
   - If `k` is too large, more bits are set, leading to more collisions and higher false positive rates.
   - The optimal `k` can be derived as: `k = m/n * ln(2)` where `n` is the number of expected elements.

3. **False Positive Probability**:
   `p = (1 - e^(-kn/m))^k`

## Popular Hash Functions

1. **MurmurHash**:
   - A non-cryptographic hash function designed for fast performance.
2. **FNV (Fowler-Noll-Vo)**:
   - Simple and fast, suitable for small keys.
3. **SHA Family (e.g., SHA-256)**:
   - Cryptographic hash functions, slower but highly secure.
4. **CityHash**:
   - Optimized for high-performance scenarios in Bloom filters.

## Variations of Bloom Filters

1. **Counting Bloom Filter**:

   - Instead of a bit array, uses a counter array to allow deletions.
   - Each index stores the count of how many elements have hashed to it.

2. **Scalable Bloom Filter**:

   - Dynamically increases the size of the bit array as more elements are added.
   - Useful when the size of the dataset is unknown beforehand.

3. **Compressed Bloom Filter**:

   - Compresses the bit array to save memory.
   - Useful in bandwidth-constrained applications.

4. **Partitioned Bloom Filter**:
   - Divides the bit array into `k` parts, with each hash function mapping to a specific part.
   - Reduces the impact of hash collisions.

## Real-World Applications

1. **Database Systems**:
   - **Cassandra** and **HBase** use Bloom filters to reduce disk lookups by checking if a key is likely to be in a table.
2. **Web Caching**:
   - Quickly determines if a resource (e.g., URL or file) is in the cache.
3. **Distributed Systems**:
   - Used in distributed databases to reduce communication overhead by testing membership locally.
4. **Blockchain**:
   - Bitcoin employs Bloom filters to allow lightweight clients to query specific transactions without downloading the entire blockchain.
5. **Spell Checkers**:
   - Check if a word exists in the dictionary using a memory-efficient Bloom filter.

## Advantages

- **Memory Efficiency**:
  - Requires much less memory compared to hash tables or sets.
- **Speed**:
  - Fast insertion and lookup operations.
- **Scalability**:
  - Can handle very large datasets.

## Disadvantages

- **False Positives**:
  - Membership checks are not 100% accurate.
- **No Deletions**:
  - Removing elements is not supported (except in Counting Bloom Filters).
- **Hash Function Dependency**:
  - Performance relies heavily on the choice of hash functions. Poor hash functions can lead to high collision rates.

## Working Example

I have created a complete example for Bloom Filter in Python using MurMurHashV3. Here the link to the repository: [https://github.com/imdeepmind/BloomFilter](https://github.com/imdeepmind/BloomFilter)
