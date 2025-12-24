const API_BASE = "http://localhost:4000/api"; // adjust port

export const generatePlan = async (payload) => {
  const res = await fetch(`${API_BASE}/plan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch plan");
  }

  return res.json();
};
