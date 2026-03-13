const timeline = document.getElementById("timeline");

function renderEvents(filter) {

    timeline.innerHTML = "";

    const filteredEvents = events.filter(e =>
        filter === "all" || (e.region && e.region === filter)
    );

    filteredEvents.forEach((event, index) => {

        const side = index % 2 === 0 ? "left" : "right";

        timeline.innerHTML += `
            <div class="container ${side}">
                <div class="content">

                    <div class="date">${event.date}</div>

                    <div class="title">${event.title}</div>

                    <div class="meta">
                        ${event.country ? `<span class="country">🌍 ${event.country}</span>` : ""}
                        ${event.category ? `<span class="category">📂 ${event.category}</span>` : ""}
                    </div>

                    <div class="desc">${event.desc}</div>

                </div>
            </div>
        `;
    });
}

renderEvents("all");

document.getElementById("regionFilter").addEventListener("change", (e) => {
    renderEvents(e.target.value);
});