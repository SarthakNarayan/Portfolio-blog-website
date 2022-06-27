---
title: Creating a custom GitHub action from scratch
cover: /media/blog-publish-github-action/cover-blog-publish-github-action.png
date: 2022-04-04
description: How I created a custom GitHub action to cross post blogs to different blogging websites
tags:
  - Python
  - devops
  - Docker
  - automation
  - project
  - GitHub Actions
draft: false
hide: false
---

Recently I worked on a project which involved making a custom GitHub action to publish blogs to different blogging websites. I also <span style="color: #ffcccb; font-weight: bold">published the action on the GitHub actions marketplace</span> so others can use it easily.

The blogging websites covered by the action are `dev.to, hashnode and medium`. It is also straightforward to integrate other blogging websites if they have APIs.

I will refer to my GitHub action in the blog as just action.

## So what was the motivation for the project, and why use something like GitHub actions?

As developers, we learn new things every day, and some of us love to share them with others. Be it on LinkedIn, our website, or other blogging platforms. We want to share what we have learned with the maximum amount of people, but reposting blogs on different blogging platforms in various formats can be a hassle. For example, for posting a blog, you have to use the online editor of blogging websites and then upload the same images and content repeatedly, which is a tedious process and should be automated.

With my action, the only thing you have to do to publish your blogs to other platforms is to <span style="color: #ffcccb; font-weight: bold">upload the blog(in markdown format) and images associated with it to a GitHub repository</span> and let the action take care of the rest.

The main reason for using GitHub actions was that the <span style="color: #ffcccb; font-weight: bold">end-user wouldn't have to worry about provisioning machines for this workflow. It is an end-to-end solution </span> where you only have to worry about your content : )

## Some GitHub actions terminology

- **Workflow:** Whenever an action is triggered, it runs a workflow. Each workflow is a YAML file.

- **Jobs:** A workflow file can contain multiple jobs which run in parallel unless any dependency is specified.

- **Steps:** A job can contain multiple steps to complete the job.

For example, pushing the code to the repository would trigger the workflow. The workflow would use the action. Now one of the jobs in the workflow can be to test the python code. Several steps can be involved in this job like downloading the code, setting up all the dependencies, and in the end testing the code.

In short:
`Events (example, push) trigger workflows that use actions.`

## So what goes on behind the scenes?

- A workflow is triggered when a push (event) is made to the repository, which uses my action.

- Each job in a workflow builds the Dockerfile to create an environment.

- Once built, the docker container is then run on GitHub hosted runners provided by GitHub actions.

- The python code in the runner parses the markdown blog to modify it depending upon the blogging website.

- Then a POST request is made to publish the blog, using the APIs provided by the blogging websites.

- <span style="color: #ffcccb; font-weight: bold">All the images used in the blog are stored on GitHub</span>, so there is no need for any third-party service for storing images.

- <span style="color: #ffcccb; font-weight: bold">Posting to all the blogging websites happens parallelly</span> (since each of them is a particular job), so if one fails for some reason, it won't affect the others.

Refer to the `Readme.md` file in the GitHub repository for detailed instructions on using the action.

## Schematic

![Schematic Diagram](/media/blog-publish-github-action/github-action-schematic.png)

![Sample Output](/media/blog-publish-github-action/github-action-output.png)

## References

[Link to GitHub action repository](https://github.com/aru31/blog-publish-action)

[Link to GitHub action on the marketplace](https://github.com/marketplace/actions/cross-platform-blog-publish)

[Link to Sample repository using action](https://github.com/aru31/test-blog-publish)

Feel free to reach out to me if you need help making custom GitHub actions.
