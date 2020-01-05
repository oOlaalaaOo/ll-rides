import React, { useState } from 'react'
import Button from '../ui/inputs/Button'
import Input from '../ui/inputs/Input'
import SelectBox from '../ui/inputs/SelectBox'
import { Form, Field } from 'react-final-form'

const MyForm = () => {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([
    {
      text: 'item 01',
      value: 'item 01'
    },
    {
      text: 'item 02',
      value: 'item 02'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
    {
      text: 'item 03',
      value: 'item 03'
    },
  ])

  const [defaultItem, setDefaultItem] = useState(items[0])

  const onSubmit = (e) => {
    console.log(e)
  }

  const required = (value) => {
    if (!value) {
      return 'Required Field.'
    }

    return undefined
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <Field
              name="test"
              validate={required}
              render={({ input, meta }) => (
                <div className="w-64">
                  <Input
                    name="test"
                    id="test"
                    value={inputValue}
                    label="Test Input"
                    onChange={e => setInputValue(e.target.value)}
                    error={meta.touched && meta.error ? meta.error : null}
                    {...input}
                  />
                </div>
              )}
            />
            <Field
              name="selectbox"
              validate={required}
              render={({ input, meta }) => (
                <div className="w-64">
                  <SelectBox
                    items={items}
                    label="Test Select"
                    error={meta.touched && meta.error ? meta.error : null}
                    onSelect={(index) => {
                      input.onChange(items[index])
                    }}
                    onClear={(val) => {
                      input.onChange(val)
                    }}
                  />
                </div>
              )}
            />
            
            <Button
              type="submit"
              className="btn-success"
            >
              Submit
            </Button>
        </form>
      )}
    />
  )
}

export default MyForm
