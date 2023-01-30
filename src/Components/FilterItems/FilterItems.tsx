import styles from './FilterItems.module.scss'
import iconRemove from '../../assets/icons/icon-remove.svg'
import cn from 'classnames';
import { FilterItemProps } from './FilterItems.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addItems, deleteItems, removeItems } from '../../store/filterSlice';
import { motion } from 'framer-motion';

const FilterItems = ({ appearance, data, className, ...props }: FilterItemProps) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className={cn(styles.filter__items, className, {
            [styles.tags]: appearance=='tags',
          })}
          {...props}>
        <p className={styles.text} onClick={() => dispatch(addItems(data))}>
            {data}
        </p>
        {appearance=='filter' && <button onClick={() => dispatch(removeItems(data))}  className={styles.close} >
            <img src={iconRemove} alt="" />
        </button>}
    </motion.div>
  )
}

export default FilterItems   