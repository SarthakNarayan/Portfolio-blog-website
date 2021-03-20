---
title: Example blog post
cover: /media/cover_image_post_example.jpg
date: 2021-03-20T11:15:28.500Z
description: All the usual blog post.
slug: my-slug
tags:
  - post
---
This is an example blog post. All your blog posts should be here: `content/posts`.

Websites like Reddit, StackOverflow, and GitHub had millions of people using Markdown. And Markdown started to be used beyond the web, to author books, articles, slide shows, letters, and lecture notes.

What distinguishes Markdown from many other lightweight markup syntaxes, which are often easier to write, is its readability. As Gruber writes:

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

## Frontmatter

Metadata for your Markdown.

In this post it looks like this:

Read more about this setting here: [github.com/Chronoblog/gatsby-theme-chronoblog#posts](https://github.com/Chronoblog/gatsby-theme-chronoblog#posts)

## Markdown

This post is a `markdown` file and you can do everything in it that allows you to do markdown.

### Headers

# This is an `<h1>` tag

## This is an `<h2>` tag

###### This is an `<h6>` tag

*This text will be italic*\
**This text will be bold**

### Lists

* Item 1
* Item 2

  * Item 2a
  * Item 2b

### Images

![image-in-post](/media/image-in-post.jpg "This is the title of the image")

[github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog)

As Kanye West said:

> We're living the future so
> the present is our past.

### Inline code

**`js:`**

```javascript
const someFun = (text) => {
  console.log('some ' + text);
};
someFun('text');
```

**`css:`**

```css
.thing {
  font-size: 16px;
  width: 100%;
}
@media screen and (min-width: 40em) {
  font-size: 20px;
  width: 50%;
}
@media screen and (min-width: 52em) {
  font-size: 24px;
}
```

**`jsx:`**

```jsx
<Thing fontSize={[16, 20, 24]} width={[1, 1 / 2]} />
```

What distinguishes Markdown from many other lightweight markup syntaxes, which are often easier to write, is its readability