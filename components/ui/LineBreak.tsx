import React from 'react'

type Props = {
  top?: string,
  bottom?: string
}

const LineBreak: React.FC<Props> = ({ top = '5px', bottom = '5px' }) => {
  return (
    <>
      <div style={{ width: '100%', paddingTop: top, paddingBottom: bottom }} />
    </>
  )
}

export default LineBreak
