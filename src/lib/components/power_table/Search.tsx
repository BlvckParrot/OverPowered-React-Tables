import React from "react"
import { TextInput } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { CloseButton } from "@mantine/core"

interface SearchProps {
  title?: string
  searchVal: string
  setSearchVal: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
}

const Search = ({
  title,
  setSearchVal,
  searchVal,
  placeholder,
}: SearchProps) => {
  const [active, setActive] = React.useState(() => {
    if (searchVal !== "") {
      return true
    } else return false
  })
  const inputRef = React.useRef<HTMLInputElement>(null)
  return (
    <div className="search-container">
      <div>
        <span
          title="Search in table"
          onClick={() => {
            if (searchVal === "") {
              setActive(!active)
              if (inputRef.current) {
                setTimeout(() => {
                  if (inputRef.current !== null) {
                    inputRef.current?.focus()
                  }
                }, 800)
              }
            }
          }}
          className={"search-bar-icon" + (active ? " active" : "")}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <div
          className={
            "search-bar" +
            (searchVal !== "" ? "" : !active ? " off" : "") +
            (searchVal !== "" ? " typed" : "") +
            (active === false ? " closing" : "")
          }
        >
          <TextInput
            ref={inputRef}
            placeholder={placeholder ? placeholder : "Search.."}
            size="xs"
            value={searchVal}
            autoFocus={true}
            rightSection={
              searchVal !== "" ? (
                <CloseButton
                  aria-label="Clear Search"
                  onClick={() => setSearchVal("")}
                />
              ) : (
                ""
              )
            }
            onChange={(e) => {
              setSearchVal(e.currentTarget.value)
            }}
          />
        </div>
      </div>

      <span>{title}</span>
    </div>
  )
}
export default Search
