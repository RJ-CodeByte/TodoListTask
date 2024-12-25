type AddTaskFormParamType = {
    title:string,
    description:string,
    comments:string,
    isActive:boolean,
    status:string,
}

type editTaskFormParamType = {
    id?:string,
    title:string,
    description:string,
    comments:string,
    isActive:boolean,
    status:string,
}