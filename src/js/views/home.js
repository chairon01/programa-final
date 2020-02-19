import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card";
import { Footer } from "../component/footer";

export const Home = () => (
	<React.Fragment>
		<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://picsum.photos/id/237/1500/700" className="d-block " alt="..." />
					<div className="text-carousel-1">
						<h1>
							<b>ERES GAY </b>
						</h1>
					</div>
				</div>
				<div className="carousel-item">
					<img src="https://picsum.photos/seed/picsum/1500/700" className="d-block " alt="..." />
					<div className="text-carousel-1">
						<h1>
							<b>SOMOS TU SOLUCIÓN PARA TUS EVENTOS </b>
						</h1>
					</div>
				</div>
				<div className="carousel-item">
					<img src="https://picsum.photos/1500/700?grayscale" className="d-block " alt="..." />
					<div className="text-carousel-1">
						<h1>
							<b>CELEBRALO TODO</b>
						</h1>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Antes</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Próximo</span>
			</a>
		</div>
		<Card />
		<Footer />
	</React.Fragment>
);
