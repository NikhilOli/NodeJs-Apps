import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server connected successfully");
})

app.get("/api", (req, res) => {
  res.send("Hello From api");
});

app.get("/api/backend", (req, res) => {
  const data = [
    {
      id: 1,
      title: "Introduction to Backend Development",
      content:
        "This article provides an overview of backend development and its importance in web development.",
    },
    {
      id: 2,
      title: "RESTful API Design Best Practices",
      content:
        "Learn about best practices for designing RESTful APIs, including resource naming, HTTP methods, and response codes.",
    },
    {
      id: 3,
      title: "Authentication and Authorization in Node.js",
      content:
        "Explore techniques for implementing authentication and authorization in Node.js applications using libraries like Passport.js.",
    },
    {
      id: 4,
      title: "Database Design Principles",
      content:
        "Understand the fundamental principles of database design, including normalization, indexing, and relationships.",
    },
    {
      id: 5,
      title: "Error Handling in Express.js",
      content:
        "Learn how to handle errors effectively in Express.js applications using middleware and error handling techniques.",
    },
  ];

  res.json(data);
});
