import http from "@utils/http";

export const  booksListApi = (page,pageSize,free,group,finish,sortId)=>http.post("/api/books/booksList",{page,pageSize,free,group,finish,sortId})