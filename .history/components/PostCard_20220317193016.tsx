import React from 'react'

function PostCard() {
  return (
    <div>
      <div style={styles.header}>card header</div>

      <div style={styles.body}> card body</div>

      <div style={styles.footer}>card footer</div>
    </div>
  )
}

export default PostCard

const styles = {
  postcard: {},
  header: {},
  body: {},
  footer: {},
}
