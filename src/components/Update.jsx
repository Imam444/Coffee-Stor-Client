import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => { 
  const coffee = useLoaderData();
 
    
  const { _id, name, quantity, supplier, taste, category, details, photo } =coffee;
    const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    
    const UpdateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    
    console.log(UpdateCoffee);

    fetch(`http://localhost:4000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifyCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee  updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    return (
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update Coffee:{name}</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* form row name and quantity */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  name="quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={supplier}
                  placeholder="Supplier Name"
                  name="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={taste}
                  placeholder="Taste"
                  name="taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={category}
                  placeholder="Category"
                  name="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={details}
                  placeholder="Details"
                  name="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo url row */}
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="update Coffee"
            className=" bg-black btn btn-block"
          />
        </form>
      </div>
    );
  };

}
  
export default Update
