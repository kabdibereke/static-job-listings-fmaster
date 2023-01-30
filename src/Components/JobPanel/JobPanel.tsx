import styles from './JobPanel.module.scss'
import images from '../../assets/images/myhome.svg'
import FilterItems from '../FilterItems/FilterItems'
import { IJobs } from '../../type'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { addItems } from '../../store/filterSlice'
import { motion } from 'framer-motion'
import { Dispatch, useEffect, useState } from 'react'

interface JobPanelProps {
    item:IJobs,
    tagsList:string[],
    setTagsList:Dispatch<React.SetStateAction<string[]>>
}

const JobPanel = (item:IJobs) => {
    const [tagsList,setTagsList] = useState<string[]>([])

    useEffect(()=> {
        setTagsList([...item.languages, ...item.tools,item.level])
    },[])
  return (
    <motion.div className={ styles.job__panel}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    >
       <div className={styles.job__offer}>
            <img src={item.logo} alt="images" />
            <div className={styles.wrapper}>
                <div className={styles.company__name}>
                    <p className={styles.company__text}>{item.company}</p>
                   {item.new &&  
                   <div className={styles.new}>
                        <p className={styles.new__text}>NEW!</p>
                    </div>}
                    {item.featured && 
                    <div className={styles.featured}>
                    <p className={styles.featured__text}>FEATURED</p>
                </div>}
                </div>
                <p className={styles.title}>
                    {item.position}
                </p>
                <div className={styles.info}>
                    <p className={styles.info__text}>{item.postedAt}</p>
                    <p className={styles.info__text}>{item.contract}</p>
                    <p className={styles.info__text}>{item.location}</p>
                </div>
            </div>
       </div>
       <div className={styles.tags} > 
                        {tagsList.map((data,index)=> {
                            return  <FilterItems appearance='tags' key={index} data={data}/>
                        })}
       </div>
    </motion.div>
  )
}

export default JobPanel