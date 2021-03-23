---
title: Gaze Tracking
cover: /media/gaze-tracking-cover-image.png
date: 2019-08-21T06:10:16.015Z
description: To build googles which could find where the user was looking,
  duration of the attention on that object and type of the object.
tags:
  - project
  - Python
  - Deep-Learning
  - PyTorch
---
The goggles had three camera modules, two for tracking the pupil movement and the third for mapping the gaze to the real world. Computer vision algorithms were used for detecting the pupils, and SSD was used for object detection. Parameters like pupil velocity and acceleration were calculated for further statistical analysis. A GUI was made using Tkinter to make it easy to use.

<p style="text-align: center"> Camera placement on goggles </p>

<div style="text-align: center"> 

![Image of top view camera placement of googles](/media/gaze_tracking2.jpeg "Top view")

![Image of side view camera placement on googles](/media/gaze_tracking1.jpeg "Side view")

</div>

<p style="text-align: center"> Working video </p>

<Embed
  src="https://www.youtube.com/embed/5lzAPG3GL5c"
/>