const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

// Select the main content area where articles will be displayed
const mainContent = document.querySelector('#article-content');

// Function to generate HTML template for each article
function renderArticles(article) {
	return `
        <article class="article-item">
            <div class="col1">
                <p class="date">${article.date}</p>
                <p class="ages">Ages: ${article.ages}</p>
                <p class="genre">Genre: ${article.genre}</p>
                <p class="stars">Rating: ${article.stars}</p>
            </div>
            <div class="col2">
                <h2 class="title">${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}" >
                <p class="description">${article.description} <a href="#" class="more">read more...</a></p>
            </div>
            <div class="col3">
                <p>Filter form will go here</p>
            </div>
        </article>`;
}

// Render the articles and add them to the main content area
mainContent.innerHTML = articles.map(renderArticles).join('');