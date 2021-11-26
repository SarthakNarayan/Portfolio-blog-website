---
title: Automate sending files to an FTP server
cover: /media/ftp-automation/cover-ftp.jpg
date: 2021-11-07T09:21:35.034Z
description: In this blog post I try to provide a detailed explanation on my
  project FTP-Automation
tags:
  - automation
  - Python
  - project
draft: false
hide: false
---
As developers, we love automation, and I am no different. I want to share an automation project which I worked on recently. Before going into what I did, I want to explain what I wanted to achieve. So whenever I am out for a walk or gym, I like to listen to podcasts or YouTube videos. The catch is that I feel that there are some YouTube videos that I am better of listening to rather than consuming it along with the video. One way of achieving this is to have a YouTube Premium subscription and let the video play in the background. But I feel this is an unnecessary wastage of bandwidth, and there are other platforms where people have excellent podcasts like twitch. I thought it would be better to download the podcasts/videos and have them with me. It would also be helpful if there are connectivity issues.

# So what does this project do?

So when you provide the URL of any video to this project it

* Downloads the video
* Strips the audio
* Increases the audio playback speed (since we all know 1x is too slow :))
* Log the sequence of events and the errors if there are any to files. (I am very proud of adding logging to this project since it has saved me a ton of time in debugging. Also, if something breaks I know where to look)
* Send the modified audio file to the FTP server running on my android phone

# Prerequisites before running the project

There are some prerequisites before you try to clone the project and run it

* You should have an android phone. I don't know if iPhone allows you to run an FTP server.
* Download the app WiFi FTP Server from the play store for creating the FTP server on mobile.
* Linux machine since we have a shell script to run. Mac was giving me some permission issues
* You must have ffmpeg installed in your system.
* The mobile running the FTP server and the Linux machine should be on the same private network

[Code and instructions on how to run it.](https://github.com/SarthakNarayan/FTP-Automation)

If you are stuck feel free to reach out to me.