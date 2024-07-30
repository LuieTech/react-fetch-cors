import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBeer } from "../../service/beer-service";

function AddBeerPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(previousData => ({
      ...previousData,
      [name]: value
    }))
    
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
    addBeer(formData)
      .then(res => console.log(res))
      .then(() => navigate("/beers"))

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-3 pt-4 container"
    >
      <div className="d-flex flex-column">
        <label className="me-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label className="me-2" htmlFor="">
          Tagline
        </label>
        <input
          id="tagline"
          type="text"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
        />
      </div >
      <div className="d-flex flex-column">
        <label className="me-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label className="me-2" htmlFor="first_brewed">
          First Brewed
        </label>
        <input
          id="first_brewed"
          type="text"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label className="me-2" htmlFor="brewers_tips">Brewer's Tips</label>
        <input
          id="brewers_tips"
          type="text"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label className="me-2" htmlFor="attenuation_level">
          Attenuation Level
        </label>
        <input
          id="attenuation_level"
          type="number"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label className="me-2" htmlFor="contributed_by">Contributed By</label>
        <input
          id="contributed_by"
          type="text"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-sm btn-success" type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
