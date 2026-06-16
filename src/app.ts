import express from "express";
import { prisma } from "./lib/prisma";

const app = express();
export const port = 3000;

app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/post',async(req,res)=>{

    const {title,description}=req.body;

    try {
        const result=await prisma.post.create({
            data:{
                title,
                description
            }
        })

        res.status(201).json({
            success:true,
            message:'post created sucessfully',
            data:result
        })

    } catch (error) {
        
    }
})

export default app;
