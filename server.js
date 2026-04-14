const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const products = [
    {
        id: "prod-001",
        name: "Laptop Stand Pro",
        category: "accessories",
        price: 49.99,
        description: "Ergonomic aluminum laptop stand with adjustable height.",
    },
    {
        id: "prod-002",
        name: "Wireless Keyboard",
        category: "peripherals",
        price: 79.99,
        description: "Slim wireless keyboard with backlit keys and USB-C charging.",
    },
    {
        id: "prod-003",
        name: "Noise-Canceling Headphones",
        category: "audio",
        price: 199.99,
        description: "Over-ear headphones with active noise cancellation and 30-hour battery.",
    },
    {
        id: "prod-004",
        name: "USB-C Hub",
        category: "accessories",
        price: 39.99,
        description: "7-in-1 USB-C hub with HDMI, USB-A, SD card reader, and ethernet.",
    },
    {
        id: "prod-005",
        name: "Mechanical Keyboard",
        category: "peripherals",
        price: 129.99,
        description: "Full-size mechanical keyboard with cherry MX switches and RGB lighting.",
    },
    {
        id: "prod-006",
        name: "Portable Monitor",
        category: "displays",
        price: 249.99,
        description: '15.6" portable IPS monitor with USB-C and mini-HDMI inputs.',
    },
    {
        id: "prod-007",
        name: "Webcam HD",
        category: "peripherals",
        price: 59.99,
        description: "1080p webcam with auto-focus, noise-reducing microphone, and privacy shutter.",
    },
    {
        id: "prod-008",
        name: "Desk Lamp Smart",
        category: "accessories",
        price: 34.99,
        description: "LED desk lamp with adjustable color temperature and brightness control.",
    },
];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Globomantics server running at http://localhost:${PORT}`);
});