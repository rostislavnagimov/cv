import React from 'react'

import CVItem, { CVItemProps } from '@/components/Resume'

const HomePage = () => (
  <CVItem itemData={data} />
)

const data: Array<CVItemProps> = [
  {
    name: 'Name',
    content: (<><p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p></>)
  },
  {name: 'Name2', content: 'Content2'},
  {name: 'Name3', content: 'Content3'},
  {name: 'Name4', content: 'Content4'},
  {name: 'Name5', content: 'Content5'},
  {name: 'Name6', content: 'Content6'},
]

export default HomePage