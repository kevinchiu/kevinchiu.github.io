---
title: "Something Strange with LLMs"
date: 2025-08-22
draft: false
description: "Exploring why different AI models from various providers make remarkably similar mistakes, and what this reveals about the nature of machine learning and training."
tags: ["Learning", "AI", "LLM"]
summary: "LLMs from different companies produce identical wrong answers. Is it the data?"
showHero: false
---

{{< figure src="featured.png" alt="An LLM thinks 2+2=5" >}}
*<small><p style="text-align:center;">Sometimes LLMs don't have the right answer. Why?</p></small>*

I noticed something strange with LLMs. Multiple models from different providers respond with the same wrong answer to a simple multiple choice question.

Here's a table of the models and their answers. I'm keeping the question secret for now so I can use it to test future models, but here's a placeholder:

> This is a question about the number of intersecting points between seven parallel lines on a 2-dimensional x-y plane. Assume each line is placed such that it intersects the x-axis one unit away from the nearest line. If the lines are rotated 180 degrees, how many intersection points will there be between the lines?

> a) 7
> b) 3
> c) 0
> d) 5
> e) 2

The correct answer is c) 0, but so far, every LLM has answered d) 5.

| Date Tested | Provider  | Model                              | Answer |
| ----------- | --------- | ---------------------------------- | ------ |
| 12/21/2024  | OpenAI    | ChatGPT 4o                         | d      |
| 12/21/2024  | xAI       | Grok 2                             | d      |
| 12/21/2024  | Meta      | Llama 3.1 70B                      | d      |
| 12/21/2024  | Quora     | Poe                                | d      |
| 12/21/2024  | Google    | Gemini 2.0 Experimental Advanced   | d      |
| 12/25/2024  | Meta      | Llama 3.3 70B                      | d      |
| 12/25/2024  | Anthropic | Claude Sonnet 3.5                  | d      |
| 01/16/2024  | xAI       | Grok Beta                          | d      |
| 01/16/2024  | DeepSeek  | DeepSeek R1 Distill Llama 70B GGUF | d      |
| 01/23/2024  | DeepSeek  | DeepSeek Chat                      | d      |
| 08/16/2024  | OpenAI    | OpenAI GPT OSS 20B                 | d      |

> TODO: What's going on with reasoning? Although every model came up with the same answer, the reasoning ones had different reasoning traces. Maybe reasoning is just annotating the residual stream and not actually affecting the output? Is reasoning real?

> TODO: Replicate on the smallest model that can be hooked up to interpretability tools and figure out why the wrong answer is chosen. See if the pattern is consistent across different models.

### Is everyone training on the same data?

The most basic explanation for this phenomenon is that these models were trained on similar datasets. As I recall from distributed systems class in undergrad, Google's crawl data was only around 8 terabytes uncompressed. I would guess that the web has grown significantly since then. [Common Crawl](https://commoncrawl.org/) has a text portion of about 8 terabytes compressed. Running the text index through Claude to estimate its size gives me about 20TB uncompressed, surprisingly small compared to what I thought it would be. Maybe there's about 10x more useful text data out there... and even then it would easily fit on a single machine. It's reasonable to think that everyone could be training on the same data since it's not that hard to gather most of it.

The common training data for most LLMs likely consists of:

- Open web / crawled data ([Common Crawl](https://commoncrawl.org/), [FineWeb](https://github.com/huggingface/fineweb-2), [Wikipedia](https://wikipedia.org/), etc.)
- More "information-rich" caches of text like books, academic papers, paywalled sites
- In some cases, output from other LLMs (Sometimes DeepSeek says it's ChatGPT)
- Maybe pirated materials, such as Anna's Archive, The Pile, or Books2.

There really doesn't seem to be that much good text data out there. So, as we train more and more models towards the same distribution target, we're likely to see more convergence. In the limit, the only thing differentiating models will be things other than being able to generate an "in distribution" answer, it will be more about alignment and other model features, such as efficiency and interpretability.

> Note: I suppose if some labs strike exclusive data deals, such as [Reddit's deals with Google and OpenAI](https://securityonline.info/reddit-cashes-in-on-ai-google-and-openai-pay-130m-for-user-data/), that could also be a differentiator.

If models converge to the same abilities, then alignment and other features of the model, such as efficiency and interpretability, will become increasingly important. Also, data deals will become more important as useful and freely available data becomes more scarce.

## Looking Forward

As we move toward increasingly powerful models, will we see greater diversity in their outputs, or will they continue to experience convergent evolution, clustering outputs around the same learned distribution due to a lack of novel data? If model architectures are just increasingly better at representing the data, then the real important thing is the data. Also, if everyone eventually converges to the same data and resulting model abilities, then alignment is all that matters.
