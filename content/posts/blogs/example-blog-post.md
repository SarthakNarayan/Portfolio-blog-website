---
title: "Using bookmarklets "
cover: /media/using-bookmarklets-cover.jpg
date: 2021-05-29T15:02:48.381Z
description: This post shows how you can use bookmarklets to toggle the
  visibility the YouTube control panel.
slug: bookmarklets
tags:
  - post
draft: false
---
This post is a step by step process on how you can use bookmarklets to toggle the visibility of the YouTube control panel using simple JavaScript. So how did I get this idea? 

Well, apart from recreation I use YouTube for learning a lot of new things. So in the process of learning new things, I always make notes which I can refer to in the future. For making notes sometimes I take screenshots of the content by pausing playback. But as we all know when you pause playback in YouTube you have the control panel and a shadow at the bottom that cannot be removed. Although these are minor things I don't like them when present in my screenshots. Hence to resolve this issue I thought of making a bookmarklet. 

Another question I pondered on was whether I should use a bookmarklet or a browser extension. Since I had to do simple DOM manipulations bookmarklet was the easiest and the fastest option. Some differences between a bookmarklet and an extension are:

* A bookmarklet is activated only when you click it. A browser extension, on the other hand, is always running in the background
* An extension can take more resources and cause the browser to slow down.
* Apart from speed, bookmarklets are also safer than extensions. Some extensions are known to be malicious, and they gain access to more information stored in your browser than what a bookmarklet does. A bookmarklet will only read the data that you send to any website you visit. An extension can tap into your browser settings too.
* A bookmarklet isn't dependent on the browser, while extensions are made for particular browsers. You can use any bookmarklet in any browser, and it works exactly the same way.

With differences out of the way we can focus on the code.

```javascript
let data = document.getElementsByClassName('ytp-chrome-top')[0].style.visibility;
let brand = document.getElementsByClassName('branding-img')[0]

if (data === "hidden"){
  document.getElementsByClassName('ytp-chrome-top')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-chrome-controls')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-gradient-top')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-gradient-bottom')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'visible';
  if (brand) {
    document.getElementsByClassName('branding-img')[0].style.visibility = "visible"
  }
}
else {
  document.getElementsByClassName('ytp-chrome-top')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-chrome-controls')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-gradient-top')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-gradient-bottom')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'hidden';
  if (brand) {
    document.getElementsByClassName('branding-img')[0].style.visibility = "hidden"
  }
}
```

We can see that code is nothing but simple DOM manipulations. The class names can be found using element selector in inspect element (CTRL + SHIFT + I). Hover it over any attribute to get its class name. 

Example Image

![](/media/image-3-bookmarklets.png)

Once we are done writing the code we have to convert it so that we can use it as a URL for a bookmark. There are sites that can do this conversion. [JS to bookmarklet conversion website](https://www.yourjs.com/bookmarklet/).

Paste your code in the JS section and click on convert to Data URL button. Wait for the conversion. Once done copy the converted code.

Now follow the steps given below

![](/media/image1-post-bookmarklets.png "Right-click on the bookmark bar (below the address bar) and then select Add page")

![](/media/image2-post-bookmarklets.png "Paste the code in the URL section, name the extension and save it.")

Now go to any YouTube video and click on the bookmarklet and it should be working as expected.

This article was to show that you can do a lot of things using bookmarklets.