fetch("https://pw.2snfjitu.workers.dev/api/pw/live", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ batchId: "698ad3519549b300a5e1cc6a" })
})
  .then(res => res.json())
  .then(data => {
    console.log("Success value:", data.success);
    console.log("Has data array?", Array.isArray(data.data));
    console.log("Data length:", data.data ? data.data.length : 0);
  })
  .catch(err => console.error("Error:", err));
