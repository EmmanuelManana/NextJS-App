import React from 'react'

function PostCard() {
  return (
    <div style={styles.postcard}>
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
    margin: '10px'
  },
  header: {},
  body: {},
  footer: {},
}
