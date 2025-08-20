---
title: "Indistinguishable from Magic"
date: 2025-08-17
draft: false
description: "Trying to understand LLM's"
tags: ["learning", "AI", "LLM"]
summary: "Large Language Models are magic. It's as if we threw text into a pressure cooker and intelligent life emerged."
showSummary: true
showHero: false
---
# Indistinguishable from Magic

{{< figure src="featured.jpg" alt="Ex Machina - showing off the AI brain" >}}

> "Any sufficiently advanced technology is indistinguishable from magic."
> - Arthur C. Clarke

Large Language Models are magic. They've become the artificial intelligence foretold by science fiction, yet no satisfying explanation exists for how they work. It's as if we threw text into a pressure cooker and intelligent life emerged.

As a kid, I was nerd-sniped by magic tricks. I spent countless hours figuring out how they worked. That natural curiosity followed me throughout life. Computers, the Internet—these seemed magical at first, but they were well-documented and could be understood with enough effort. LLMs, however, remain stubbornly mysterious despite rapid advancements that suggest someone, somewhere, knows how they work -- how lossy compression and decompression of data seems to have created intelligence.

Yet hunting around reveals even the insiders at frontier labs are [still working](https://www.anthropic.com/research) to understand the inner workings of LLMs. Models continue to march ahead in capabilities, but the underlying mechanisms remain elusive. After speaking with people who work directly on LLMs and also doing a bit of background reading, I've come to realize something that insiders already know: we possess, at best, piecewise knowledge that lifts the edge of veil just a little bit at a time.

In 2019, OpenAI's GPT-2 made waves by generating text that could masquerade as human-written. People worried it would flood the internet with AI-generated articles designed to capture attention and ad dollars. I initially dismissed it as merely a mega-sized hidden Markov model—a "[stochastic parrot](https://en.wikipedia.org/wiki/Stochastic_parrot)" repeating patterns without understanding.

Then came ChatGPT.

Released quietly in late 2022, it exploded into public consciousness. Suddenly, millions were chatting with a GPT model post-trained with [RLHF (Reinforcement Learning from Human Feedback)](https://huggingface.co/blog/rlhf). Many couldn't distinguish between the chatbot and a human. The Turing Test, an ambitious goal that was perpetually on the horizon, was passed in the blink of an eye.

We're living a timeline sci-fi movies warned us about. The 2014 film ["Ex Machina"](https://en.wikipedia.org/wiki/Ex_Machina_(film)) depicted a near future where an AI is created by distilling online data into artificial brains installed in humanoid robots in an attempt to pass a physical Turing Test. With humanoid robots and GenAI startups springing up everywhere, fiction has become reality with startling speed. The film also presciently highlighted something we're grappling with now: the critical importance of understanding how AIs actually work, and the implications for AI safety. (Spoiler: It's important.)

In my next post I'll highlight an anomaly I observed while poking around LLMs and how that led me to start pulling on the thread of how LLMs work.
