import styles from './App.module.css'

function App() {
  const handleEnableClosing = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.enableClosingConfirmation()
    }
  }

  const handleDisableClosing = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.disableClosingConfirmation()
    }
  }

  return (
    <div className={styles.container}>
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
