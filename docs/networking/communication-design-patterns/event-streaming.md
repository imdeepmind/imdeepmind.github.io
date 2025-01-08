---
sidebar_position: 3
---

# Event Streaming

Event streaming is the practice of capturing data (events) in real time from various sources (such as databases, applications, IoT devices, etc.), storing them in a durable manner, and enabling applications or systems to process and analyze them either in real time or at a later point in time.

Event streaming is foundational for building real-time systems, enabling data pipelines, and powering event-driven architectures.

## Key Concepts of Event Streaming

1. **Events:**

   - An event is a record of a change, action, or update that occurs in a system. For example:
     - A user clicks a button on a website (user interaction event).
     - A payment is completed (transaction event).
     - A sensor sends temperature readings (IoT event).

2. **Producers:**

   - The entities (applications, systems, or devices) that generate and send events to the event streaming platform. Examples:
     - A website backend sending user activity logs.
     - A microservice emitting an event when an order is created.

3. **Consumers:**

   - The systems or applications that consume events from the event stream to process or analyze them. Examples:
     - A fraud detection system analyzing payment events.
     - A machine learning model consuming IoT sensor events.

4. **Event Log:**

   - The event log is the core of an event streaming platform. It stores events durably in the exact order they were received, allowing consumers to process or replay them at their own pace.

5. **Retention:**

   - Events in the stream are stored for a configurable amount of time (e.g., hours, days, or indefinitely), enabling replayability and long-term data processing.

6. **Replayability:**

   - Consumers can re-read (replay) past events, which is especially useful for debugging, state reconstruction, or backfilling data pipelines.

7. **Partitions and Offsets:**
   - Events are stored in partitions for scalability.
   - Each consumer maintains its own **offset**, which is its position in the stream. This allows multiple consumers to independently process events at their own speed.

## How Event Streaming Works

1. **Event Generation:**

   - Producers (applications or devices) generate events and send them to the event streaming platform.

2. **Event Storage:**

   - Events are stored durably in an event log, ensuring no data loss and allowing consumers to access events even if they weren't online when the events were produced.

3. **Event Consumption:**
   - Consumers subscribe to specific topics or event streams. They read events either in real-time (as they are produced) or later (by replaying past events).

## Characteristics of Event Streaming

1. **Durability:**

   - Events are durably stored on disk, preventing data loss and allowing consumers to access them later.

2. **Scalability:**

   - Event streaming platforms are highly scalable, handling millions of events per second with partitioning and distributed processing.

3. **Order Preservation:**

   - Events are preserved in the exact order they were produced within a partition.

4. **Decoupling:**

   - Producers and consumers are decoupled. Producers generate events without worrying about who will consume them or how they will process them.

5. **Asynchronous Processing:**
   - Consumers process events asynchronously, which improves system responsiveness and scalability.

## Examples of Event Streaming Platforms

1. **Apache Kafka:**

   - A distributed event streaming platform designed for high throughput and scalability. Kafka retains events for a configurable period, enabling replay and durability.

2. **Amazon Kinesis Streams:**

   - A managed event streaming service for real-time data processing on AWS.

3. **Apache Pulsar:**

   - A cloud-native event streaming platform with features like multi-tenancy and geo-replication.

4. **Confluent Platform:**
   - A commercial distribution of Kafka with enterprise-grade features like schema registry and connectors.

## Use Cases for Event Streaming

1. **Real-Time Data Processing:**

   - Processing events as they occur, such as detecting fraud in financial transactions.

2. **Event Sourcing:**

   - Persisting changes to an application state as a sequence of events. Useful for reconstructing state or debugging.

3. **Data Pipelines:**

   - Moving data between systems (e.g., from a database to a data lake) in near real-time.

4. **Stream Processing:**

   - Analyzing or transforming data streams in real-time, such as aggregating IoT sensor readings.

5. **State Reconstruction:**
   - Rebuilding the state of a system by replaying past events (e.g., in a distributed database).

## Advantages of Event Streaming

1. **Real-Time Insights:**
   - Enables businesses to make decisions based on live data.
2. **Scalability:**
   - Handles large volumes of data efficiently.
3. **Flexibility:**
   - Consumers can process events at their own pace, enabling varied use cases (real-time and batch processing).
4. **Decoupling:**
   - Makes systems more modular and easier to maintain.
5. **Fault Tolerance:**
   - Events are stored durably, reducing the risk of data loss.

## Event Streaming vs Pub/Sub: Key Differences

While both **Event Streaming** and **Pub/Sub** involve delivering messages/events in real-time, they are fundamentally different in their design, use cases, and capabilities. Here's a comparison:

| **Feature**               | **Event Streaming**                                                                  | **Pub/Sub**                                                       |
| ------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Core Purpose**          | Capturing, storing, and replaying streams of events over time.                       | Real-time delivery of messages to multiple subscribers.           |
| **Event Retention**       | Events are stored durably for a configurable period (e.g., hours, days, or forever). | Messages are typically ephemeral and deleted after delivery.      |
| **Replayability**         | Consumers can replay past events anytime by resetting their offset.                  | No replayability; once a message is delivered, it’s gone.         |
| **Order Guarantee**       | Events are stored and delivered in order (within partitions).                        | Most Pub/Sub systems do not guarantee message order.              |
| **Consumer Independence** | Consumers read events at their own pace (pull model).                                | Messages are pushed to all active subscribers in real-time.       |
| **Delivery Model**        | Consumers pull events from the stream.                                               | Messages are pushed to subscribers by the system.                 |
| **Scalability**           | Designed for high-throughput systems, handling millions of events per second.        | Lightweight, suitable for lower-throughput real-time messaging.   |
| **Focus**                 | Focuses on **long-term storage**, **event replay**, and **stream processing**.       | Focuses on **real-time notifications** and **fan-out messaging**. |
| **Use Cases**             | Analytics, data pipelines, event sourcing, state reconstruction, and IoT processing. | Notifications, workflow triggering, microservices communication.  |
| **Examples**              | Apache Kafka, Amazon Kinesis, Apache Pulsar.                                         | Amazon SNS, Google Pub/Sub, Redis Pub/Sub.                        |
