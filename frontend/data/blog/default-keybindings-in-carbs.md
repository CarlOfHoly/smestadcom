---
publishDate: "Oct 29 2022"
title: "Default keybindings for my custom installation of Arch Linux"
description: "An overview of the most important on used keybindings. Based on Luke Smith's LARBS."
excerpt: "An overview of the most important on used keybindings. Based on Luke Smith's LARBS."
image: "~/assets/images/arch_colorful.jpg"
category: "Tutorials"
tags: [carbs, tricks]
---

This article is about all the different keybindings in my custom setup of Arch Linux.
It is based on Luke Smith's LARBS project, and is therefore named CARBS (Carl's Auto-Rice Bootstrapping Scripts) as a tribute to that project.
I use vim keys (h/j/k/l) to navigate around as much as possible so many of the bindings are based on that.

## General Bindings

- Mod+Enter - Spawn terminal (st)
- Mod+q – Close window
- Mod+d – dmenu (For running commands or programs without shortcuts)
- Mod+j/k – Cycle thru windows by their stack order
- Mod+Space – Make selected window the master (or switch master with 2nd)
- Mod+h/l – Change width of master window
- Mod+z/x – Increase/decrease gaps (may also hold Mod and scroll mouse)
- Mod+a – Toggle gaps
- Mod+A – Gaps return to default values (may also hold Mod and middle click)
- Mod+Shift+Space – Make a window float (move and resize with Mod+left/right click).
- Mod+s – Make/unmake a window “sticky” (follows you from tag to tag)
- Mod+b – Toggle statusbar (may also middle click on desktop)
- Mod+v – Jump to master window


## Window Layouts
- Mod+t – Tiling mode (active by default)
- Mod+T – Bottom stack mode (just like tiling, but master is on top)
- Mod+f – Fullscreen mode
- Mod+F – Floating (AKA normie) mode
- Mod+y – Fibonacci spiral mode
- Mod+Y – Dwindle mode (similar to Fibonacci)
- Mod+u – Master on left, other windows in monocle mode
- Mod+U – Monocle mode (all windows fullscreen and cycle through)
- Mod+i – Center the master window
- Mod+I – Center and float the master window
- Mod+o/O – Increase/decrease the number of master windows

## Launching Programs
- Mod+r – lf (file browser/manager)
- Mod+R – htop (task manager, system monitor that R*dditors use to look cool)
- Mod+e – neomutt (email) – Must be first configured by running mw add.
- Mod+E – abook (contacts, addressbook, emails)
- Mod+m – ncmpcpp (music player)
- Mod+w – Web browser (Chromium by default)
- Mod+W – nmtui (for connecting to wireless internet)
- Mod+n – vimwiki (for notes)
- Mod+N – newsboat (RSS feed reader)
- Mod+F4 – pulsemixer (audio system control)
- Mod+Shift+Enter – Show/hide dropdown terminal
- Mod+’ – Show/hide dropdown calculator
- Mod+D – passmenu (password manager)

## System Commands
- Mod+BackSpace –Choose to lock screen, logout, shutdown, reboot, etc.
- Mod+F1 – Show this document
- Mod+F2 – Watch tutorial videos on a subject
- Mod+F3 – Select screen/display to use
- Mod+F4 – pulsemixer (audio control)
- Mod+F6 – Transmission torrent client (not installed by default)
- Mod+F7 – Toggle on/off transmission client via dmenu
- Mod+F8 – Check mail, if mutt-wizard is configured. (Run mw add to set up.)
- Mod+F9 – Mount a USB drive/hard drive or Android
- Mod+F10 – Unmount a non-essential drive or Android
- Mod+F11 – View webcam
- Mod+F12 – Rerun keyboard mapping scripts if new keyboard is attached

