import Icones from "./Icones";

export default function Posts() {
	return <div class="posts">{posts}</div>;
}

const objPosts = [
	{
		userImage: "assets/img/meowed.svg",
		userName: "meowed",
		postImage: "assets/img/gato-telefone.svg",
		userLike: "respondeai",
		qtyLike: "101.523",
	},
	{
		userImage: "assets/img/barked.svg",
		userName: "barked",
		postImage: "assets/img/dog.svg",
		userLike: "adorable_animals",
		qtyLike: "99.159",
	},
];

const posts = objPosts.map((post) => {
	return (
		<div class="post">
			<div class="topo">
				<div class="usuario">
					<img src={post.userImage} />
					{post.userName}
				</div>
				<div class="acoes">
					<Icones name="ellipsis-horizontal" />
				</div>
			</div>

			<div class="conteudo">
				<img src={post.postImage} />
			</div>

			<div class="fundo">
				<div class="acoes">
					<div>
						<Icones name="heart-outline" />
						<Icones name="chatbubble-outline" />
						<Icones name="paper-plane-outline" />
					</div>
					<div>
						<Icones name="bookmark-outline" />
					</div>
				</div>

				<div class="curtidas">
					<img src={post.userImage} />
					<div class="texto">
						Curtido por <strong>{post.userLike}</strong> e{" "}
						<strong>outras {post.qtyLike} pessoas</strong>
					</div>
				</div>
			</div>
		</div>
	);
});
