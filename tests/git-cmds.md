git remote -v    //to check linked remote address
git remove repo url       // check syntax
git remote add repo url  //correct


Jenkins
=======
each time dependencies will install to run there
----------------------------------------------



plugins
=======
nodeJS
allure
git server

Tools
=====
Nodejs--> add installer--> give name
Allure--> add installer--> give name 

select ok to save


homepage --> newitem--> project name--> freestyle project


environment
-----------
windows batch comd
------------------
tools-> nodejs installations
        allure installations 

call npm install  - node modules
call npx playwright install chromium - playwright browser/ only install chromium
call npx playwright test - to run test

git rm -r allure-results
-------------------------
*************************************
i am asking this cmd delete the folder only in local i.e in working direct and then we add . and commit changes to push ?

No, you do not need to run git add . after git rm.
The command git rm -r allure-results actually does two things at once:
1. Deletes the folder from your computer (working directory).
2. Automatically stages the deletion (which is what git add normally does).

Why git add . isn't needed

• Regular delete (rm -rf): If you delete a folder using your computer's file explorer or a normal rm command, Git notices it's gone, and you have to run git add . to tell Git to record that deletion.
• Git delete (git rm): Because you used git in front of rm, Git deletes the folder and runs git add on that deletion for you behind the scenes.

What your workflow looks like

Since the change is already staged, your remaining steps are just:
1. git commit -m "Remove allure-results"
2. git push
(Note: Once you push this commit, the folder will also be deleted from your remote repository like GitHub or GitLab.)
Would you like to know how to keep the folder on your computer while still deleting it from GitHub, or did you already run the commit?
**************************************




git ignore add allure-results

H / 


admin1 /qatesting

jenkins
-------
user1 devaraj jenkins qatesting Update Center - Manage Jenkins - Jenkins

build periodically -> it will run in schelleded time
poll SCM -> it will run only when changes has done in github(push from local or directly in github) within the config time




*****************
<input tag
//input[contains(text(),'English')]

Fixing the typo from test() to text() makes the XPath syntactically valid, but it still won't find anything on a standard webpage.
Because <input> tags are self-closing (they don't have a closing </input> tag), they cannot hold inner text—so text() will always evaluate to empty on an <input>.
******************


