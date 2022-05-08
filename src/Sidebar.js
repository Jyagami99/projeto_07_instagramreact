export default function Sidebar() {
	return (
		<div class="sidebar">
			<div class="usuario">
				<img src="assets/img/catanacomics.svg" />
				<div class="texto">
					<strong>catanacomics</strong>
					Catana
				</div>
			</div>

			<div class="sugestoes">
				<div class="titulo">
					Sugestões para você
					<div>Ver tudo</div>
				</div>

				{sugestoes}
			</div>

			<div class="links">
				Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
				Termos • Localizações • Contas mais relevantes • Hashtags •
				Idioma
			</div>

			<div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
		</div>
	);
}

const objSugestoes = [
	{
		image: "assets/img/bad.vibes.memes.svg",
		username: "bad.vibes.memes",
		text: "Segue você",
	},
	{
		image: "assets/img/chibirdart.svg",
		username: "chibirdart",
		text: "Segue você",
	},
	{
		image: "assets/img/razoesparaacreditar.svg",
		username: "razoesparaacreditar",
		text: "Novo no Instagram",
	},
	{
		image: "assets/img/adorable_animals.svg",
		username: "adorable_animals",
		text: "Segue você",
	},
	{
		image: "assets/img/smallcutecats.svg",
		username: "smallcutecats",
		text: "Segue você",
	},
];

const sugestoes = objSugestoes.map((sugestao) => {
	return (
		<div class="sugestao">
			<div class="usuario">
				<img src={sugestao.image} />
				<div class="texto">
					<div class="nome">{sugestao.username}</div>
					<div class="razao">{sugestao.text}</div>
				</div>
			</div>

			<div class="seguir">Seguir</div>
		</div>
	);
});
