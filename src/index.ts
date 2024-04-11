import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

async function insertUser(email:string,name:string,password:string)
{
   const res=await prisma.u.create({
        data:{
            email,
            name,
            password
        }
    })
    console.log(res)
}
