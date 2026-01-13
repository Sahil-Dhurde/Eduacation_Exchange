const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();  // Store API key in .env file

const app = express();
app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4",
                messages: [{ role: "user", content: message }]
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json(response.data.choices[0].message.content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
