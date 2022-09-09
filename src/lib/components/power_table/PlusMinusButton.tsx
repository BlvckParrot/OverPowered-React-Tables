import React, { ReactElement } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"

const PlusMinusButton = ({ active }: { active: boolean }): ReactElement => {
  return (
    <button>
      {active ? (
        <FontAwesomeIcon icon={faMinus} />
      ) : (
        <FontAwesomeIcon icon={faPlus} />
      )}
    </button>
  )
}

export default PlusMinusButton
