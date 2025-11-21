import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import styles from './App.module.css'

function App() {
  const [userName, setUserName] = useState('Guest')

  useEffect(() => {
    WebApp.ready()

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUserName(WebApp.initDataUnsafe?.user?.first_name || 'Guest')
  }, [])

  const handleEnableClosing = () => {
    WebApp.enableClosingConfirmation()
  }

  const handleDisableClosing = () => {
    WebApp.disableClosingConfirmation()
  }

  return (
    <div className={styles.container}>
      <h1>Hello {userName}</h1>
      <button onClick={handleEnableClosing} className={styles.button}>
        Enable Closing Confirmation
      </button>
      <button onClick={handleDisableClosing} className={styles.button}>
        Disable Closing Confirmation
      </button>
    </div>
  )
}

export default App
