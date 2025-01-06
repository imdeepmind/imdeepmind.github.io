"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[31],{58535:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"networking/communication-design-patterns/pub-sub","title":"Pub/Sub (Publish-Subscribe)","description":"The publish-subscribe model is an asynchronous communication pattern where senders (publishers) do not send messages directly to receivers (subscribers). Instead, messages are sent to an intermediary (topic or message broker), and subscribers receive messages based on their expressed interest in the topics.","source":"@site/docs/networking/communication-design-patterns/pub-sub.md","sourceDirName":"networking/communication-design-patterns","slug":"/networking/communication-design-patterns/pub-sub","permalink":"/docs/networking/communication-design-patterns/pub-sub","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/communication-design-patterns/pub-sub.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736181390000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Request-Response","permalink":"/docs/networking/communication-design-patterns/request-response"},"next":{"title":"Introduction","permalink":"/docs/system-design/introduction"}}');var r=n(74848),l=n(28453);const t={sidebar_position:2},c="Pub/Sub (Publish-Subscribe)",o={},a=[{value:"Overview of the Publish-Subscribe Model",id:"overview-of-the-publish-subscribe-model",level:2},{value:"Components of Pub/Sub Communication Design",id:"components-of-pubsub-communication-design",level:2},{value:"Publishers",id:"publishers",level:3},{value:"Subscribers",id:"subscribers",level:3},{value:"Message Broker",id:"message-broker",level:3},{value:"Message",id:"message",level:3},{value:"Characteristics of Pub/Sub",id:"characteristics-of-pubsub",level:2},{value:"Design Considerations for Pub/Sub",id:"design-considerations-for-pubsub",level:2},{value:"Topic Design",id:"topic-design",level:3},{value:"Message Format",id:"message-format",level:3},{value:"Delivery Guarantees",id:"delivery-guarantees",level:3},{value:"Durability",id:"durability",level:3},{value:"Scaling",id:"scaling",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Security",id:"security",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Advanced Features of Pub/Sub",id:"advanced-features-of-pubsub",level:2},{value:"Message Filtering",id:"message-filtering",level:3},{value:"Event Replay",id:"event-replay",level:3},{value:"Priority Messaging",id:"priority-messaging",level:3},{value:"Message Ordering",id:"message-ordering",level:3},{value:"Fan-in Patterns",id:"fan-in-patterns",level:3},{value:"Schema Registry",id:"schema-registry",level:3},{value:"Common Use Cases",id:"common-use-cases",level:2},{value:"Challenges and Solutions",id:"challenges-and-solutions",level:2},{value:"Challenge: Message Duplication",id:"challenge-message-duplication",level:3},{value:"Challenge: Deadlocks or Message Blocking",id:"challenge-deadlocks-or-message-blocking",level:3},{value:"Challenge: High Latency",id:"challenge-high-latency",level:3},{value:"Challenge: Scaling Topics and Subscribers",id:"challenge-scaling-topics-and-subscribers",level:3},{value:"Challenge: Debugging Failures",id:"challenge-debugging-failures",level:3},{value:"Tools and Frameworks for Pub/Sub",id:"tools-and-frameworks-for-pubsub",level:2},{value:"Message Brokers",id:"message-brokers",level:3},{value:"Monitoring and Debugging",id:"monitoring-and-debugging",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"pubsub-publish-subscribe",children:"Pub/Sub (Publish-Subscribe)"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"publish-subscribe model"})," is an asynchronous communication pattern where senders (publishers) do not send messages directly to receivers (subscribers). Instead, messages are sent to an intermediary (topic or message broker), and subscribers receive messages based on their expressed interest in the topics."]}),"\n",(0,r.jsxs)(s.p,{children:["This model is commonly used in ",(0,r.jsx)(s.strong,{children:"event-driven systems"})," and ",(0,r.jsx)(s.strong,{children:"microservices architectures"})," to enable ",(0,r.jsx)(s.strong,{children:"decoupled communication"})," between components."]}),"\n",(0,r.jsx)(s.h2,{id:"overview-of-the-publish-subscribe-model",children:"Overview of the Publish-Subscribe Model"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Publisher"}),": The entity that sends messages to a topic."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Topic"}),": A channel or stream where messages are published. Subscribers listen to these topics."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Subscriber"}),": The entity that listens to topics and processes messages sent to them."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Message Broker"}),": The intermediary that facilitates message delivery between publishers and subscribers."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"components-of-pubsub-communication-design",children:"Components of Pub/Sub Communication Design"}),"\n",(0,r.jsx)(s.h3,{id:"publishers",children:"Publishers"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Producers of events or data."}),"\n",(0,r.jsxs)(s.li,{children:["Publish messages to a specific ",(0,r.jsx)(s.strong,{children:"topic"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Publishers do not need to know about the subscribers."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"subscribers",children:"Subscribers"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Consumers of events or data."}),"\n",(0,r.jsx)(s.li,{children:"Subscribe to specific topics to receive relevant messages."}),"\n",(0,r.jsxs)(s.li,{children:["Subscribers can exist in many forms, such as:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Microservices"}),"\n",(0,r.jsx)(s.li,{children:"Event processors"}),"\n",(0,r.jsx)(s.li,{children:"Data pipelines"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"message-broker",children:"Message Broker"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Facilitates the decoupling of publishers and subscribers."}),"\n",(0,r.jsxs)(s.li,{children:["Examples:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Kafka"}),", ",(0,r.jsx)(s.strong,{children:"RabbitMQ"}),", ",(0,r.jsx)(s.strong,{children:"Google Cloud Pub/Sub"}),", ",(0,r.jsx)(s.strong,{children:"Amazon SNS"}),", ",(0,r.jsx)(s.strong,{children:"Redis Streams"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Handles:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Message routing."}),"\n",(0,r.jsx)(s.li,{children:"Persistence (optional, e.g., durable topics in Kafka)."}),"\n",(0,r.jsx)(s.li,{children:"Delivery guarantees (e.g., at-least-once, at-most-once, exactly-once)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"message",children:"Message"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The data being transmitted between publisher and subscriber."}),"\n",(0,r.jsxs)(s.li,{children:["Contains:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Payload"}),": The actual data (e.g., JSON, Protobuf)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Metadata"}),": Attributes such as message ID, timestamp, priority, etc."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"characteristics-of-pubsub",children:"Characteristics of Pub/Sub"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Asynchronous Communication"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Publishers send messages without waiting for subscribers to process them."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Decoupling"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Publishers and subscribers are unaware of each other\u2019s existence, making the system highly modular and scalable."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Scalability"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Multiple publishers and subscribers can interact with the same topic."}),"\n",(0,r.jsx)(s.li,{children:"Horizontal scaling is easier with message brokers."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Event-Driven"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ideal for systems where events trigger downstream actions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Fan-out Pattern"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"One message can be delivered to multiple subscribers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"design-considerations-for-pubsub",children:"Design Considerations for Pub/Sub"}),"\n",(0,r.jsx)(s.h3,{id:"topic-design",children:"Topic Design"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Use ",(0,r.jsx)(s.strong,{children:"descriptive and hierarchical naming"})," for topics:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example: ",(0,r.jsx)(s.code,{children:"ecommerce.orders.created"}),", ",(0,r.jsx)(s.code,{children:"ecommerce.orders.canceled"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"Avoid creating too many granular topics, which can lead to unnecessary complexity."}),"\n",(0,r.jsxs)(s.li,{children:["Use ",(0,r.jsx)(s.strong,{children:"wildcard subscriptions"})," (if supported by the broker) for flexibility (e.g., subscribing to all topics under ",(0,r.jsx)(s.code,{children:"ecommerce.orders.*"}),")."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"message-format",children:"Message Format"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Use a standardized format:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"JSON"}),": Easy to use but not as compact."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Protobuf/Avro"}),": Compact and suitable for high-performance systems."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Include metadata such as:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"eventType"}),": To describe the event."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"timestamp"}),": To log when the event occurred."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"correlationId"}),": For tracing across distributed systems."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"delivery-guarantees",children:"Delivery Guarantees"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Choose a delivery mechanism based on use cases:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"At-most-once"}),": No retries; suitable for non-critical events."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"At-least-once"}),": Ensures delivery but may result in duplicates."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Exactly-once"}),": Ensures each message is delivered exactly once (e.g., Kafka with idempotent producers/consumers)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"durability",children:"Durability"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Decide whether messages should persist in the broker:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Ephemeral topics"}),": Messages are discarded after delivery."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Durable topics"}),": Messages persist until processed or expired."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"Use retention policies for durable topics (e.g., retain messages for 7 days or until disk space is full)."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"scaling",children:"Scaling"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Use ",(0,r.jsx)(s.strong,{children:"partitions"})," to scale topics (e.g., Kafka partitions)."]}),"\n",(0,r.jsxs)(s.li,{children:["Implement ",(0,r.jsx)(s.strong,{children:"consumer groups"})," to scale subscribers horizontally."]}),"\n",(0,r.jsxs)(s.li,{children:["Design for ",(0,r.jsx)(s.strong,{children:"high throughput"})," by batching messages."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Ensure messages that fail processing are not lost:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Use ",(0,r.jsx)(s.strong,{children:"dead-letter queues (DLQs)"})," for unprocessable messages."]}),"\n",(0,r.jsx)(s.li,{children:"Retry policies: Implement exponential backoff for retries."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"security",children:"Security"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Use ",(0,r.jsx)(s.strong,{children:"encryption in transit"})," (e.g., TLS)."]}),"\n",(0,r.jsxs)(s.li,{children:["Restrict access to topics via ",(0,r.jsx)(s.strong,{children:"role-based access control (RBAC)"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Authenticate publishers and subscribers using ",(0,r.jsx)(s.strong,{children:"API keys"}),", ",(0,r.jsx)(s.strong,{children:"OAuth"}),", or other mechanisms."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Track message metrics such as:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Latency (time between publishing and delivery)."}),"\n",(0,r.jsx)(s.li,{children:"Throughput (number of messages per second)."}),"\n",(0,r.jsx)(s.li,{children:"Error rates."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Use tools like ",(0,r.jsx)(s.strong,{children:"Prometheus"}),", ",(0,r.jsx)(s.strong,{children:"Grafana"}),", or broker-specific monitoring tools."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"advanced-features-of-pubsub",children:"Advanced Features of Pub/Sub"}),"\n",(0,r.jsx)(s.h3,{id:"message-filtering",children:"Message Filtering"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Enable subscribers to filter messages based on attributes, reducing unnecessary processing."}),"\n",(0,r.jsxs)(s.li,{children:["Example: Subscribing to a topic with a filter like ",(0,r.jsx)(s.code,{children:"orderStatus='pending'"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"event-replay",children:"Event Replay"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Allow subscribers to replay past events from a topic."}),"\n",(0,r.jsx)(s.li,{children:"Useful for debugging, analytics, or onboarding new services."}),"\n",(0,r.jsx)(s.li,{children:"Example: Kafka allows consumers to rewind to a specific offset."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"priority-messaging",children:"Priority Messaging"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Assign priority levels to messages so that high-priority events are processed first."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"message-ordering",children:"Message Ordering"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ensure messages are delivered in the order they were published (e.g., Kafka\u2019s partition-based ordering)."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"fan-in-patterns",children:"Fan-in Patterns"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Multiple publishers send events to the same topic, enabling aggregation of related events."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"schema-registry",children:"Schema Registry"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Use a schema registry to ensure consistent message formats."}),"\n",(0,r.jsx)(s.li,{children:"Prevent schema evolution issues by validating schemas at runtime."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"common-use-cases",children:"Common Use Cases"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Event-Driven Microservices"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example: An ",(0,r.jsx)(s.code,{children:"order.created"})," event triggers notifications, payment processing, and inventory updates."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Real-Time Data Pipelines"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Example: Streaming data from IoT devices to analytics systems."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Decoupled Communication"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Example: A web application publishing events to a topic that mobile apps subscribe to."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Notification Systems"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Example: Sending push notifications to subscribed users."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Data Replication"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Example: Replicating database changes across regions using change data capture (CDC) and pub/sub."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"challenges-and-solutions",children:"Challenges and Solutions"}),"\n",(0,r.jsx)(s.h3,{id:"challenge-message-duplication",children:"Challenge: Message Duplication"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Solution"}),": Use idempotent message processing and deduplication strategies."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"challenge-deadlocks-or-message-blocking",children:"Challenge: Deadlocks or Message Blocking"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Solution"}),": Use parallelism in message consumption and design non-blocking systems."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"challenge-high-latency",children:"Challenge: High Latency"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Solution"}),": Optimize broker configurations, use faster storage, and minimize consumer processing time."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"challenge-scaling-topics-and-subscribers",children:"Challenge: Scaling Topics and Subscribers"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Solution"}),": Use partitioned topics and load-balance consumers."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"challenge-debugging-failures",children:"Challenge: Debugging Failures"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Solution"}),": Use tracing tools (e.g., OpenTelemetry) and implement correlation IDs."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"tools-and-frameworks-for-pubsub",children:"Tools and Frameworks for Pub/Sub"}),"\n",(0,r.jsx)(s.h3,{id:"message-brokers",children:"Message Brokers"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Apache Kafka"}),": High throughput, durable message storage."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"RabbitMQ"}),": Flexible routing and support for different protocols."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Google Cloud Pub/Sub"}),": Fully managed and scalable."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Amazon SNS/SQS"}),": Serverless message queuing."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Redis Streams"}),": Lightweight and fast pub/sub."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"monitoring-and-debugging",children:"Monitoring and Debugging"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Prometheus/Grafana"}),": For monitoring broker and consumer metrics."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Elastic Stack (ELK)"}),": For logging and analytics."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Jaeger/Zipkin"}),": For distributed tracing."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var i=n(96540);const r={},l=i.createContext(r);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);