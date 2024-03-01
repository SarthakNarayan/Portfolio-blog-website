---
title: Creating my digital garden using Obsidian and mkdocs
cover: /media/obsidian-publish-github-action/cover-obsidian-publish-github-action.webp
date: 2022-06-27
description: How I created a custom GitHub action to publish my obsidian vault to the web using mkdocs and netlify
tags:
  - TypeScript
  - devops
  - Docker
  - automation
  - project
  - GitHub Actions
draft: false
hide: false
---

I have always wanted to share what I learn and the notes I take learning with others. After I moved from Notion to Obsidian for note-taking there was no easy way to do this. At least not cheaply. Obsidian does offer a way to publish your vault but it's quite pricy for me.

So I started looking for alternate ways to publish my notes. I tried searching for available solutions but couldn't find anything that's when I decided to make something on my own. I came across mkdocs (a documentation generator tool written in Python) which could easily convert markdown files to static HTML, CSS, and JS files. This was all I needed to publish my obsidian vault to the web.

Obsidian's markdown format is slightly different than mkdocs markdown format. So I started working on a parser that could parse the contents of my obsidian vault and then convert its markdown to a format that is acceptable to mkdocs.

I also wanted an automated system where I don't have to worry about doing anything to publish my vault to the web. I just save the contents in my vault, run a script and the changes should be there. This is when I decided to make a GitHub action to integrate it with my parser. This meant I had an end-to-end system where I don't have to worry about anything.

I use Netlify for serving my static content.

### References/Links

- [My Digital Garden](https://notes.sarthaknarayan.net/)
- [Link to GitHub Action](https://github.com/project-cool/obsidian-publish-action)
- [Link to Parser](https://github.com/project-cool/obsidian-to-mkdocs)
- [Link to Squidfunk Theme](https://squidfunk.github.io/mkdocs-material/)
