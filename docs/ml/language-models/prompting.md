---
sidebar_position: 3
---

# Prompting and In-Context Learning

A Large Language Model is trained on a massive amount of text to learn language patterns, relationships between words, and the ability to generate meaningful responses. However, having a trained model does not automatically mean that it will produce the exact output we expect for every task. The model needs information about what we want it to do, the context in which the task should be performed, and sometimes examples that demonstrate the expected behaviour.

This is where prompting becomes important. Instead of changing the model's internal parameters or training it again for every new task, we can provide instructions and relevant information directly as input. The model uses this information to understand the task and generate an appropriate response.

Prompting and In-Context Learning are particularly useful because they allow a single pre-trained model to perform many different tasks, such as summarization, classification, translation, question answering, and information extraction, without requiring a separate model for each task.

In this section, we will understand how prompts are constructed, how the Context Window limits the information available to a model, and how Zero-shot, One-shot, and Few-shot Learning allow us to guide the model using examples.

## Prompt Engineering

### What is a Prompt?

A prompt is the input provided to a Large Language Model to communicate what task it should perform or what information it should process.

A prompt can be a simple question, a detailed instruction, a block of contextual information, or a combination of all three. The model processes the supplied input and generates a response based on the patterns and relationships it learned during training.

For example, consider the following prompt:

"Explain what a database index is."

The model understands that the user wants an explanation of database indexing and generates a response accordingly.

Now consider a more detailed prompt:

"Explain what a database index is to a beginner. Use a practical example involving a table containing one million users, explain how an index improves query performance, and mention its storage and write-performance trade-offs."

Both prompts ask about the same subject, but the second provides considerably more information about the expected explanation, audience, example, and scope.

This illustrates an important characteristic of LLMs: the quality and specificity of the instructions supplied to the model can significantly influence the usefulness of its response.

### What is Prompt Engineering?

Prompt Engineering is the process of designing and refining prompts to guide a Large Language Model towards producing more accurate, relevant, and useful outputs.

The objective is not simply to ask a question but to communicate the task clearly enough that the model understands what is expected.

A well-constructed prompt generally considers several aspects:

#### Clear Instructions

The prompt should explicitly describe what the model needs to accomplish rather than leaving the task open to unnecessary interpretation.

For example:

Instead of:

"Tell me about this customer feedback."

Use:

"Summarize the customer feedback and identify the three most frequently mentioned complaints."

The second instruction gives the model a specific task and an expected outcome.

#### Relevant Context

Providing relevant background information helps the model understand the circumstances in which it should perform the task.

For example, if we ask an LLM to summarize customer feedback for a product team, mentioning that the feedback comes from a recently released feature helps establish the context in which the information should be interpreted.

#### Constraints

Constraints specify boundaries that the model should follow while generating its response.

Examples include:

- Keep the response under 200 words.
- Do not introduce information that is not present in the supplied text.
- Focus only on technical issues.
- Return exactly three recommendations.

Constraints help narrow the range of acceptable outputs.

#### Expected Output Format

Specifying the expected response format makes the generated output easier to consume, particularly when an LLM is integrated into an application.

For example:

"Extract the customer's name, email address, and subscription plan from the following text. Return the result as a JSON object."

The model now has a clearly defined output structure instead of generating an unrestricted natural-language response.

#### Examples

Sometimes instructions alone are insufficient to communicate a specific pattern or expected behaviour. Providing examples demonstrates how the model should interpret an input and construct its output.

This technique is particularly useful for classification, information extraction, and other tasks where the expected output follows a consistent pattern.

We will explore this in detail when studying In-Context Learning.

### Example: Improving a Prompt

Consider a customer support application where an LLM is expected to classify incoming customer messages into predefined categories.

A vague prompt might look like this:

"Classify this customer message."

A better prompt would be:

"You are a customer support classification assistant. Classify the following customer message into exactly one of these categories: Billing, Technical Issue, Account Access, or General Inquiry. Return only the category name.

Customer message: 'I was charged twice for my monthly subscription.'"

The second prompt communicates the model's role, the task, the available categories, and the expected output format.

The expected response is:

Billing

This example demonstrates how instructions, context, constraints, and output formatting can work together to produce a more predictable response.

## Context Window

### What is a Context Window?

A Context Window is the maximum amount of information, measured in tokens, that a Large Language Model can consider during a single model interaction.

It represents the model's available working context, which can include the input prompt, relevant conversation history, supplied documents, and the tokens generated as part of the response.

For example, suppose a model supports a context window of 32,000 tokens. This means the combined information provided to the model and the generated response must fit within that available token budget.

The Context Window is important because an LLM cannot process an unlimited amount of information in a single interaction. Even if we provide a large document or an extremely long conversation, the model is still constrained by its maximum context capacity.

### Understanding the Context Window

Consider an application where a user asks an LLM to summarize a document.

The model receives the document as part of its input, processes the available information, and generates a summary.

The available context can be understood as follows:

```text
+--------------------------------------+
|          Context Window              |
|                                      |
|  System / Task Instructions          |
|  +--------------------------------+  |
|                                      |
|  User Prompt                         |
|  +--------------------------------+  |
|                                      |
|  Conversation History                |
|  +--------------------------------+  |
|                                      |
|  Document / Additional Context       |
|  +--------------------------------+  |
|                                      |
|  Generated Response                  |
|  +--------------------------------+  |
|                                      |
+--------------------------------------+
```

All these components consume tokens from the available context budget.

For example, if a model has a context window of 32,000 tokens and the input already consumes 28,000 tokens, only approximately 4,000 tokens remain for the generated response, subject to any additional token-budget restrictions imposed by the application.

### Why Does the Context Window Matter?

The Context Window directly influences how much information an LLM can process in one interaction.

Consider a customer support application that needs to analyze a long conversation between a customer and a support representative. If the conversation exceeds the model's context window, the entire conversation cannot simply be passed to the model as a single input.

The application must manage the information before sending it to the model. It might summarize older messages, divide the conversation into smaller sections, or retrieve only the most relevant information.

There are three important considerations:

#### Input Capacity

The application must ensure that the prompt, conversation history, and additional context fit within the model's available token budget.

#### Output Capacity

The generated response also consumes tokens from the context window. Therefore, allocating the entire context window to input information leaves little or no room for the response.

#### Context Relevance

Having a larger context window does not automatically guarantee better responses. Providing too much irrelevant information can make it harder for the model to identify the information most relevant to the task.

The objective should be to provide sufficient and relevant context rather than simply maximizing the amount of input.

## In-Context Learning (ICL)

### What is In-Context Learning?

In-Context Learning is the ability of a Large Language Model to learn how to perform a task from instructions and examples provided directly in its input prompt, without updating the model's underlying parameters.

Unlike traditional supervised learning, where a model is trained on a dataset and its weights are updated through an optimization process, In-Context Learning happens during inference.

The model uses the examples included in the prompt to identify patterns and understand the expected relationship between inputs and outputs. It then applies those patterns when generating a response to a new input.

For example, suppose we want an LLM to classify customer feedback as either Positive or Negative.

We could provide the following examples:

```text
Input: "The product is excellent."
Output: Positive

Input: "The application keeps crashing."
Output: Negative

Input: "The new features are very useful."
Output: ?
```

The model can infer the classification pattern from the supplied examples and classify the final input as Positive.

Importantly, the model has not been retrained, and its weights have not been modified. It is using the information available in the current prompt to perform the task.

### How In-Context Learning Works

The basic process can be understood in three steps:

1. The prompt provides instructions and, optionally, examples demonstrating the expected task.
2. The model processes the supplied information and identifies patterns or relationships between the examples.
3. The model applies those patterns to the new input and generates the expected output.

The important distinction is that the model is not permanently learning a new capability from these examples. The examples are available within the current context, and the model uses them while generating its response.

In-Context Learning has three commonly discussed approaches:

- Zero-shot Learning
- One-shot Learning
- Few-shot Learning

The difference between these approaches is the number of examples provided in the prompt.

## Zero-shot Learning

Zero-shot Learning is an approach in which an LLM is asked to perform a task without receiving any task-specific examples in the prompt.

The model relies on its pre-trained knowledge and the instructions supplied by the user to understand what it needs to accomplish.

For example, consider the following prompt:

```text
Classify the following customer feedback as either
Positive or Negative.

Customer feedback:
"The application is easy to use and works perfectly."

Classification:
```

The model receives the task description and the input, but no examples demonstrating how similar feedback should be classified.

It uses the knowledge and patterns acquired during pre-training to understand the task and produce the expected classification.

Expected output:

```text
Positive
```

### When is Zero-shot Learning useful?

Zero-shot Learning is particularly useful when the task is straightforward and can be described clearly through instructions.

For example:

- Summarizing a document.
- Translating a sentence.
- Answering general knowledge questions.
- Classifying straightforward customer feedback.
- Extracting explicitly mentioned information from text.

The primary advantage is that we do not need to prepare examples for every task. We can simply describe what the model needs to do.

However, Zero-shot Learning may produce inconsistent results when the task involves specialized categories, ambiguous inputs, or a specific output pattern that is difficult to communicate through instructions alone.

## One-shot Learning

One-shot Learning is an approach in which an LLM receives exactly one example of the expected input and output before being asked to perform the actual task.

The example demonstrates the pattern the model should follow, helping it understand the expected behaviour more clearly than instructions alone.

Consider the same customer feedback classification problem.

```text
Classify customer feedback as either Positive or Negative.

Example:

Customer feedback:
"The application is extremely slow."

Classification:
Negative

Now classify the following:

Customer feedback:
"The new dashboard is intuitive and easy to navigate."

Classification:
```

The model receives one example showing how customer feedback should be classified.

Expected output:

```text
Positive
```

The supplied example provides an additional reference for interpreting the task and producing the expected output.

### When is One-shot Learning useful?

One-shot Learning is useful when the task requires a specific interpretation or output pattern that may not be sufficiently clear from instructions alone.

For example, an application might need to extract information from customer messages using a particular JSON structure. Providing one example demonstrates exactly how the input should be transformed into the expected output.

The main advantage is that a single example can clarify the intended behaviour without requiring a large collection of examples.

However, one example may not represent all possible situations, particularly when the task involves multiple categories or complex classification rules.

## Few-shot Learning

Few-shot Learning is an approach in which an LLM receives multiple examples of the expected input and output before being asked to perform a new task.

Instead of relying on a single example, the model receives several demonstrations that help it identify the expected pattern across different inputs.

Consider the customer feedback classification problem again.

```text
Classify customer feedback as either Positive or Negative.

Example 1:

Customer feedback:
"The application is extremely slow."

Classification:
Negative

Example 2:

Customer feedback:
"The new dashboard is intuitive and easy to navigate."

Classification:
Positive

Example 3:

Customer feedback:
"The latest update introduced several bugs."

Classification:
Negative

Now classify the following:

Customer feedback:
"The application has become much easier to use."

Classification:
```

Expected output:

```text
Positive
```

By providing multiple examples, we give the model a better demonstration of how different inputs correspond to different outputs.

### When is Few-shot Learning useful?

Few-shot Learning is particularly useful when the task involves more complex classification rules, specialized terminology, or a specific output structure.

For example, consider a market research application that classifies survey responses into categories such as:

- Product Quality
- Pricing
- Customer Support
- User Experience

Some customer responses may contain overlapping concepts, making classification less straightforward.

Providing multiple examples of how different responses should be categorized can help the model understand the intended classification boundaries.

Few-shot Learning is also useful when working with structured output, sentiment analysis, information extraction, and tasks where the expected response follows a consistent pattern.

However, adding more examples is not always better. Every example consumes tokens from the available context window, and irrelevant or contradictory examples can make the task more confusing.

The examples should therefore be representative of the task and demonstrate the behaviour we actually want.

## Comparison: Zero-shot vs One-shot vs Few-shot Learning

All three approaches are forms of In-Context Learning, but they differ in how much demonstration is provided to the model.

| Approach  | Examples Provided | How the Model Understands the Task                            |
| --------- | ----------------: | ------------------------------------------------------------- |
| Zero-shot |                 0 | Relies on instructions and pre-trained knowledge              |
| One-shot  |                 1 | Uses one demonstration to understand the expected pattern     |
| Few-shot  |          Multiple | Uses multiple demonstrations to identify the expected pattern |

The choice depends on the complexity of the task and how clearly the expected behaviour can be communicated.

For straightforward tasks, Zero-shot Learning may be sufficient. When the expected behaviour needs clarification, One-shot Learning can help. For more specialized tasks with multiple patterns or categories, Few-shot Learning can provide better guidance.

However, none of these approaches guarantees a correct response. The quality of the instructions, relevance of the examples, and capabilities of the underlying model all influence the final output.

## Prompting vs Fine-tuning

It is important to distinguish In-Context Learning from Fine-tuning because both techniques can be used to adapt a pre-trained LLM to a particular task, but they work differently.

### Prompting and In-Context Learning

The model receives instructions, context, and optionally examples as part of its input. It uses this information during inference without modifying its underlying model weights.

### Fine-tuning

The model is trained further using a task-specific dataset. During this process, its parameters are updated so that it learns patterns or behaviours associated with the target task.

Consider a customer support classification application.

With Few-shot Learning, we provide examples of customer messages and their corresponding categories directly in the prompt whenever we invoke the model.

With Fine-tuning, we use a collection of labeled customer messages to further train the model, allowing it to learn the classification task through parameter updates.

| Aspect           | In-Context Learning                    | Fine-tuning                           |
| ---------------- | -------------------------------------- | ------------------------------------- |
| Model weights    | Unchanged                              | Updated                               |
| Examples         | Provided in the prompt                 | Provided through training             |
| When it happens  | Inference                              | Additional training                   |
| Data requirement | Instructions and examples              | Training dataset                      |
| Task adaptation  | Temporary, within the supplied context | Reflected in updated model parameters |

The important takeaway is that prompting changes the information presented to the model, whereas fine-tuning changes the model itself.

## Summary

Prompt Engineering and In-Context Learning provide ways to guide a pre-trained Large Language Model towards performing a particular task without requiring additional model training.

Prompt Engineering focuses on constructing clear instructions, providing relevant context, defining constraints, and specifying the expected output. The Context Window determines how much information can be supplied to the model and how much room remains for its generated response.

In-Context Learning extends this idea by allowing us to demonstrate the expected behaviour through examples. Depending on the number of examples provided, we can use Zero-shot, One-shot, or Few-shot Learning.

Together, these concepts form an important foundation for building applications powered by LLMs, where the same underlying model can perform different tasks based on the instructions and information supplied at inference time.
