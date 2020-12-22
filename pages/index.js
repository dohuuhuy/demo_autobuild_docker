import Countdown from 'react-countdown'
export default function Home() {
  return (
    <div className="app">
      helo
      <Countdown
        date={Date.now() + 6000}
      />
      ,
    </div>
  )
}
