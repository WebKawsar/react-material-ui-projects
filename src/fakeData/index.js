
const courseInfo = [



	// 
	// 
	// 
	// 
	// 
	// 
	// 



	{
		postImg: "https://i.ibb.co/NLHFm94/biral-image.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/LrvvpQR/book-image.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/fpp6JJN/book-2-image.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/4t8QtCZ/flower-image.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/b6kYGyx/girl-image.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/rdS6Kns/hand-mobile-image.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/2jMckGM/man-image.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	}
	


];




const fakeData = [...courseInfo];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;
