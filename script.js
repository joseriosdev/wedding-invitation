// --- Configuration Data ---
const guestData =
{
	//--Family Twist (7)
	'mom': 'Fuerte y Dócil Mommilety',
	'juayel': 'Juanchito y Wendi',
	'greenfit': 'Preciosa Anita Greenfit Chik',
	'devis': 'Inteligente Devis',
	'tunys': 'Bella Anitunyss',
	'huellita': 'Hermosa Huellita',
	
	//--Family Martinez (14)
	'benhur': 'Benhur Y Edith',
	'liliam': 'Edgar y Liliam',
	'gali': 'Gali y Adriana',
	'jose': 'Jose y Naye',
	'uber': 'Uber y Adelaida',
	'shofi': 'Jorge y Viviana',
	'jr': 'Benhur Jr. y Mayerly',
	
	//--Our Friends (6)
	'paula': 'Paula la Viajera',
	'alba': 'Hermes y Alba',
	'eli': 'Daniel y Eliana',
	'pastor': 'Pastor Ruben',
	
	//--Lilo's Friends (4)
	'pelaas': 'Edixa y Era',
	'gaby': 'Gabriela y Luis',
	
	//--Jose's Friends (11)
	'siervos': 'Siervos Stiven y Jenny',
	'tapias': 'David y Akane',
	'moi': 'Moises y Cata',
	'mayonesas': 'Maio Sr. y Maio Jr.',
	'papuchis': 'Papu y Andrea',
	'jcaste': 'Jose Castellanos',
	'default': 'Estimado Invitado' // Clave por defecto si no se encuentra el nombre
};

const config =
{
	coupleName: 'Jose & Liliana',
	eventDate: 'Sábado, 6 de Diciembre de 2025',
	eventLocation: 'Calle 3b #38-113, Puerto Colombia',
	eventTime: '3:00 PM',
	coupleImg: './JoLi.jpeg',
	schedule:
	[
		{ time: '3:00 PM', activity: 'Recepción | Bienvenida' },
		{ time: '4:00 PM', activity: 'Ceremonia Nupcial' },
		{ time: '5:15 PM', activity: 'Sesión de Fotos | Aperitivos' },
		{ time: '6:30 PM', activity: 'Cena & Brindis' },
		{ time: '8:30 PM', activity: 'Baile de Apertura' },
		{ time: '8:50 PM', activity: '¡A Bailar!' },
		{ time: '9:30 PM', activity: 'Lanzamiento del Ramo' },
		{ time: '10:00 PM', activity: 'Fin del Evento' }
	]
};

const confettiContainer = document.getElementById('confetti-container');
// Colors for the confetti pieces
const colors = ['#ff5722', '#ff9800', '#ffc107', '#4caf50', '#2196f3', '#9c27b0'];

// --- Core Functions ---

function getScheduleHTML(schedule)
{
	return schedule.map(item => `
		<div class="flex justify-between items-center py-2 border-b border-rose-200/50">
			<div class="playfair text-xl text-rose-800 font-bold">${item.time}</div>
			<div class="text-gray-700">${item.activity}</div>
		</div>
	`).join('');
}
		
function letItRain()
{
	const createConfetti = () =>
	{
		const confetti = document.createElement('div');
		confetti.classList.add('confetti');

		// Randomize initial position and size
		const size = Math.random() * 15 + 5; // Size between 5px and 20px
		confetti.style.width = `${size}px`;
		confetti.style.height = `${size}px`;
		confetti.style.left = `${Math.random() * 97}vw`;

		// Randomize color
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		confetti.style.backgroundColor = randomColor;

		// Randomize animation duration and delay for a more natural look
		const duration = Math.random() * 3 + 2; // Duration between 2s and 5s
		const delay = Math.random() * 2; // Delay between 0s and 2s
		confetti.style.animationDuration = `${duration}s`;
		confetti.style.animationDelay = `${delay}s`;

		confettiContainer.appendChild(confetti);

		// Remove confetti after it falls off screen to prevent memory leaks
		setTimeout(() => {
			confetti.remove();
		}, (duration + delay) * 1000);
	}

	// Continuously create new confetti
	setInterval(createConfetti, 100);
}
		
function getCounter()
{
	const targetDate = new Date("2025-12-06T15:00:00").getTime();
	const updateCountdown = () =>
	{
		const now = new Date().getTime();
		const distance = targetDate - now;

		if (distance < 0)
		{
			document.querySelector(".countdown").innerHTML = "<h2>🎉¡Es Hoy! 🎉</h2>";
			return;
		}

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("days").textContent = days;
		document.getElementById("hours").textContent = hours;
		document.getElementById("minutes").textContent = minutes;
		document.getElementById("seconds").textContent = seconds;
	};

	setInterval(updateCountdown, 1000);
}

// Template function to generate the entire invitation HTML
function generateInvitation(guestName, cfg)
{
	return `
		<div class="rain-container"></div>

		<div class="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden md:p-10 p-6 border-t-8 "
			style="border-color: firebrick">
			
			<!-- 1. Greetings from the couple (with a picture) -->
			<section class="text-center mb-10">
				<h1 class="playfair text-5xl font-extrabold text-rose-900 mb-10">${cfg.coupleName}</h1>
				<h3 class="playfair text-4xl font-bold text-rose-900 mb-10 border-b-2 border-rose-200 pb-2">🔔6 / 12 / 2025🔔</h3>
				<img src="${cfg.coupleImg}"
					alt="Jose y Lilo"
					class="w-full md:w-4/4 max-w-xs mx-auto rounded-full shadow-lg mb-6 border-4 border-rose-300/50 object-cover aspect-[5/5]"
					onerror="this.src='https://placehold.co/400x300/a35f5c/ffffff?text=A+%26+R'"
				/>
				
				
				<h2 class="text-3xl font-bold text-rose-600 mt-2">${guestName}</h2>
				<p class="text-xl text-gray-700 font-semibold mt-4">Estamos felices de invitarte a nuestra boda</p>
				<p class="text-lg text-gray-400 font-semibold mt-4">Con el corazón lleno de alegría, te invitamos a compartir nuestro día</p>
			</section>

			<!-- 2. Short kind words -->
			<section class="mb-10 text-center bg-rose-50 p-6 rounded-xl">
				<p class="text-lg text-gray-500 leading-relaxed">
					<b>"Pero sobre todas estas cosas, vístanse de amor, que es el vínculo perfecto. Y la paz de Cristo gobierne en su corazón, pues a ella fueron llamados en un solo cuerpo, y sean agradecidos."</b>
					<br/><i>Colosenses 3:14-15</i>
				</p>
			</section>
			
			<!-- 3. Location and Date -->
			<section class="mb-10 text-center">
				<h3 class="playfair text-4xl font-bold text-rose-900 mb-4 border-b-2 border-rose-200 pb-2">¡Nos Casamos!</h3>
				<div class="space-y-4">
					<p class="text-xl text-gray-800">
						<span class="block font-bold">Fecha:</span>
						<span class="text-2xl text-rose-700 font-semibold">${cfg.eventDate}</span>
					</p>
					<p class="text-xl text-gray-800">
						<span class="block font-bold">Lugar:</span>
						<span class="text-2xl text-rose-700 font-semibold">${cfg.eventLocation}</span>
					</p>
					<p class="text-xl text-gray-800">
						<span class="block font-bold">Hora de Inicio:</span>
						<span class="text-2xl text-rose-700 font-semibold">${cfg.eventTime}</span>
					</p>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.1403102673114!2d-74.94077520780912!3d11.01755960838429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42a5cbbaef175%3A0x3f2cdd740f3d1a35!2sCl.%203%20B%20%23%2038-113%2C%20Puerto%20Colombia%2C%20Atl%C3%A1ntico!5e0!3m2!1sen!2sco!4v1761683186632!5m2!1sen!2sco"
						style="border-radius:20px;width:100%;height:450px;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
			</section>

			<!-- 4. Schedule of the event -->
			<section class="mb-10 p-6 rounded-xl bg-white shadow-inner">
				<h3 class="playfair text-3xl font-bold text-rose-900 mb-6 text-center">Programa del Día</h3>
				<div class="divide-y divide-rose-100">
					${getScheduleHTML(cfg.schedule)}
				</div>
			</section>
			
			<!-- 5. Counter -->
			<section class="text-center pt-4">
				<h3>Tan solo falta 💍</h3>
				<div class="countdown">
					<div class="time-box">
						<span id="days">00</span>
						<div class="label">Días</div>
					</div>
					<div class="time-box">
						<span id="hours">00</span>
						<div class="label">Horas</div>
					</div>
					<div class="time-box">
						<span id="minutes">00</span>
						<div class="label">Min.</div>
					</div>
					<div class="time-box">
						<span id="seconds">00</span>
						<div class="label">Seg.</div>
					</div>
				</div>
			</section>



			<!-- 5. Some additional comments -->
			<section class="text-center pt-4 mb-10">
				<h3 class="playfair text-3xl font-bold text-rose-900 mb-4">Recomendaciones</h3>
				<ul class="list-disc list-inside text-2xl text-left mx-auto max-w-md space-y-2 text-gray-700">
					<li>El código de vestimenta es **Casual**.</li>
					<li>Agradeceremos confirmar tu asistencia antes del 15 de Noviembre.</li>
					<li>¡La celebración está pensada para adultos, agradecemos tu comprensión!</li>
					<li>La boda es un evento privado, así que solo podrán asistir quienes estén en la lista y no se contemplan invitados adicionales.</li>
					<li>El color blanco está reservado exclusivamente para la novia. Por favor, elige otro color para tu atuendo.</li>
					<li>De no poder asistir, aún puedes acompañarnos por Instragram siguiendo a <b>@jesus.rios</b>.</li>
				</ul>
				<p class="mt-8 text-2xl playfair text-rose-900 font-semibold">¡Esperamos verte allí!</p>
			</section>
			
			<footer class="text-center pt-4">— Jose ❤️ Cristo ❤️ Liliana —</footer>
		</div>
	`;
}

// --- SPA Routing Logic (using Query Parameter) ---

function router()
{
	// 1. Read the query parameter 'invitados' using URLSearchParams
	const params = new URLSearchParams(window.location.search);
	let guestKey = params.get('invitados');

	// 2. Normalize and determine the guest name
	let guestName;
	if (guestKey) {
		// Convert the key (e.g., 'JuanRobertoRoa') to lowercase for lookup
		guestKey = guestKey.toLowerCase();
		guestName = guestData[guestKey];
	}
	
	// If the key is not found or null, use the default greeting
	if (!guestName) {
		guestName = guestData['default'];
	}
	
	// 3. Set a friendly title based on the guest
	document.title = `${guestName} | Boda ${config.coupleName}`;

	// 4. Generate and inject the content
	document.getElementById('app').innerHTML = generateInvitation(guestName, config);
	
	getCounter();
	letItRain();
}

// Listen for the browser's back/forward buttons (popstate)
// This is primarily useful if other parameters or hashes were involved, but kept for robustness.
window.addEventListener('popstate', router);

// Run the router when the page loads
document.addEventListener('DOMContentLoaded', router);
