const temperatureForm = document.querySelector("#temperature-form");

		temperatureForm.addEventListener("submit", (e) => {
			e.preventDefault();

			const celsiusInput = document.querySelector("#celsius");

			if (celsiusInput.value !== "") {
				const celsius = parseFloat(celsiusInput.value);
				const fahrenheit = celsius * 1.8 + 32;
				document.querySelector("#result").innerHTML = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
			}
		});