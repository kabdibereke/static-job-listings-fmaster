import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItems } from '../../store/filterSlice'
import { AppDispatch, RootState } from '../../store/store'
import FilterItems from '../FilterItems/FilterItems'
import styles from './FilterPanel.module.scss'

type Props = {}

const FilterPanel = (props: Props) => {
  const {data,items} = useSelector((state: RootState) => state.jobList)
  const dispatch =useDispatch<AppDispatch>()
  return (
   
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className={styles.filter__panel}>
        {items.map((data,index)=> {
          return <FilterItems appearance='filter' key={index} data={data} />
        })}
       
      <button className={styles.clear__button} onClick={()=>dispatch(deleteItems())}>
        Clear
      </button>
    </motion.div>
    
   
  )
}

export default FilterPanel