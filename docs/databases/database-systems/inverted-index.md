---
sidebar_position: 13
---

# Inverted Indexes

An **Inverted Index** is a data structure used for efficient **text search** in databases, search engines, and document management systems. It is widely used to perform **full-text searches** quickly and efficiently by mapping content (words or tokens) to the documents in which they appear. This data structure is crucial for **search engines** like Google, **databases** like **PostgreSQL**, and libraries like **Lucene**.

An **Inverted Index** works similarly to a dictionary. Instead of mapping documents to words (as in a traditional index), it maps words to the documents in which they appear. This allows for fast lookups of documents that contain a specific word.

- **Forward Index**: A list of documents with their associated terms.
- **Inverted Index**: A list of terms with references to the documents that contain them.

## Structure of Inverted Index

An Inverted Index typically consists of two main components:

1. **Terms**: A collection of unique words (or tokens) found in a document or set of documents.
2. **Postings**: For each term, a list of documents (or positions within documents) where the term occurs.

For example, consider three documents:

- **Doc1**: "apple banana orange"
- **Doc2**: "apple orange"
- **Doc3**: "banana orange"

The **Inverted Index** would look like this:

| Term   | Postings         |
| ------ | ---------------- |
| apple  | Doc1, Doc2       |
| banana | Doc1, Doc3       |
| orange | Doc1, Doc2, Doc3 |

This structure allows for quick retrieval of documents containing a specific word.

## Time and Space Complexity of Inverted Index

- **Search**: O(log N) or O(1), depending on the underlying data structure used to store the postings (such as a balanced tree or hash table).
- **Insertion**: O(1) for adding a term to the index (if the term is new) or appending to the existing list of postings.
- **Deletion**: O(N) to remove a term, where `N` is the number of documents.
- **Space Complexity**: O(T \* D), where `T` is the number of unique terms and `D` is the number of documents. The size is determined by the number of terms and the documents each term appears in.

## Insertion Process for Inverted Index

Let’s assume we are adding terms from the following documents into the inverted index:

- **Doc1**: "apple banana orange"
- **Doc2**: "apple orange"
- **Doc3**: "banana orange"

1. **Insert "apple"**:

   - "apple" appears in **Doc1** and **Doc2**.
   - Add "apple" to the index with postings for **Doc1** and **Doc2**.

   ```
   apple: Doc1, Doc2
   ```

2. **Insert "banana"**:

   - "banana" appears in **Doc1** and **Doc3**.
   - Add "banana" to the index with postings for **Doc1** and **Doc3**.

   ```
   apple: Doc1, Doc2
   banana: Doc1, Doc3
   ```

3. **Insert "orange"**:
   - "orange" appears in **Doc1**, **Doc2**, and **Doc3**.
   - Add "orange" to the index with postings for **Doc1**, **Doc2**, and **Doc3**.
   ```
   apple: Doc1, Doc2
   banana: Doc1, Doc3
   orange: Doc1, Doc2, Doc3
   ```

## Deletion Process for Inverted Index

To delete a document from the index, you must remove the references to the document from the postings list for each term in that document.

1. **Delete Doc2**:
   - Find all terms in Doc2: "apple" and "orange".
   - Remove **Doc2** from the postings list of "apple" and "orange".
   ```
   apple: Doc1
   banana: Doc1, Doc3
   orange: Doc1, Doc3
   ```

## Retrieval Process for Inverted Index

To retrieve documents containing a specific word, look up the word in the inverted index and return the documents from the postings list.

1. **Search for "apple"**:

   - "apple" is found in **Doc1** and **Doc2**, so the result is **Doc1** and **Doc2**.

2. **Search for "orange"**:
   - "orange" is found in **Doc1**, **Doc2**, and **Doc3**, so the result is **Doc1**, **Doc2**, and **Doc3**.

# Real-World Examples: Lucene and PostgreSQL

## **Lucene and its Inverted Index Implementation**

**Apache Lucene** is a widely used **text search library** that provides a robust implementation of inverted indexes. Lucene is designed for high-performance **full-text search** in large datasets, and it builds an inverted index to perform this efficiently.

### How Lucene Implements Inverted Index

1. **Tokenization**:
   - Lucene first tokenizes the input text into individual terms. It splits the text into words (or tokens) and applies normalization techniques (such as stemming, lowercasing, and removing stop words).
2. **Indexing**:
   - Lucene creates an inverted index by associating each term with the documents it appears in. This index is stored in **RAM** or on disk, depending on the configuration.
3. **Posting List**:
   - For each term, Lucene maintains a **posting list** (a list of documents where the term appears) and the position of the term within the document.
4. **Search**:
   - When a search query is made, Lucene uses the inverted index to quickly find the documents that contain the query terms, ranking them based on various factors such as relevance and frequency of occurrence.

### Time and Space Complexity in Lucene

- **Search**: O(log N) due to the balanced tree used for storing postings.
- **Insertion**: O(1) for adding terms to the index.
- **Space Complexity**: Lucene optimizes space usage by compressing the inverted index, reducing the storage overhead.

## **PostgreSQL and its Inverted Index Implementation**

**PostgreSQL**, a popular relational database, supports **full-text search** through its implementation of inverted indexes. It uses a custom implementation of inverted indexes (based on **GiST** — Generalized Search Tree) to perform **text search** efficiently.

### How PostgreSQL Implements Inverted Index

1. **Text Search in PostgreSQL**:
   - PostgreSQL provides a `tsvector` type that represents a pre-processed version of a document, where the text is tokenized and normalized (stems, lowercased, and stop words removed).
2. **Indexing**:
   - PostgreSQL creates an inverted index on the `tsvector` column using a **GiST index**. This index stores a mapping of terms to document IDs, allowing fast retrieval.
3. **Postings List**:
   - The postings list in PostgreSQL’s inverted index contains references to the document IDs where the terms appear.

### Time and Space Complexity in PostgreSQL

- **Search**: O(log N) for searching through the inverted index.
- **Insertion**: O(1) for inserting a term into the index.
- **Space Complexity**: Space depends on the number of terms and documents indexed, but PostgreSQL's use of compression techniques helps optimize storage.

# Comparison Between Lucene and PostgreSQL Inverted Index

| Feature              | Lucene                                              | PostgreSQL                                               |
| -------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| **Type of Index**    | Inverted index (optimized for search)               | GiST (Generalized Search Tree) inverted index            |
| **Use Case**         | Full-text search, search engines, document indexing | Full-text search, document storage, relational databases |
| **Search Speed**     | Extremely fast for text search                      | Fast for text search within databases                    |
| **Space Efficiency** | Optimized with compression techniques               | Space-efficient, uses compression                        |
| **Complexity**       | O(log N) for search, O(1) for insertion             | O(log N) for search, O(1) for insertion                  |
| **Flexibility**      | Can be customized for various search scenarios      | Works with relational data structures                    |

# Real-World Applications

1. **Search Engines**:

   - **Lucene** is the core of many search engines, including **Apache Solr** and **Elasticsearch**, providing fast text searching capabilities across large datasets.

2. **Document Management Systems**:

   - **PostgreSQL** is used by applications that need to store and search through documents. In combination with inverted indexes, it provides efficient full-text search within the database.

3. **Log and Event Management**:
   - Both **Lucene** and **PostgreSQL**'s inverted index are used for searching through large volumes of logs, providing efficient querying capabilities for event management systems.
