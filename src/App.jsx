
import Main from "./components/Main.jsx";

const info = { 
 name:'Bryle Christian Regencia',
 provAdd: '178 Ilaya, Balanacan, Mogpog, Marinduque 4901',
 cityAdd: '822 P.Herrera, Aguho, Pateros, Metro Manila 1620',
 mobNum: '09158436060',
 emailAdd:'rbrylechristian@gmail.com'}

 function isInViewport(elemName) {
  const element = document.getElementById(elemName)
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function App() {
  return(
    <>
    <Main info={info} isInViewport={isInViewport}/>
    </>
  );

}

export default App
