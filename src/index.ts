import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

async function insertUser(email:string,name:string,password:string)
{
   const res=await prisma.u.create({
        data:{
            email,
            name,
            password
        },
        select:{
            id:true,
            password:true,
            name:true
        }

    })
    console.log(res)
}
insertUser("hiiwwe@gmail.com","12wwe","cody")
interface updateparms{
    name:string
}
async function updateUser(email:string,{name}:updateparms){
    prisma.u.update({
        where:{email},
        data:{
            name
        }
    })
}