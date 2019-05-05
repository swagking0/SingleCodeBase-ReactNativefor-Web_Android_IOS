# Project_Intraa.net_MobileApp-Web

## Instructions to setup the Project
#### Installing the Project Packege Management software yarn
   [Installation Link](https://websiteforstudents.com/how-to-install-yarn-packege-management-on-ubuntu-16-04-18-04-18-10/)
##### Problem: Not able to access the Internet
    Update the file .npmrc by pasting the below commands:
          http=http://proxyhost/:proxyport
          ssl=false
          registry=http://registry.npmjs.org/
#### Installing the React-Native for the project
   [Installation link](https://code.likeagirl.io/say-hello-world-using-react-native-in-linux-15955986bc44) <br />
    Note: Only concentrate on __first 3 steps__.

#### Installing the watchamn software package (Ubuntu 16.4) for the project
   [Installation Link](https://medium.com/@vonchristian/how-to-setup-watchman-on-ubuntu-16-04-53196cc0227c)
##### Problem: Missing packages important to install
   [Installation Link: pcre](http://www.linuxfromscratch.org/blfs/view/svn/general/pcre.html) <br />
   [Installation Link: readline](https://stackoverflow.com/questions/23085076/readline-readline-h-file-not-found) <br />
   Note: Follow the solution comment with __103 Ticks__.
   
#### Installing the wml software package (Needed to overcome simlink problems)
   [Installation Link](https://github.com/wix/wml/)
   
## Understanding the file structure

## Instructions to Run the Project
        git clone https://github.com/swagking0/Project_Intraa.net_MobileApp-Web.git
        cd Project_Intraa.net_MobileApp-Web/
        yarn   [This command will install all the node_modules needed for running the project]
