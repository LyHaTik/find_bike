let tg = window.Telegram.WebApp;



let btnclose = document.getElementById("btnclose");

btnclose.addEventListener("click", () => {
	let category = document.getElementById("category").value;
	let engine_capacity = document.getElementById("engine_capacity").value;
	let count = document.getElementById("count").value;
	let type_ts = "bike"

	let data = {
		type_ts: type_ts,
		category: category,
		engine_capacity: engine_capacity,
		count: count,
	}
	tg.sendData(JSON.stringify(data));
	tg.close;
});
