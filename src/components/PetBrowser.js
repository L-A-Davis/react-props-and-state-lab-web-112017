import React from 'react';
import Pet from './Pet';

// const petComponents = (allPets, filter) => {
//   const filterByType = allPets.filter((p) => p.type === filter.type)
//   const listItems = filterByType.map((p) => <Pet pet={p} key={p.id} />)
//   return listItems
// }
class PetBrowser extends React.Component {
  render() {

  const petComponents = this.props.pets.map(pet =>
  <Pet
     pet={pet}
     key={pet.id}
     onAdoptPet={this.props.onAdoptPet}
     isAdopted={this.props.adoptedPets.includes(pet.id)}
   />
  )
    return (
      <div className="ui cards" id="innerPetContainer">
        {petComponents}
      </div>
    );
  }
}

export default PetBrowser;
