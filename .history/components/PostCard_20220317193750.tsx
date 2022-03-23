import React from 'react'

function PostCard() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div style={styles.header}>card header</div>

      <div style={styles.body}> card body</div>

      <div style={styles.footer}>card footer</div>
    </div>
  )
}

export default PostCard

const styles = {
  postcard: {
    background: 'blue',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  header: {},
  body: {},
  footer: {},
}
