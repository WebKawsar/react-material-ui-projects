
const courseInfo = [

	{
		postImg: "https://i.ibb.co/8b7BtdF/html-course.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/8b7BtdF/html-course.jpg",
		writterImg: "https://i.ibb.co/Tg3TB9g/author-1.jpg"

	},
	{
		postImg: "https://i.ibb.co/8b7BtdF/html-course.jpg",
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
