import { HTMLMotionProps } from 'framer-motion';


export interface FilterItemProps extends HTMLMotionProps<"div">{
	appearance: 'tags' | 'filter',
	data?:string
}