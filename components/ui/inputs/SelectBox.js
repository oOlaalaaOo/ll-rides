import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const SelectBox = ({ items, defaultItem = { text: null, value: null }, label = '', error = '', onSelect, onClear }) => {
  const [isSelecting, setIsSelecting] = useState(false)
  const [selectedItem, setSelectedItem] = useState(defaultItem)
  const ref = useRef()

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsSelecting(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div className="w-full" ref={ref}>
      <label className="ml-1 text-md">{label}</label>
      <br />
      <div className="flex flex-wrap py-2 pl-3 rounded shadow">
        <div className="w-3/4">
          {selectedItem.text}
        </div>
        <div className="w-1/4 cursor-pointer text-right pr-4">
        {
          selectedItem.value !== null ? (
            <i
              className="la la-close mr-1"
              onClick={() => {
                setIsSelecting(false)
                setSelectedItem({ text: null, value: null })
                onClear(null)
              }}
            />
          ) : (
            <React.Fragment />
          )
        }
        {
          isSelecting ? 
          <i className="la la-angle-up" onClick={() => setIsSelecting(false)} /> : 
          <i className="la la-angle-down" onClick={() => setIsSelecting(true)} />
        }
        </div>
      </div>
      <div style={{'maxHeight': '200px', 'overflowY': 'scroll', 'marginBottom': '5px'}} className="shadow">
        {
          isSelecting ? (
            items.map((item, index) => 
              <div
                className="border-b border-l border-r cursor-pointer py-2 px-2"
                key={index}
                onClick={() => {
                  setIsSelecting(false)
                  setSelectedItem(items[index])
                  onSelect(index)
                }}
              >
                {item.text}
              </div>
            )
          ) : (
            <React.Fragment />
          )
        }
      </div>
      {
        error ? (
          <small className="ml-1 text-red">{error}</small>
        ) : (
          <React.Fragment />
        )
      }
    </div>
  )
}

SelectBox.propTypes = {
  items: PropTypes.array,
  defaultItem: PropTypes.object,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  label: PropTypes.string,
  onClear: PropTypes.func
}

export default SelectBox
