---
title: Test blog
cover: /media/sai-kiran-anagani-tjbk79tarie-unsplash.jpg
date: 2021-11-07T09:21:35.034Z
description: test blog
slug: nono
tags:
  - automation
  - python
  - project
draft: false
hide: true
---

# Commands

If you are using id for image or container first few would be fine as long as they are unique.

<details>
<summary>I could use some help...</summary>
<p>

```python
def helloworld():
  print("hello")
```

</p>
</details> 

- To get docker version
    
    ```docker
    docker version
    ```
    

---

### Containers

- Making containers from docker images
    
    ```docker
    docker run image_name/id
    ```
    
    This will run an **new** instance of the `image_name`. **If the image is not present on the host then it will go to docker hub to fetch that image.**
    
- Giving a name to the container while creating one
    
    ```docker
    docker run --name name_you_want image_name
    ```
    
- Listing containers
    
    ```docker
    docker ps
    ```
    
    This will list all the **running containers**. Each container gets a random id and name (if not specified by the user) created by docker. This is only good for listing basic information. For more advanced option we use [this]()
    
    ```docker
    docker ps -a
    ```
    
    Lists all **running and stopped containers**.
    
- Starting/Stopping/Restarting containers
    
    **Run command always creates a new container.** 
    
    If you want to start a stopped container we use
    
    ```docker
    docker start name_container/id
    ```
    
    ```docker
    docker stop name_container/id
    ```
    
    ```docker
    docker restart name_container/id
    ```
    
- Removing containers
    
    We can **only remove stopped containers**.
    
    ```docker
    docker rm name_container 
    ```
    
    We can verify it using the `docker ps -a` command. If he hadn't removed the container after stopping it it would be listed in `docker ps -a`.
    
- Renaming containers
    
    ```docker
    docker rename original_name new_name
    ```
    
- Starting containers in detached mode
    
    This is needed so that it won't block your terminal with the output. Suppose you start a node application in docker then it would block your terminal and if you try to free up your terminal using CTRL + C then it would stop the container. 
    
    In case of detached mode it won't block the terminal.
    
    ```bash
    docker run -d image_name/id
    ```
    
- Reattaching a detached container
    
    ```docker
    docker attach id/container_name
    ```
    
- Execute a command in a running container
    
    You can only run commands if the container is running.
    
    ```bash
    docker exec container_name cat /etc/hosts
    ```
    
    ```bash
    docker exec -it container_name/id /bin/bash
    ```
    
    This is also useful in debugging.
    
    Suppose you feel the environment variables are not being set properly then you can go inside the container (running) using `docker exec -it container_name/id /bin/bash` and then run `env` to see what environment variables have been set.
    
- Adding and changing users in container
    
    One thing to be noted is that whenever you go to interactive shell of a container the id is `root@container_id`. This means you are accessing it as the root user. The best practice is to create users using 
    
    ```docker
    adduser username
    ```
    
    This will ask you for your unix password and then you can just do enter to skip the other details. To change the user from root to username we use
    
    ```docker
    su username
    ```
    
    We notice that id becomes username@container_id. If you use `exit` you will return back to root and one more `exit` will take you out of the container.
    
- Starting terminal as a different user
    
    This should only be done after you have created a user for that container
    
    ```docker
    docker exec -it -u username container_name/id /bin/bash
    ```
    
- Changing the hostname of the container
    
    Whenever we start a container we see root@container_id. This is ok if we have one or two containers but it gets problematic when we have multiple containers and we have to docker ps -a again and again to see which container is for what. To tackle this inside the container we replace the id with some kind of hostname. But this hostname won't be visible in docker ps -a command.
    
    ```docker
    docker run -it -h test image_name bash
    ```
    
    - Output
        
        ![Untitled](Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled.png)
        
- Run containers ephemerally
    
    Suppose you are only interested in the output of the container but every time you do a docker run a new container is created and you have to delete it every time. To delete a container after its done running we can use `—-rm`
    
    ```bash
    docker run --rm image_name/id 
    ```
    
- Delete all stopped containers
    
    The following commands allow us to delete all stopped containers at once and to reclaim the disk space they’re using
    
    ```bash
    docker container prune
    ```
    
- How to keep a container always running in the foreground
    
    ```bash
    docker run image_name/id tail -f /dev/null
    ```
    
    This would keep the docker running, it will occupy your terminal and you won't be able to close it using CTRL + C. To close it you will have to stop the container
    
    But once it is running in the foreground you can spawn multiple terminals and then connect to this container using `docker exec -it container_name/id`.
    

---

### Copying files

- Copying files from docker containers to our machine
    
    ```docker
    docker cp containe_name:file_location location_in_our_filesystem 
    ```
    
- Copying files from our machine to docker containers
    
    This can be done even if the container is not running.
    
    ```docker
    docker cp location_in_our_filesystem containe_name:file_location
    ```
    

---

### Images

- Listing images
    
    To see a list of images present on the system
    
    ```docker
    docker images
    ```
    
- Removing images
    
    ```docker
    docker rmi image_name
    ```
    
    <aside>
    ⛔ You must stop and remove all the containers running of that image before deleting that image
    
    </aside>
    
- Downloading images
    
    To download images from docker hub 
    
    ```docker
    docker pull image_name
    ```
    
    When we did a docker run earlier it pulled the image and then ran it in this case we are only pulling the image and not running it.
    
    By default it will pull the latest one but we can give it tags
    
    ```docker
    docker pull redis:4.0
    ```
    
- List dangling images
    
    ```bash
    docker image ls -f dangling=true
    ```
    
- Remove all dangling images
    
    ```bash
    docker image prune
    ```
    
- View the creation history of images
    
    This also shows how much space each command takes.
    
    ```bash
    docker history image_name/id
    ```
    
    - Example
        
        ![Untitled](Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%201.png)
        

---

### Volumes

- Listing all the volumes
    
    ```bash
    docker volume ls 
    ```
    
- Attaching volumes
    
    ```bash
    docker run -v volume_name:/container/location image_name/id
    ```
    
    We can also use `—-volume` or `—-mount`
    
- Create a volume
    
    ```bash
    docker volume create volume_name
    ```
    
- Inspect a volume
    
    ```bash
    docker volume inspect volume_name
    ```
    
- Remove a volume
    
    ```bash
    docker volume rm volume_name
    ```
    
- Delete volumes not used by any container
    
    ```bash
    docker volume prune
    ```
    
    - Example
        
        []()
        

---

### Networking

- List all the networks
    
    ```bash
    docker network ls
    ```
    
- Inspect a network
    
    ```bash
    docker network inspect network_name
    
    Eg:
    docker network inspect bridge
    ```
    
- Creating a network
    
    ```bash
    docker network create network_name
    ```
    
    There are other parameters that can be specified while creating a network like name of the network, subnet and other things. 
    
    - Example
        
        ![Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%202.png](Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%202.png)
        
- Attaching a custom network while running a container
    
    ```bash
    docker run --network custom_network image_name/id
    ```
    
- Remove unused networks
    
    ```bash
    docker network prune
    ```
    

---

### Docker compose

For any commands to work either you should be in the directory containing the docker-compose file or you should specify the location of the file.

- Check if docker compose is intalled
    
    ```bash
    docker-compose -v
    ```
    
- Creating and starting containers
    
    ```bash
    docker-compose up
    ```
    
- Creating and starting containers in a detached mode
    
    ```bash
    docker-compose up -d
    ```
    
- Stopping and Removing containers
    
    ```bash
    docker-compose down
    ```
    
    It also removes the network.
    
- Starting/stopping and restarting the containers
    
    ```bash
    docker-compose start/stop/restart
    
    # if you add a service name in front then the action will be done only for that service
    ```
    
- Removing containers
    
    ```bash
    docker-compose rm
    
    # to remove a partiular stopped service container
    docker-compose rm service_name
    ```
    
- Starting only specific services
    
    ```bash
    docker-compose up service_name
    ```
    
- Specifying the docker-compose file (-f)
    
    ```yaml
    docker-compose -f mongo.yaml up/down
    ```
    
    If the file name is `docker-compose.yml` then there is no need of specifying the file while using `docker-compose up` if you are in the same directory.
    
- Checking if the docker-compose file is valid
    
    ```bash
    docker-compose config
    ```
    
    If you get contents of your file as the output then it means your file is fine.
    
    For this to work the name of the file should be `docker-compose.yml` and you should be in the same directory as the file. 
    
    - If you are not in the same directory or the file name is different you need to specify it using `-f` flag. Example
        
        ![Untitled](Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%203.png)
        
- Building an image
    
    We have to do this if the compose file consists of a build step before using the image. Once the image is built we can use `docker-compose up` to start the containers.
    
    ```bash
    docker-compose build 
    
    # build without using cache
    docker-compose build --no-cache
    
    # build a particular service
    docker-compose build service_name
    ```
    
- Build image and start the containers
    
    ```bash
    docker-compose up --build
    ```
    
- List the container in the current stack
    
    ```bash
    docker-compose ps
    ```
    
- List the top processes
    
    ```bash
    docker-compose top
    ```
    
- List the logs of any one container in stack
    
    ```bash
    docker-compose logs -f service_name
    
    # service name as given in the compose file 
    ```
    
- Scaling applications
    
    ```bash
    docker-compose up --scale service_name=number
    ```
    
    If that application has exposed ports then there will be port conflicts.
    
- Execute a command in a running container
    
    Defaults interactively
    
    ```bash
    docker-compose exec service_name command
    ```
    
    If you don't want to go in and just run some command then
    
    ```bash
    docker-compose exec -d service_name command
    ```
    
- View the images created by compose
    
    ```bash
    docker-compose images
    ```
    

---

### Miscellaneous

[Using ubuntu command line on docker](Commands%208cbc26b218d44b88829cfb9f273d1196/Using%20ubuntu%20command%20line%20on%20docker%2011e86027d7b74136bd53b821b5f510e2.md)

- Making changes to docker images
    
    Suppose on the bare ubuntu image you have installed some packages and you want to save that image. To do that you first start a container and install those packages and then exit from the container.
    
    ```docker
    docker commit container_name/id name_image
    ```
    
    This will add an image with image_name with the configurations of the container container_name and now this can be used as base image for other containers.
    
    Although this is not ideal and the best thing to do would be use a Dockerfile.
    
- Transferring images from one host to another
    
    ```docker
    docker save -o location/myfile.tar image_name
    ```
    
    To load the image
    
    ```docker
    docker load -i location/myfile.tar
    ```
    
- Checking logs
    
    To get the logs (console output of the application) from the container. This is very useful debugging.
    
    ```docker
    docker logs container_name
    ```
    
- Get extensive details about the docker container
    
    ```docker
    docker inspect container_name/id
    ```
    
    It returns all details of a container in JSON format.
    
- Cleaning up unnecessary system space occupied by docker
    
    ```bash
    docker system prune
    ```
    
    ![Untitled](Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%204.png)
    
    ![Untitled](Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%205.png)
    
- Space occupied by docker file system
    
    ```bash
    docker system df
    ```
    

---

### Port mapping

- Port Mapping Basics
    
    ![Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%206.png](Commands%208cbc26b218d44b88829cfb9f273d1196/Untitled%206.png)
    
    Docker container port 5000 is being mapped to the docker host (the user) port 80. In this way we can start multiple instances of the same container by routing them to different ports. Same port cannot be used for mapping. 
    
    ```bash
    docker run -p hostport:dockerport image_name
    ```