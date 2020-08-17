const handler = (e: Event): void => {
    console.log(`Event happens: ${e.type}, at ${new Date(e.timeStamp)} and ${new Date(e.timeStamp).getMilliseconds()} milliseconds`);
}

window.addEventListener("load", handler);
window.addEventListener("unload", handler);









