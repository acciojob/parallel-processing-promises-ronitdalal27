//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

//function to convert single image to promise
function downloadImage(image){
	return new Promise((resolve,reject) => {
		const img = new Image(); //inbuilt js function Image()
		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error(` Failed to load image's URL: ${image.url}`));
		img.src = image.url;
	})
}

//once images are downloaded successfully then they will be added to output in html 
function displayImages(images){
	images.forEach(img => output.appendChild(img));
}

btn.addEventListener('click', () => { //on the click of the button we should start download
	const dowloadPromises = images.map((image) => downloadImage(image)); //for every single image we will create a promise,which will be there inside dowmloadPromies
	Promise.all(downloadPromises)
			.then((image) => displayImages(image))
			.catch((error) => console.log(error));
});




