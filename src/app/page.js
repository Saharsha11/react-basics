import Image from "next/image";
import Card from "../components/card";
import Grid from "../components/grid";
import Javascript from "@/components/javascript";
import ObjectDemo from "@/components/object";
import Assignment from "@/components/assignment";
import ReusableCard from "@/components/resuseable";
import Third, { First as Second } from "./bim/practice";
import States from "@/components/states";
import Cities from "@/components/cities";
import Async from "@/components/async";
import DataFetch from "@/components/dataFetch";

export default function Home() {
  return (
    <div>
    {/* <ReusableCard name = "Saharsha" address = "Chamati" age="20" image = "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <ReusableCard name = "Paldean " address = "Dhalku" age="20" image = "https://images.pexels.com/photos/11115965/pexels-photo-11115965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <ReusableCard name = "Prassan" address = "Raniban" age="20" image = "https://images.pexels.com/photos/12071179/pexels-photo-12071179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Second/>
    <Third/> */}
    <States/>
    <Cities/>
    <Async/>
    </div>
  );
}
