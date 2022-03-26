export const getComments = async () => {
    return [
        {
            id:"1",
            body:"First Comment",
            avatar:"",
            username:"Anuoluwapo",
            userId:"1",
            parentId: null,
            createdAt:"2022-08-16T23:00:33.010+02:00"
        },
        {
            id:"2",
            body:"Second Comment",
            avatar:"",
            username:"Anonymous",
            userId:"2",
            parentId: null,
            createdAt:"2022-08-16T23:00:33.010+02:00"
        },{
            id:"3",
            body:"First Comment first Child",
            avatar:"",
            username:"James",
            userId:"2",
            parentId:"1",
            createdAt:"2022-08-16T23:00:33.010+02:00"
        },{
            id:"4",
            body:"Second Comment Seconnd Child",
            avatar:"",
            username:"Anuoluwapo",
            userId:"2",
            parentId:"2",
            createdAt:"2022-08-16T23:00:33.010+02:00"
        },
        {
            id:"5",
            body:"Hello There",
            avatar:"",
            username:"Anuoluwapo",
            userId:"2",
            parentId:"1",
            createdAt:"2022-08-16T23:00:33.010+02:00"
        }
    ]
}