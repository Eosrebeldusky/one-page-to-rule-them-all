import instance from "./axios";

export function getAll(){
    return instance.get()
}