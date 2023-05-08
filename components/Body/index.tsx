import React, { ReactNode } from 'react'

import styles from './index.module.scss'

const Body: React.FC<BodyProps> = (props) => (
    <div className={styles['body']}>
        {props.children}
    </div>
)

interface BodyProps {
    children: ReactNode
}
export default Body