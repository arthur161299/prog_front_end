import Dado from "@/components/Dado";

export default function Home(){
  return(
    <div style={{textAlign: "center", marginTop:"50px"}}>
      <h1> jogo do Dado  </h1>
      <Dado valor ={3} /> 
    </div>
  );
}