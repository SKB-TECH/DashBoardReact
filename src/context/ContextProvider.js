import { useContext,useState,useEffect,createContext } from "react";

const StateContext=createContext();
const InitialState={
    chat:false,
    cart:false,
}