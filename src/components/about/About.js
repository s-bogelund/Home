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
					Jeg studerer på Softwareteknologi uddannelsen på Aarhus
					Universitet og er i gang med 4. semester.
				</p>
				<p className="a-desc1">
					Jeg er rigtig glad for studiet og især studiemiljøet. Uddannelsen har et meget hardware-nært fokus, men det er ikke der, hvor min primære interesse ligger.
					<br />
					Jeg er derimod rigtig glad for højere niveau softwareudvikling, og derfor har jeg brugt en god del af min fritid på at lære nye værktøjer, og det har været virkelig motiverende.
					
					<br/> Jeg er især blevet glad for C# som jeg begyndte at arbejde med i sommeren 2021. Jeg brugte det bl.a. til selvstændigt at udvikle en GUI i WPF ifm. 3. semesters projekt.
					<br />
					I 2022 har jeg primært fokuseret på at lære JavaScript, hvilket også er et sprog, jeg er blevet glad for at arbejde med. Da jeg havde et solidt fundament for sproget, begyndte jeg at arbejde med React.<br /><br />
					Nedenfor er der eksempler på de projekter, jeg har lavet for nylig samt semesterprojektet.
                    <br />
                    Disse projekter har været sjove og lærerige, og jeg glæder mig rigtig meget til at komme ud og anvende mine kompetencer på større projekter.
				</p>
			</div>
		</div>
	);
};

export default About;
