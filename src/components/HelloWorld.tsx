import { retreiveData } from "../API/service";
import { useState,useEffect } from "react";
import CarCarousel from "./carouselCard/CarCarousel";
import SearchEngine from "./searchEngine/SearchEngine";


export const HelloWorld: React.FC = () => {
  const [CarsInfos, setCarsInfos] = useState([])
  const [SearchTerm, setSearchTerm]=useState("")
  const [SearchResult, setSearchResult]=useState([])

  // Api handeling as it is outside of src folder
  useEffect(() => {
    // API call to get the Cars list
    retreiveData()
      .then((res) => setCarsInfos(res))
      .catch((err) => console.log(err));
  }, []);
  
  //Search
  const SearchHandelar=(search)=>{
    console.log(search)
    setSearchTerm(search)
    if(SearchTerm!==""){
      const newCarList=CarsInfos.filter((CarInfo)=>{
        return Object.values(CarInfo)
                     .join("").toLowerCase()
                     .includes(SearchTerm.toLowerCase())

      })
      setSearchResult(newCarList)
    }
    else {
      setSearchResult(CarsInfos)
    }
  }

  return (
    <div> 
      <SearchEngine SearchTerm={SearchTerm} SearchHandelar={SearchHandelar}/>
      <CarCarousel CarsInfos={SearchTerm.length <1 ? CarsInfos:SearchResult}/>  
    </div>
  )
};




