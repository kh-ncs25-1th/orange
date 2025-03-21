import React from "react"
import Button from "./shared/ui/Button"

function App() {

  return (
    <>
    {/* 사용자가 태그를 만들어 논것을 사용 */}
      <Button variant={'primary'} text={'테스트'}  />
      <Button text={'취소'} />

      <Button text={'비활성화버튼'} disabled={true} />
    
    </>
  )
}

export default App
