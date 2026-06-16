import express from "express";
import { prisma } from "./lib/prisma";

const app = express();
export const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await prisma.post.create({
      data: {
        title,
        description,
      },
    });

    res.status(201).json({
      success: true,
      message: "post created sucessfully",
      data: result,
    });
  } catch (error) {}
});

app.get("/post", async (req, res) => {
  try {
    const result = await prisma.post.findMany();

    res.status(201).json({
      success: true,
      message: "post created sucessfully",
      data: result,
    });
  } catch (error) {}
});
app.get("/post/:id", async (req, res) => {
  try {
    const result = await prisma.post.findUniqueOrThrow({
      where: {
        id: "01KV80D0474GGN5CZH1C32F3S7",
      },
    });

    res.status(201).json({
      success: true,
      message: "post created sucessfully",
      data: result,
    });
  } catch (error) {}
});

app.delete("/post/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await prisma.post.delete({
      where: {
        id,
      },
    });

    res.status(201).json({
      success: true,
      message: "post deleted sucessfully",
      data: result,
    });
  } catch (error) {}
});
app.patch("/post/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const result = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title: title,
        description: description,
      },
    });

    res.status(201).json({
      success: true,
      message: "post deleted sucessfully",
      data: result,
    });
  } catch (error) {}
});

export default app;
