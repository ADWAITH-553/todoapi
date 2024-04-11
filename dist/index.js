"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, name, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.u.create({
            data: {
                email,
                name,
                password
            },
            select: {
                id: true,
                password: true,
                name: true
            }
        });
        console.log(res);
    });
}
function updateUser(email, { name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.u.update({
            where: { email },
            data: {
                name
            }
        });
        console.log(res);
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.u.delete({
            where: {
                id
            }
        });
        console.log(res);
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.u.findFirst({
            where: { email }
        });
        console.log(user);
    });
}
getUser("hii@gmail.com");
