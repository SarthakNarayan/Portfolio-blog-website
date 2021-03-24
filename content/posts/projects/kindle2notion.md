---
title: Kindle2Notion
cover: /media/image-notion2py-2.png
date: 2021-02-07T10:41:21.188Z
description: To organize Kindle highlights to Notion Pages
tags:
  - project
  - Python
---
When I read books on my kindle, I generally like to take highlights to revisit them in the future. The only problem being I cannot go through those points as quickly as I would like since I have to scroll through the whole book. Although Amazon stores your highlights, it is only for books you have bought from the kindle store. Readwise was one of the solutions that came to my mind to make my highlights more accessible by exporting them to Notion. But it had two caveats: it was a paid software, and it also only worked for books that were bought from the kindle store.
So while looking for a solution, I came across an unofficial <a href="https://github.com/jamalex/notion-py" target="_blank" rel="noopener noreferrer">python API</a> for Notion. By exploring it more and understanding the format in which the clippings were stored, I could automate transferring it to Notion. The best part is you can do it for any book as long as you understand API's working and extract the highlights from that book. I have linked my GitHub repository for the code and instructions if someone would like to try it out. 

<p style="text-align: center;"> The images given below show how 800+ lines of text were neatly organized into notion pages. </p>

<p style="text-align: center;"> From </p>

![Image of 800+ lines of text](/media/image-notion2py-1.png "800+ lines of text")

<br />

<p style="text-align: center;"> To</p>

![Image of board view of notion](/media/image-notion2py-2.png "View of organized books in notion")

![Image of example of contents inside each page](/media/image-notion2py-3.png "Example of contents inside each page")

<p style="text-align: center;">

<a href="https://github.com/SarthakNarayan/Notion2Kindle" target="_blank" rel="noopener noreferrer">Link to GitHub</a>

</p>

<p style="text-align: center;">

<a href="https://www.notion.so/sarthaknarayan/2a1eb904ff364534b12168647528bdf6?v=b2db3e862adc4f32b9574ed6c2ea186c" target="_blank" rel="noopener noreferrer">Link to the Notion View</a>

</p>