# Online React Resume
![Mobile Example](/rd-media/resumeexample.jpg)

### [See Demo](/rd-media/resumeexample.jpg)

## V1
In an attempt to make a React page online version of my professional Resume I threw this project together. It is desktop and mobile responsive. In this current iteration it is fairly bare bones but easy to adapt for yourself. To do that follow these steps:

Create the directory locally that you want to use and clone this down:

`git clone https://github.com/mpenajoia/resume-page.git`

Install the dependencies:
`npm i`

Run the app to get a live working version:
`npm run start`

Open the files in your favorite code editor / IDE; I'm using VS Code.

Navigate to `src/info` and open the `info.json` file. 
![Json Screenshot](/rd-media/jsoninfo.png)
This is just a simple object in a JSON file. Per the screenshot above, so long as you leave the parent keys that are purple (i.e. "social", "header", "tech") the way they are written you won't need to adjust anything inside of the React components. 
That said, replace the other information listed with your own resume criteria. 

Anywhere there is an array you can add more element to it or remove them if need be. Follow the formatting to avoid breaking the functions that live in the components.

**The last key-value pair in your JSON file references a link to your resume. You can delete my link and just leave the quotes blank (i.e. `"resume": "" `). More info for uploading your resume file later is down below.
![Resume Link](/rd-media/resumelink.png)

Any changes made in our `info.json` file will not live update in your browser so after you populate your resume information in the `json` file go to your browser and refresh the page. You should see your resume details now populated on the screen. 

Inside the `src/img` directory you will want to replace my `HeadShot.jpg` file with your own photo. Make sure to rename yours to `HeadShot.jpg`. If you prefer not to have a photo you can just delete mine and it will just be left blank in your version.

Finally, in the `src/doc` directory is where you will want to delete my resume and insert your .pdf or .docx version of your resume (for the download link to work). Then, go to `src/components/Download.jsx` and change the end of line #3 to match the filename of your resume file in the `doc` directory. 

![Download Resume](/rd-media/download.png)

Once you are satisfied with your content you can make a deployed version of this for your own use. 

I self hosted mine so if you use a service like bluehost, dreamhost, hostgator, hostinger you can follow along. If not, I currently don't have step by step instructions. 

Make the build version of your site
`npm run build`

In your project directory you will now find a `build` folder. You will upload all the contents that are in this folder to your hosting provider.

Your hosting provider likely has cPanel that you log into, and you can navigate to the `File Manager`.

Decide where on your page you'd like to have your resume appear and upload all the contents in the `build` folder to that location. Do NOT upload the `build` folder, just the contents inside of it. 

In my case, I wanted this resume page to live in a `resume` directory on my site, i.e. https://penajoia.com/resume/. So I created a `resume` directory in my hosting service and uploaded the contents of my `build` folder to that `resume` directory. 

That's it. Hope this was helpful. 

## V2

Looking to build a form page that will make it for users to type in their information instead of going into the `json` file. On submission the form will update the state of the content on the resume. User will have the option to export out just the new `json` file to then build their deployed version.

## V2.5

Adjustable features to change color palette, sizing, font-size, etc. 

## V3

Develop a backend where a user can log in to revert back to their resume's saved info. Hopefully be able to export out a deployable version of React build files so user can just upload directly to their hosting provider. 