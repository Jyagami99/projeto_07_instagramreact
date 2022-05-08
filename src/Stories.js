import Icones from "./Icones";

export default function Stories() {
	return (
		<div class="stories">
			{stories}

			<div class="setinha">
				<Icones name="chevron-forward-circle" />
			</div>
		</div>
	);
}

const objStories = [
	{
		image: "assets/img/9gag.svg",
		username: "9gag",
	},
	{
		image: "assets/img/meowed.svg",
		username: "meowed",
	},
	{
		image: "assets/img/barked.svg",
		username: "barked",
	},
	{
		image: "assets/img/nathanwpylestrangeplanet.svg",
		username: "nathanwpylestrangeplanet",
	},
	{
		image: "assets/img/wawawicomics.svg",
		username: "wawawicomics",
	},
	{
		image: "assets/img/respondeai.svg",
		username: "respondeai",
	},
	{
		image: "assets/img/filomoderna.svg",
		username: "filomoderna",
	},
	{
		image: "assets/img/memeriagourmet.svg",
		username: "memeriagourmet",
	},
];

const stories = objStories.map((story) => {
	return (
		<div class="story">
			<div class="imagem">
				<img src={story.image} />
			</div>
			<div class="usuario">{story.username}</div>
		</div>
	);
});
