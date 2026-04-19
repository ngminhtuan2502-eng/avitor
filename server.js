const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/api/avitor", async (req, res) => {
  try {
    const response = await axios.get("http://36.50.55.230:9587/api/avitor");

    const data = response.data;

    res.json({
      phien_hien_tai: data.phien_hien_tai,
      du_doan: data.du_doan
    });

  } catch (err) {
    res.status(500).json({
      error: "Lỗi lấy API gốc",
      detail: err.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("API AVITOR đang chạy!");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
