import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MoonLoader } from "react-spinners"
import FilterPanel from "./Components/FilterPanel/FilterPanel"
import Header from "./Components/Header/Header"
import JobPanel from "./Components/JobPanel/JobPanel"
import './index.css'
import { fetchJobList } from "./store/filterSlice"
import { AppDispatch, RootState } from "./store/store"
import { IJobs } from "./type"
function App() {
  const {data,items,status} = useSelector((state: RootState) => state.jobList)
  const [newData,setNewData] =useState(data)
  const [arr, setArr] = useState({})

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    dispatch(fetchJobList())
  },[])

  useEffect(()=> {
    setNewData(data)
  },[items,data])
  return (
   <>
      <Header/>
      <div className="container">
      {items.length ? <FilterPanel/> :null}
      <>
      {status=='loading' && <MoonLoader className="spinner"
        color="hsl(180, 29%, 50%)"
        size={100}
      />}
       {status=='error' && <p className="error">Cannot get data try to refresh...</p>}
          {items.length? newData?.filter((item,index) =>
            items.every(r=>[...item.tools, ...item.languages, item.level].includes(r))
          ).map((item,index)=> {
           return <JobPanel key={item.id} {...item}/>
          })  :newData?.map((item,index)=> {
           return <JobPanel key={item.id} {...item}/>
          }) }
      </>
      </div>
   </>
  )
}

export default App
