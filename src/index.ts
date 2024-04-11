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

interface updateparms{
    name:string
}
async function updateUser(email:string,{name}:updateparms){
    const res=await prisma.u.update({
        where:{email},
        data:{
            name
        }
    })
    console.log(res)
}


async function deleteUser(id:number){
    const res=await prisma.u.delete({
        where:{
            id
        }
    })
console.log(res)
}
async function getUser(email:string){
    const user=await prisma.u.findFirst({
        where:{email}
    })
    console.log(user)
}

async function inserttodo(title:string,done:boolean,description:string){
    const res=await prisma.todo.create({
        data:{title,
            done,
            description},
    })
}
interface uptodo{
    description:string
}
async function updatetodo(id:number,{description}:uptodo){
    const res=await prisma.todo.update({
        where:{id},
        data:{description}
    })
}

async function deleteTodo(id:number){
    const res=await prisma.u.delete({
        where:{
            id
        }
    })
console.log(res)
}