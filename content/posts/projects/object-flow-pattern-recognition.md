---
title: Object Flow Pattern Recognition
date: 2021-03-22T05:42:40.867Z
description: An OpenCV and Deep Learning project aimed at tracking objects.
tags:
  - project
  - OpenCV
  - Deep-Learning
---
The project aimed to track the motion of any object as specified by the user and recognize the shapes drawn by him/her. Tracking was achieved in two different ways. OpenCV's **Lucas Canade optical flow algorithm** was used for tracking in unpredictable lighting conditions, whereas **HSV color filtering tracking** was used for more reliable lighting conditions. Lucas Canade optical flow algorithm's main drawback was that objects must be moved slowly; otherwise, the tracker would lose it. The image obtained was then saved and passed to a neural network.
In deep learning, **ResNet** was used for classification. Transfer learning and data augmentation were used to overcome the problem of lack of training data.


Lucas Kanade based object tracking\
<Embedsrc="https://youtu.be/to8-a4RE6pk"/>

HSV (Color) based object tracking\
<Embedsrc="https://youtu.be/ZF7Sug0LiTk"/>

**Language:** Python\
**Deep Learning Framework:** Keras\
**Software:** OpenCV