---
sidebar_position: 7
---

# Scaling Laws

Training a language model involves making several decisions about the resources allocated to it. We need to decide how many parameters the model should have, how much training data it should process, and how much computational power should be spent training it. These decisions are closely connected because changing one of these factors affects how effectively the others can be used.

Consider two hypothetical language models. The first has 100 billion parameters but is trained on a relatively small dataset, while the second has 30 billion parameters and is trained on a much larger dataset. It is tempting to assume that the first model must be better because it has more parameters, but that conclusion is not necessarily correct. The larger model might not have received enough training data to use its capacity effectively, while the smaller model might have learned more from its training process.

This raises an important question: **How should we allocate computational resources between model size and training data to achieve the best possible performance?**

Scaling laws attempt to answer this question by studying how model performance changes as we increase the resources used for training. Researchers train models of different sizes on different amounts of data, measure their performance, and identify mathematical relationships that can help predict the results of larger training runs.

These relationships are particularly useful because training a large language model is expensive. Training runs can require thousands of GPUs, enormous datasets, and substantial amounts of electricity. Running many large experiments simply to discover which configuration works best is often impractical. Scaling laws provide a way to estimate promising configurations before committing to such expensive experiments.

Two important research contributions established much of the foundation for this subject:

- **Kaplan et al. (2020):** Demonstrated empirical power-law relationships between language model performance, model size, dataset size, and computational resources.
- **Hoffmann et al. (2022):** Introduced a revised understanding of compute-optimal training through the Chinchilla scaling laws, emphasizing that model size and training data should grow together.

Understanding these contributions requires examining the relationship between model capacity, training data, and computational budget.

## Scaling Laws for Neural Language Models

Scaling laws are empirical mathematical relationships that describe how the performance of a neural language model changes as we increase its size, training data, or computational resources.

The term _empirical_ is important here. Scaling laws are derived from observations made by training and evaluating multiple models under different configurations. They are not universal rules derived from a complete theoretical understanding of how neural networks learn.

Researchers use these observations to identify patterns that remain relatively consistent across a range of model sizes and training configurations.

### What Does It Mean to Scale a Language Model?

Scaling a language model generally involves increasing one or more of the following:

#### Model Size

Model size refers to the number of trainable parameters in a neural network. Parameters are the numerical values that the model learns during training and uses to represent patterns in its training data.

For example, a model with 7 billion parameters is generally referred to as a 7B model, while one with 70 billion parameters is referred to as a 70B model.

Increasing the number of parameters increases the model's representational capacity, allowing it to potentially learn and represent more complex patterns.

However, additional parameters are useful only when the training process provides enough information and computation for the model to learn meaningful patterns.

#### Dataset Size

Dataset size refers to the amount of training data available to the model. For language models, this is commonly measured in tokens rather than documents, sentences, or raw file sizes.

A token is a unit produced by the tokenizer, which may represent a complete word, part of a word, punctuation, or another text fragment.

For example, a training dataset containing 100 billion tokens provides 100 billion token instances that can be used during training.

Increasing the amount of training data exposes the model to more language patterns, vocabulary, facts, writing styles, and examples.

#### Computational Resources

Computational resources refer to the processing capacity used to train the model. For large language models, this is commonly measured in floating-point operations, or FLOPs.

A FLOP represents one floating-point arithmetic operation. Since training large models requires an enormous number of operations, computational requirements are commonly expressed in units such as petaFLOPs, exaFLOPs, or as a total number of operations.

Increasing the computational budget allows us to train larger models, process more tokens, or spend more computation on a particular model and dataset combination.

### How Do Scaling Laws Measure Model Performance?

Scaling law research commonly measures performance using **training loss** or **validation loss**, particularly cross-entropy loss.

In language modeling, the model attempts to predict the next token based on the tokens it has already received. The training objective measures how well the model predicts the actual next tokens in the training data.

Cross-entropy loss measures the difference between the model's predicted probability distribution and the actual target distribution. A lower loss generally indicates that the model assigns higher probability to the correct next tokens.

For example, imagine the following sentence:

"The developer deployed the application because it was ready."

When predicting the next token, the model receives the preceding context and assigns probabilities to possible next tokens. If the actual next token receives a high probability, the prediction contributes relatively little loss. If the model assigns it a very low probability, the prediction contributes more loss.

The model learns by adjusting its parameters to reduce this prediction error across the training data.

Validation loss measures the same general prediction objective on a separate dataset that is not used to update the model's parameters. It helps estimate how well the model generalizes beyond the exact examples it was trained on.

Scaling law experiments use these measurements to understand how performance changes as model size, dataset size, and compute increase.

### The Power-Law Relationship

One of the important observations made by Kaplan et al. was that language model loss often follows a power-law relationship with model size, dataset size, and computational resources over substantial ranges of the experiments they studied.

A simplified power-law relationship can be represented as:

```text
Loss = A / (X ^ α) + E
```

Where:

- Loss represents the model's prediction error.
- `X` represents a scaling variable, such as model size or computational budget.
- `A` is a constant determined by the fitted relationship.
- `α` is the scaling exponent.
- `E` represents an irreducible or residual loss term.

The equation illustrates an important pattern: increasing the scaling variable reduces the loss, but the improvement becomes progressively smaller.

For example, doubling the number of model parameters does not necessarily halve the loss. Instead, the model may achieve a smaller improvement as it becomes larger.

This is called **diminishing returns**.

A simplified illustration:

| Model Size     | Illustrative Validation Loss |
| -------------- | ---------------------------: |
| 1B parameters  |                          3.5 |
| 2B parameters  |                          3.0 |
| 4B parameters  |                          2.7 |
| 8B parameters  |                          2.5 |
| 16B parameters |                         2.35 |

These values are illustrative rather than measurements from a particular research paper. They show that increasing model size continues to improve performance, but each additional increase provides a smaller reduction in loss.

### Why Are Scaling Laws Important?

Scaling laws are useful because they allow researchers to estimate how a model might perform before investing in a full-scale training run.

Suppose a research team has trained models with 1B, 2B, and 4B parameters and measured their validation losses. If these results follow a reasonably consistent scaling relationship, the team can estimate the expected performance of an 8B or 16B model.

This does not guarantee that the predictions will remain accurate indefinitely, but it provides a useful basis for planning experiments.

Scaling laws help answer questions such as:

- How much improvement might we expect from increasing the model size?
- How much additional training data should we provide?
- How much computation will be required?
- Should we spend additional resources on a larger model or on training an existing model for longer?
- What model configuration is likely to provide the best performance under a fixed computational budget?

The central lesson is that model size, training data, and compute should not be considered independently. They interact with one another, and the best training configuration depends on how these resources are allocated.

## Compute Budget

A compute budget is the total amount of computational work allocated to training a model.

When organizations plan a large language model training run, they often know their available resources in advance. They may have a fixed number of GPUs, a limited training duration, and a predetermined infrastructure budget.

For example, an organization might have access to 1,000 GPUs for 30 days. The available hardware and training duration place a limit on how much computation can be performed.

The organization must decide how to use that computation effectively.

It could train a relatively large model on fewer tokens, train a smaller model on more tokens, or choose an intermediate configuration. The challenge is to identify which option provides the best model performance within the available budget.

### Understanding FLOPs as a Measure of Compute

Training a language model involves several computational operations, including:

- Forward passes, where the model processes input tokens and produces predictions.
- Loss calculation, where predictions are compared against the expected outputs.
- Backward passes, where gradients are calculated to determine how parameters should change.
- Optimizer updates, where model parameters are adjusted using the calculated gradients.

The total number of floating-point operations required for training is commonly estimated using the model's parameter count and the number of training tokens.

For a dense language model, a widely used approximate formula is:

```text
Training FLOPs ≈ 6 × N × D
```

Where:

- `N` = Number of model parameters.
- `D` = Number of training tokens processed.

The factor of `6` is an approximation for the forward and backward computation of a dense model under common assumptions. It does not represent every operation performed by the complete training system, and actual compute can vary depending on the architecture, sequence length, implementation, and training configuration.

For example, consider a model with 10 billion parameters trained on 100 billion tokens.

```text
N = 10 billion = 10 × 10^9
D = 100 billion = 100 × 10^9

Training FLOPs ≈ 6 × 10 × 10^9 × 100 × 10^9
Training FLOPs ≈ 6 × 10^21 FLOPs
```

This represents approximately 6 zettaFLOPs of computation.

The important observation is that training compute increases with both model size and the number of tokens processed.

If we increase the number of parameters while keeping the training tokens constant, the computational requirement increases. Similarly, increasing the training tokens while keeping the model size constant also increases the computational requirement.

### How Model Size and Dataset Size Affect Compute

Consider the following example, assuming the same approximate training FLOPs formula.

| Model Parameters | Training Tokens | Approximate Training Compute |
| ---------------- | --------------: | ---------------------------: |
| 1B               |             10B |            `6 × 10^19 FLOPs` |
| 2B               |             10B |          `1.2 × 10^20 FLOPs` |
| 1B               |             20B |          `1.2 × 10^20 FLOPs` |
| 2B               |             20B |          `2.4 × 10^20 FLOPs` |
| 4B               |             40B |          `9.6 × 10^20 FLOPs` |

Notice that doubling either the model size or the training tokens approximately doubles the computational requirement, assuming the other variable remains unchanged.

If we double both, the compute requirement increases by approximately four times.

This relationship is important when planning a training run because increasing model size and dataset size simultaneously can make the computational cost grow quickly.

### Converting Compute into GPU Time

FLOPs describe the total computational work, but organizations also need to estimate how long a training run will take.

The actual training duration depends on the number of GPUs, their processing capacity, and how efficiently the training workload uses them.

A simplified relationship is:

```text
Training Time = Total Training FLOPs / Effective Compute Throughput
```

Effective compute throughput is the actual processing rate achieved by the complete training system.

It is usually lower than the theoretical peak performance advertised for the GPUs because some time is spent on memory operations, communication between devices, synchronization, and other overhead.

For example, if a training job requires `6 × 10^21 FLOPs` and the complete GPU cluster achieves an effective throughput of `1 × 10^18 FLOPs per second`:

```text
Training Time = (6 × 10^21) / (1 × 10^18)
Training Time = 6,000 seconds
```

This is approximately 1.67 hours.

The example is purely illustrative, but it demonstrates how the total computational workload and the effective throughput of the infrastructure determine the training duration.

### The Compute Allocation Problem

The most important aspect of a compute budget is not simply how much computation is available, but how it should be distributed.

Suppose an organization has a fixed budget of 1,000 GPU-hours. It has two possible strategies:

**Strategy A:** Train a larger model on a smaller dataset.

**Strategy B:** Train a smaller model on a larger dataset.

Both strategies might consume approximately the same amount of computation, but they can produce different levels of model performance.

The goal is to find the combination of model size and training data that minimizes validation loss within the available compute budget.

This is called **compute-optimal training**.

It is the central problem addressed by the Chinchilla scaling laws.

## Model Size vs Dataset Size

Model size and dataset size are two of the most important factors affecting the performance of a language model.

Model size determines how much information and how many patterns the model can potentially represent. Dataset size determines how much training information is available for the model to learn from.

Increasing either can improve performance, but they must be balanced.

A large model trained on insufficient data may not learn enough to make effective use of its capacity. Conversely, a small model trained on an enormous dataset may not have sufficient capacity to represent everything it encounters.

Understanding this relationship is essential for deciding how to allocate a training budget.

### Model Capacity

A model's capacity refers to its ability to represent and learn patterns from data.

In a neural network, parameters are learned numerical values that determine how the network transforms its inputs into outputs.

Increasing the number of parameters generally gives the model more representational capacity. This allows it to potentially learn more complex relationships, retain more information about patterns in the training data, and model a broader range of language structures.

For example, consider two language models:

- Model A: 1 billion parameters.
- Model B: 10 billion parameters.

Model B has significantly more parameters and potentially greater capacity to represent complex patterns.

However, greater capacity does not automatically translate into better performance. The model needs enough useful training data and computation to learn meaningful patterns.

If Model B is trained on too little data, a significant portion of its available capacity may not be used effectively.

### Dataset Size and Learning Opportunities

A dataset provides the examples from which a language model learns.

During pre-training, the model processes tokens and repeatedly adjusts its parameters based on prediction errors.

A larger and more diverse dataset exposes the model to more examples of:

- Language structure and grammar.
- Different writing styles and vocabulary.
- Factual information.
- Reasoning patterns.
- Programming languages and code structures.
- Different domains and subject areas.

More training tokens provide additional learning opportunities, but the benefit depends on the quality and diversity of those tokens.

Repeating the same small dataset many times does not necessarily provide the same benefit as introducing new, high-quality information.

### What Happens When the Model Is Too Large for the Dataset?

Consider a model with 100 billion parameters trained on only 10 billion tokens.

The model has a very large capacity relative to the amount of data it processes. It may not receive enough training examples to learn effectively across its available capacity.

In this situation, the model can be considered undertrained relative to its size and training budget.

Undertraining does not mean that the model has learned nothing or that it cannot perform useful tasks. It means that additional training data and computation could potentially improve its performance more effectively than simply increasing its parameter count further.

This is one of the important observations that motivated the Chinchilla research.

### What Happens When the Dataset Is Too Large for the Model?

Now consider a model with 1 billion parameters trained on an extremely large dataset.

The model may process an enormous number of tokens, but its limited capacity can restrict how effectively it represents the patterns in that data.

Eventually, additional training tokens may produce smaller improvements because the model is already approaching the performance limits associated with its size and architecture.

This does not mean that smaller models cannot benefit from large datasets. They can continue improving with more data, but the improvement may become increasingly limited.

### Undertraining and Overtraining

The terms undertraining and overtraining need to be understood in relation to the model's size, dataset, and training configuration.

#### Undertraining

A model is undertrained when it has not received enough effective training computation or training tokens to reach the performance that its capacity could support.

For example, a 70B parameter model trained on a relatively small dataset may be undertrained because it has not received enough data to make effective use of its capacity.

#### Overtraining

In scaling law discussions, overtraining often refers to continuing to train a model beyond the compute-efficient training point for its particular size and available budget, especially when the additional tokens provide diminishing improvements relative to their cost.

The term should not be confused with the classical machine learning problem of overfitting.

Classical overfitting occurs when a model performs increasingly well on its training data but performs poorly on unseen validation data. In language model pre-training, repeatedly processing data, dataset quality, duplication, and the total training duration can all influence overfitting.

A model can be trained for more tokens without necessarily overfitting, particularly when the data is sufficiently large and diverse. Conversely, repeatedly training on a small dataset can increase the risk of memorization and poor generalization.

### Finding the Balance

The objective is to find a suitable balance between model size and training data.

Consider three hypothetical configurations with comparable training budgets:

| Configuration | Model Size | Training Tokens | General Idea                                          |
| ------------- | ---------: | --------------: | ----------------------------------------------------- |
| A             |       100B |            100B | Larger model with fewer tokens per parameter          |
| B             |        50B |            200B | Smaller model with more training tokens               |
| C             |        25B |            400B | Smaller model with substantially more training tokens |

All three configurations have the same product of model parameters and training tokens. Under the simplified dense-model compute estimate, they therefore have approximately the same training FLOPs.

However, they are not guaranteed to achieve the same validation loss.

Their performance depends on how model capacity and training data are balanced. Scaling law research attempts to identify which combination is likely to achieve the lowest loss for a given computational budget.

The Chinchilla research provided a particularly influential answer to this question.

## Compute-Optimal Models

A compute-optimal model is a model configuration that achieves the lowest possible training or validation loss for a given computational budget.

The important phrase is _for a given computational budget_.

There is no single model size or dataset size that is optimal for every training run. The optimal configuration changes depending on how much computation is available.

For a small compute budget, a relatively small model trained on a limited amount of data may be the best choice. For a larger compute budget, both the model size and the training dataset can be increased.

The objective is not to build the largest possible model. It is to obtain the best possible model performance from the available computation.

### Understanding the Optimization Problem

Suppose we want to train a language model with the lowest possible validation loss.

We can represent the objective conceptually as:

```text
Minimize: Model Loss
Subject to: Training Compute ≤ Available Compute Budget
```

The model loss depends on several factors, including:

- Number of model parameters.
- Number of training tokens.
- Data quality and diversity.
- Training configuration.
- Model architecture and optimization choices.

For the basic scaling law problem, we focus primarily on model size and training tokens.

Let:

```text
N = Number of model parameters
D = Number of training tokens
C = Available training compute
```

Using the approximate dense-model training compute formula:

```text
C ≈ 6 × N × D
```

If `C` is fixed, increasing `N` requires reducing `D`, and increasing `D` requires reducing `N`, assuming the same compute budget.

The objective is to determine the best values of `N` and `D` that minimize model loss while satisfying the compute constraint.

This is the compute allocation problem.

### Understanding IsoFLOP Profiles

Researchers use experiments to identify which model and dataset combinations are most effective for a fixed amount of computation.

One useful experimental approach is to train multiple models using approximately the same total computational budget but with different combinations of model size and training tokens.

These experiments are called **IsoFLOP profiles**.

The term comes from the idea of keeping the total number of floating-point operations approximately constant while changing the training configuration.

For example, suppose we have a fixed compute budget and test the following configurations:

| Experiment | Model Size | Training Tokens | Approximate Compute |
| ---------- | ---------: | --------------: | ------------------: |
| A          |        10B |            100B |   `6 × 10^21 FLOPs` |
| B          |        20B |             50B |   `6 × 10^21 FLOPs` |
| C          |         5B |            200B |   `6 × 10^21 FLOPs` |
| D          |        25B |             40B |   `6 × 10^21 FLOPs` |

The computational requirement is approximately the same for each experiment.

After training, researchers compare their validation losses.

The configuration with the lowest loss provides the best observed allocation for that particular compute budget.

By repeating this process across different compute budgets, researchers can estimate how the optimal model size and training token count should grow as more computation becomes available.

### Why Compute-Optimal Training Matters

Without a compute-optimal approach, an organization might spend a large amount of money training a model configuration that is not particularly efficient.

For example, suppose a company has enough computational resources to train a 100B parameter model on 200B tokens.

It might assume that using all available resources to build the largest possible model is the best decision.

However, research may indicate that a smaller model trained on more tokens would achieve lower validation loss using the same computational budget.

This is important because the quality of a pre-trained model affects more than its training cost. It also influences the cost of deploying the model, fine-tuning it, and serving predictions to users.

A smaller model with better training efficiency can therefore offer benefits beyond the initial training process.

## Chinchilla Scaling Laws

The Chinchilla scaling laws are based on research published by Jordan Hoffmann and colleagues in 2022 under the paper title _Training Compute-Optimal Large Language Models_.

The research challenged the prevailing approach of primarily increasing model size while keeping the amount of training data relatively constant.

The authors argued that many large language models at the time were significantly undertrained. They demonstrated that a better allocation of computational resources could be achieved by increasing both model size and the number of training tokens.

The model developed to validate their findings was called **Chinchilla**.

### Background: The Earlier Scaling Law Approach

Before the Chinchilla research, the 2020 work by Kaplan et al. had established important relationships between model performance, model size, dataset size, and compute.

One of the conclusions from that work was that compute-efficient training favored relatively large models trained on fewer tokens, rather than necessarily training those models all the way to convergence.

This influenced the direction of language model development, where organizations increasingly focused on building models with more parameters.

However, the amount of training data did not always increase proportionally with model size.

For example, a model might become several times larger while continuing to train on a dataset of roughly similar size.

This approach could result in large models that had not received enough training tokens relative to their parameter counts.

The Chinchilla research revisited this allocation problem and reached a different conclusion about the relationship between model size and training data.

### The Chinchilla Research

Hoffmann and colleagues trained more than 400 language models, ranging from approximately 70 million to over 16 billion parameters, using different amounts of training data and computational budgets.

They used these experiments to estimate how model size and training tokens should grow to achieve compute-optimal training.

Their central finding was that **model size and the number of training tokens should be scaled approximately equally**.

In practical terms, for every doubling of model size, the number of training tokens should also approximately double under their compute-optimal training relationship.

This is the foundation of the commonly quoted Chinchilla rule of thumb.

### The 20 Tokens per Parameter Rule

A practical approximation derived from the Chinchilla research is:

```text
Training Tokens ≈ 20 × Number of Model Parameters
```

This is commonly called the **20 tokens per parameter rule**.

For example:

| Model Size      | Approximate Training Tokens |
| --------------- | --------------------------: |
| 1B parameters   |                  20B tokens |
| 7B parameters   |                 140B tokens |
| 13B parameters  |                 260B tokens |
| 30B parameters  |                 600B tokens |
| 70B parameters  |                 1.4T tokens |
| 100B parameters |                   2T tokens |

These values are approximate planning estimates, not universal requirements. The optimal ratio depends on assumptions about the model, training objective, data, compute, and the precise optimization target.

The important idea is that larger models generally require more training data to be trained efficiently.

### Why 20 Tokens per Parameter?

The Chinchilla researchers studied how the optimal model size and training token count changed as the available compute increased.

Their estimates indicated that the two quantities should grow at approximately the same rate.

Under the simplified training compute relationship:

```text
C ≈ 6 × N × D
```

If the number of parameters and the number of training tokens are both increased by the same factor, the total compute increases by the square of that factor.

For example:

- Double the model size and keep the dataset unchanged: compute approximately doubles.
- Double the training tokens and keep the model unchanged: compute approximately doubles.
- Double both model size and training tokens: compute approximately quadruples.

The Chinchilla findings suggest that, under the conditions studied, increasing both dimensions together is a more effective way to allocate additional compute than increasing model size disproportionately.

The approximate 20 tokens per parameter relationship is a practical summary of the fitted compute-optimal configurations from the research.

It should not be interpreted as a fundamental property of every neural network or every training dataset.

### Chinchilla vs Gopher

One of the most important demonstrations in the research was the comparison between Chinchilla and Gopher.

Gopher was a 280B parameter language model. Chinchilla was a 70B parameter model.

Despite having only one-quarter of Gopher's parameters, Chinchilla was trained using approximately four times as many tokens.

| Model      | Parameters | Training Tokens |
| ---------- | ---------: | --------------: |
| Gopher     |       280B |            300B |
| Chinchilla |        70B |            1.4T |

The approximate training compute was comparable because Chinchilla used a smaller model but processed substantially more training data.

Chinchilla achieved better results than Gopher across a broad range of downstream evaluations reported in the research.

This demonstrated that a smaller model trained on substantially more data could outperform a much larger model trained on fewer tokens.

The result challenged the assumption that increasing parameter count was always the most effective way to improve language model performance.

### Chinchilla vs GPT-3

The paper also compared Chinchilla against other large language models, including GPT-3.

| Model      | Parameters | Approximate Training Tokens |
| ---------- | ---------: | --------------------------: |
| GPT-3      |       175B |                        300B |
| Chinchilla |        70B |                        1.4T |

GPT-3 had substantially more parameters, but Chinchilla had processed many more training tokens.

Chinchilla outperformed GPT-3 on a broad range of evaluation tasks reported in the research.

This comparison reinforced the central finding: parameter count alone is not a reliable measure of how well a model has been trained.

### What Did Chinchilla Change?

The Chinchilla research changed how researchers thought about allocating training compute.

Before these findings, many training strategies focused heavily on increasing model size.

The Chinchilla results emphasized that training data must also increase as model size grows.

This had several practical implications:

#### Smaller Models Could Be Better Trained

A smaller model trained on substantially more data could achieve better performance than a larger model trained on insufficient data.

#### Training Data Became a More Important Resource

Organizations needed to consider whether they had enough high-quality training tokens for the models they wanted to build.

#### Compute Allocation Became More Balanced

Instead of spending most additional computation on increasing parameters, researchers had to consider how much of the budget should go toward processing additional training data.

#### Smaller Models Could Reduce Inference Costs

A smaller model generally requires fewer computations and less memory during inference than a larger model with a similar architecture and serving configuration.

A smaller but better-trained model could therefore be attractive not only because of its training efficiency but also because it is cheaper to deploy.

### Kaplan vs Chinchilla

The differences between the two research approaches are important because they explain how the field's understanding of compute allocation evolved.

| Aspect              | Kaplan et al. (2020)                                                     | Chinchilla / Hoffmann et al. (2022)                                |
| ------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Main focus          | Scaling relationships between model performance, size, data, and compute | Finding compute-optimal model size and training data               |
| Model scaling       | Favored relatively aggressive increases in model size                    | Recommended more balanced growth of model size and training tokens |
| Training data       | Suggested comparatively fewer tokens for compute-optimal training        | Suggested substantially more tokens                                |
| Key observation     | Larger models can be more sample-efficient                               | Many large models were undertrained                                |
| Practical influence | Encouraged increasing model size                                         | Encouraged increasing both model size and data                     |

The key difference is not that the earlier work ignored training data. Both studies examined the relationship between model size, data, and computation.

Rather, the two studies produced different estimates of how a fixed computational budget should be allocated between model size and training tokens.

The Chinchilla research showed that the earlier allocation could lead to models that were too large relative to the amount of data they processed.

## Training Data Requirements

Training data requirements refer to the amount of data needed to train a model effectively.

The Chinchilla findings provide a useful starting point for estimating the required number of training tokens based on model size. However, the actual amount of data needed depends on more than the number of parameters.

Data quality, diversity, repetition, domain coverage, and the intended use of the model all influence how effectively training data contributes to model performance.

It is therefore important to understand both the quantity and the characteristics of the training data.

### Estimating Training Data Requirements

Using the approximate Chinchilla relationship:

```text
Training Tokens ≈ 20 × Model Parameters
```

We can estimate the training data requirements for different model sizes.

For example, suppose we want to train a model with 7 billion parameters.

```text
Required Tokens ≈ 20 × 7B
Required Tokens ≈ 140B
```

The model would therefore require approximately 140 billion training tokens under this rule of thumb.

Similarly, a 70B parameter model would require approximately 1.4 trillion training tokens.

These estimates are useful for initial planning, but they do not guarantee that the model will achieve a particular level of performance.

The quality of the dataset and the assumptions behind the scaling relationship matter just as much.

### Data Quantity vs Data Quality

A large dataset is not automatically a good dataset.

Consider two hypothetical training datasets:

#### Dataset A

- 1 trillion tokens.
- Contains large amounts of duplicated content.
- Includes low-quality text and noisy documents.
- Has limited coverage of some important domains.

#### Dataset B

- 500 billion tokens.
- Contains more diverse and carefully filtered content.
- Has less duplication.
- Provides stronger coverage of the target domains.

Although Dataset A contains twice as many tokens, Dataset B may provide more useful training information.

This is because the number of tokens alone does not describe the information content or usefulness of a dataset.

High-quality data can improve learning efficiency, while duplicated or low-quality data can consume computational resources without providing equivalent benefits.

### Unique Tokens vs Total Tokens Processed

An important distinction in training data requirements is the difference between unique tokens available in a dataset and total tokens processed during training.

Suppose a dataset contains 100 billion tokens.

If the model processes the dataset once, it has seen 100 billion token instances.

If it processes the same dataset five times, it has processed 500 billion token instances, but it has not received 500 billion unique tokens.

The number of times a model processes the dataset is commonly described in terms of **epochs**.

One epoch means that the model has processed one complete pass through the training dataset.

For example:

| Dataset Size       | Number of Epochs | Total Tokens Processed |
| ------------------ | ---------------: | ---------------------: |
| 100B unique tokens |                1 |                   100B |
| 100B unique tokens |                2 |                   200B |
| 100B unique tokens |                5 |                   500B |
| 100B unique tokens |               10 |                     1T |

Repeatedly processing the same data can still improve the model, particularly when the model has not learned enough from the available dataset. However, repeated exposure does not provide the same variety of learning examples as introducing new data.

Excessive repetition can also increase memorization and reduce the benefits of additional training.

This is why the distinction between unique data and total training tokens matters when estimating whether a model has received sufficient training.

### Data Diversity

A model trained on a large but narrow dataset may perform well on the domains represented in that dataset while struggling with other types of content.

For example, a dataset containing mostly programming documentation may help a model learn programming-related patterns, but it may not provide sufficient coverage of general knowledge, conversational language, mathematics, or other domains.

A general-purpose language model therefore needs a broad and diverse training dataset.

Depending on the intended model, training data may include:

- Books and educational material.
- Websites and general text.
- Scientific and technical documents.
- Programming code and documentation.
- News and reference material.
- Mathematical content.
- Multiple languages.
- Domain-specific material.

The exact mixture matters because the model learns patterns based on the data distribution it encounters during training.

### Data Constraints and the Limits of Scaling

The Chinchilla relationship assumes that sufficient training data is available to support the desired model size and training configuration.

In practice, high-quality training data is not unlimited.

Organizations may face limitations such as:

- A limited supply of high-quality public data.
- Licensing restrictions.
- Privacy and legal requirements.
- Limited availability of specialized domain data.
- Data duplication and quality problems.
- Increasing costs of collecting and processing additional data.

These constraints make it difficult to scale training data indefinitely.

When a dataset is limited, organizations may need to reuse existing data, improve data quality, collect additional sources, or change their model and training strategy.

This means that the ideal compute allocation in a real training environment may differ from the theoretical allocation suggested by a simplified scaling law.

### Why More Training Tokens Do Not Always Mean Better Performance

Increasing the number of training tokens generally provides additional learning opportunities, but the benefits depend on the data and training configuration.

Consider three situations:

#### Situation 1: More High-Quality, Diverse Data

If the model has access to new and useful training data, additional tokens can improve its understanding of language patterns, facts, and other relationships.

#### Situation 2: More Duplicated Data

If additional tokens mostly come from repeated documents or examples, the model may receive limited new information despite processing more tokens.

#### Situation 3: More Low-Quality Data

If the additional data contains noise, incorrect information, or poorly structured content, it may provide less useful learning signal and can negatively affect the quality of the resulting model.

Therefore, training data requirements should not be determined solely by multiplying parameter count by `20`. The ratio provides an initial compute-optimal estimate, while actual data requirements depend on the quality and characteristics of the dataset.

### Practical Training Data Planning

When planning a large language model training run, the following questions are useful:

1. How many parameters will the model contain?
2. How many training tokens are required under the chosen scaling strategy?
3. How many unique tokens are available?
4. How much of the dataset is duplicated?
5. Does the dataset cover the domains and languages required by the model?
6. How many times will the model process the available dataset?
7. Is the available computational budget sufficient to process the planned number of tokens?
8. Does evaluation indicate that additional data is likely to improve performance?

These questions help ensure that model size, training data, and computational resources are planned together rather than treated as independent decisions.

## Putting Everything Together

Scaling laws provide a framework for understanding how model performance changes as model size, training data, and computational resources increase.

The original work by Kaplan et al. demonstrated that language model loss follows predictable power-law relationships across a wide range of model sizes and compute budgets. This established that model performance could be estimated using empirical relationships rather than relying entirely on expensive large-scale experiments.

The Chinchilla research later demonstrated that many large models were undertrained because their parameter counts had increased without a corresponding increase in training tokens.

Its central recommendation was to scale model size and training tokens together, with approximately 20 training tokens per parameter serving as a useful rule of thumb under the assumptions of the study.

The most important concepts can be summarized as follows:

| Concept                    | Key Idea                                                                          |
| -------------------------- | --------------------------------------------------------------------------------- |
| Scaling Laws               | Describe how model performance changes as model size, data, and compute increase. |
| Compute Budget             | Defines the total computational resources available for training.                 |
| Model Size                 | Determines the representational capacity of the model.                            |
| Dataset Size               | Determines how much training information is available.                            |
| Compute-Optimal Training   | Finds the best model and dataset combination for a fixed compute budget.          |
| Chinchilla Scaling Laws    | Suggest scaling model size and training tokens approximately equally.             |
| Training Data Requirements | Depend on model size, data quality, diversity, and the amount of data processed.  |

The central takeaway is that **building a better language model is not simply about increasing its parameter count. It is about finding the right balance between model capacity, training data, and computational resources.**

A smaller model trained on sufficient high-quality data can outperform a much larger model that has not been trained adequately. The best configuration is therefore determined not by the size of the model alone, but by how effectively the available computational budget is used.
