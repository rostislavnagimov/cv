import React, { ReactNode } from 'react'

import { Row, Col } from "../Grid/Index"

import styles from './index.module.scss'

const Resume: React.FC<itemData> = ({ itemData }) => (
  <div className={styles['resume']}>
    {itemData.map((item) => (
      <div className={styles['resume__item']}>
        <Row>
          <Col span={2}>
            <div className={styles['resume__item__name']}>
              {item.name}
            </div>
          </Col>
          <Col span={10}>
            <div className={styles['resume__item__content']}>
              {item.content}
            </div>
          </Col>
        </Row>
      </div>
    ))}
  </div>
)

export interface CVItemProps {
  name: string
  content: ReactNode
}

interface itemData {
  itemData: Array<CVItemProps>
}

export default Resume