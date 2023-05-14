import React, { ReactNode } from 'react'

import { Row, Col } from '@/components/Grid/Index'
import email from '../Contacts/email'
import { JSONObject } from '@/types/types'
import replacer from '../Contacts/replacer'

import styles from './index.module.scss'

const Resume: React.FC<itemData> = ({ itemData }) => (
  <div className={styles['resume']}>
    {Object.entries(itemData).map(([name, content]) => (
      <div className={styles['resume__item']}>
        <Row>
          <Col span={2}>
            <div className={styles['resume__item__name']}>
              {name}
            </div>
          </Col>
          <Col span={10}>
            <div className={styles['resume__item__content']}>
              {typeof content === 'string' && content}
              {Array.isArray(content) && (
                <ul>
                  {content.map((string) => {
                    console.log(replacer(string))
                    return (
                    <>
                      {string && (
                        <li>
                          {replacer(string)}
                        </li>
                      )}
                    </>
                  )})}
                </ul>
              )}
            </div>
          </Col>
        </Row>
      </div>
    ))}
  </div>
)

export interface ResumeItemProps {
  name: string
  content: ReactNode
}

interface itemData {
  itemData: JSONObject
}

export default Resume