import * as React from "react"

export const Container: React.FC<any> = ({ children }) => {
  const [, update] = React.useState<any[]>()

  const handleContainerUpdate = () => {
    update([])
  }

  console.log("container update")

  const Memo = React.useMemo(() => {
    return React.cloneElement(children, {
      age: 123,
    })
  }, [])

  return (
    <div>
      <p>Container</p>
      <div>
        <button onClick={handleContainerUpdate}>container update</button>
      </div>
      <div>
        {React.cloneElement(children, {
          age: 123,
        })}
      </div>
      {/* {Memo} */}
    </div>
  )
}
