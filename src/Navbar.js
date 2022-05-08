import Icones from "./Icones";

export default function Navbar() {
	return (
		<div class="navbar">
			<div class="container">
				<div class="logo">
					<Icones name="logo-instagram" />
					<div class="separador"></div>
					<img src="assets/img/logo.png" />
				</div>

				<div class="logo-mobile">
					<Icones name="logo-instagram" />
				</div>

				<div class="instagram-mobile">
					<img src="assets/img/logo.png" />
				</div>

				<div class="pesquisa">
					<input type="text" placeholder="Pesquisar" />
				</div>

				<div class="icones">
					<Icones name="paper-plane-outline" />
					<Icones name="compass-outline" />
					<Icones name="heart-outline" />
					<Icones name="person-outline" />
				</div>

				<div class="icones-mobile">
					<Icones name="paper-plane-outline" />
				</div>
			</div>
		</div>
	);
}
