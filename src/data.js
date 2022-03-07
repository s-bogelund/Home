import vvolt from "./images/vvolt1.png";
import expenses from "./images/ExpenseTracker2.png";
import addUser from "./images/AddUser.png";
import login from "./images/LoginApp.png";
import kingPong from "./images/King_Pong.png";

export const products = [
	{
		id: 1,
		title: <h1>App til Madudlevering</h1>,
		img: vvolt,
		link: "https://www.vvolt.simonbogelund.dk",
		desc: (
			<p>
				Dette projekt er en hjemmeside som først var inspireret af Wolt, men
				undervejs ændrede den form til en mere generisk madudleveringsapp.
				<br />
				<br />
				I dette projekt arbejdede jeg med flere forskellige React hooks såsom
				useState, useEffect, useContext og useReducer. Det var også første gang,
				jeg arbejdede med modalvinduer.
				<br />
				<br />I dette projekt forsøgte jeg mig også for første gang med basal
				animation i CSS.
			</p>
		),
	},
	{
		id: 5,
		title: <h1>Beer Pong GUI - WPF</h1>,
		img: kingPong,
		link: "https://youtu.be/5o9kyu-BgtA",
		desc: (
			<p>
				GUI til 3. semester projekt. Den er lavet i WPF, og det var mit
				forsøgsdyr undervejs på 3. semester, efterhånden som jeg blev mere
				fortrolig med WPF, men også C# og GUI programmering helt generelt.
				<br />
				<br />
				Slutresultat er lidt en blandet landhandel, men det var en rigtig god
				øvelse, selvom jeg ikke nåede at få helt styr på, hvordan man korrekt
				struktuerede en WPF applikation. Der er bl.a. implementeret WebSocket
				kommunikation med en Raspberry Pi for at styre et "Smart" Beer Pong
				bord.
				<br />
				<br />
				Klik på billedet for at se kort demo som vi brugte til eksamen.
			</p>
		),
	},
	{
		id: 3,
		title: <h1>Tilføj Bruger App</h1>,
		img: addUser,
		link: "https://s-bogelund.github.io/AddUserApp/",
		desc: (
			<p>
				En meget simpel app. Det primære fokus her var at blive fortrolig med
				CSS Grid, og CSS helt generelt.
			</p>
		),
	},
	{
		id: 2,
		title: <h1>Udgift Tracker</h1>,
		img: expenses,
		link: "https://www.expense-tracker.simonbogelund.dk",
		desc: (
			<p>
				Mit første rigtige projekt i React. Her er der ikke brugt nogle hooks,
				og det primære fokus i dette projekt var at få helt styr på, hvordan
				React komponenterne kommunikerer med hinanden
				<br />
				<br />
				Det meste af stylingen er lånt andetstedsfra, så der var stort set kun
				fokus på de mest grundlæggende React funktioner.
			</p>
		),
	},
	{
		id: 4,
		title: <h1>Login App</h1>,
		img: login,
		link: "https://s-bogelund.github.io/login-app/",
		desc: (
			<p>
				En app, hvor stylingen er meget minimal, da fokus lå på at lære nye
				hooks.
				<br />
				Dette var det første projekt, hvor jeg benyttede både useEffect,
				useReducer og useContext hooks, så på trods af, hvor simpel den er, så
				tog den et stykke tid at få til at spille sammen.
				<br />
				<br />
				Da stylingen generelt var ret simpel, så besluttede jeg mig for også at
				forsøge at lave genbrugelige komponenter som jeg bl.a. har genbrugt til
				denne side.
			</p>
		),
	},
	{
		id: 3,
		title: <h1>Tilføj Bruger App</h1>,
		img: addUser,
		link: "https://s-bogelund.github.io/AddUserApp/",
		desc: (
			<p>
				En meget simpel app. Det primære fokus her var at blive fortrolig med
				CSS Grid, og CSS helt generelt.
			</p>
		),
	},
];
