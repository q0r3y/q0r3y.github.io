(function analytics() {
  function getClientAnalyticsData() {
    return {
      screenSize: { w: window.screen.width, h: window.screen.height },
      language: navigator.language,
    };
  }

  async function sendAnalyticsData(data) {
    try {
      fetch("https://glomar-v1.q0r3y.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const clientAnalyticsData = getClientAnalyticsData();
  sendAnalyticsData(clientAnalyticsData);
})();
