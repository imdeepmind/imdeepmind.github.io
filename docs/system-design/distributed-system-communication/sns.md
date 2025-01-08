---
sidebar_position: 3
---

# AWS SNS

Amazon Simple Notification Service (SNS) is a fully managed messaging service provided by AWS that enables the decoupling of microservices, distributed systems, and serverless applications through a **publish-subscribe (pub/sub)** messaging pattern. It is primarily used for sending notifications in real-time to multiple subscribers over different protocols.

## Key Features of SNS

### Publish-Subscribe (Pub/Sub) Model

- SNS allows **publishers** to send messages to an **SNS topic**.
- **Subscribers** (endpoints such as SQS, Lambda functions, HTTP endpoints, email addresses, etc.) can subscribe to these topics to receive the messages.
- The **fan-out pattern** enables sending a single message to multiple subscribers.

### Push-Based Delivery

- SNS delivers messages in a push-based manner, meaning subscribers receive messages automatically without needing to poll for updates.

### Multiple Protocols for Delivery

SNS supports the following protocols for message delivery:

- **HTTP/HTTPS**: Delivers messages to HTTP/HTTPS endpoints.
- **AWS Lambda**: Invokes Lambda functions to process messages.
- **Amazon SQS**: Delivers messages to SQS queues for further processing.
- **Email/Email-JSON**: Sends messages as emails.
- **SMS**: Sends text messages to phone numbers.
- **Mobile Push Notifications**: Integrates with services like Apple Push Notification Service (APNs) and Firebase Cloud Messaging (FCM).

### Message Filtering

- Subscribers can apply **message filtering** using subscription filters, enabling them to receive only messages that meet specific criteria. This reduces unnecessary processing of irrelevant messages.

### High Throughput and Scalability

- SNS automatically scales to handle a large number of messages and high throughput.
- It is a serverless service, so there’s no infrastructure to manage.

### Durability and Reliability

- Messages are stored redundantly across multiple Availability Zones to ensure durability.
- For critical use cases, SNS can deliver messages to SQS queues, ensuring persistence and retries.

### Security

- Messages are encrypted in transit using HTTPS.
- SNS supports integration with **AWS Identity and Access Management (IAM)** to control access to topics.
- **Message encryption** can also be enabled using AWS Key Management Service (KMS).

### Dead-Letter Queues (DLQs)

- SNS can route undelivered messages to an Amazon SQS Dead-Letter Queue (DLQ), enabling you to analyze and troubleshoot failed deliveries.

### Monitoring and Metrics

- SNS integrates with **Amazon CloudWatch** to provide detailed metrics such as the number of messages published, delivered, and failed, as well as subscription-related metrics.

## Key Concepts

### Topic

- A topic is a logical access point for publishing messages.
- Publishers send messages to a topic, and subscribers receive them based on their subscription.

### Publisher

- The system or service that sends messages to the SNS topic.

### Subscriber

- The endpoint (e.g., SQS queue, Lambda function, HTTP endpoint) that receives messages from the topic.

### Subscription

- A subscription defines the association between a topic and a subscriber. Each subscription specifies the protocol and endpoint for message delivery.

## How SNS Works

1. **Publisher**: A message is sent by the publisher to an SNS topic.
2. **Topic**: The topic fans out the message to all its subscribers.
3. **Subscriber**: Subscribers receive the message via their configured protocol.

## Use Cases

1. **Real-Time Notifications**

   - Sending alerts to end-users or services in real-time, e.g., application monitoring alerts.

2. **Fan-Out Architecture**

   - Distributing a single message to multiple services or microservices, e.g., when a new user registers, notify multiple downstream services such as billing, CRM, and analytics.

3. **Decoupling Microservices**

   - SNS topics allow loosely coupled communication between microservices by abstracting the messaging system.

4. **Mobile Push Notifications**

   - Sending notifications to mobile devices through platforms like Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs).

5. **Workflow Coordination**
   - SNS can trigger AWS Lambda functions, making it ideal for serverless workflows.

## Benefits

1. **Scalability**

   - Fully managed and highly scalable to support high message volumes.

2. **Reduced Complexity**

   - Simplifies pub/sub messaging without the need to manage servers or message brokers.

3. **Flexibility**

   - Supports multiple protocols, enabling diverse use cases like notifications, message processing, or system alerts.

4. **Cost-Effective**

   - Pay only for the number of messages published and delivered.

5. **Integration with AWS Ecosystem**
   - Deep integration with other AWS services such as SQS, Lambda, CloudWatch, and KMS.

## Limitations

1. **No Message Persistence**

   - Messages are not stored permanently; once delivered, they are removed.

2. **No Message Replay**

   - Subscribers cannot retrieve messages that have already been delivered.

3. **Ordering Guarantees**

   - SNS does not guarantee the order in which subscribers receive messages.

4. **Limited Protocols**
   - While it supports several protocols, it doesn’t directly support streaming protocols like Kafka.

## SNS vs. Other Messaging Services

| Feature                 | **SNS** | **SQS**                   | **Kafka**              |
| ----------------------- | ------- | ------------------------- | ---------------------- |
| **Type**                | Pub/Sub | Queue                     | Event Streaming        |
| **Delivery Model**      | Push    | Pull                      | Pull                   |
| **Message Persistence** | No      | Temporary (up to 14 days) | Persistent             |
| **Message Replay**      | No      | No                        | Yes                    |
| **Ordering Guarantees** | No      | FIFO available            | Per-partition ordering |

## Example Scenario

Imagine an e-commerce platform where:

1. An **order service** publishes an order event to an SNS topic when a new order is created.
2. Subscribers like:
   - An **email service** sends confirmation emails.
   - A **warehouse system** updates inventory.
   - A **billing service** generates invoices.

By using SNS, these systems remain decoupled and independent of each other, improving maintainability and scalability.
