import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './style.module.css'

const Preloader = () => {
  return <CircularProgress size={70} className={styles.preloader} />
}

export default Preloader
