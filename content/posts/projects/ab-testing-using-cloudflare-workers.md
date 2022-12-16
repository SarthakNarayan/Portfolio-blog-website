---
title: Randomized A/B testing using Cloudflare workers
cover: /media/ab-testing-using-cloudflare-workers/cover-cloudflare-workers.png
date: 2022-12-16
description: A project to perform randomized A/B experiments using a single link with the help of cloudflare workers and its KV (key value) store.
tags:
  - Javascript
  - project
draft: false
hide: false
---

## What is A/B testing?

A/B testing, at its most basic, is a way to compare two versions of something to figure out which performs better. It can be used to compare more than two versions at a time. A common example of A/B testing is testing different variants of the website to find out which variant performs the best.

## What are Cloudflare workers

Cloudflare Workers behave similarly to JavaScript in the browser or Node.js, however, there are a few major differences. **Under the hood, the Workers runtime uses the V8 engine - the same engine used by Chromium and Node.js**. The Workers runtime also implements many of the standard APIs available in most modern browsers.

The differences between JavaScript written for the browser or Node.js happen at runtime. Rather than running on an individual’s machine (for example, a browser application, Workers functions run on Cloudflare edge - a growing global network of thousands of machines distributed across hundreds of locations. This also means that we don't have access to all the APIs that are available in Node.js.

### So can I use external packages while writing code for Cloudflare workers?

Yes. Any package that doesn't use Node.js APIs or can compile to pure JS that can run on service workers should work with Cloudflare workers. For example, we can't use express but we can use lodash.

### Is Cloudflare worker paid?

Cloudflare workers provide a generous free tier of 100,000 invocations per day.

### So can I replace AWS Lambda with Cloudflare workers in my projects?

Probably NOT. Both of them serve different purposes. One major difference between AWS Lambda and Cloudflare workers is that Lambda provides a max execution time of 15 mins whereas _Cloudflare workers provide a max CPU execution time of 10ms (in the free tier)_. The time code spends waiting for network calls is not included in this time. So it is good enough for small projects.

### Does Cloudflare offer any persistence storage to go with the workers or do my applications have to be completely stateless?

Cloudflare has workers KV (A major reason for using workers for this project). **Workers KV is a global, low-latency, key-value data store**. KV supports exceptionally high read volumes with low latency, making it possible to build highly dynamic APIs and websites that respond as quickly as a cached static file would.

## Problem statement / Scenario

The idea of this project came to me when I was working on my final project for the HCI (Human Computer Interaction) course (University of Toronto, MScAC). So basically, for the HCI project, I wanted to A/B test different resume formats and find out which one worked the best based on some questions.

To conduct this experiment properly, I created four different google forms. The only option I now had was to manually send out form links to four different groups of people for conducting the experiment, keeping in mind each group should have almost the same number of participants. Instead, I just wanted a single link for the distribution of these forms so that I didn't have to deal with the hassles of conducting a proper experiment.

## My Solution

It occurred to me that the solution to the problem of equitable distribution of forms via a single link was pretty simple. I just needed a service that would redirect to the appropriate link depending on the number of times a link was redirected to. This can be easily scaled to n different forms.

### Pseudo Algorithm:

I would have n different links as keys in my key-value store with the initial count set to 0 for all of them. Whenever someone visits the public URL on which the worker is running it would query the key-value store to find the URL which was the least visited, increase its count by one and then Redirect to it.

### Why did I use Cloudflare workers?

Upon looking for appropriate solutions I found that Cloudflare workers would be the perfect candidate for fulfilling this experiment since:

- Workers can be published easily to get a public URL.
- It comes with a generous free tier.
- It comes with a KV (key-value store) which can be used as a database.
- An AWS lambda would be overkill for this small task.
- It also has the added bonus of wrangler CLI which does all the heavy lifting of publishing to the Cloudflare workers and setting up the KV.

### Example

I exposed different endpoints to make the application easy to use. I created one for adding links (`POST /keys`), one for getting the number of times a link was visited (`GET /values`), one for deleting all the links, etc.

If you visit https://wrangler-tutorial.sarthak-narayan.workers.dev/ you can see it in action. Currently, it is routing to either https://google.com or https://example.com.

You can also see the number of times these links have been used for redirection by going to https://wrangler-tutorial.sarthak-narayan.workers.dev/values.

## References/Links

- https://developers.cloudflare.com/workers/learning/how-workers-works/
- https://github.com/SarthakNarayan/Wrangler-Tutorial - **Code Repository**
  - Instructions on setting up and running the wrangler CLI can be found on the GitHub repository
