import React from "react";
import "./About.css";
const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img
						className="a-img"
						src="https://www.visitaarhus.dk/sites/visitaarhus.com/files/styles/hero/public/2021-09/ARoS-Jonas-Togo.jpg?h=2f423cda&itok=SsKP01Am"
						alt="aros"
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">Faglig profil</h1>
				<p className="a-sub">
					Jeg studerer på Softwareteknologi-ingeniør uddannelsen på Aarhus
					Universitet og er i gang med 4. semester.
				</p>
				<p className="a-desc1">
					Jeg har været glad for studiet og især studiemiljøet, men det meget
					hardware-nære fokus, som uddannelsen har, er ikke det jeg finder mest
					interessant.
					<br />
					Jeg er derimod rigtig glad for højere niveau softwareudvikling, og
					derfor har jeg brugt en god del af min fritid på at lære nye
					værktøjer, og det har været virkelig motiverende.<br/> Jeg er især blevet glad for C# som jeg startede med at bruge i sommeren 2021, og som jeg bl.a. brugte til selvstændigt at stå for en GUI i WPF til 3. semesters projekt.
					<br />
					I 2022 har jeg fokuseret mest på at lære JavaScript, og det er også et sprog, jeg er blevet glad for at arbejde med. Da jeg følte, at jeg havde en okay forståelse for sproget, begyndte jeg at arbejde med React.
				</p>
				<p className="a-desc2">
                    Længere nede på min side er der eksempler på de projekter, jeg har lavet for nylig samt semesterprojektet.
                    <br />
                    Disse projekter har været rigtig sjove og lærerige, men jeg glæder mig rigtig meget til at komme ud og arbejde på større projekter.
				</p>
				<div className="a-award">
					<img src="" alt="" className="a-award-img" />
				</div>
			</div>
		</div>
	);
};

export default About;
