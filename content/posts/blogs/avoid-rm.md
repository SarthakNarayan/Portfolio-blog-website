---
title: Avoid rm
cover: /media/avoid-rm/cover-avoid-rm.png
date: 2022-02-10
description: A small article on why your should avoid using rm in *nix based OS whenever possible.
tags:
  - post
  - linux
draft: false
hide: false
---

This article discusses why you should avoid `rm` command in `*nix` based operating systems. It is impossible to prevent it entirely since you will need to delete files/folders from your system. But it is generally a good idea to move the files/folders you want to delete to a recycle bin and then delete them after some time. I will also share the script and modification I used to adopt this setup.

But before diving in those of you unfamiliar with `rm`, it is a command used to remove objects such as files, directories, symbolic links, etc. More precisely, `rm` removes reference/pointer to objects from the filesystem. If you have multiple pointers to the file (hard links), then deleting one of those pointers with `rm` leaves the others completely untouched and the data still available. Deleting all of those links still does not touch the data; however, the OS is now free to reuse the previously reserved blocks for storing that data.

It is important to note that the command works silently, and once you delete your files and folders, you won't be able to get them back. At least easily. You can find various "undelete" utilities. But depending on the filesystem, it can get relatively complex.

So I use a custom script that sends it to a recycle bin instead of deleting anything directly. Depending upon your OS, you may or may not have a recycle bin. If you don't have one, you can always make one.

<details>
<summary style="font-size: 22px; font-weight: bold">Bash Script for deletion</summary>
<p>

```bash
#!/bin/bash

# idea -> https://apple.stackexchange.com/questions/17622/how-can-i-make-rm-move-files-to-the-trash-can
[[ -z $1 ]] && echo "No arguments given" && exit 1

for i in "$@"; do
    mv -v "$i" ~/.Trash
done
```

</p>
</details>

This script takes file/folder names as arguments and moves them into recycle bin (in my case, a Trash folder in my home directory). If you have files/folders with spaces between them, wrap them in quotes.

Once you have made this bash script, there are many ways to execute it. One way is creating an alias in your shell's rc file. I use a lot of custom scripts, so I choose not to litter my shell's rc file. I have a folder named mySrcipts, where I keep all my scripts and have added it to my path. This way, I can execute it from anywhere. Also, I don't have file extensions for myScripts; I can use <span style="color: #ffcccb; font-weight: bold">del file_name</span> instead of <span style="color: #ffcccb; font-weight: bold">del.sh file_name</span>.

**Note: File extensions have no meaning in \*nix based systems; they are just there for user's ease, unlike windows.**

The last thing to do is somehow create a safeguard so that you can't use the rm command. For this, I have made a simple modification to my shell's rc file by adding an alias.

<span style="color: #ffcccb; font-weight: bold">alias rm="echo dont use rm, use del to move files and folders to trash"</span>

Now, whenever I try to use `rm` I get this message reminding me that I should use `del` instead.

[Reference](https://stackoverflow.com/questions/21517600/how-does-rm-work-what-does-rm-do/21517832)
