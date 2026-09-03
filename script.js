function updateCountdown() {
            const releaseDate = new Date("2027-01-01T00:00:00").getTime();
            const now = new Date().getTime();
            const timeLeft = releaseDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


            document.getElementById("days").textContent = days.toString().padStart(2, "0");
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

            if (timeLeft <= 0) {
                document.getElementById("countdown").innerHTML = "<h2>GeForce RTX-Laptops sind jetzt verfügbar!</h2>"
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();