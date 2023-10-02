# AI Image Generator

## Home Page
![Home Page](https://github.com/naveenbisht31/AI-Image-Generator/assets/126242798/f2e624cc-1c00-4c3f-a990-2cf2006756d7)

## Create Post
![Create Post](https://github.com/naveenbisht31/AI-Image-Generator/assets/126242798/60da9753-5995-4a3c-9e19-62471e111637)

## Search Image
![Search Image](https://github.com/naveenbisht31/AI-Image-Generator/assets/126242798/5e6d3edd-98a0-4359-81d3-27d6a119635b)

## Overview
This dynamic MERN - based web application harnesses the powerful OpenAI DALL-E model to empower users worldwide in generating unique and artistic AI images. Seamlessly integrated with Cloudinary, the platform ensures secure storage and efficient management of the generated images. Users can creatively express themselves by creating posts featuring their AI-generated masterpieces and explore an engaging gallery of posts shared by others.

## Features
- Post Creation: Users can generate unique and artistic AI images by providing prompts and share their masterpieces.
- Image Gallery: Explore AI art gallery, featuring diverse creations from users worldwide. You can easily download any AI images that catch your eye.
- Search Feature: Find AI-generated images by typing keywords or phrases into the search bar.
- Responsive Design: The user interface is fully responsive, providing an optimal experience on various devices and screen sizes.

## Technologies Used
- **Frontend:** Tailwind CSS, React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 
- **AI Model:** OpenAI DALL-E
- **Cloud Storage:** Cloudinary

## Usage
- To generate an AI image, navigate to the `Create` page and provide a prompt.
- Generate AI image and share with the community.
- View AI-generated images on the `Home` page.
- Hover over any image to view the username along with the user's prompt and download the image.

## Installation
To run this website locally, follow these steps:

Clone the repository:
```bash
git clone https://github.com/naveenbisht31/AI-Image-Generator.git
```

Split the terminal window into two:
```bash
ctrl + shift + 5
```

Install the dependencies for the client in Terminal 1:
```bash
cd client
npm install
```

Install the dependencies for the server in Terminal 2:
```bash
cd server
npm install
```

Create a file named `.env` in the server directory with the following content:
```bash
MONGODB_URI=your_mongodb_uri

OPENAI_API_KEY=your_openai_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the client:
```bash
npm run dev
```

Start the server:
```bash
npm start
```

Open http://localhost:5173 in your web browser to access the website.

Enjoy generating artistic AI images with Artigen! Happy creating!🎨🤖
