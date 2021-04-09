# Unsplash Client

Basic unoffical Unsplash web client. [Click For **DEMO**](https://unsplash-unoffical-client-hasantezcan.vercel.app/)


This application was made for [Hipo Summer Internship Camp](https://hipolabs.com/internship/) application. 

<p align="center">
	<a href="https://coronastas.netlify.app/">
		<img alt="img-name" src="./preview.gif" width="800">
  <br>
	</a>
	<em>Desktop preview</em>
</p>

[👉 Click for detailed showcase video](https://www.youtube.com/watch?v=W-Haha25lWA) 


## Tech Stack
- bootstrapped with **CRA**

- Made with **React.js**

- **Images Source:** [Unsplash API](https://unsplash.com/developers)

## Features

- You can **search** with the **keywords** whatever you want. And also you can filter your keywords with **collection** titles that getting from **Unsplash's featured**. 
- If you don't have any keyword to search for something you can also **search** with **only featured collection** titles.
- When you hover the images you will see the photographer who takes that picture. You can **click** the **artist's name** to **visit** him/her **Unsplash profile**. Also, you can see the picture's like count on the right top corner.
- You can **download** the **picture directly** on your computer/mobile phone with a tiny, little download icon.
- If you want to see more pictures with your search query you can travel inside the **pagination** bar.
- If you feel lucky you can press the **dice icon** on the navbar. The application returns to you **random pictures** from Unsplash. *We have a little rate limit just for now you `only three query` chances.* ***-50 request for per hour-***
- The collection drop-down was made with love ❤️ Please don't suppose this is an ordinary one.
- And Finally, we have a **sidebar** for **responsive design**. Tested with mobile devices and I think it works 😅
- **Tests?** soon! *(after midterms)* 🧑‍💻

## I want to contribute 👋 

Install necessery packages.
```bash
  yarn install
```

- You need [Unsplash API key](https://unsplash.com/oauth/applications) to work with this application.  
- Create a `.env` file in root directory.   
- And add a variable like down below;

```bash
REACT_APP_UNSPLASH_API=your-API-key
```

- Runs the app in the development mode.

```bash
  yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Click for open [**Pull Request**](https://github.com/hasantezcan/unsplash-client/pulls)