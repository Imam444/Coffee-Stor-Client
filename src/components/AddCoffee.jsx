

const AddCoffee = () => {
    return (
      <div>
        <h2>Add Coffee</h2>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Nmae</span>
            </label>
            <label className="input-group">
              <span>name</span>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </label>
          </div>
        </form>
      </div>
    );
};

export default AddCoffee;