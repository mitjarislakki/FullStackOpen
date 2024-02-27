import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const filteredPersons = newFilter.length>0 ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())) : persons

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)){
      const message = `${newName} is already added to phonebook`;
      alert(message)
    }
    else{
      const nameObject = {name: newName, number: newNumber}
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
      }
  }

  const formSubmit = addName
  const formContent = [
      {
        name: 'name',
        fieldVal: newName,
        stateChange: handleNameChange
      },
      { 
        name: 'number',
        fieldVal: newNumber,
        stateChange: handleNumberChange
      }
    ]

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterVal={newFilter} onSubmit={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm content={formContent} onSubmit={formSubmit} />
      <h3>Numbers</h3>
      <Persons people={filteredPersons} />
    </div>
  )
}

const Persons = ({people}) => {
  return (people.map(person => <div key={person.name}>{person.name} {person.number}</div> ))
}

const Filter = ({filterVal, onSubmit}) => {
  return (<div>filter shown with <input value={filterVal} onChange={onSubmit}></input></div>)
}

const PersonForm = ({onSubmit, content}) => {
  return (
    <form>
      {content.map(form => <div key={form.name}>{form.name}: <input value={form.fieldVal} onChange={form.stateChange}/></div>)}
    <div><button type="submit" onClick={onSubmit}>add</button></div>
  </form>
  )
}

export default App

