import vvolt from "./images/vvolt1.png";
import expenses from "./images/ExpenseTracker2.png";
import addUser from "./images/AddUser.png"
import login from "./images/LoginApp.png";

export const products = [
	{
		id: 1,
		img: vvolt,
		link: "https://www.vvolt.simonbogelund.dk",
		desc: (
			<p>
				Dette projekt er en hjemmeside som først var inspireret af Wolt, men
				sidenhen ændrede den form, så den mere kom til at ligne mit lokale
				pizzaria.
				<br />
				<br />
				I dette projekt arbejdede jeg med flere forskellige React hooks såsom
				useState, useEffect, useContext og useReducer.
				<br />
				<br />
				Det var også første gang, at jeg forsøgte med basal animation i CSS.
			</p>
		),
	},
	{
		id: 2,
		img: expenses,
		link: "https://www.expense-tracker.simonbogelund.dk",
		desc: <p>Mit første rigtige projekt i React. Her er der ikke brugt nogle hooks, og det primære fokus i dette projekt var at få helt styr på, hvordan React komponenterne kommunikerer med hinanden</p>,
    },
    {
		id: 3,
		img: addUser,
		link: "https://s-bogelund.github.io/AddUserApp/",
		desc: <p></p>,
    },
    {
		id: 4,
		img: login,
		link: "https://s-bogelund.github.io/login-app/",
		desc: <p></p>,
    },
    {
		id: 5,
		img: "https://www.youtube.com/watch?v=kpYYdCzTpps",
		link: "https://s-bogelund.github.io/login-app/",
		desc: <p></p>,
	},
];
