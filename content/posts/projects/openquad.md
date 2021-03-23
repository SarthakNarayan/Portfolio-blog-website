---
title: OpenQuad
cover: /media/openquad_front.jpg
date: 2020-07-15T06:41:09.852Z
description: To build an open source quad copter platform for research work.
tags:
  - project
  - RaspberryPi
  - ROS
  - Docker
---
It can be used for implementing various deep learning and computer vision algorithms such as person tracking, Gesture recognition, Optical flow stabilization, Human Pose estimation, obstacle avoidance, and depth estimation using monocular vision. The drone uses a pixhawk flight controller with RaspberryPi as a single board computer. DJI flame wheel is used for the quadcopter structure with custom mountings for safety measures.
Serial communication is used to communicate between Pixhawk and RaspberryPi. RaspberryPi runs a ROS node that communicates with the ROS node running on the host PC to transfer videos over Wi-Fi. To make the project open-source, easy to develop, and reproducible, simulation environment setup has been dockerized using docker container. Gazebo is used for simulation.

<center> 

![Image of construction and placement of components](/media/openquad_1.jpg "Construction and placement of components")

![Another Image of construction and placement of components](/media/openquad_2.jpg "Construction and placement of components")

</center>

<p style="text-align: center;"> Controlled flight of the Quadcopter </p>

<Embed
  src="https://www.youtube.com/embed/j4qfZbA911A"
/>

<br />

<center>
<a href="https://github.com/OpenQuad-RMI/openquad">Link to GitHub</a>

<br />

<a href="https://hub.docker.com/r/openquad/openquadimage">Link to Docker Container</a>

</center>