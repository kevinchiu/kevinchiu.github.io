---
title: "Something Strange with LLMs"
date: 2025-08-19
draft: true
description: "a description"
tags: ["Learning", "AI", "LLM"]
summary: ""
---


Late last year around 10/2024, I started noticing something strange in LLMs. Multiple models from different providers would get the same question wrong in the same way. This inspired a chain of thought that I have been following for some time.

1. Why do LLMs from different providers answer the same question in the same way and get the same wrong answer?
    1. They probably trained on similar data.
    2. The data probably comprised of the text of the Internet plus a giant pile of digitized books.
    3. The giant pile of digitized books is no longer available online, creating a temporary barrier to entry for new models.
2. Even if they trained on the same data, they would create different answers based on different model architecture choices wouldn’t they?
    1. No, it turns out that models are just doing their best to represent the probability distribution that is fed into them. It’s like a case of corner optimization where everyone strives for the same definition of perfection.
    2. This also means that structures found in one model probably exist in others (at least in the distribution prediction part.)
